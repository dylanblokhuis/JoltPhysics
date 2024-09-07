const std = @import("std");

// Although this function looks imperative, note that its job is to
// declaratively construct a build graph that will be executed by an external
// runner.
pub fn build(b: *std.Build) !void {
    // Standard target options allows the person running `zig build` to choose
    // what target to build for. Here we do not override the defaults, which
    // means any target is allowed, and the default is native. Other options
    // for restricting supported target set are available.
    const target = b.standardTargetOptions(.{});

    // Standard optimization options allow the person running `zig build` to select
    // between Debug, ReleaseSafe, ReleaseFast, and ReleaseSmall. Here we do not
    // set a preferred release mode, allowing the user to decide how to optimize.
    const optimize = b.standardOptimizeOption(.{});

    const options = .{
        .use_double_precision = b.option(
            bool,
            "use_double_precision",
            "Enable double precision",
        ) orelse false,
        .enable_asserts = b.option(
            bool,
            "enable_asserts",
            "Enable assertions",
        ) orelse (optimize == .Debug),
        .enable_cross_platform_determinism = b.option(
            bool,
            "enable_cross_platform_determinism",
            "Enables cross-platform determinism",
        ) orelse true,
        .enable_debug_renderer = b.option(
            bool,
            "enable_debug_renderer",
            "Enable debug renderer",
        ) orelse false,
        .shared = b.option(
            bool,
            "shared",
            "Build JoltPhysics as shared lib",
        ) orelse false,
    };

    const options_step = b.addOptions();
    inline for (std.meta.fields(@TypeOf(options))) |field| {
        options_step.addOption(field.type, field.name, @field(options, field.name));
    }

    const lib = std.Build.Step.Compile.create(b, .{
        .name = "JoltPhysics",
        .kind = .lib,
        .linkage = if (options.shared) .dynamic else .static,
        .root_module = .{
            .target = target,
            .optimize = optimize,
        },
    });

    if (target.result.os.tag == .windows) {
        lib.defineCMacro("JPC_API", "extern __declspec(dllexport)");
    }

    b.installArtifact(lib);

    lib.linkLibC();
    lib.linkLibCpp();

    const flags = &.{
        "-std=c++17",
        if (@import("builtin").abi != .msvc) "-DJPH_COMPILER_MINGW" else "",
        if (options.enable_cross_platform_determinism) "-DJPH_CROSS_PLATFORM_DETERMINISTIC" else "",
        if (options.enable_debug_renderer) "-DJPH_DEBUG_RENDERER" else "",
        if (options.use_double_precision) "-DJPH_DOUBLE_PRECISION" else "",
        if (options.enable_asserts) "-DJPH_ENABLE_ASSERTS" else "",
        "-fno-access-control",
        "-fno-sanitize=undefined",
    };

    var known_paths = std.StringHashMap(void).init(b.allocator);
    defer known_paths.deinit();

    var source_dir = try std.fs.openDirAbsolute(try b.build_root.join(b.allocator, &.{"./Jolt"}), .{
        .iterate = true,
    });
    var walker = try source_dir.walk(b.allocator);
    defer walker.deinit();

    while (try walker.next()) |entry| {
        if (entry.kind == .file and std.mem.endsWith(u8, entry.basename, ".cpp")) {
            const file_path = try source_dir.realpathAlloc(b.allocator, entry.path);
            lib.addCSourceFile(.{
                .file = .{
                    .cwd_relative = file_path,
                },
                .flags = flags,
            });
        }
    }

    lib.addIncludePath(b.path("."));
}
