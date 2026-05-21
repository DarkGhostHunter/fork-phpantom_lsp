window.BENCHMARK_DATA = {
  "lastUpdate": 1779321865840,
  "repoUrl": "https://github.com/DarkGhostHunter/fork-phpantom_lsp",
  "entries": {
    "PHPantom Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "DarkGhostHunter@Gmail.com",
            "name": "Italo",
            "username": "DarkGhostHunter"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c52a6c4e786fc877776682157ff14ec7c02d8cf",
          "message": "Restore code comments",
          "timestamp": "2026-05-20T19:13:18-04:00",
          "tree_id": "76b1af746d464fe456bb038554d945795defc2cd",
          "url": "https://github.com/DarkGhostHunter/fork-phpantom_lsp/commit/7c52a6c4e786fc877776682157ff14ec7c02d8cf"
        },
        "date": 1779319368854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 2.874,
            "range": "± 0.083",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.007,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.055,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.09,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.169,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.178,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.848,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.664,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.05,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.015,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.011,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.016,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 3.916,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.128,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.178,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.022,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.011,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.07,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.068,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.057,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.182,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.049,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.661,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.048,
            "range": "± 0.036",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.033,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 48.786,
            "range": "± 0.895",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.05,
            "range": "± 0.017",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "DarkGhostHunter@Gmail.com",
            "name": "Italo",
            "username": "DarkGhostHunter"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dae22b8afb584894360e9cf7ea1a5dbbcd5d4d7",
          "message": "Adds friendly name to release",
          "timestamp": "2026-05-20T19:28:25-04:00",
          "tree_id": "4dfd67535f8bac420ed97d6f122e9621cbc81179",
          "url": "https://github.com/DarkGhostHunter/fork-phpantom_lsp/commit/5dae22b8afb584894360e9cf7ea1a5dbbcd5d4d7"
        },
        "date": 1779320277385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 2.802,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.007,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.055,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.089,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.171,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.172,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.791,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.563,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.055,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.015,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.011,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.017,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 3.63,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.136,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.189,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.023,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.011,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.07,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.089,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.075,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.191,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.055,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.921,
            "range": "± 0.304",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.061,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.034,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.032,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 47.374,
            "range": "± 0.227",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.08,
            "range": "± 0.021",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "DarkGhostHunter@Gmail.com",
            "name": "Italo",
            "username": "DarkGhostHunter"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "368c2aed2a5977dc0d6f3bdb6fe8b392f0088d56",
          "message": "Changes name for suffix",
          "timestamp": "2026-05-20T19:37:12-04:00",
          "tree_id": "ccf0752873c702a881d390f4cbb15f3fce8ab353",
          "url": "https://github.com/DarkGhostHunter/fork-phpantom_lsp/commit/368c2aed2a5977dc0d6f3bdb6fe8b392f0088d56"
        },
        "date": 1779320794811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 2.863,
            "range": "± 0.053",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.007,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.055,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.089,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.166,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.179,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.859,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.694,
            "range": "± 0.029",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.05,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.015,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.012,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.016,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 3.934,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.125,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.178,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.022,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.011,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.07,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.067,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.057,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.181,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.047,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.69,
            "range": "± 0.116",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.065,
            "range": "± 0.027",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.035,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.033,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 49.012,
            "range": "± 0.174",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.053,
            "range": "± 0.059",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "DarkGhostHunter@Gmail.com",
            "name": "Italo",
            "username": "DarkGhostHunter"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31842831a59bd1de13265a1001e0140b464088f5",
          "message": "Broadens Intel Mac support",
          "timestamp": "2026-05-20T19:55:05-04:00",
          "tree_id": "3d39ae7720264b10d6fe03c99c192046a010b91f",
          "url": "https://github.com/DarkGhostHunter/fork-phpantom_lsp/commit/31842831a59bd1de13265a1001e0140b464088f5"
        },
        "date": 1779321865532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 2.868,
            "range": "± 0.08",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.007,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.054,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.09,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.169,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.179,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.848,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.671,
            "range": "± 0.052",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.05,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.015,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.011,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.016,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 3.968,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.127,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.178,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.022,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.011,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.07,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.067,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.056,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.183,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.06,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.755,
            "range": "± 0.043",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.072,
            "range": "± 0.032",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.036,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.033,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 49.055,
            "range": "± 0.805",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.051,
            "range": "± 0.028",
            "unit": "ms"
          }
        ]
      }
    ]
  }
}