/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md82", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md2", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md4", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md5", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md3", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md6", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md7", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md19", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md20", null ]
      ] ],
      [ "v5.1.0", "md__docs_2_release_notes.html#autotoc_md22", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md23", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md24", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md25", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md26", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md28", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md29", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md31", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md34", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md35", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md36", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md38", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md41", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md42", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md43", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md44", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md45", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md46", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md47", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md48", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md49", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md50", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md51", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md52", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md53", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md54", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md55", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md56", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md57", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md58", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md59", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md60", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md61", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md62", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md63", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md64", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md65", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md66", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.1.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md18", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md21", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md27", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md30", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md32", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md33", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md37", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md39", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md40", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md75", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md76", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md77", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md78", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md79", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md80", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md81", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dad6af9c1eaff2a89ebd3f8d0c542be12b",
"_height_field_shape_8h_source.html",
"_object_stream_text_out_8h.html",
"_scaled_shape_8h_source.html",
"_swing_twist_constraint_part_8h.html#add9e89df628b33308461ef46e1b796b6",
"class_a_a_box.html#a8431a72347bfdb1a77ae45dcbba9c35b",
"class_body_creation_settings.html#a66c8700dfa9204a90b9bd7c7db50e85f",
"class_box_shape.html#a287e16289c491cd9dbd980e59ca7725b",
"class_character_base.html#a893268ea23759f36ebe8e317a54afa7e",
"class_color.html#a6fae8aa8b75d27cb134234e75b41caf2",
"class_convex_hull_builder_1_1_edge.html",
"class_d_vec3.html#a98c87bc69aa4aaf5efff2f7371026213",
"class_e_p_a_convex_hull_builder_1_1_triangle_factory.html#a9a830ace866a248b1238eed4157e8925",
"class_hinge_constraint.html#a8f17d0facd91bdaba60f9ac473db1b2f",
"class_l_f_h_m_allocator.html#add8458530312383491f936a7147a8ce3",
"class_motion_properties.html#a6665e01c407036815ac084edcf28d53f",
"class_object_stream_text_in.html#a79116e71f7cc0373156904e3d9a74ac6",
"class_physics_system.html#ade7967ad5ff4a67d255cc6fb956943c8",
"class_quat.html#ac04a00570e1a5e96d49398d40d493bf3",
"class_rotated_translated_shape.html#a7d7b6b0edc6dd89125cab13d77eb3585",
"class_six_d_o_f_constraint.html#a12db08dc07d7ae6cf63acdb8e17547b7",
"class_soft_body_creation_settings.html#a62610a1d2969412b195344477ecd1891",
"class_sphere_shape.html#adff6e55656d0dc2048f40b3dad359fd8",
"class_swing_twist_constraint_settings.html#aea7e8886dad7c91dd6b35eb66d040905",
"class_triangle_shape_1_1_triangle_with_convex.html#a027145a2149945bd88bd362e1e6a25d0",
"class_vec4.html#aa5f9555c7ddf5cdf6648ec64e9fd0c8f",
"class_vehicle_transmission_settings.html#a57d1f98cbd50ba710d6c1941e2788e8f",
"functions_vars_y.html",
"namespacemembers_enum.html",
"struct_debug_renderer_recorder_1_1_line_blob.html#a343f8c5de1b54cea546e3e4c1c85f657",
"struct_shape_cast_t.html#a72512e9621d9b3ecf84e215bef9ee535"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';