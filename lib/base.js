export const BASE_TEMPLATE = {
  template: "my_custom_schema",
  schema: {
    Vehicle: {
      id: "Vehicle",
      type: "branch",
      children: {
        ADAS: {
          id: "Vehicle.ADAS",
          type: "branch",
          children: {
            ABS: {
              id: "Vehicle.ADAS.ABS",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.ABS.IsEnabled",
                  type: "actuator",
                },
                IsEngaged: {
                  id: "Vehicle.ADAS.ABS.IsEngaged",
                  type: "sensor",
                },
                IsError: {
                  id: "Vehicle.ADAS.ABS.IsError",
                  type: "sensor",
                },
              },
            },
            ActiveAutonomyLevel: {
              id: "Vehicle.ADAS.ActiveAutonomyLevel",
              type: "sensor",
            },
            CruiseControl: {
              id: "Vehicle.ADAS.CruiseControl",
              type: "branch",
              children: {
                AdaptiveDistanceSet: {
                  id: "Vehicle.ADAS.CruiseControl.AdaptiveDistanceSet",
                  type: "actuator",
                },
                AdaptiveIntervalSet: {
                  id: "Vehicle.ADAS.CruiseControl.AdaptiveIntervalSet",
                  type: "actuator",
                },
                IsActive: {
                  id: "Vehicle.ADAS.CruiseControl.IsActive",
                  type: "actuator",
                },
                IsAdaptive: {
                  id: "Vehicle.ADAS.CruiseControl.IsAdaptive",
                  type: "actuator",
                },
                IsEnabled: {
                  id: "Vehicle.ADAS.CruiseControl.IsEnabled",
                  type: "actuator",
                },
                IsError: {
                  id: "Vehicle.ADAS.CruiseControl.IsError",
                  type: "sensor",
                },
                SpeedSet: {
                  id: "Vehicle.ADAS.CruiseControl.SpeedSet",
                  type: "actuator",
                },
              },
            },
            DMS: {
              id: "Vehicle.ADAS.DMS",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.DMS.IsEnabled",
                  type: "actuator",
                },
                IsError: {
                  id: "Vehicle.ADAS.DMS.IsError",
                  type: "sensor",
                },
                IsWarning: {
                  id: "Vehicle.ADAS.DMS.IsWarning",
                  type: "sensor",
                },
              },
            },
            EBA: {
              id: "Vehicle.ADAS.EBA",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.EBA.IsEnabled",
                  type: "actuator",
                },
                IsEngaged: {
                  id: "Vehicle.ADAS.EBA.IsEngaged",
                  type: "sensor",
                },
                IsError: {
                  id: "Vehicle.ADAS.EBA.IsError",
                  type: "sensor",
                },
              },
            },
            EBD: {
              id: "Vehicle.ADAS.EBD",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.EBD.IsEnabled",
                  type: "actuator",
                },
                IsEngaged: {
                  id: "Vehicle.ADAS.EBD.IsEngaged",
                  type: "sensor",
                },
                IsError: {
                  id: "Vehicle.ADAS.EBD.IsError",
                  type: "sensor",
                },
              },
            },
            ESC: {
              id: "Vehicle.ADAS.ESC",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.ESC.IsEnabled",
                  type: "actuator",
                },
                IsEngaged: {
                  id: "Vehicle.ADAS.ESC.IsEngaged",
                  type: "sensor",
                },
                IsError: {
                  id: "Vehicle.ADAS.ESC.IsError",
                  type: "sensor",
                },
                IsStrongCrossWindDetected: {
                  id: "Vehicle.ADAS.ESC.IsStrongCrossWindDetected",
                  type: "sensor",
                },
                RoadFriction: {
                  id: "Vehicle.ADAS.ESC.RoadFriction",
                  type: "branch",
                  children: {
                    LowerBound: {
                      id: "Vehicle.ADAS.ESC.RoadFriction.LowerBound",
                      type: "sensor",
                    },
                    MostProbable: {
                      id: "Vehicle.ADAS.ESC.RoadFriction.MostProbable",
                      type: "sensor",
                    },
                    UpperBound: {
                      id: "Vehicle.ADAS.ESC.RoadFriction.UpperBound",
                      type: "sensor",
                    },
                  },
                },
              },
            },
            IsAutoPowerOptimize: {
              id: "Vehicle.ADAS.IsAutoPowerOptimize",
              type: "actuator",
            },
            LaneDepartureDetection: {
              id: "Vehicle.ADAS.LaneDepartureDetection",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.LaneDepartureDetection.IsEnabled",
                  type: "actuator",
                },
                IsError: {
                  id: "Vehicle.ADAS.LaneDepartureDetection.IsError",
                  type: "sensor",
                },
                IsWarning: {
                  id: "Vehicle.ADAS.LaneDepartureDetection.IsWarning",
                  type: "sensor",
                },
              },
            },
            ObstacleDetection: {
              id: "Vehicle.ADAS.ObstacleDetection",
              type: "branch",
              children: {
                Front: {
                  id: "Vehicle.ADAS.ObstacleDetection.Front",
                  type: "branch",
                  children: {
                    Center: {
                      id: "Vehicle.ADAS.ObstacleDetection.Front.Center",
                      type: "branch",
                      children: {
                        Distance: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Center.Distance",
                          type: "sensor",
                        },
                        IsEnabled: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Center.IsEnabled",
                          type: "actuator",
                        },
                        IsError: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Center.IsError",
                          type: "sensor",
                        },
                        IsWarning: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Center.IsWarning",
                          type: "sensor",
                        },
                        TimeGap: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Center.TimeGap",
                          type: "sensor",
                        },
                        WarningType: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Center.WarningType",
                          type: "sensor",
                        },
                      },
                    },
                    Left: {
                      id: "Vehicle.ADAS.ObstacleDetection.Front.Left",
                      type: "branch",
                      children: {
                        Distance: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Left.Distance",
                          type: "sensor",
                        },
                        IsEnabled: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Left.IsEnabled",
                          type: "actuator",
                        },
                        IsError: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Left.IsError",
                          type: "sensor",
                        },
                        IsWarning: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Left.IsWarning",
                          type: "sensor",
                        },
                        TimeGap: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Left.TimeGap",
                          type: "sensor",
                        },
                        WarningType: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Left.WarningType",
                          type: "sensor",
                        },
                      },
                    },
                    Right: {
                      id: "Vehicle.ADAS.ObstacleDetection.Front.Right",
                      type: "branch",
                      children: {
                        Distance: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Right.Distance",
                          type: "sensor",
                        },
                        IsEnabled: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Right.IsEnabled",
                          type: "actuator",
                        },
                        IsError: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Right.IsError",
                          type: "sensor",
                        },
                        IsWarning: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Right.IsWarning",
                          type: "sensor",
                        },
                        TimeGap: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Right.TimeGap",
                          type: "sensor",
                        },
                        WarningType: {
                          id: "Vehicle.ADAS.ObstacleDetection.Front.Right.WarningType",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
                Rear: {
                  id: "Vehicle.ADAS.ObstacleDetection.Rear",
                  type: "branch",
                  children: {
                    Center: {
                      id: "Vehicle.ADAS.ObstacleDetection.Rear.Center",
                      type: "branch",
                      children: {
                        Distance: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.Distance",
                          type: "sensor",
                        },
                        IsEnabled: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.IsEnabled",
                          type: "actuator",
                        },
                        IsError: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.IsError",
                          type: "sensor",
                        },
                        IsWarning: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.IsWarning",
                          type: "sensor",
                        },
                        TimeGap: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.TimeGap",
                          type: "sensor",
                        },
                        WarningType: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.WarningType",
                          type: "sensor",
                        },
                      },
                    },
                    Left: {
                      id: "Vehicle.ADAS.ObstacleDetection.Rear.Left",
                      type: "branch",
                      children: {
                        Distance: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.Distance",
                          type: "sensor",
                        },
                        IsEnabled: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.IsEnabled",
                          type: "actuator",
                        },
                        IsError: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.IsError",
                          type: "sensor",
                        },
                        IsWarning: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.IsWarning",
                          type: "sensor",
                        },
                        TimeGap: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.TimeGap",
                          type: "sensor",
                        },
                        WarningType: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.WarningType",
                          type: "sensor",
                        },
                      },
                    },
                    Right: {
                      id: "Vehicle.ADAS.ObstacleDetection.Rear.Right",
                      type: "branch",
                      children: {
                        Distance: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.Distance",
                          type: "sensor",
                        },
                        IsEnabled: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.IsEnabled",
                          type: "actuator",
                        },
                        IsError: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.IsError",
                          type: "sensor",
                        },
                        IsWarning: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.IsWarning",
                          type: "sensor",
                        },
                        TimeGap: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.TimeGap",
                          type: "sensor",
                        },
                        WarningType: {
                          id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.WarningType",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
              },
            },
            PowerOptimizeLevel: {
              id: "Vehicle.ADAS.PowerOptimizeLevel",
              type: "actuator",
            },
            SupportedAutonomyLevel: {
              id: "Vehicle.ADAS.SupportedAutonomyLevel",
              type: "attribute",
            },
            TCS: {
              id: "Vehicle.ADAS.TCS",
              type: "branch",
              children: {
                IsEnabled: {
                  id: "Vehicle.ADAS.TCS.IsEnabled",
                  type: "actuator",
                },
                IsEngaged: {
                  id: "Vehicle.ADAS.TCS.IsEngaged",
                  type: "sensor",
                },
                IsError: {
                  id: "Vehicle.ADAS.TCS.IsError",
                  type: "sensor",
                },
              },
            },
          },
        },
        Acceleration: {
          id: "Vehicle.Acceleration",
          type: "branch",
          children: {
            Lateral: {
              id: "Vehicle.Acceleration.Lateral",
              type: "sensor",
            },
            Longitudinal: {
              id: "Vehicle.Acceleration.Longitudinal",
              type: "sensor",
            },
            Vertical: {
              id: "Vehicle.Acceleration.Vertical",
              type: "sensor",
            },
          },
        },
        AngularVelocity: {
          id: "Vehicle.AngularVelocity",
          type: "branch",
          children: {
            Pitch: {
              id: "Vehicle.AngularVelocity.Pitch",
              type: "sensor",
            },
            Roll: {
              id: "Vehicle.AngularVelocity.Roll",
              type: "sensor",
            },
            Yaw: {
              id: "Vehicle.AngularVelocity.Yaw",
              type: "sensor",
            },
          },
        },
        AverageSpeed: {
          id: "Vehicle.AverageSpeed",
          type: "sensor",
        },
        Body: {
          id: "Vehicle.Body",
          type: "branch",
          children: {
            BodyType: {
              id: "Vehicle.Body.BodyType",
              type: "attribute",
            },
            Hood: {
              id: "Vehicle.Body.Hood",
              type: "branch",
              children: {
                IsOpen: {
                  id: "Vehicle.Body.Hood.IsOpen",
                  type: "actuator",
                },
                Position: {
                  id: "Vehicle.Body.Hood.Position",
                  type: "actuator",
                },
                Switch: {
                  id: "Vehicle.Body.Hood.Switch",
                  type: "actuator",
                },
              },
            },
            Horn: {
              id: "Vehicle.Body.Horn",
              type: "branch",
              children: {
                IsActive: {
                  id: "Vehicle.Body.Horn.IsActive",
                  type: "actuator",
                },
              },
            },
            IsAutoPowerOptimize: {
              id: "Vehicle.Body.IsAutoPowerOptimize",
              type: "actuator",
            },
            Lights: {
              id: "Vehicle.Body.Lights",
              type: "branch",
              children: {
                Backup: {
                  id: "Vehicle.Body.Lights.Backup",
                  type: "branch",
                  children: {
                    IsDefect: {
                      id: "Vehicle.Body.Lights.Backup.IsDefect",
                      type: "sensor",
                    },
                    IsOn: {
                      id: "Vehicle.Body.Lights.Backup.IsOn",
                      type: "actuator",
                    },
                  },
                },
                Beam: {
                  id: "Vehicle.Body.Lights.Beam",
                  type: "branch",
                  children: {
                    High: {
                      id: "Vehicle.Body.Lights.Beam.High",
                      type: "branch",
                      children: {
                        IsDefect: {
                          id: "Vehicle.Body.Lights.Beam.High.IsDefect",
                          type: "sensor",
                        },
                        IsOn: {
                          id: "Vehicle.Body.Lights.Beam.High.IsOn",
                          type: "actuator",
                        },
                      },
                    },
                    Low: {
                      id: "Vehicle.Body.Lights.Beam.Low",
                      type: "branch",
                      children: {
                        IsDefect: {
                          id: "Vehicle.Body.Lights.Beam.Low.IsDefect",
                          type: "sensor",
                        },
                        IsOn: {
                          id: "Vehicle.Body.Lights.Beam.Low.IsOn",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
                Brake: {
                  id: "Vehicle.Body.Lights.Brake",
                  type: "branch",
                  children: {
                    IsActive: {
                      id: "Vehicle.Body.Lights.Brake.IsActive",
                      type: "actuator",
                    },
                    IsDefect: {
                      id: "Vehicle.Body.Lights.Brake.IsDefect",
                      type: "sensor",
                    },
                  },
                },
                DirectionIndicator: {
                  id: "Vehicle.Body.Lights.DirectionIndicator",
                  type: "branch",
                  children: {
                    Left: {
                      id: "Vehicle.Body.Lights.DirectionIndicator.Left",
                      type: "branch",
                      children: {
                        IsDefect: {
                          id: "Vehicle.Body.Lights.DirectionIndicator.Left.IsDefect",
                          type: "sensor",
                        },
                        IsSignaling: {
                          id: "Vehicle.Body.Lights.DirectionIndicator.Left.IsSignaling",
                          type: "actuator",
                        },
                      },
                    },
                    Right: {
                      id: "Vehicle.Body.Lights.DirectionIndicator.Right",
                      type: "branch",
                      children: {
                        IsDefect: {
                          id: "Vehicle.Body.Lights.DirectionIndicator.Right.IsDefect",
                          type: "sensor",
                        },
                        IsSignaling: {
                          id: "Vehicle.Body.Lights.DirectionIndicator.Right.IsSignaling",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
                Fog: {
                  id: "Vehicle.Body.Lights.Fog",
                  type: "branch",
                  children: {
                    Front: {
                      id: "Vehicle.Body.Lights.Fog.Front",
                      type: "branch",
                      children: {
                        IsDefect: {
                          id: "Vehicle.Body.Lights.Fog.Front.IsDefect",
                          type: "sensor",
                        },
                        IsOn: {
                          id: "Vehicle.Body.Lights.Fog.Front.IsOn",
                          type: "actuator",
                        },
                      },
                    },
                    Rear: {
                      id: "Vehicle.Body.Lights.Fog.Rear",
                      type: "branch",
                      children: {
                        IsDefect: {
                          id: "Vehicle.Body.Lights.Fog.Rear.IsDefect",
                          type: "sensor",
                        },
                        IsOn: {
                          id: "Vehicle.Body.Lights.Fog.Rear.IsOn",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
                Hazard: {
                  id: "Vehicle.Body.Lights.Hazard",
                  type: "branch",
                  children: {
                    IsDefect: {
                      id: "Vehicle.Body.Lights.Hazard.IsDefect",
                      type: "sensor",
                    },
                    IsSignaling: {
                      id: "Vehicle.Body.Lights.Hazard.IsSignaling",
                      type: "actuator",
                    },
                  },
                },
                IsHighBeamSwitchOn: {
                  id: "Vehicle.Body.Lights.IsHighBeamSwitchOn",
                  type: "actuator",
                },
                LicensePlate: {
                  id: "Vehicle.Body.Lights.LicensePlate",
                  type: "branch",
                  children: {
                    IsDefect: {
                      id: "Vehicle.Body.Lights.LicensePlate.IsDefect",
                      type: "sensor",
                    },
                    IsOn: {
                      id: "Vehicle.Body.Lights.LicensePlate.IsOn",
                      type: "actuator",
                    },
                  },
                },
                LightSwitch: {
                  id: "Vehicle.Body.Lights.LightSwitch",
                  type: "actuator",
                },
                Parking: {
                  id: "Vehicle.Body.Lights.Parking",
                  type: "branch",
                  children: {
                    IsDefect: {
                      id: "Vehicle.Body.Lights.Parking.IsDefect",
                      type: "sensor",
                    },
                    IsOn: {
                      id: "Vehicle.Body.Lights.Parking.IsOn",
                      type: "actuator",
                    },
                  },
                },
                Running: {
                  id: "Vehicle.Body.Lights.Running",
                  type: "branch",
                  children: {
                    IsDefect: {
                      id: "Vehicle.Body.Lights.Running.IsDefect",
                      type: "sensor",
                    },
                    IsOn: {
                      id: "Vehicle.Body.Lights.Running.IsOn",
                      type: "actuator",
                    },
                  },
                },
              },
            },
            Mirrors: {
              id: "Vehicle.Body.Mirrors",
              type: "branch",
              children: {
                DriverSide: {
                  id: "Vehicle.Body.Mirrors.DriverSide",
                  type: "branch",
                  children: {
                    IsFolded: {
                      id: "Vehicle.Body.Mirrors.DriverSide.IsFolded",
                      type: "actuator",
                    },
                    IsHeatingOn: {
                      id: "Vehicle.Body.Mirrors.DriverSide.IsHeatingOn",
                      type: "actuator",
                    },
                    IsLocked: {
                      id: "Vehicle.Body.Mirrors.DriverSide.IsLocked",
                      type: "actuator",
                    },
                    Pan: {
                      id: "Vehicle.Body.Mirrors.DriverSide.Pan",
                      type: "actuator",
                    },
                    Tilt: {
                      id: "Vehicle.Body.Mirrors.DriverSide.Tilt",
                      type: "actuator",
                    },
                  },
                },
                PassengerSide: {
                  id: "Vehicle.Body.Mirrors.PassengerSide",
                  type: "branch",
                  children: {
                    IsFolded: {
                      id: "Vehicle.Body.Mirrors.PassengerSide.IsFolded",
                      type: "actuator",
                    },
                    IsHeatingOn: {
                      id: "Vehicle.Body.Mirrors.PassengerSide.IsHeatingOn",
                      type: "actuator",
                    },
                    IsLocked: {
                      id: "Vehicle.Body.Mirrors.PassengerSide.IsLocked",
                      type: "actuator",
                    },
                    Pan: {
                      id: "Vehicle.Body.Mirrors.PassengerSide.Pan",
                      type: "actuator",
                    },
                    Tilt: {
                      id: "Vehicle.Body.Mirrors.PassengerSide.Tilt",
                      type: "actuator",
                    },
                  },
                },
              },
            },
            PowerOptimizeLevel: {
              id: "Vehicle.Body.PowerOptimizeLevel",
              type: "actuator",
            },
            Raindetection: {
              id: "Vehicle.Body.Raindetection",
              type: "branch",
              children: {
                Intensity: {
                  id: "Vehicle.Body.Raindetection.Intensity",
                  type: "sensor",
                },
              },
            },
            RearMainSpoilerPosition: {
              id: "Vehicle.Body.RearMainSpoilerPosition",
              type: "actuator",
            },
            Trunk: {
              id: "Vehicle.Body.Trunk",
              type: "branch",
              children: {
                Front: {
                  id: "Vehicle.Body.Trunk.Front",
                  type: "branch",
                  children: {
                    IsLightOn: {
                      id: "Vehicle.Body.Trunk.Front.IsLightOn",
                      type: "actuator",
                    },
                    IsLocked: {
                      id: "Vehicle.Body.Trunk.Front.IsLocked",
                      type: "actuator",
                    },
                    IsOpen: {
                      id: "Vehicle.Body.Trunk.Front.IsOpen",
                      type: "actuator",
                    },
                    Position: {
                      id: "Vehicle.Body.Trunk.Front.Position",
                      type: "actuator",
                    },
                    Switch: {
                      id: "Vehicle.Body.Trunk.Front.Switch",
                      type: "actuator",
                    },
                  },
                },
                Rear: {
                  id: "Vehicle.Body.Trunk.Rear",
                  type: "branch",
                  children: {
                    IsLightOn: {
                      id: "Vehicle.Body.Trunk.Rear.IsLightOn",
                      type: "actuator",
                    },
                    IsLocked: {
                      id: "Vehicle.Body.Trunk.Rear.IsLocked",
                      type: "actuator",
                    },
                    IsOpen: {
                      id: "Vehicle.Body.Trunk.Rear.IsOpen",
                      type: "actuator",
                    },
                    Position: {
                      id: "Vehicle.Body.Trunk.Rear.Position",
                      type: "actuator",
                    },
                    Switch: {
                      id: "Vehicle.Body.Trunk.Rear.Switch",
                      type: "actuator",
                    },
                  },
                },
              },
            },
            Windshield: {
              id: "Vehicle.Body.Windshield",
              type: "branch",
              children: {
                Front: {
                  id: "Vehicle.Body.Windshield.Front",
                  type: "branch",
                  children: {
                    IsHeatingOn: {
                      id: "Vehicle.Body.Windshield.Front.IsHeatingOn",
                      type: "actuator",
                    },
                    WasherFluid: {
                      id: "Vehicle.Body.Windshield.Front.WasherFluid",
                      type: "branch",
                      children: {
                        IsLevelLow: {
                          id: "Vehicle.Body.Windshield.Front.WasherFluid.IsLevelLow",
                          type: "sensor",
                        },
                        Level: {
                          id: "Vehicle.Body.Windshield.Front.WasherFluid.Level",
                          type: "sensor",
                        },
                      },
                    },
                    Wiping: {
                      id: "Vehicle.Body.Windshield.Front.Wiping",
                      type: "branch",
                      children: {
                        Intensity: {
                          id: "Vehicle.Body.Windshield.Front.Wiping.Intensity",
                          type: "actuator",
                        },
                        IsWipersWorn: {
                          id: "Vehicle.Body.Windshield.Front.Wiping.IsWipersWorn",
                          type: "sensor",
                        },
                        Mode: {
                          id: "Vehicle.Body.Windshield.Front.Wiping.Mode",
                          type: "actuator",
                        },
                        System: {
                          id: "Vehicle.Body.Windshield.Front.Wiping.System",
                          type: "branch",
                          children: {
                            ActualPosition: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.ActualPosition",
                              type: "actuator",
                            },
                            DriveCurrent: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.DriveCurrent",
                              type: "sensor",
                            },
                            Frequency: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.Frequency",
                              type: "actuator",
                            },
                            IsBlocked: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.IsBlocked",
                              type: "sensor",
                            },
                            IsEndingWipeCycle: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.IsEndingWipeCycle",
                              type: "sensor",
                            },
                            IsOverheated: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.IsOverheated",
                              type: "sensor",
                            },
                            IsPositionReached: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.IsPositionReached",
                              type: "sensor",
                            },
                            IsWiperError: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.IsWiperError",
                              type: "sensor",
                            },
                            IsWiping: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.IsWiping",
                              type: "sensor",
                            },
                            Mode: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.Mode",
                              type: "actuator",
                            },
                            TargetPosition: {
                              id: "Vehicle.Body.Windshield.Front.Wiping.System.TargetPosition",
                              type: "actuator",
                            },
                          },
                        },
                        WiperWear: {
                          id: "Vehicle.Body.Windshield.Front.Wiping.WiperWear",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
                Rear: {
                  id: "Vehicle.Body.Windshield.Rear",
                  type: "branch",
                  children: {
                    IsHeatingOn: {
                      id: "Vehicle.Body.Windshield.Rear.IsHeatingOn",
                      type: "actuator",
                    },
                    WasherFluid: {
                      id: "Vehicle.Body.Windshield.Rear.WasherFluid",
                      type: "branch",
                      children: {
                        IsLevelLow: {
                          id: "Vehicle.Body.Windshield.Rear.WasherFluid.IsLevelLow",
                          type: "sensor",
                        },
                        Level: {
                          id: "Vehicle.Body.Windshield.Rear.WasherFluid.Level",
                          type: "sensor",
                        },
                      },
                    },
                    Wiping: {
                      id: "Vehicle.Body.Windshield.Rear.Wiping",
                      type: "branch",
                      children: {
                        Intensity: {
                          id: "Vehicle.Body.Windshield.Rear.Wiping.Intensity",
                          type: "actuator",
                        },
                        IsWipersWorn: {
                          id: "Vehicle.Body.Windshield.Rear.Wiping.IsWipersWorn",
                          type: "sensor",
                        },
                        Mode: {
                          id: "Vehicle.Body.Windshield.Rear.Wiping.Mode",
                          type: "actuator",
                        },
                        System: {
                          id: "Vehicle.Body.Windshield.Rear.Wiping.System",
                          type: "branch",
                          children: {
                            ActualPosition: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.ActualPosition",
                              type: "actuator",
                            },
                            DriveCurrent: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.DriveCurrent",
                              type: "sensor",
                            },
                            Frequency: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.Frequency",
                              type: "actuator",
                            },
                            IsBlocked: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsBlocked",
                              type: "sensor",
                            },
                            IsEndingWipeCycle: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsEndingWipeCycle",
                              type: "sensor",
                            },
                            IsOverheated: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsOverheated",
                              type: "sensor",
                            },
                            IsPositionReached: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsPositionReached",
                              type: "sensor",
                            },
                            IsWiperError: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsWiperError",
                              type: "sensor",
                            },
                            IsWiping: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsWiping",
                              type: "sensor",
                            },
                            Mode: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.Mode",
                              type: "actuator",
                            },
                            TargetPosition: {
                              id: "Vehicle.Body.Windshield.Rear.Wiping.System.TargetPosition",
                              type: "actuator",
                            },
                          },
                        },
                        WiperWear: {
                          id: "Vehicle.Body.Windshield.Rear.Wiping.WiperWear",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        Cabin: {
          id: "Vehicle.Cabin",
          type: "branch",
          children: {
            Convertible: {
              id: "Vehicle.Cabin.Convertible",
              type: "branch",
              children: {
                Status: {
                  id: "Vehicle.Cabin.Convertible.Status",
                  type: "sensor",
                },
              },
            },
            Door: {
              id: "Vehicle.Cabin.Door",
              type: "branch",
              children: {
                Row1: {
                  id: "Vehicle.Cabin.Door.Row1",
                  type: "branch",
                  children: {
                    DriverSide: {
                      id: "Vehicle.Cabin.Door.Row1.DriverSide",
                      type: "branch",
                      children: {
                        IsChildLockActive: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.IsChildLockActive",
                          type: "sensor",
                        },
                        IsLocked: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.IsLocked",
                          type: "actuator",
                        },
                        IsOpen: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.IsOpen",
                          type: "actuator",
                        },
                        Position: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.Position",
                          type: "actuator",
                        },
                        Shade: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade.Switch",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.Switch",
                          type: "actuator",
                        },
                        Window: {
                          id: "Vehicle.Cabin.Door.Row1.DriverSide.Window",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row1.DriverSide.Window.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row1.DriverSide.Window.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row1.DriverSide.Window.Switch",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    PassengerSide: {
                      id: "Vehicle.Cabin.Door.Row1.PassengerSide",
                      type: "branch",
                      children: {
                        IsChildLockActive: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.IsChildLockActive",
                          type: "sensor",
                        },
                        IsLocked: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.IsLocked",
                          type: "actuator",
                        },
                        IsOpen: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.IsOpen",
                          type: "actuator",
                        },
                        Position: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.Position",
                          type: "actuator",
                        },
                        Shade: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade.Switch",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.Switch",
                          type: "actuator",
                        },
                        Window: {
                          id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window.Switch",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                Row2: {
                  id: "Vehicle.Cabin.Door.Row2",
                  type: "branch",
                  children: {
                    DriverSide: {
                      id: "Vehicle.Cabin.Door.Row2.DriverSide",
                      type: "branch",
                      children: {
                        IsChildLockActive: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.IsChildLockActive",
                          type: "sensor",
                        },
                        IsLocked: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.IsLocked",
                          type: "actuator",
                        },
                        IsOpen: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.IsOpen",
                          type: "actuator",
                        },
                        Position: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.Position",
                          type: "actuator",
                        },
                        Shade: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade.Switch",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.Switch",
                          type: "actuator",
                        },
                        Window: {
                          id: "Vehicle.Cabin.Door.Row2.DriverSide.Window",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row2.DriverSide.Window.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row2.DriverSide.Window.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row2.DriverSide.Window.Switch",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    PassengerSide: {
                      id: "Vehicle.Cabin.Door.Row2.PassengerSide",
                      type: "branch",
                      children: {
                        IsChildLockActive: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.IsChildLockActive",
                          type: "sensor",
                        },
                        IsLocked: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.IsLocked",
                          type: "actuator",
                        },
                        IsOpen: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.IsOpen",
                          type: "actuator",
                        },
                        Position: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.Position",
                          type: "actuator",
                        },
                        Shade: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade.Switch",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.Switch",
                          type: "actuator",
                        },
                        Window: {
                          id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window",
                          type: "branch",
                          children: {
                            IsOpen: {
                              id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window.IsOpen",
                              type: "actuator",
                            },
                            Position: {
                              id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window.Position",
                              type: "actuator",
                            },
                            Switch: {
                              id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window.Switch",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            DoorCount: {
              id: "Vehicle.Cabin.DoorCount",
              type: "attribute",
            },
            DriverPosition: {
              id: "Vehicle.Cabin.DriverPosition",
              type: "attribute",
            },
            HVAC: {
              id: "Vehicle.Cabin.HVAC",
              type: "branch",
              children: {
                AmbientAirTemperature: {
                  id: "Vehicle.Cabin.HVAC.AmbientAirTemperature",
                  type: "sensor",
                },
                IsAirConditioningActive: {
                  id: "Vehicle.Cabin.HVAC.IsAirConditioningActive",
                  type: "actuator",
                },
                IsAutoPowerOptimize: {
                  id: "Vehicle.Cabin.HVAC.IsAutoPowerOptimize",
                  type: "actuator",
                },
                IsFrontDefrosterActive: {
                  id: "Vehicle.Cabin.HVAC.IsFrontDefrosterActive",
                  type: "actuator",
                },
                IsRearDefrosterActive: {
                  id: "Vehicle.Cabin.HVAC.IsRearDefrosterActive",
                  type: "actuator",
                },
                IsRecirculationActive: {
                  id: "Vehicle.Cabin.HVAC.IsRecirculationActive",
                  type: "actuator",
                },
                PowerOptimizeLevel: {
                  id: "Vehicle.Cabin.HVAC.PowerOptimizeLevel",
                  type: "actuator",
                },
                Station: {
                  id: "Vehicle.Cabin.HVAC.Station",
                  type: "branch",
                  children: {
                    Row1: {
                      id: "Vehicle.Cabin.HVAC.Station.Row1",
                      type: "branch",
                      children: {
                        Driver: {
                          id: "Vehicle.Cabin.HVAC.Station.Row1.Driver",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row1.Driver.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row1.Driver.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row1.Driver.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                        Passenger: {
                          id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row2: {
                      id: "Vehicle.Cabin.HVAC.Station.Row2",
                      type: "branch",
                      children: {
                        Driver: {
                          id: "Vehicle.Cabin.HVAC.Station.Row2.Driver",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row2.Driver.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row2.Driver.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row2.Driver.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                        Passenger: {
                          id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row3: {
                      id: "Vehicle.Cabin.HVAC.Station.Row3",
                      type: "branch",
                      children: {
                        Driver: {
                          id: "Vehicle.Cabin.HVAC.Station.Row3.Driver",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row3.Driver.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row3.Driver.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row3.Driver.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                        Passenger: {
                          id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row4: {
                      id: "Vehicle.Cabin.HVAC.Station.Row4",
                      type: "branch",
                      children: {
                        Driver: {
                          id: "Vehicle.Cabin.HVAC.Station.Row4.Driver",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row4.Driver.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row4.Driver.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row4.Driver.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                        Passenger: {
                          id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger",
                          type: "branch",
                          children: {
                            AirDistribution: {
                              id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger.AirDistribution",
                              type: "actuator",
                            },
                            FanSpeed: {
                              id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger.FanSpeed",
                              type: "actuator",
                            },
                            Temperature: {
                              id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger.Temperature",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            Infotainment: {
              id: "Vehicle.Cabin.Infotainment",
              type: "branch",
              children: {
                HMI: {
                  id: "Vehicle.Cabin.Infotainment.HMI",
                  type: "branch",
                  children: {
                    Brightness: {
                      id: "Vehicle.Cabin.Infotainment.HMI.Brightness",
                      type: "actuator",
                    },
                    CurrentLanguage: {
                      id: "Vehicle.Cabin.Infotainment.HMI.CurrentLanguage",
                      type: "sensor",
                    },
                    DateFormat: {
                      id: "Vehicle.Cabin.Infotainment.HMI.DateFormat",
                      type: "actuator",
                    },
                    DayNightMode: {
                      id: "Vehicle.Cabin.Infotainment.HMI.DayNightMode",
                      type: "actuator",
                    },
                    DisplayOffDuration: {
                      id: "Vehicle.Cabin.Infotainment.HMI.DisplayOffDuration",
                      type: "actuator",
                    },
                    DistanceUnit: {
                      id: "Vehicle.Cabin.Infotainment.HMI.DistanceUnit",
                      type: "actuator",
                    },
                    EVEconomyUnits: {
                      id: "Vehicle.Cabin.Infotainment.HMI.EVEconomyUnits",
                      type: "actuator",
                    },
                    EVEnergyUnits: {
                      id: "Vehicle.Cabin.Infotainment.HMI.EVEnergyUnits",
                      type: "actuator",
                    },
                    FontSize: {
                      id: "Vehicle.Cabin.Infotainment.HMI.FontSize",
                      type: "actuator",
                    },
                    FuelEconomyUnits: {
                      id: "Vehicle.Cabin.Infotainment.HMI.FuelEconomyUnits",
                      type: "actuator",
                    },
                    FuelVolumeUnit: {
                      id: "Vehicle.Cabin.Infotainment.HMI.FuelVolumeUnit",
                      type: "actuator",
                    },
                    IsScreenAlwaysOn: {
                      id: "Vehicle.Cabin.Infotainment.HMI.IsScreenAlwaysOn",
                      type: "actuator",
                    },
                    LastActionTime: {
                      id: "Vehicle.Cabin.Infotainment.HMI.LastActionTime",
                      type: "sensor",
                    },
                    SpeedUnit: {
                      id: "Vehicle.Cabin.Infotainment.HMI.SpeedUnit",
                      type: "actuator",
                    },
                    TemperatureUnit: {
                      id: "Vehicle.Cabin.Infotainment.HMI.TemperatureUnit",
                      type: "actuator",
                    },
                    TimeFormat: {
                      id: "Vehicle.Cabin.Infotainment.HMI.TimeFormat",
                      type: "actuator",
                    },
                    TirePressureUnit: {
                      id: "Vehicle.Cabin.Infotainment.HMI.TirePressureUnit",
                      type: "actuator",
                    },
                  },
                },
                IsAutoPowerOptimize: {
                  id: "Vehicle.Cabin.Infotainment.IsAutoPowerOptimize",
                  type: "actuator",
                },
                Media: {
                  id: "Vehicle.Cabin.Infotainment.Media",
                  type: "branch",
                  children: {
                    Action: {
                      id: "Vehicle.Cabin.Infotainment.Media.Action",
                      type: "actuator",
                    },
                    DeclinedURI: {
                      id: "Vehicle.Cabin.Infotainment.Media.DeclinedURI",
                      type: "sensor",
                    },
                    Played: {
                      id: "Vehicle.Cabin.Infotainment.Media.Played",
                      type: "branch",
                      children: {
                        Album: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.Album",
                          type: "sensor",
                        },
                        Artist: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.Artist",
                          type: "sensor",
                        },
                        Genre: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.Genre",
                          type: "sensor",
                        },
                        PlaybackRate: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.PlaybackRate",
                          type: "actuator",
                        },
                        Source: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.Source",
                          type: "actuator",
                        },
                        Track: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.Track",
                          type: "sensor",
                        },
                        URI: {
                          id: "Vehicle.Cabin.Infotainment.Media.Played.URI",
                          type: "sensor",
                        },
                      },
                    },
                    SelectedURI: {
                      id: "Vehicle.Cabin.Infotainment.Media.SelectedURI",
                      type: "actuator",
                    },
                    Volume: {
                      id: "Vehicle.Cabin.Infotainment.Media.Volume",
                      type: "actuator",
                    },
                  },
                },
                Navigation: {
                  id: "Vehicle.Cabin.Infotainment.Navigation",
                  type: "branch",
                  children: {
                    DestinationSet: {
                      id: "Vehicle.Cabin.Infotainment.Navigation.DestinationSet",
                      type: "branch",
                      children: {
                        Latitude: {
                          id: "Vehicle.Cabin.Infotainment.Navigation.DestinationSet.Latitude",
                          type: "actuator",
                        },
                        Longitude: {
                          id: "Vehicle.Cabin.Infotainment.Navigation.DestinationSet.Longitude",
                          type: "actuator",
                        },
                      },
                    },
                    GuidanceVoice: {
                      id: "Vehicle.Cabin.Infotainment.Navigation.GuidanceVoice",
                      type: "actuator",
                    },
                    Map: {
                      id: "Vehicle.Cabin.Infotainment.Navigation.Map",
                      type: "branch",
                      children: {
                        IsAutoScaleModeUsed: {
                          id: "Vehicle.Cabin.Infotainment.Navigation.Map.IsAutoScaleModeUsed",
                          type: "actuator",
                        },
                      },
                    },
                    Mute: {
                      id: "Vehicle.Cabin.Infotainment.Navigation.Mute",
                      type: "actuator",
                    },
                    Volume: {
                      id: "Vehicle.Cabin.Infotainment.Navigation.Volume",
                      type: "actuator",
                    },
                  },
                },
                PowerOptimizeLevel: {
                  id: "Vehicle.Cabin.Infotainment.PowerOptimizeLevel",
                  type: "actuator",
                },
                SmartphoneProjection: {
                  id: "Vehicle.Cabin.Infotainment.SmartphoneProjection",
                  type: "branch",
                  children: {
                    Active: {
                      id: "Vehicle.Cabin.Infotainment.SmartphoneProjection.Active",
                      type: "actuator",
                    },
                    Source: {
                      id: "Vehicle.Cabin.Infotainment.SmartphoneProjection.Source",
                      type: "actuator",
                    },
                    SupportedMode: {
                      id: "Vehicle.Cabin.Infotainment.SmartphoneProjection.SupportedMode",
                      type: "attribute",
                    },
                  },
                },
                SmartphoneScreenMirroring: {
                  id: "Vehicle.Cabin.Infotainment.SmartphoneScreenMirroring",
                  type: "branch",
                  children: {
                    Active: {
                      id: "Vehicle.Cabin.Infotainment.SmartphoneScreenMirroring.Active",
                      type: "actuator",
                    },
                    Source: {
                      id: "Vehicle.Cabin.Infotainment.SmartphoneScreenMirroring.Source",
                      type: "actuator",
                    },
                  },
                },
              },
            },
            IsAutoPowerOptimize: {
              id: "Vehicle.Cabin.IsAutoPowerOptimize",
              type: "actuator",
            },
            IsWindowChildLockEngaged: {
              id: "Vehicle.Cabin.IsWindowChildLockEngaged",
              type: "actuator",
            },
            Light: {
              id: "Vehicle.Cabin.Light",
              type: "branch",
              children: {
                AmbientLight: {
                  id: "Vehicle.Cabin.Light.AmbientLight",
                  type: "branch",
                  children: {
                    Row1: {
                      id: "Vehicle.Cabin.Light.AmbientLight.Row1",
                      type: "branch",
                      children: {
                        DriverSide: {
                          id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                        PassengerSide: {
                          id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row2: {
                      id: "Vehicle.Cabin.Light.AmbientLight.Row2",
                      type: "branch",
                      children: {
                        DriverSide: {
                          id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                        PassengerSide: {
                          id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                  },
                },
                InteractiveLightBar: {
                  id: "Vehicle.Cabin.Light.InteractiveLightBar",
                  type: "branch",
                  children: {
                    Color: {
                      id: "Vehicle.Cabin.Light.InteractiveLightBar.Color",
                      type: "actuator",
                    },
                    Effect: {
                      id: "Vehicle.Cabin.Light.InteractiveLightBar.Effect",
                      type: "actuator",
                    },
                    Intensity: {
                      id: "Vehicle.Cabin.Light.InteractiveLightBar.Intensity",
                      type: "actuator",
                    },
                    IsLightOn: {
                      id: "Vehicle.Cabin.Light.InteractiveLightBar.IsLightOn",
                      type: "actuator",
                    },
                  },
                },
                IsDomeOn: {
                  id: "Vehicle.Cabin.Light.IsDomeOn",
                  type: "actuator",
                },
                IsGloveBoxOn: {
                  id: "Vehicle.Cabin.Light.IsGloveBoxOn",
                  type: "actuator",
                },
                PerceivedAmbientLight: {
                  id: "Vehicle.Cabin.Light.PerceivedAmbientLight",
                  type: "sensor",
                },
                Spotlight: {
                  id: "Vehicle.Cabin.Light.Spotlight",
                  type: "branch",
                  children: {
                    Row1: {
                      id: "Vehicle.Cabin.Light.Spotlight.Row1",
                      type: "branch",
                      children: {
                        DriverSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                        PassengerSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row2: {
                      id: "Vehicle.Cabin.Light.Spotlight.Row2",
                      type: "branch",
                      children: {
                        DriverSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                        PassengerSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row3: {
                      id: "Vehicle.Cabin.Light.Spotlight.Row3",
                      type: "branch",
                      children: {
                        DriverSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                        PassengerSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                    Row4: {
                      id: "Vehicle.Cabin.Light.Spotlight.Row4",
                      type: "branch",
                      children: {
                        DriverSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                        PassengerSide: {
                          id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide",
                          type: "branch",
                          children: {
                            Color: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide.Color",
                              type: "actuator",
                            },
                            Intensity: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide.Intensity",
                              type: "actuator",
                            },
                            IsLightOn: {
                              id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide.IsLightOn",
                              type: "actuator",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            PowerOptimizeLevel: {
              id: "Vehicle.Cabin.PowerOptimizeLevel",
              type: "actuator",
            },
            RearShade: {
              id: "Vehicle.Cabin.RearShade",
              type: "branch",
              children: {
                IsOpen: {
                  id: "Vehicle.Cabin.RearShade.IsOpen",
                  type: "actuator",
                },
                Position: {
                  id: "Vehicle.Cabin.RearShade.Position",
                  type: "actuator",
                },
                Switch: {
                  id: "Vehicle.Cabin.RearShade.Switch",
                  type: "actuator",
                },
              },
            },
            RearviewMirror: {
              id: "Vehicle.Cabin.RearviewMirror",
              type: "branch",
              children: {
                DimmingLevel: {
                  id: "Vehicle.Cabin.RearviewMirror.DimmingLevel",
                  type: "actuator",
                },
              },
            },
            Seat: {
              id: "Vehicle.Cabin.Seat",
              type: "branch",
              children: {
                Row1: {
                  id: "Vehicle.Cabin.Seat.Row1",
                  type: "branch",
                  children: {
                    DriverSide: {
                      id: "Vehicle.Cabin.Seat.Row1.DriverSide",
                      type: "branch",
                      children: {
                        Airbag: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Airbag",
                          type: "branch",
                          children: {
                            IsDeployed: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Airbag.IsDeployed",
                              type: "sensor",
                            },
                          },
                        },
                        Backrest: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest",
                          type: "branch",
                          children: {
                            IsLessLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLessLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLessSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLumbarDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLumbarUpSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsReclineBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsReclineForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Lumbar: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Lumbar",
                              type: "branch",
                              children: {
                                Height: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Lumbar.Height",
                                  type: "actuator",
                                },
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Lumbar.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            LumbarHeight: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.LumbarHeight",
                              type: "actuator",
                            },
                            LumbarSupport: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.LumbarSupport",
                              type: "actuator",
                            },
                            Recline: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Recline",
                              type: "actuator",
                            },
                            SideBolster: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.SideBolster",
                              type: "branch",
                              children: {
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.SideBolster.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            SideBolsterSupport: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.SideBolsterSupport",
                              type: "actuator",
                            },
                          },
                        },
                        Headrest: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest",
                          type: "branch",
                          children: {
                            Angle: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.Angle",
                              type: "actuator",
                            },
                            Height: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.Height",
                              type: "actuator",
                            },
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsUpSwitchEngaged",
                              type: "actuator",
                            },
                          },
                        },
                        HeatingCooling: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.HeatingCooling",
                          type: "actuator",
                        },
                        Height: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Height",
                          type: "actuator",
                        },
                        IsBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsBelted: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsBelted",
                          type: "sensor",
                        },
                        IsCoolerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsCoolerSwitchEngaged",
                          type: "actuator",
                        },
                        IsDecreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsDecreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsDownSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsDownSwitchEngaged",
                          type: "actuator",
                        },
                        IsForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsIncreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsIncreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsOccupied: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsOccupied",
                          type: "sensor",
                        },
                        IsTiltBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsTiltBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsTiltForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsTiltForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsUpSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsUpSwitchEngaged",
                          type: "actuator",
                        },
                        IsWarmerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsWarmerSwitchEngaged",
                          type: "actuator",
                        },
                        Massage: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Massage",
                          type: "actuator",
                        },
                        MassageLevel: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.MassageLevel",
                          type: "actuator",
                        },
                        Occupant: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant",
                          type: "branch",
                          children: {
                            Identifier: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant.Identifier",
                              type: "branch",
                              children: {
                                Issuer: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant.Identifier.Issuer",
                                  type: "sensor",
                                },
                                Subject: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant.Identifier.Subject",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Position: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Position",
                          type: "actuator",
                        },
                        SeatBeltHeight: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.SeatBeltHeight",
                          type: "actuator",
                        },
                        Seating: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating",
                          type: "branch",
                          children: {
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Length: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating.Length",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch",
                          type: "branch",
                          children: {
                            Backrest: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest",
                              type: "branch",
                              children: {
                                IsReclineBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.IsReclineBackwardEngaged",
                                  type: "actuator",
                                },
                                IsReclineForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.IsReclineForwardEngaged",
                                  type: "actuator",
                                },
                                Lumbar: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar",
                                  type: "branch",
                                  children: {
                                    IsDownEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsDownEngaged",
                                      type: "actuator",
                                    },
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsUpEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsUpEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                                SideBolster: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.SideBolster",
                                  type: "branch",
                                  children: {
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                              },
                            },
                            Headrest: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsDownEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsDownEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsForwardEngaged",
                                  type: "actuator",
                                },
                                IsUpEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsUpEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            IsBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsBackwardEngaged",
                              type: "actuator",
                            },
                            IsCoolerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsCoolerEngaged",
                              type: "actuator",
                            },
                            IsDownEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsDownEngaged",
                              type: "actuator",
                            },
                            IsForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsForwardEngaged",
                              type: "actuator",
                            },
                            IsTiltBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsTiltBackwardEngaged",
                              type: "actuator",
                            },
                            IsTiltForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsTiltForwardEngaged",
                              type: "actuator",
                            },
                            IsUpEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsUpEngaged",
                              type: "actuator",
                            },
                            IsWarmerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsWarmerEngaged",
                              type: "actuator",
                            },
                            Massage: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Massage",
                              type: "branch",
                              children: {
                                IsDecreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Massage.IsDecreaseEngaged",
                                  type: "actuator",
                                },
                                IsIncreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Massage.IsIncreaseEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            Seating: {
                              id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Seating",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Seating.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Seating.IsForwardEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                        Tilt: {
                          id: "Vehicle.Cabin.Seat.Row1.DriverSide.Tilt",
                          type: "actuator",
                        },
                      },
                    },
                    Middle: {
                      id: "Vehicle.Cabin.Seat.Row1.Middle",
                      type: "branch",
                      children: {
                        Airbag: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Airbag",
                          type: "branch",
                          children: {
                            IsDeployed: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Airbag.IsDeployed",
                              type: "sensor",
                            },
                          },
                        },
                        Backrest: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest",
                          type: "branch",
                          children: {
                            IsLessLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLessLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLessSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLessSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLumbarDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLumbarUpSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsMoreLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsReclineBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsReclineForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Lumbar: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Lumbar",
                              type: "branch",
                              children: {
                                Height: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Lumbar.Height",
                                  type: "actuator",
                                },
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Lumbar.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            LumbarHeight: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.LumbarHeight",
                              type: "actuator",
                            },
                            LumbarSupport: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.LumbarSupport",
                              type: "actuator",
                            },
                            Recline: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Recline",
                              type: "actuator",
                            },
                            SideBolster: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.SideBolster",
                              type: "branch",
                              children: {
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.SideBolster.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            SideBolsterSupport: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.SideBolsterSupport",
                              type: "actuator",
                            },
                          },
                        },
                        Headrest: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest",
                          type: "branch",
                          children: {
                            Angle: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.Angle",
                              type: "actuator",
                            },
                            Height: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.Height",
                              type: "actuator",
                            },
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsUpSwitchEngaged",
                              type: "actuator",
                            },
                          },
                        },
                        HeatingCooling: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.HeatingCooling",
                          type: "actuator",
                        },
                        Height: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Height",
                          type: "actuator",
                        },
                        IsBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsBelted: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsBelted",
                          type: "sensor",
                        },
                        IsCoolerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsCoolerSwitchEngaged",
                          type: "actuator",
                        },
                        IsDecreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsDecreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsDownSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsDownSwitchEngaged",
                          type: "actuator",
                        },
                        IsForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsIncreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsIncreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsOccupied: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsOccupied",
                          type: "sensor",
                        },
                        IsTiltBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsTiltBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsTiltForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsTiltForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsUpSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsUpSwitchEngaged",
                          type: "actuator",
                        },
                        IsWarmerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.IsWarmerSwitchEngaged",
                          type: "actuator",
                        },
                        Massage: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Massage",
                          type: "actuator",
                        },
                        MassageLevel: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.MassageLevel",
                          type: "actuator",
                        },
                        Occupant: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant",
                          type: "branch",
                          children: {
                            Identifier: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant.Identifier",
                              type: "branch",
                              children: {
                                Issuer: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant.Identifier.Issuer",
                                  type: "sensor",
                                },
                                Subject: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant.Identifier.Subject",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Position: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Position",
                          type: "actuator",
                        },
                        SeatBeltHeight: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.SeatBeltHeight",
                          type: "actuator",
                        },
                        Seating: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Seating",
                          type: "branch",
                          children: {
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Seating.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Seating.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Length: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Seating.Length",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Switch",
                          type: "branch",
                          children: {
                            Backrest: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest",
                              type: "branch",
                              children: {
                                IsReclineBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.IsReclineBackwardEngaged",
                                  type: "actuator",
                                },
                                IsReclineForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.IsReclineForwardEngaged",
                                  type: "actuator",
                                },
                                Lumbar: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar",
                                  type: "branch",
                                  children: {
                                    IsDownEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsDownEngaged",
                                      type: "actuator",
                                    },
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsUpEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsUpEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                                SideBolster: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.SideBolster",
                                  type: "branch",
                                  children: {
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.SideBolster.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                              },
                            },
                            Headrest: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsDownEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsDownEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsForwardEngaged",
                                  type: "actuator",
                                },
                                IsUpEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsUpEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            IsBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsBackwardEngaged",
                              type: "actuator",
                            },
                            IsCoolerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsCoolerEngaged",
                              type: "actuator",
                            },
                            IsDownEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsDownEngaged",
                              type: "actuator",
                            },
                            IsForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsForwardEngaged",
                              type: "actuator",
                            },
                            IsTiltBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsTiltBackwardEngaged",
                              type: "actuator",
                            },
                            IsTiltForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsTiltForwardEngaged",
                              type: "actuator",
                            },
                            IsUpEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsUpEngaged",
                              type: "actuator",
                            },
                            IsWarmerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsWarmerEngaged",
                              type: "actuator",
                            },
                            Massage: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Massage",
                              type: "branch",
                              children: {
                                IsDecreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Massage.IsDecreaseEngaged",
                                  type: "actuator",
                                },
                                IsIncreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Massage.IsIncreaseEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            Seating: {
                              id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Seating",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Seating.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Seating.IsForwardEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                        Tilt: {
                          id: "Vehicle.Cabin.Seat.Row1.Middle.Tilt",
                          type: "actuator",
                        },
                      },
                    },
                    PassengerSide: {
                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide",
                      type: "branch",
                      children: {
                        Airbag: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Airbag",
                          type: "branch",
                          children: {
                            IsDeployed: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Airbag.IsDeployed",
                              type: "sensor",
                            },
                          },
                        },
                        Backrest: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest",
                          type: "branch",
                          children: {
                            IsLessLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLessLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLessSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLumbarDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLumbarUpSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsReclineBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsReclineForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Lumbar: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Lumbar",
                              type: "branch",
                              children: {
                                Height: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Lumbar.Height",
                                  type: "actuator",
                                },
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Lumbar.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            LumbarHeight: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.LumbarHeight",
                              type: "actuator",
                            },
                            LumbarSupport: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.LumbarSupport",
                              type: "actuator",
                            },
                            Recline: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Recline",
                              type: "actuator",
                            },
                            SideBolster: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.SideBolster",
                              type: "branch",
                              children: {
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.SideBolster.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            SideBolsterSupport: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.SideBolsterSupport",
                              type: "actuator",
                            },
                          },
                        },
                        Headrest: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest",
                          type: "branch",
                          children: {
                            Angle: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.Angle",
                              type: "actuator",
                            },
                            Height: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.Height",
                              type: "actuator",
                            },
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsUpSwitchEngaged",
                              type: "actuator",
                            },
                          },
                        },
                        HeatingCooling: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.HeatingCooling",
                          type: "actuator",
                        },
                        Height: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Height",
                          type: "actuator",
                        },
                        IsBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsBelted: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsBelted",
                          type: "sensor",
                        },
                        IsCoolerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsCoolerSwitchEngaged",
                          type: "actuator",
                        },
                        IsDecreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsDecreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsDownSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsDownSwitchEngaged",
                          type: "actuator",
                        },
                        IsForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsIncreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsIncreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsOccupied: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsOccupied",
                          type: "sensor",
                        },
                        IsTiltBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsTiltBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsTiltForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsTiltForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsUpSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsUpSwitchEngaged",
                          type: "actuator",
                        },
                        IsWarmerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsWarmerSwitchEngaged",
                          type: "actuator",
                        },
                        Massage: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Massage",
                          type: "actuator",
                        },
                        MassageLevel: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.MassageLevel",
                          type: "actuator",
                        },
                        Occupant: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant",
                          type: "branch",
                          children: {
                            Identifier: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant.Identifier",
                              type: "branch",
                              children: {
                                Issuer: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant.Identifier.Issuer",
                                  type: "sensor",
                                },
                                Subject: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant.Identifier.Subject",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Position: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Position",
                          type: "actuator",
                        },
                        SeatBeltHeight: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.SeatBeltHeight",
                          type: "actuator",
                        },
                        Seating: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating",
                          type: "branch",
                          children: {
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Length: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating.Length",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch",
                          type: "branch",
                          children: {
                            Backrest: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest",
                              type: "branch",
                              children: {
                                IsReclineBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.IsReclineBackwardEngaged",
                                  type: "actuator",
                                },
                                IsReclineForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.IsReclineForwardEngaged",
                                  type: "actuator",
                                },
                                Lumbar: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar",
                                  type: "branch",
                                  children: {
                                    IsDownEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsDownEngaged",
                                      type: "actuator",
                                    },
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsUpEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsUpEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                                SideBolster: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.SideBolster",
                                  type: "branch",
                                  children: {
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                              },
                            },
                            Headrest: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsDownEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsDownEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsForwardEngaged",
                                  type: "actuator",
                                },
                                IsUpEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsUpEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            IsBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsBackwardEngaged",
                              type: "actuator",
                            },
                            IsCoolerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsCoolerEngaged",
                              type: "actuator",
                            },
                            IsDownEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsDownEngaged",
                              type: "actuator",
                            },
                            IsForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsForwardEngaged",
                              type: "actuator",
                            },
                            IsTiltBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsTiltBackwardEngaged",
                              type: "actuator",
                            },
                            IsTiltForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsTiltForwardEngaged",
                              type: "actuator",
                            },
                            IsUpEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsUpEngaged",
                              type: "actuator",
                            },
                            IsWarmerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsWarmerEngaged",
                              type: "actuator",
                            },
                            Massage: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Massage",
                              type: "branch",
                              children: {
                                IsDecreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Massage.IsDecreaseEngaged",
                                  type: "actuator",
                                },
                                IsIncreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Massage.IsIncreaseEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            Seating: {
                              id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Seating",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Seating.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Seating.IsForwardEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                        Tilt: {
                          id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Tilt",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
                Row2: {
                  id: "Vehicle.Cabin.Seat.Row2",
                  type: "branch",
                  children: {
                    DriverSide: {
                      id: "Vehicle.Cabin.Seat.Row2.DriverSide",
                      type: "branch",
                      children: {
                        Airbag: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Airbag",
                          type: "branch",
                          children: {
                            IsDeployed: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Airbag.IsDeployed",
                              type: "sensor",
                            },
                          },
                        },
                        Backrest: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest",
                          type: "branch",
                          children: {
                            IsLessLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLessLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLessSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLumbarDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLumbarUpSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsReclineBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsReclineForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Lumbar: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Lumbar",
                              type: "branch",
                              children: {
                                Height: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Lumbar.Height",
                                  type: "actuator",
                                },
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Lumbar.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            LumbarHeight: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.LumbarHeight",
                              type: "actuator",
                            },
                            LumbarSupport: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.LumbarSupport",
                              type: "actuator",
                            },
                            Recline: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Recline",
                              type: "actuator",
                            },
                            SideBolster: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.SideBolster",
                              type: "branch",
                              children: {
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.SideBolster.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            SideBolsterSupport: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.SideBolsterSupport",
                              type: "actuator",
                            },
                          },
                        },
                        Headrest: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest",
                          type: "branch",
                          children: {
                            Angle: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.Angle",
                              type: "actuator",
                            },
                            Height: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.Height",
                              type: "actuator",
                            },
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsUpSwitchEngaged",
                              type: "actuator",
                            },
                          },
                        },
                        HeatingCooling: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.HeatingCooling",
                          type: "actuator",
                        },
                        Height: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Height",
                          type: "actuator",
                        },
                        IsBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsBelted: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsBelted",
                          type: "sensor",
                        },
                        IsCoolerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsCoolerSwitchEngaged",
                          type: "actuator",
                        },
                        IsDecreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsDecreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsDownSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsDownSwitchEngaged",
                          type: "actuator",
                        },
                        IsForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsIncreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsIncreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsOccupied: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsOccupied",
                          type: "sensor",
                        },
                        IsTiltBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsTiltBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsTiltForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsTiltForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsUpSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsUpSwitchEngaged",
                          type: "actuator",
                        },
                        IsWarmerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsWarmerSwitchEngaged",
                          type: "actuator",
                        },
                        Massage: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Massage",
                          type: "actuator",
                        },
                        MassageLevel: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.MassageLevel",
                          type: "actuator",
                        },
                        Occupant: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant",
                          type: "branch",
                          children: {
                            Identifier: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant.Identifier",
                              type: "branch",
                              children: {
                                Issuer: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant.Identifier.Issuer",
                                  type: "sensor",
                                },
                                Subject: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant.Identifier.Subject",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Position: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Position",
                          type: "actuator",
                        },
                        SeatBeltHeight: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.SeatBeltHeight",
                          type: "actuator",
                        },
                        Seating: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating",
                          type: "branch",
                          children: {
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Length: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating.Length",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch",
                          type: "branch",
                          children: {
                            Backrest: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest",
                              type: "branch",
                              children: {
                                IsReclineBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.IsReclineBackwardEngaged",
                                  type: "actuator",
                                },
                                IsReclineForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.IsReclineForwardEngaged",
                                  type: "actuator",
                                },
                                Lumbar: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar",
                                  type: "branch",
                                  children: {
                                    IsDownEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsDownEngaged",
                                      type: "actuator",
                                    },
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsUpEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsUpEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                                SideBolster: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.SideBolster",
                                  type: "branch",
                                  children: {
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                              },
                            },
                            Headrest: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsDownEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsDownEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsForwardEngaged",
                                  type: "actuator",
                                },
                                IsUpEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsUpEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            IsBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsBackwardEngaged",
                              type: "actuator",
                            },
                            IsCoolerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsCoolerEngaged",
                              type: "actuator",
                            },
                            IsDownEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsDownEngaged",
                              type: "actuator",
                            },
                            IsForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsForwardEngaged",
                              type: "actuator",
                            },
                            IsTiltBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsTiltBackwardEngaged",
                              type: "actuator",
                            },
                            IsTiltForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsTiltForwardEngaged",
                              type: "actuator",
                            },
                            IsUpEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsUpEngaged",
                              type: "actuator",
                            },
                            IsWarmerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsWarmerEngaged",
                              type: "actuator",
                            },
                            Massage: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Massage",
                              type: "branch",
                              children: {
                                IsDecreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Massage.IsDecreaseEngaged",
                                  type: "actuator",
                                },
                                IsIncreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Massage.IsIncreaseEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            Seating: {
                              id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Seating",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Seating.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Seating.IsForwardEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                        Tilt: {
                          id: "Vehicle.Cabin.Seat.Row2.DriverSide.Tilt",
                          type: "actuator",
                        },
                      },
                    },
                    Middle: {
                      id: "Vehicle.Cabin.Seat.Row2.Middle",
                      type: "branch",
                      children: {
                        Airbag: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Airbag",
                          type: "branch",
                          children: {
                            IsDeployed: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Airbag.IsDeployed",
                              type: "sensor",
                            },
                          },
                        },
                        Backrest: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest",
                          type: "branch",
                          children: {
                            IsLessLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLessLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLessSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLessSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLumbarDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLumbarUpSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsMoreLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsReclineBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsReclineForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Lumbar: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Lumbar",
                              type: "branch",
                              children: {
                                Height: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Lumbar.Height",
                                  type: "actuator",
                                },
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Lumbar.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            LumbarHeight: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.LumbarHeight",
                              type: "actuator",
                            },
                            LumbarSupport: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.LumbarSupport",
                              type: "actuator",
                            },
                            Recline: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Recline",
                              type: "actuator",
                            },
                            SideBolster: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.SideBolster",
                              type: "branch",
                              children: {
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.SideBolster.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            SideBolsterSupport: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.SideBolsterSupport",
                              type: "actuator",
                            },
                          },
                        },
                        Headrest: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest",
                          type: "branch",
                          children: {
                            Angle: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.Angle",
                              type: "actuator",
                            },
                            Height: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.Height",
                              type: "actuator",
                            },
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsUpSwitchEngaged",
                              type: "actuator",
                            },
                          },
                        },
                        HeatingCooling: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.HeatingCooling",
                          type: "actuator",
                        },
                        Height: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Height",
                          type: "actuator",
                        },
                        IsBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsBelted: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsBelted",
                          type: "sensor",
                        },
                        IsCoolerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsCoolerSwitchEngaged",
                          type: "actuator",
                        },
                        IsDecreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsDecreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsDownSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsDownSwitchEngaged",
                          type: "actuator",
                        },
                        IsForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsIncreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsIncreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsOccupied: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsOccupied",
                          type: "sensor",
                        },
                        IsTiltBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsTiltBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsTiltForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsTiltForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsUpSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsUpSwitchEngaged",
                          type: "actuator",
                        },
                        IsWarmerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.IsWarmerSwitchEngaged",
                          type: "actuator",
                        },
                        Massage: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Massage",
                          type: "actuator",
                        },
                        MassageLevel: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.MassageLevel",
                          type: "actuator",
                        },
                        Occupant: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant",
                          type: "branch",
                          children: {
                            Identifier: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant.Identifier",
                              type: "branch",
                              children: {
                                Issuer: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant.Identifier.Issuer",
                                  type: "sensor",
                                },
                                Subject: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant.Identifier.Subject",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Position: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Position",
                          type: "actuator",
                        },
                        SeatBeltHeight: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.SeatBeltHeight",
                          type: "actuator",
                        },
                        Seating: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Seating",
                          type: "branch",
                          children: {
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Seating.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Seating.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Length: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Seating.Length",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Switch",
                          type: "branch",
                          children: {
                            Backrest: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest",
                              type: "branch",
                              children: {
                                IsReclineBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.IsReclineBackwardEngaged",
                                  type: "actuator",
                                },
                                IsReclineForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.IsReclineForwardEngaged",
                                  type: "actuator",
                                },
                                Lumbar: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar",
                                  type: "branch",
                                  children: {
                                    IsDownEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsDownEngaged",
                                      type: "actuator",
                                    },
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsUpEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsUpEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                                SideBolster: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.SideBolster",
                                  type: "branch",
                                  children: {
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.SideBolster.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                              },
                            },
                            Headrest: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsDownEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsDownEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsForwardEngaged",
                                  type: "actuator",
                                },
                                IsUpEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsUpEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            IsBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsBackwardEngaged",
                              type: "actuator",
                            },
                            IsCoolerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsCoolerEngaged",
                              type: "actuator",
                            },
                            IsDownEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsDownEngaged",
                              type: "actuator",
                            },
                            IsForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsForwardEngaged",
                              type: "actuator",
                            },
                            IsTiltBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsTiltBackwardEngaged",
                              type: "actuator",
                            },
                            IsTiltForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsTiltForwardEngaged",
                              type: "actuator",
                            },
                            IsUpEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsUpEngaged",
                              type: "actuator",
                            },
                            IsWarmerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsWarmerEngaged",
                              type: "actuator",
                            },
                            Massage: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Massage",
                              type: "branch",
                              children: {
                                IsDecreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Massage.IsDecreaseEngaged",
                                  type: "actuator",
                                },
                                IsIncreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Massage.IsIncreaseEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            Seating: {
                              id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Seating",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Seating.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Seating.IsForwardEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                        Tilt: {
                          id: "Vehicle.Cabin.Seat.Row2.Middle.Tilt",
                          type: "actuator",
                        },
                      },
                    },
                    PassengerSide: {
                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide",
                      type: "branch",
                      children: {
                        Airbag: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Airbag",
                          type: "branch",
                          children: {
                            IsDeployed: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Airbag.IsDeployed",
                              type: "sensor",
                            },
                          },
                        },
                        Backrest: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest",
                          type: "branch",
                          children: {
                            IsLessLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLessLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLessSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLumbarDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsLumbarUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLumbarUpSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreLumbarSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsMoreSideBolsterSupportSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsReclineBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsReclineForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsReclineForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Lumbar: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Lumbar",
                              type: "branch",
                              children: {
                                Height: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Lumbar.Height",
                                  type: "actuator",
                                },
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Lumbar.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            LumbarHeight: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.LumbarHeight",
                              type: "actuator",
                            },
                            LumbarSupport: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.LumbarSupport",
                              type: "actuator",
                            },
                            Recline: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Recline",
                              type: "actuator",
                            },
                            SideBolster: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.SideBolster",
                              type: "branch",
                              children: {
                                Support: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.SideBolster.Support",
                                  type: "actuator",
                                },
                              },
                            },
                            SideBolsterSupport: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.SideBolsterSupport",
                              type: "actuator",
                            },
                          },
                        },
                        Headrest: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest",
                          type: "branch",
                          children: {
                            Angle: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.Angle",
                              type: "actuator",
                            },
                            Height: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.Height",
                              type: "actuator",
                            },
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsDownSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsDownSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsUpSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsUpSwitchEngaged",
                              type: "actuator",
                            },
                          },
                        },
                        HeatingCooling: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.HeatingCooling",
                          type: "actuator",
                        },
                        Height: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Height",
                          type: "actuator",
                        },
                        IsBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsBelted: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsBelted",
                          type: "sensor",
                        },
                        IsCoolerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsCoolerSwitchEngaged",
                          type: "actuator",
                        },
                        IsDecreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsDecreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsDownSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsDownSwitchEngaged",
                          type: "actuator",
                        },
                        IsForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsIncreaseMassageLevelSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsIncreaseMassageLevelSwitchEngaged",
                          type: "actuator",
                        },
                        IsOccupied: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsOccupied",
                          type: "sensor",
                        },
                        IsTiltBackwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsTiltBackwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsTiltForwardSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsTiltForwardSwitchEngaged",
                          type: "actuator",
                        },
                        IsUpSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsUpSwitchEngaged",
                          type: "actuator",
                        },
                        IsWarmerSwitchEngaged: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsWarmerSwitchEngaged",
                          type: "actuator",
                        },
                        Massage: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Massage",
                          type: "actuator",
                        },
                        MassageLevel: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.MassageLevel",
                          type: "actuator",
                        },
                        Occupant: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant",
                          type: "branch",
                          children: {
                            Identifier: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant.Identifier",
                              type: "branch",
                              children: {
                                Issuer: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant.Identifier.Issuer",
                                  type: "sensor",
                                },
                                Subject: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant.Identifier.Subject",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Position: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Position",
                          type: "actuator",
                        },
                        SeatBeltHeight: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.SeatBeltHeight",
                          type: "actuator",
                        },
                        Seating: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating",
                          type: "branch",
                          children: {
                            IsBackwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating.IsBackwardSwitchEngaged",
                              type: "actuator",
                            },
                            IsForwardSwitchEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating.IsForwardSwitchEngaged",
                              type: "actuator",
                            },
                            Length: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating.Length",
                              type: "actuator",
                            },
                          },
                        },
                        Switch: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch",
                          type: "branch",
                          children: {
                            Backrest: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest",
                              type: "branch",
                              children: {
                                IsReclineBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.IsReclineBackwardEngaged",
                                  type: "actuator",
                                },
                                IsReclineForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.IsReclineForwardEngaged",
                                  type: "actuator",
                                },
                                Lumbar: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar",
                                  type: "branch",
                                  children: {
                                    IsDownEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsDownEngaged",
                                      type: "actuator",
                                    },
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsUpEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsUpEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                                SideBolster: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.SideBolster",
                                  type: "branch",
                                  children: {
                                    IsLessSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
                                      type: "actuator",
                                    },
                                    IsMoreSupportEngaged: {
                                      id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
                                      type: "actuator",
                                    },
                                  },
                                },
                              },
                            },
                            Headrest: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsDownEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsDownEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsForwardEngaged",
                                  type: "actuator",
                                },
                                IsUpEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsUpEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            IsBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsBackwardEngaged",
                              type: "actuator",
                            },
                            IsCoolerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsCoolerEngaged",
                              type: "actuator",
                            },
                            IsDownEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsDownEngaged",
                              type: "actuator",
                            },
                            IsForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsForwardEngaged",
                              type: "actuator",
                            },
                            IsTiltBackwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsTiltBackwardEngaged",
                              type: "actuator",
                            },
                            IsTiltForwardEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsTiltForwardEngaged",
                              type: "actuator",
                            },
                            IsUpEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsUpEngaged",
                              type: "actuator",
                            },
                            IsWarmerEngaged: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsWarmerEngaged",
                              type: "actuator",
                            },
                            Massage: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Massage",
                              type: "branch",
                              children: {
                                IsDecreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Massage.IsDecreaseEngaged",
                                  type: "actuator",
                                },
                                IsIncreaseEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Massage.IsIncreaseEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                            Seating: {
                              id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Seating",
                              type: "branch",
                              children: {
                                IsBackwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Seating.IsBackwardEngaged",
                                  type: "actuator",
                                },
                                IsForwardEngaged: {
                                  id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Seating.IsForwardEngaged",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                        Tilt: {
                          id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Tilt",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
              },
            },
            SeatPosCount: {
              id: "Vehicle.Cabin.SeatPosCount",
              type: "attribute",
            },
            SeatRowCount: {
              id: "Vehicle.Cabin.SeatRowCount",
              type: "attribute",
            },
            Sunroof: {
              id: "Vehicle.Cabin.Sunroof",
              type: "branch",
              children: {
                Position: {
                  id: "Vehicle.Cabin.Sunroof.Position",
                  type: "sensor",
                },
                Shade: {
                  id: "Vehicle.Cabin.Sunroof.Shade",
                  type: "branch",
                  children: {
                    IsOpen: {
                      id: "Vehicle.Cabin.Sunroof.Shade.IsOpen",
                      type: "actuator",
                    },
                    Position: {
                      id: "Vehicle.Cabin.Sunroof.Shade.Position",
                      type: "actuator",
                    },
                    Switch: {
                      id: "Vehicle.Cabin.Sunroof.Shade.Switch",
                      type: "actuator",
                    },
                  },
                },
                Switch: {
                  id: "Vehicle.Cabin.Sunroof.Switch",
                  type: "actuator",
                },
              },
            },
          },
        },
        CargoVolume: {
          id: "Vehicle.CargoVolume",
          type: "attribute",
        },
        Chassis: {
          id: "Vehicle.Chassis",
          type: "branch",
          children: {
            Accelerator: {
              id: "Vehicle.Chassis.Accelerator",
              type: "branch",
              children: {
                PedalPosition: {
                  id: "Vehicle.Chassis.Accelerator.PedalPosition",
                  type: "sensor",
                },
              },
            },
            Axle: {
              id: "Vehicle.Chassis.Axle",
              type: "branch",
              children: {
                Row1: {
                  id: "Vehicle.Chassis.Axle.Row1",
                  type: "branch",
                  children: {
                    AxleWidth: {
                      id: "Vehicle.Chassis.Axle.Row1.AxleWidth",
                      type: "attribute",
                    },
                    SteeringAngle: {
                      id: "Vehicle.Chassis.Axle.Row1.SteeringAngle",
                      type: "sensor",
                    },
                    TireAspectRatio: {
                      id: "Vehicle.Chassis.Axle.Row1.TireAspectRatio",
                      type: "attribute",
                    },
                    TireDiameter: {
                      id: "Vehicle.Chassis.Axle.Row1.TireDiameter",
                      type: "attribute",
                    },
                    TireWidth: {
                      id: "Vehicle.Chassis.Axle.Row1.TireWidth",
                      type: "attribute",
                    },
                    TrackWidth: {
                      id: "Vehicle.Chassis.Axle.Row1.TrackWidth",
                      type: "attribute",
                    },
                    TreadWidth: {
                      id: "Vehicle.Chassis.Axle.Row1.TreadWidth",
                      type: "attribute",
                    },
                    Wheel: {
                      id: "Vehicle.Chassis.Axle.Row1.Wheel",
                      type: "branch",
                      children: {
                        Left: {
                          id: "Vehicle.Chassis.Axle.Row1.Wheel.Left",
                          type: "branch",
                          children: {
                            AngularSpeed: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.AngularSpeed",
                              type: "sensor",
                            },
                            Brake: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake",
                              type: "branch",
                              children: {
                                FluidLevel: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.FluidLevel",
                                  type: "sensor",
                                },
                                IsBrakesWorn: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.IsBrakesWorn",
                                  type: "sensor",
                                },
                                IsFluidLevelLow: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.IsFluidLevelLow",
                                  type: "sensor",
                                },
                                PadWear: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.PadWear",
                                  type: "sensor",
                                },
                              },
                            },
                            Speed: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Speed",
                              type: "sensor",
                            },
                            Tire: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire",
                              type: "branch",
                              children: {
                                IsPressureLow: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire.IsPressureLow",
                                  type: "sensor",
                                },
                                Pressure: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire.Pressure",
                                  type: "sensor",
                                },
                                Temperature: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire.Temperature",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Right: {
                          id: "Vehicle.Chassis.Axle.Row1.Wheel.Right",
                          type: "branch",
                          children: {
                            AngularSpeed: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.AngularSpeed",
                              type: "sensor",
                            },
                            Brake: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake",
                              type: "branch",
                              children: {
                                FluidLevel: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.FluidLevel",
                                  type: "sensor",
                                },
                                IsBrakesWorn: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.IsBrakesWorn",
                                  type: "sensor",
                                },
                                IsFluidLevelLow: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.IsFluidLevelLow",
                                  type: "sensor",
                                },
                                PadWear: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.PadWear",
                                  type: "sensor",
                                },
                              },
                            },
                            Speed: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Speed",
                              type: "sensor",
                            },
                            Tire: {
                              id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire",
                              type: "branch",
                              children: {
                                IsPressureLow: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire.IsPressureLow",
                                  type: "sensor",
                                },
                                Pressure: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire.Pressure",
                                  type: "sensor",
                                },
                                Temperature: {
                                  id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire.Temperature",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    WheelCount: {
                      id: "Vehicle.Chassis.Axle.Row1.WheelCount",
                      type: "attribute",
                    },
                    WheelDiameter: {
                      id: "Vehicle.Chassis.Axle.Row1.WheelDiameter",
                      type: "attribute",
                    },
                    WheelWidth: {
                      id: "Vehicle.Chassis.Axle.Row1.WheelWidth",
                      type: "attribute",
                    },
                  },
                },
                Row2: {
                  id: "Vehicle.Chassis.Axle.Row2",
                  type: "branch",
                  children: {
                    AxleWidth: {
                      id: "Vehicle.Chassis.Axle.Row2.AxleWidth",
                      type: "attribute",
                    },
                    SteeringAngle: {
                      id: "Vehicle.Chassis.Axle.Row2.SteeringAngle",
                      type: "sensor",
                    },
                    TireAspectRatio: {
                      id: "Vehicle.Chassis.Axle.Row2.TireAspectRatio",
                      type: "attribute",
                    },
                    TireDiameter: {
                      id: "Vehicle.Chassis.Axle.Row2.TireDiameter",
                      type: "attribute",
                    },
                    TireWidth: {
                      id: "Vehicle.Chassis.Axle.Row2.TireWidth",
                      type: "attribute",
                    },
                    TrackWidth: {
                      id: "Vehicle.Chassis.Axle.Row2.TrackWidth",
                      type: "attribute",
                    },
                    TreadWidth: {
                      id: "Vehicle.Chassis.Axle.Row2.TreadWidth",
                      type: "attribute",
                    },
                    Wheel: {
                      id: "Vehicle.Chassis.Axle.Row2.Wheel",
                      type: "branch",
                      children: {
                        Left: {
                          id: "Vehicle.Chassis.Axle.Row2.Wheel.Left",
                          type: "branch",
                          children: {
                            AngularSpeed: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.AngularSpeed",
                              type: "sensor",
                            },
                            Brake: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake",
                              type: "branch",
                              children: {
                                FluidLevel: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.FluidLevel",
                                  type: "sensor",
                                },
                                IsBrakesWorn: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.IsBrakesWorn",
                                  type: "sensor",
                                },
                                IsFluidLevelLow: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.IsFluidLevelLow",
                                  type: "sensor",
                                },
                                PadWear: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.PadWear",
                                  type: "sensor",
                                },
                              },
                            },
                            Speed: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Speed",
                              type: "sensor",
                            },
                            Tire: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire",
                              type: "branch",
                              children: {
                                IsPressureLow: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire.IsPressureLow",
                                  type: "sensor",
                                },
                                Pressure: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire.Pressure",
                                  type: "sensor",
                                },
                                Temperature: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire.Temperature",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                        Right: {
                          id: "Vehicle.Chassis.Axle.Row2.Wheel.Right",
                          type: "branch",
                          children: {
                            AngularSpeed: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.AngularSpeed",
                              type: "sensor",
                            },
                            Brake: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake",
                              type: "branch",
                              children: {
                                FluidLevel: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.FluidLevel",
                                  type: "sensor",
                                },
                                IsBrakesWorn: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.IsBrakesWorn",
                                  type: "sensor",
                                },
                                IsFluidLevelLow: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.IsFluidLevelLow",
                                  type: "sensor",
                                },
                                PadWear: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.PadWear",
                                  type: "sensor",
                                },
                              },
                            },
                            Speed: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Speed",
                              type: "sensor",
                            },
                            Tire: {
                              id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire",
                              type: "branch",
                              children: {
                                IsPressureLow: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire.IsPressureLow",
                                  type: "sensor",
                                },
                                Pressure: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire.Pressure",
                                  type: "sensor",
                                },
                                Temperature: {
                                  id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire.Temperature",
                                  type: "sensor",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    WheelCount: {
                      id: "Vehicle.Chassis.Axle.Row2.WheelCount",
                      type: "attribute",
                    },
                    WheelDiameter: {
                      id: "Vehicle.Chassis.Axle.Row2.WheelDiameter",
                      type: "attribute",
                    },
                    WheelWidth: {
                      id: "Vehicle.Chassis.Axle.Row2.WheelWidth",
                      type: "attribute",
                    },
                  },
                },
              },
            },
            AxleCount: {
              id: "Vehicle.Chassis.AxleCount",
              type: "attribute",
            },
            Brake: {
              id: "Vehicle.Chassis.Brake",
              type: "branch",
              children: {
                IsDriverEmergencyBrakingDetected: {
                  id: "Vehicle.Chassis.Brake.IsDriverEmergencyBrakingDetected",
                  type: "sensor",
                },
                PedalPosition: {
                  id: "Vehicle.Chassis.Brake.PedalPosition",
                  type: "sensor",
                },
              },
            },
            ParkingBrake: {
              id: "Vehicle.Chassis.ParkingBrake",
              type: "branch",
              children: {
                IsAutoApplyEnabled: {
                  id: "Vehicle.Chassis.ParkingBrake.IsAutoApplyEnabled",
                  type: "actuator",
                },
                IsEngaged: {
                  id: "Vehicle.Chassis.ParkingBrake.IsEngaged",
                  type: "actuator",
                },
              },
            },
            SteeringWheel: {
              id: "Vehicle.Chassis.SteeringWheel",
              type: "branch",
              children: {
                Angle: {
                  id: "Vehicle.Chassis.SteeringWheel.Angle",
                  type: "sensor",
                },
                Extension: {
                  id: "Vehicle.Chassis.SteeringWheel.Extension",
                  type: "actuator",
                },
                HeatingCooling: {
                  id: "Vehicle.Chassis.SteeringWheel.HeatingCooling",
                  type: "actuator",
                },
                Tilt: {
                  id: "Vehicle.Chassis.SteeringWheel.Tilt",
                  type: "actuator",
                },
              },
            },
            Wheelbase: {
              id: "Vehicle.Chassis.Wheelbase",
              type: "attribute",
            },
          },
        },
        Connectivity: {
          id: "Vehicle.Connectivity",
          type: "branch",
          children: {
            IsConnectivityAvailable: {
              id: "Vehicle.Connectivity.IsConnectivityAvailable",
              type: "sensor",
            },
          },
        },
        CurbWeight: {
          id: "Vehicle.CurbWeight",
          type: "attribute",
        },
        CurrentLocation: {
          id: "Vehicle.CurrentLocation",
          type: "branch",
          children: {
            Altitude: {
              id: "Vehicle.CurrentLocation.Altitude",
              type: "sensor",
            },
            GNSSReceiver: {
              id: "Vehicle.CurrentLocation.GNSSReceiver",
              type: "branch",
              children: {
                FixType: {
                  id: "Vehicle.CurrentLocation.GNSSReceiver.FixType",
                  type: "sensor",
                },
                MountingPosition: {
                  id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition",
                  type: "branch",
                  children: {
                    X: {
                      id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition.X",
                      type: "attribute",
                    },
                    Y: {
                      id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition.Y",
                      type: "attribute",
                    },
                    Z: {
                      id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition.Z",
                      type: "attribute",
                    },
                  },
                },
              },
            },
            Heading: {
              id: "Vehicle.CurrentLocation.Heading",
              type: "sensor",
            },
            HorizontalAccuracy: {
              id: "Vehicle.CurrentLocation.HorizontalAccuracy",
              type: "sensor",
            },
            Latitude: {
              id: "Vehicle.CurrentLocation.Latitude",
              type: "sensor",
            },
            Longitude: {
              id: "Vehicle.CurrentLocation.Longitude",
              type: "sensor",
            },
            Timestamp: {
              id: "Vehicle.CurrentLocation.Timestamp",
              type: "sensor",
            },
            VerticalAccuracy: {
              id: "Vehicle.CurrentLocation.VerticalAccuracy",
              type: "sensor",
            },
          },
        },
        CurrentOverallWeight: {
          id: "Vehicle.CurrentOverallWeight",
          type: "sensor",
        },
        Diagnostics: {
          id: "Vehicle.Diagnostics",
          type: "branch",
          children: {
            DTCCount: {
              id: "Vehicle.Diagnostics.DTCCount",
              type: "sensor",
            },
            DTCList: {
              id: "Vehicle.Diagnostics.DTCList",
              type: "sensor",
            },
          },
        },
        Driver: {
          id: "Vehicle.Driver",
          type: "branch",
          children: {
            AttentiveProbability: {
              id: "Vehicle.Driver.AttentiveProbability",
              type: "sensor",
            },
            DistractionLevel: {
              id: "Vehicle.Driver.DistractionLevel",
              type: "sensor",
            },
            FatigueLevel: {
              id: "Vehicle.Driver.FatigueLevel",
              type: "sensor",
            },
            HeartRate: {
              id: "Vehicle.Driver.HeartRate",
              type: "sensor",
            },
            Identifier: {
              id: "Vehicle.Driver.Identifier",
              type: "branch",
              children: {
                Issuer: {
                  id: "Vehicle.Driver.Identifier.Issuer",
                  type: "sensor",
                },
                Subject: {
                  id: "Vehicle.Driver.Identifier.Subject",
                  type: "sensor",
                },
              },
            },
            IsEyesOnRoad: {
              id: "Vehicle.Driver.IsEyesOnRoad",
              type: "sensor",
            },
            IsHandsOnWheel: {
              id: "Vehicle.Driver.IsHandsOnWheel",
              type: "sensor",
            },
          },
        },
        EmissionsCO2: {
          id: "Vehicle.EmissionsCO2",
          type: "attribute",
        },
        Exterior: {
          id: "Vehicle.Exterior",
          type: "branch",
          children: {
            AirTemperature: {
              id: "Vehicle.Exterior.AirTemperature",
              type: "sensor",
            },
            Humidity: {
              id: "Vehicle.Exterior.Humidity",
              type: "sensor",
            },
            LightIntensity: {
              id: "Vehicle.Exterior.LightIntensity",
              type: "sensor",
            },
          },
        },
        GrossWeight: {
          id: "Vehicle.GrossWeight",
          type: "attribute",
        },
        Height: {
          id: "Vehicle.Height",
          type: "attribute",
        },
        IsAutoPowerOptimize: {
          id: "Vehicle.IsAutoPowerOptimize",
          type: "actuator",
        },
        IsBrokenDown: {
          id: "Vehicle.IsBrokenDown",
          type: "sensor",
        },
        IsMoving: {
          id: "Vehicle.IsMoving",
          type: "sensor",
        },
        Length: {
          id: "Vehicle.Length",
          type: "attribute",
        },
        LowVoltageBattery: {
          id: "Vehicle.LowVoltageBattery",
          type: "branch",
          children: {
            CurrentCurrent: {
              id: "Vehicle.LowVoltageBattery.CurrentCurrent",
              type: "sensor",
            },
            CurrentVoltage: {
              id: "Vehicle.LowVoltageBattery.CurrentVoltage",
              type: "sensor",
            },
            NominalCapacity: {
              id: "Vehicle.LowVoltageBattery.NominalCapacity",
              type: "attribute",
            },
            NominalVoltage: {
              id: "Vehicle.LowVoltageBattery.NominalVoltage",
              type: "attribute",
            },
          },
        },
        LowVoltageSystemState: {
          id: "Vehicle.LowVoltageSystemState",
          type: "sensor",
        },
        MaxTowBallWeight: {
          id: "Vehicle.MaxTowBallWeight",
          type: "attribute",
        },
        MaxTowWeight: {
          id: "Vehicle.MaxTowWeight",
          type: "attribute",
        },
        MotionManagement: {
          id: "Vehicle.MotionManagement",
          type: "branch",
          children: {
            Brake: {
              id: "Vehicle.MotionManagement.Brake",
              type: "branch",
              children: {
                Axle: {
                  id: "Vehicle.MotionManagement.Brake.Axle",
                  type: "branch",
                  children: {
                    Row1: {
                      id: "Vehicle.MotionManagement.Brake.Axle.Row1",
                      type: "branch",
                      children: {
                        TorqueDistributionFrictionRightMaximum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueDistributionFrictionRightMaximum",
                          type: "actuator",
                        },
                        TorqueDistributionFrictionRightMinimum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueDistributionFrictionRightMinimum",
                          type: "actuator",
                        },
                        TorqueElectricMinimum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueElectricMinimum",
                          type: "actuator",
                        },
                        TorqueFrictionDifferenceMaximum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueFrictionDifferenceMaximum",
                          type: "actuator",
                        },
                        Wheel: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel",
                          type: "branch",
                          children: {
                            Left: {
                              id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left",
                              type: "branch",
                              children: {
                                OmegaLower: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.OmegaLower",
                                  type: "actuator",
                                },
                                OmegaUpper: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.OmegaUpper",
                                  type: "actuator",
                                },
                                Torque: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.Torque",
                                  type: "sensor",
                                },
                                TorqueArbitrated: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.TorqueArbitrated",
                                  type: "sensor",
                                },
                                TorqueFrictionMaximum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.TorqueFrictionMaximum",
                                  type: "actuator",
                                },
                                TorqueFrictionMinimum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.TorqueFrictionMinimum",
                                  type: "actuator",
                                },
                              },
                            },
                            Right: {
                              id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right",
                              type: "branch",
                              children: {
                                OmegaLower: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.OmegaLower",
                                  type: "actuator",
                                },
                                OmegaUpper: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.OmegaUpper",
                                  type: "actuator",
                                },
                                Torque: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.Torque",
                                  type: "sensor",
                                },
                                TorqueArbitrated: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.TorqueArbitrated",
                                  type: "sensor",
                                },
                                TorqueFrictionMaximum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.TorqueFrictionMaximum",
                                  type: "actuator",
                                },
                                TorqueFrictionMinimum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.TorqueFrictionMinimum",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    Row2: {
                      id: "Vehicle.MotionManagement.Brake.Axle.Row2",
                      type: "branch",
                      children: {
                        TorqueDistributionFrictionRightMaximum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueDistributionFrictionRightMaximum",
                          type: "actuator",
                        },
                        TorqueDistributionFrictionRightMinimum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueDistributionFrictionRightMinimum",
                          type: "actuator",
                        },
                        TorqueElectricMinimum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueElectricMinimum",
                          type: "actuator",
                        },
                        TorqueFrictionDifferenceMaximum: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueFrictionDifferenceMaximum",
                          type: "actuator",
                        },
                        Wheel: {
                          id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel",
                          type: "branch",
                          children: {
                            Left: {
                              id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left",
                              type: "branch",
                              children: {
                                OmegaLower: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.OmegaLower",
                                  type: "actuator",
                                },
                                OmegaUpper: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.OmegaUpper",
                                  type: "actuator",
                                },
                                Torque: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.Torque",
                                  type: "sensor",
                                },
                                TorqueArbitrated: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.TorqueArbitrated",
                                  type: "sensor",
                                },
                                TorqueFrictionMaximum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.TorqueFrictionMaximum",
                                  type: "actuator",
                                },
                                TorqueFrictionMinimum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.TorqueFrictionMinimum",
                                  type: "actuator",
                                },
                              },
                            },
                            Right: {
                              id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right",
                              type: "branch",
                              children: {
                                OmegaLower: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.OmegaLower",
                                  type: "actuator",
                                },
                                OmegaUpper: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.OmegaUpper",
                                  type: "actuator",
                                },
                                Torque: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.Torque",
                                  type: "sensor",
                                },
                                TorqueArbitrated: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.TorqueArbitrated",
                                  type: "sensor",
                                },
                                TorqueFrictionMaximum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.TorqueFrictionMaximum",
                                  type: "actuator",
                                },
                                TorqueFrictionMinimum: {
                                  id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.TorqueFrictionMinimum",
                                  type: "actuator",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                VehicleForceDistributionFrontMaximum: {
                  id: "Vehicle.MotionManagement.Brake.VehicleForceDistributionFrontMaximum",
                  type: "actuator",
                },
                VehicleForceDistributionFrontMinimum: {
                  id: "Vehicle.MotionManagement.Brake.VehicleForceDistributionFrontMinimum",
                  type: "actuator",
                },
                VehicleForceElectric: {
                  id: "Vehicle.MotionManagement.Brake.VehicleForceElectric",
                  type: "actuator",
                },
                VehicleForceElectricMinimumArbitrated: {
                  id: "Vehicle.MotionManagement.Brake.VehicleForceElectricMinimumArbitrated",
                  type: "sensor",
                },
                VehicleForceMaximum: {
                  id: "Vehicle.MotionManagement.Brake.VehicleForceMaximum",
                  type: "actuator",
                },
              },
            },
            ElectricAxle: {
              id: "Vehicle.MotionManagement.ElectricAxle",
              type: "branch",
              children: {
                Row1: {
                  id: "Vehicle.MotionManagement.ElectricAxle.Row1",
                  type: "branch",
                  children: {
                    RotationalSpeed: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeed",
                      type: "sensor",
                    },
                    RotationalSpeedMaximumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeedMaximumLimit",
                      type: "actuator",
                    },
                    RotationalSpeedMinimumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeedMinimumLimit",
                      type: "actuator",
                    },
                    RotationalSpeedTarget: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeedTarget",
                      type: "actuator",
                    },
                    Torque: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.Torque",
                      type: "sensor",
                    },
                    TorqueLongTermMaximum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueLongTermMaximum",
                      type: "sensor",
                    },
                    TorqueLongTermMinimum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueLongTermMinimum",
                      type: "sensor",
                    },
                    TorqueMaximum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMaximum",
                      type: "sensor",
                    },
                    TorqueMaximumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMaximumLimit",
                      type: "actuator",
                    },
                    TorqueMinimum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMinimum",
                      type: "sensor",
                    },
                    TorqueMinimumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMinimumLimit",
                      type: "actuator",
                    },
                    TorqueShortTermMaximum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueShortTermMaximum",
                      type: "sensor",
                    },
                    TorqueShortTermMinimum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueShortTermMinimum",
                      type: "sensor",
                    },
                    TorqueTarget: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueTarget",
                      type: "actuator",
                    },
                  },
                },
                Row2: {
                  id: "Vehicle.MotionManagement.ElectricAxle.Row2",
                  type: "branch",
                  children: {
                    RotationalSpeed: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeed",
                      type: "sensor",
                    },
                    RotationalSpeedMaximumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeedMaximumLimit",
                      type: "actuator",
                    },
                    RotationalSpeedMinimumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeedMinimumLimit",
                      type: "actuator",
                    },
                    RotationalSpeedTarget: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeedTarget",
                      type: "actuator",
                    },
                    Torque: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.Torque",
                      type: "sensor",
                    },
                    TorqueLongTermMaximum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueLongTermMaximum",
                      type: "sensor",
                    },
                    TorqueLongTermMinimum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueLongTermMinimum",
                      type: "sensor",
                    },
                    TorqueMaximum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMaximum",
                      type: "sensor",
                    },
                    TorqueMaximumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMaximumLimit",
                      type: "actuator",
                    },
                    TorqueMinimum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMinimum",
                      type: "sensor",
                    },
                    TorqueMinimumLimit: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMinimumLimit",
                      type: "actuator",
                    },
                    TorqueShortTermMaximum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueShortTermMaximum",
                      type: "sensor",
                    },
                    TorqueShortTermMinimum: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueShortTermMinimum",
                      type: "sensor",
                    },
                    TorqueTarget: {
                      id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueTarget",
                      type: "actuator",
                    },
                  },
                },
              },
            },
            Steering: {
              id: "Vehicle.MotionManagement.Steering",
              type: "branch",
              children: {
                Axle: {
                  id: "Vehicle.MotionManagement.Steering.Axle",
                  type: "branch",
                  children: {
                    Row1: {
                      id: "Vehicle.MotionManagement.Steering.Axle.Row1",
                      type: "branch",
                      children: {
                        RackPosition: {
                          id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPosition",
                          type: "sensor",
                        },
                        RackPositionOffsetTarget: {
                          id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionOffsetTarget",
                          type: "actuator",
                        },
                        RackPositionOffsetTargetMode: {
                          id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionOffsetTargetMode",
                          type: "actuator",
                        },
                        RackPositionTarget: {
                          id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionTarget",
                          type: "actuator",
                        },
                        RackPositionTargetMode: {
                          id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionTargetMode",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
                SteeringWheel: {
                  id: "Vehicle.MotionManagement.Steering.SteeringWheel",
                  type: "branch",
                  children: {
                    Angle: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.Angle",
                      type: "sensor",
                    },
                    AngleTarget: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.AngleTarget",
                      type: "actuator",
                    },
                    AngleTargetMode: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.AngleTargetMode",
                      type: "actuator",
                    },
                    Torque: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.Torque",
                      type: "sensor",
                    },
                    TorqueOffsetTarget: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueOffsetTarget",
                      type: "actuator",
                    },
                    TorqueOffsetTargetMode: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueOffsetTargetMode",
                      type: "actuator",
                    },
                    TorqueTarget: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueTarget",
                      type: "actuator",
                    },
                    TorqueTargetMode: {
                      id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueTargetMode",
                      type: "actuator",
                    },
                  },
                },
              },
            },
          },
        },
        OBD: {
          id: "Vehicle.OBD",
          type: "branch",
          children: {
            AbsoluteLoad: {
              id: "Vehicle.OBD.AbsoluteLoad",
              type: "sensor",
            },
            AcceleratorPositionD: {
              id: "Vehicle.OBD.AcceleratorPositionD",
              type: "sensor",
            },
            AcceleratorPositionE: {
              id: "Vehicle.OBD.AcceleratorPositionE",
              type: "sensor",
            },
            AcceleratorPositionF: {
              id: "Vehicle.OBD.AcceleratorPositionF",
              type: "sensor",
            },
            AirStatus: {
              id: "Vehicle.OBD.AirStatus",
              type: "sensor",
            },
            AmbientAirTemperature: {
              id: "Vehicle.OBD.AmbientAirTemperature",
              type: "sensor",
            },
            BarometricPressure: {
              id: "Vehicle.OBD.BarometricPressure",
              type: "sensor",
            },
            Catalyst: {
              id: "Vehicle.OBD.Catalyst",
              type: "branch",
              children: {
                Bank1: {
                  id: "Vehicle.OBD.Catalyst.Bank1",
                  type: "branch",
                  children: {
                    Temperature1: {
                      id: "Vehicle.OBD.Catalyst.Bank1.Temperature1",
                      type: "sensor",
                    },
                    Temperature2: {
                      id: "Vehicle.OBD.Catalyst.Bank1.Temperature2",
                      type: "sensor",
                    },
                  },
                },
                Bank2: {
                  id: "Vehicle.OBD.Catalyst.Bank2",
                  type: "branch",
                  children: {
                    Temperature1: {
                      id: "Vehicle.OBD.Catalyst.Bank2.Temperature1",
                      type: "sensor",
                    },
                    Temperature2: {
                      id: "Vehicle.OBD.Catalyst.Bank2.Temperature2",
                      type: "sensor",
                    },
                  },
                },
              },
            },
            CommandedEGR: {
              id: "Vehicle.OBD.CommandedEGR",
              type: "sensor",
            },
            CommandedEVAP: {
              id: "Vehicle.OBD.CommandedEVAP",
              type: "sensor",
            },
            CommandedEquivalenceRatio: {
              id: "Vehicle.OBD.CommandedEquivalenceRatio",
              type: "sensor",
            },
            ControlModuleVoltage: {
              id: "Vehicle.OBD.ControlModuleVoltage",
              type: "sensor",
            },
            CoolantTemperature: {
              id: "Vehicle.OBD.CoolantTemperature",
              type: "sensor",
            },
            DTCList: {
              id: "Vehicle.OBD.DTCList",
              type: "sensor",
            },
            DistanceSinceDTCClear: {
              id: "Vehicle.OBD.DistanceSinceDTCClear",
              type: "sensor",
            },
            DistanceWithMIL: {
              id: "Vehicle.OBD.DistanceWithMIL",
              type: "sensor",
            },
            DriveCycleStatus: {
              id: "Vehicle.OBD.DriveCycleStatus",
              type: "branch",
              children: {
                DTCCount: {
                  id: "Vehicle.OBD.DriveCycleStatus.DTCCount",
                  type: "sensor",
                },
                IgnitionType: {
                  id: "Vehicle.OBD.DriveCycleStatus.IgnitionType",
                  type: "sensor",
                },
                IsMILOn: {
                  id: "Vehicle.OBD.DriveCycleStatus.IsMILOn",
                  type: "sensor",
                },
              },
            },
            EGRError: {
              id: "Vehicle.OBD.EGRError",
              type: "sensor",
            },
            EVAPVaporPressure: {
              id: "Vehicle.OBD.EVAPVaporPressure",
              type: "sensor",
            },
            EVAPVaporPressureAbsolute: {
              id: "Vehicle.OBD.EVAPVaporPressureAbsolute",
              type: "sensor",
            },
            EVAPVaporPressureAlternate: {
              id: "Vehicle.OBD.EVAPVaporPressureAlternate",
              type: "sensor",
            },
            EngineLoad: {
              id: "Vehicle.OBD.EngineLoad",
              type: "sensor",
            },
            EngineSpeed: {
              id: "Vehicle.OBD.EngineSpeed",
              type: "sensor",
            },
            EthanolPercent: {
              id: "Vehicle.OBD.EthanolPercent",
              type: "sensor",
            },
            FreezeDTC: {
              id: "Vehicle.OBD.FreezeDTC",
              type: "sensor",
            },
            FuelInjectionTiming: {
              id: "Vehicle.OBD.FuelInjectionTiming",
              type: "sensor",
            },
            FuelLevel: {
              id: "Vehicle.OBD.FuelLevel",
              type: "sensor",
            },
            FuelPressure: {
              id: "Vehicle.OBD.FuelPressure",
              type: "sensor",
            },
            FuelRailPressureAbsolute: {
              id: "Vehicle.OBD.FuelRailPressureAbsolute",
              type: "sensor",
            },
            FuelRailPressureDirect: {
              id: "Vehicle.OBD.FuelRailPressureDirect",
              type: "sensor",
            },
            FuelRailPressureVac: {
              id: "Vehicle.OBD.FuelRailPressureVac",
              type: "sensor",
            },
            FuelRate: {
              id: "Vehicle.OBD.FuelRate",
              type: "sensor",
            },
            FuelStatus: {
              id: "Vehicle.OBD.FuelStatus",
              type: "sensor",
            },
            FuelType: {
              id: "Vehicle.OBD.FuelType",
              type: "attribute",
            },
            HybridBatteryRemaining: {
              id: "Vehicle.OBD.HybridBatteryRemaining",
              type: "sensor",
            },
            IntakeTemp: {
              id: "Vehicle.OBD.IntakeTemp",
              type: "sensor",
            },
            IsPTOActive: {
              id: "Vehicle.OBD.IsPTOActive",
              type: "sensor",
            },
            LongTermFuelTrim1: {
              id: "Vehicle.OBD.LongTermFuelTrim1",
              type: "sensor",
            },
            LongTermFuelTrim2: {
              id: "Vehicle.OBD.LongTermFuelTrim2",
              type: "sensor",
            },
            LongTermO2Trim1: {
              id: "Vehicle.OBD.LongTermO2Trim1",
              type: "sensor",
            },
            LongTermO2Trim2: {
              id: "Vehicle.OBD.LongTermO2Trim2",
              type: "sensor",
            },
            LongTermO2Trim3: {
              id: "Vehicle.OBD.LongTermO2Trim3",
              type: "sensor",
            },
            LongTermO2Trim4: {
              id: "Vehicle.OBD.LongTermO2Trim4",
              type: "sensor",
            },
            MAF: {
              id: "Vehicle.OBD.MAF",
              type: "sensor",
            },
            MAP: {
              id: "Vehicle.OBD.MAP",
              type: "sensor",
            },
            MaxMAF: {
              id: "Vehicle.OBD.MaxMAF",
              type: "sensor",
            },
            O2: {
              id: "Vehicle.OBD.O2",
              type: "branch",
              children: {
                Sensor1: {
                  id: "Vehicle.OBD.O2.Sensor1",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor1.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor1.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor2: {
                  id: "Vehicle.OBD.O2.Sensor2",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor2.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor2.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor3: {
                  id: "Vehicle.OBD.O2.Sensor3",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor3.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor3.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor4: {
                  id: "Vehicle.OBD.O2.Sensor4",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor4.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor4.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor5: {
                  id: "Vehicle.OBD.O2.Sensor5",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor5.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor5.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor6: {
                  id: "Vehicle.OBD.O2.Sensor6",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor6.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor6.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor7: {
                  id: "Vehicle.OBD.O2.Sensor7",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor7.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor7.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor8: {
                  id: "Vehicle.OBD.O2.Sensor8",
                  type: "branch",
                  children: {
                    ShortTermFuelTrim: {
                      id: "Vehicle.OBD.O2.Sensor8.ShortTermFuelTrim",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2.Sensor8.Voltage",
                      type: "sensor",
                    },
                  },
                },
              },
            },
            O2WR: {
              id: "Vehicle.OBD.O2WR",
              type: "branch",
              children: {
                Sensor1: {
                  id: "Vehicle.OBD.O2WR.Sensor1",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor1.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor1.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor1.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor2: {
                  id: "Vehicle.OBD.O2WR.Sensor2",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor2.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor2.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor2.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor3: {
                  id: "Vehicle.OBD.O2WR.Sensor3",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor3.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor3.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor3.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor4: {
                  id: "Vehicle.OBD.O2WR.Sensor4",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor4.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor4.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor4.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor5: {
                  id: "Vehicle.OBD.O2WR.Sensor5",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor5.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor5.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor5.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor6: {
                  id: "Vehicle.OBD.O2WR.Sensor6",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor6.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor6.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor6.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor7: {
                  id: "Vehicle.OBD.O2WR.Sensor7",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor7.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor7.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor7.Voltage",
                      type: "sensor",
                    },
                  },
                },
                Sensor8: {
                  id: "Vehicle.OBD.O2WR.Sensor8",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.OBD.O2WR.Sensor8.Current",
                      type: "sensor",
                    },
                    Lambda: {
                      id: "Vehicle.OBD.O2WR.Sensor8.Lambda",
                      type: "sensor",
                    },
                    Voltage: {
                      id: "Vehicle.OBD.O2WR.Sensor8.Voltage",
                      type: "sensor",
                    },
                  },
                },
              },
            },
            OBDStandards: {
              id: "Vehicle.OBD.OBDStandards",
              type: "attribute",
            },
            OilTemperature: {
              id: "Vehicle.OBD.OilTemperature",
              type: "sensor",
            },
            OxygenSensorsIn2Banks: {
              id: "Vehicle.OBD.OxygenSensorsIn2Banks",
              type: "sensor",
            },
            OxygenSensorsIn4Banks: {
              id: "Vehicle.OBD.OxygenSensorsIn4Banks",
              type: "sensor",
            },
            PidsA: {
              id: "Vehicle.OBD.PidsA",
              type: "attribute",
            },
            PidsB: {
              id: "Vehicle.OBD.PidsB",
              type: "attribute",
            },
            PidsC: {
              id: "Vehicle.OBD.PidsC",
              type: "attribute",
            },
            RelativeAcceleratorPosition: {
              id: "Vehicle.OBD.RelativeAcceleratorPosition",
              type: "sensor",
            },
            RelativeThrottlePosition: {
              id: "Vehicle.OBD.RelativeThrottlePosition",
              type: "sensor",
            },
            RunTime: {
              id: "Vehicle.OBD.RunTime",
              type: "sensor",
            },
            RunTimeMIL: {
              id: "Vehicle.OBD.RunTimeMIL",
              type: "sensor",
            },
            ShortTermFuelTrim1: {
              id: "Vehicle.OBD.ShortTermFuelTrim1",
              type: "sensor",
            },
            ShortTermFuelTrim2: {
              id: "Vehicle.OBD.ShortTermFuelTrim2",
              type: "sensor",
            },
            ShortTermO2Trim1: {
              id: "Vehicle.OBD.ShortTermO2Trim1",
              type: "sensor",
            },
            ShortTermO2Trim2: {
              id: "Vehicle.OBD.ShortTermO2Trim2",
              type: "sensor",
            },
            ShortTermO2Trim3: {
              id: "Vehicle.OBD.ShortTermO2Trim3",
              type: "sensor",
            },
            ShortTermO2Trim4: {
              id: "Vehicle.OBD.ShortTermO2Trim4",
              type: "sensor",
            },
            Speed: {
              id: "Vehicle.OBD.Speed",
              type: "sensor",
            },
            Status: {
              id: "Vehicle.OBD.Status",
              type: "branch",
              children: {
                DTCCount: {
                  id: "Vehicle.OBD.Status.DTCCount",
                  type: "sensor",
                },
                IgnitionType: {
                  id: "Vehicle.OBD.Status.IgnitionType",
                  type: "attribute",
                },
                IsMILOn: {
                  id: "Vehicle.OBD.Status.IsMILOn",
                  type: "sensor",
                },
              },
            },
            ThrottleActuator: {
              id: "Vehicle.OBD.ThrottleActuator",
              type: "sensor",
            },
            ThrottlePosition: {
              id: "Vehicle.OBD.ThrottlePosition",
              type: "sensor",
            },
            ThrottlePositionB: {
              id: "Vehicle.OBD.ThrottlePositionB",
              type: "sensor",
            },
            ThrottlePositionC: {
              id: "Vehicle.OBD.ThrottlePositionC",
              type: "sensor",
            },
            TimeSinceDTCCleared: {
              id: "Vehicle.OBD.TimeSinceDTCCleared",
              type: "sensor",
            },
            TimingAdvance: {
              id: "Vehicle.OBD.TimingAdvance",
              type: "sensor",
            },
            WarmupsSinceDTCClear: {
              id: "Vehicle.OBD.WarmupsSinceDTCClear",
              type: "sensor",
            },
          },
        },
        Occupant: {
          id: "Vehicle.Occupant",
          type: "branch",
          children: {
            Row1: {
              id: "Vehicle.Occupant.Row1",
              type: "branch",
              children: {
                DriverSide: {
                  id: "Vehicle.Occupant.Row1.DriverSide",
                  type: "branch",
                  children: {
                    HeadPosition: {
                      id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition",
                      type: "branch",
                      children: {
                        Pitch: {
                          id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Pitch",
                          type: "sensor",
                        },
                        Roll: {
                          id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Roll",
                          type: "sensor",
                        },
                        X: {
                          id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.X",
                          type: "sensor",
                        },
                        Y: {
                          id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Y",
                          type: "sensor",
                        },
                        Yaw: {
                          id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Yaw",
                          type: "sensor",
                        },
                        Z: {
                          id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Z",
                          type: "sensor",
                        },
                      },
                    },
                    Identifier: {
                      id: "Vehicle.Occupant.Row1.DriverSide.Identifier",
                      type: "branch",
                      children: {
                        Issuer: {
                          id: "Vehicle.Occupant.Row1.DriverSide.Identifier.Issuer",
                          type: "sensor",
                        },
                        Subject: {
                          id: "Vehicle.Occupant.Row1.DriverSide.Identifier.Subject",
                          type: "sensor",
                        },
                      },
                    },
                    MidEyeGaze: {
                      id: "Vehicle.Occupant.Row1.DriverSide.MidEyeGaze",
                      type: "branch",
                      children: {
                        Azimuth: {
                          id: "Vehicle.Occupant.Row1.DriverSide.MidEyeGaze.Azimuth",
                          type: "sensor",
                        },
                        Elevation: {
                          id: "Vehicle.Occupant.Row1.DriverSide.MidEyeGaze.Elevation",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
                Middle: {
                  id: "Vehicle.Occupant.Row1.Middle",
                  type: "branch",
                  children: {
                    HeadPosition: {
                      id: "Vehicle.Occupant.Row1.Middle.HeadPosition",
                      type: "branch",
                      children: {
                        Pitch: {
                          id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Pitch",
                          type: "sensor",
                        },
                        Roll: {
                          id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Roll",
                          type: "sensor",
                        },
                        X: {
                          id: "Vehicle.Occupant.Row1.Middle.HeadPosition.X",
                          type: "sensor",
                        },
                        Y: {
                          id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Y",
                          type: "sensor",
                        },
                        Yaw: {
                          id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Yaw",
                          type: "sensor",
                        },
                        Z: {
                          id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Z",
                          type: "sensor",
                        },
                      },
                    },
                    Identifier: {
                      id: "Vehicle.Occupant.Row1.Middle.Identifier",
                      type: "branch",
                      children: {
                        Issuer: {
                          id: "Vehicle.Occupant.Row1.Middle.Identifier.Issuer",
                          type: "sensor",
                        },
                        Subject: {
                          id: "Vehicle.Occupant.Row1.Middle.Identifier.Subject",
                          type: "sensor",
                        },
                      },
                    },
                    MidEyeGaze: {
                      id: "Vehicle.Occupant.Row1.Middle.MidEyeGaze",
                      type: "branch",
                      children: {
                        Azimuth: {
                          id: "Vehicle.Occupant.Row1.Middle.MidEyeGaze.Azimuth",
                          type: "sensor",
                        },
                        Elevation: {
                          id: "Vehicle.Occupant.Row1.Middle.MidEyeGaze.Elevation",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
                PassengerSide: {
                  id: "Vehicle.Occupant.Row1.PassengerSide",
                  type: "branch",
                  children: {
                    HeadPosition: {
                      id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition",
                      type: "branch",
                      children: {
                        Pitch: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Pitch",
                          type: "sensor",
                        },
                        Roll: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Roll",
                          type: "sensor",
                        },
                        X: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.X",
                          type: "sensor",
                        },
                        Y: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Y",
                          type: "sensor",
                        },
                        Yaw: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Yaw",
                          type: "sensor",
                        },
                        Z: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Z",
                          type: "sensor",
                        },
                      },
                    },
                    Identifier: {
                      id: "Vehicle.Occupant.Row1.PassengerSide.Identifier",
                      type: "branch",
                      children: {
                        Issuer: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.Identifier.Issuer",
                          type: "sensor",
                        },
                        Subject: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.Identifier.Subject",
                          type: "sensor",
                        },
                      },
                    },
                    MidEyeGaze: {
                      id: "Vehicle.Occupant.Row1.PassengerSide.MidEyeGaze",
                      type: "branch",
                      children: {
                        Azimuth: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.MidEyeGaze.Azimuth",
                          type: "sensor",
                        },
                        Elevation: {
                          id: "Vehicle.Occupant.Row1.PassengerSide.MidEyeGaze.Elevation",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
              },
            },
            Row2: {
              id: "Vehicle.Occupant.Row2",
              type: "branch",
              children: {
                DriverSide: {
                  id: "Vehicle.Occupant.Row2.DriverSide",
                  type: "branch",
                  children: {
                    HeadPosition: {
                      id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition",
                      type: "branch",
                      children: {
                        Pitch: {
                          id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Pitch",
                          type: "sensor",
                        },
                        Roll: {
                          id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Roll",
                          type: "sensor",
                        },
                        X: {
                          id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.X",
                          type: "sensor",
                        },
                        Y: {
                          id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Y",
                          type: "sensor",
                        },
                        Yaw: {
                          id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Yaw",
                          type: "sensor",
                        },
                        Z: {
                          id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Z",
                          type: "sensor",
                        },
                      },
                    },
                    Identifier: {
                      id: "Vehicle.Occupant.Row2.DriverSide.Identifier",
                      type: "branch",
                      children: {
                        Issuer: {
                          id: "Vehicle.Occupant.Row2.DriverSide.Identifier.Issuer",
                          type: "sensor",
                        },
                        Subject: {
                          id: "Vehicle.Occupant.Row2.DriverSide.Identifier.Subject",
                          type: "sensor",
                        },
                      },
                    },
                    MidEyeGaze: {
                      id: "Vehicle.Occupant.Row2.DriverSide.MidEyeGaze",
                      type: "branch",
                      children: {
                        Azimuth: {
                          id: "Vehicle.Occupant.Row2.DriverSide.MidEyeGaze.Azimuth",
                          type: "sensor",
                        },
                        Elevation: {
                          id: "Vehicle.Occupant.Row2.DriverSide.MidEyeGaze.Elevation",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
                Middle: {
                  id: "Vehicle.Occupant.Row2.Middle",
                  type: "branch",
                  children: {
                    HeadPosition: {
                      id: "Vehicle.Occupant.Row2.Middle.HeadPosition",
                      type: "branch",
                      children: {
                        Pitch: {
                          id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Pitch",
                          type: "sensor",
                        },
                        Roll: {
                          id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Roll",
                          type: "sensor",
                        },
                        X: {
                          id: "Vehicle.Occupant.Row2.Middle.HeadPosition.X",
                          type: "sensor",
                        },
                        Y: {
                          id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Y",
                          type: "sensor",
                        },
                        Yaw: {
                          id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Yaw",
                          type: "sensor",
                        },
                        Z: {
                          id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Z",
                          type: "sensor",
                        },
                      },
                    },
                    Identifier: {
                      id: "Vehicle.Occupant.Row2.Middle.Identifier",
                      type: "branch",
                      children: {
                        Issuer: {
                          id: "Vehicle.Occupant.Row2.Middle.Identifier.Issuer",
                          type: "sensor",
                        },
                        Subject: {
                          id: "Vehicle.Occupant.Row2.Middle.Identifier.Subject",
                          type: "sensor",
                        },
                      },
                    },
                    MidEyeGaze: {
                      id: "Vehicle.Occupant.Row2.Middle.MidEyeGaze",
                      type: "branch",
                      children: {
                        Azimuth: {
                          id: "Vehicle.Occupant.Row2.Middle.MidEyeGaze.Azimuth",
                          type: "sensor",
                        },
                        Elevation: {
                          id: "Vehicle.Occupant.Row2.Middle.MidEyeGaze.Elevation",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
                PassengerSide: {
                  id: "Vehicle.Occupant.Row2.PassengerSide",
                  type: "branch",
                  children: {
                    HeadPosition: {
                      id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition",
                      type: "branch",
                      children: {
                        Pitch: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Pitch",
                          type: "sensor",
                        },
                        Roll: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Roll",
                          type: "sensor",
                        },
                        X: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.X",
                          type: "sensor",
                        },
                        Y: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Y",
                          type: "sensor",
                        },
                        Yaw: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Yaw",
                          type: "sensor",
                        },
                        Z: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Z",
                          type: "sensor",
                        },
                      },
                    },
                    Identifier: {
                      id: "Vehicle.Occupant.Row2.PassengerSide.Identifier",
                      type: "branch",
                      children: {
                        Issuer: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.Identifier.Issuer",
                          type: "sensor",
                        },
                        Subject: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.Identifier.Subject",
                          type: "sensor",
                        },
                      },
                    },
                    MidEyeGaze: {
                      id: "Vehicle.Occupant.Row2.PassengerSide.MidEyeGaze",
                      type: "branch",
                      children: {
                        Azimuth: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.MidEyeGaze.Azimuth",
                          type: "sensor",
                        },
                        Elevation: {
                          id: "Vehicle.Occupant.Row2.PassengerSide.MidEyeGaze.Elevation",
                          type: "sensor",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        PowerOptimizeLevel: {
          id: "Vehicle.PowerOptimizeLevel",
          type: "actuator",
        },
        Powertrain: {
          id: "Vehicle.Powertrain",
          type: "branch",
          children: {
            AccumulatedBrakingEnergy: {
              id: "Vehicle.Powertrain.AccumulatedBrakingEnergy",
              type: "sensor",
            },
            CombustionEngine: {
              id: "Vehicle.Powertrain.CombustionEngine",
              type: "branch",
              children: {
                AspirationType: {
                  id: "Vehicle.Powertrain.CombustionEngine.AspirationType",
                  type: "attribute",
                },
                Bore: {
                  id: "Vehicle.Powertrain.CombustionEngine.Bore",
                  type: "attribute",
                },
                CompressionRatio: {
                  id: "Vehicle.Powertrain.CombustionEngine.CompressionRatio",
                  type: "attribute",
                },
                Configuration: {
                  id: "Vehicle.Powertrain.CombustionEngine.Configuration",
                  type: "attribute",
                },
                DieselExhaustFluid: {
                  id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid",
                  type: "branch",
                  children: {
                    Capacity: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.Capacity",
                      type: "attribute",
                    },
                    IsLevelLow: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.IsLevelLow",
                      type: "sensor",
                    },
                    Level: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.Level",
                      type: "sensor",
                    },
                    Range: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.Range",
                      type: "sensor",
                    },
                  },
                },
                DieselParticulateFilter: {
                  id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter",
                  type: "branch",
                  children: {
                    DeltaPressure: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter.DeltaPressure",
                      type: "sensor",
                    },
                    InletTemperature: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter.InletTemperature",
                      type: "sensor",
                    },
                    OutletTemperature: {
                      id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter.OutletTemperature",
                      type: "sensor",
                    },
                  },
                },
                Displacement: {
                  id: "Vehicle.Powertrain.CombustionEngine.Displacement",
                  type: "attribute",
                },
                ECT: {
                  id: "Vehicle.Powertrain.CombustionEngine.ECT",
                  type: "sensor",
                },
                EOP: {
                  id: "Vehicle.Powertrain.CombustionEngine.EOP",
                  type: "sensor",
                },
                EOT: {
                  id: "Vehicle.Powertrain.CombustionEngine.EOT",
                  type: "sensor",
                },
                EngineCode: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineCode",
                  type: "attribute",
                },
                EngineCoolant: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant",
                  type: "branch",
                  children: {
                    Capacity: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.Capacity",
                      type: "attribute",
                    },
                    Level: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.Level",
                      type: "sensor",
                    },
                    LifeRemaining: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.LifeRemaining",
                      type: "sensor",
                    },
                    Temperature: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.Temperature",
                      type: "sensor",
                    },
                  },
                },
                EngineCoolantCapacity: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineCoolantCapacity",
                  type: "attribute",
                },
                EngineHours: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineHours",
                  type: "sensor",
                },
                EngineOil: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineOil",
                  type: "branch",
                  children: {
                    Capacity: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineOil.Capacity",
                      type: "attribute",
                    },
                    Level: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineOil.Level",
                      type: "sensor",
                    },
                    LifeRemaining: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineOil.LifeRemaining",
                      type: "sensor",
                    },
                    Temperature: {
                      id: "Vehicle.Powertrain.CombustionEngine.EngineOil.Temperature",
                      type: "sensor",
                    },
                  },
                },
                EngineOilCapacity: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineOilCapacity",
                  type: "attribute",
                },
                EngineOilLevel: {
                  id: "Vehicle.Powertrain.CombustionEngine.EngineOilLevel",
                  type: "sensor",
                },
                IdleHours: {
                  id: "Vehicle.Powertrain.CombustionEngine.IdleHours",
                  type: "sensor",
                },
                IsRunning: {
                  id: "Vehicle.Powertrain.CombustionEngine.IsRunning",
                  type: "sensor",
                },
                MAF: {
                  id: "Vehicle.Powertrain.CombustionEngine.MAF",
                  type: "sensor",
                },
                MAP: {
                  id: "Vehicle.Powertrain.CombustionEngine.MAP",
                  type: "sensor",
                },
                MaxPower: {
                  id: "Vehicle.Powertrain.CombustionEngine.MaxPower",
                  type: "attribute",
                },
                MaxTorque: {
                  id: "Vehicle.Powertrain.CombustionEngine.MaxTorque",
                  type: "attribute",
                },
                NumberOfCylinders: {
                  id: "Vehicle.Powertrain.CombustionEngine.NumberOfCylinders",
                  type: "attribute",
                },
                NumberOfValvesPerCylinder: {
                  id: "Vehicle.Powertrain.CombustionEngine.NumberOfValvesPerCylinder",
                  type: "attribute",
                },
                OilLifeRemaining: {
                  id: "Vehicle.Powertrain.CombustionEngine.OilLifeRemaining",
                  type: "sensor",
                },
                Power: {
                  id: "Vehicle.Powertrain.CombustionEngine.Power",
                  type: "sensor",
                },
                Speed: {
                  id: "Vehicle.Powertrain.CombustionEngine.Speed",
                  type: "sensor",
                },
                StrokeLength: {
                  id: "Vehicle.Powertrain.CombustionEngine.StrokeLength",
                  type: "attribute",
                },
                TPS: {
                  id: "Vehicle.Powertrain.CombustionEngine.TPS",
                  type: "sensor",
                },
                Torque: {
                  id: "Vehicle.Powertrain.CombustionEngine.Torque",
                  type: "sensor",
                },
              },
            },
            ElectricMotor: {
              id: "Vehicle.Powertrain.ElectricMotor",
              type: "branch",
              children: {
                CoolantTemperature: {
                  id: "Vehicle.Powertrain.ElectricMotor.CoolantTemperature",
                  type: "sensor",
                },
                EngineCode: {
                  id: "Vehicle.Powertrain.ElectricMotor.EngineCode",
                  type: "attribute",
                },
                EngineCoolant: {
                  id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant",
                  type: "branch",
                  children: {
                    Capacity: {
                      id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.Capacity",
                      type: "attribute",
                    },
                    Level: {
                      id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.Level",
                      type: "sensor",
                    },
                    LifeRemaining: {
                      id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.LifeRemaining",
                      type: "sensor",
                    },
                    Temperature: {
                      id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.Temperature",
                      type: "sensor",
                    },
                  },
                },
                MaxPower: {
                  id: "Vehicle.Powertrain.ElectricMotor.MaxPower",
                  type: "attribute",
                },
                MaxRegenPower: {
                  id: "Vehicle.Powertrain.ElectricMotor.MaxRegenPower",
                  type: "attribute",
                },
                MaxRegenTorque: {
                  id: "Vehicle.Powertrain.ElectricMotor.MaxRegenTorque",
                  type: "attribute",
                },
                MaxTorque: {
                  id: "Vehicle.Powertrain.ElectricMotor.MaxTorque",
                  type: "attribute",
                },
                Power: {
                  id: "Vehicle.Powertrain.ElectricMotor.Power",
                  type: "sensor",
                },
                Speed: {
                  id: "Vehicle.Powertrain.ElectricMotor.Speed",
                  type: "sensor",
                },
                Temperature: {
                  id: "Vehicle.Powertrain.ElectricMotor.Temperature",
                  type: "sensor",
                },
                TimeInUse: {
                  id: "Vehicle.Powertrain.ElectricMotor.TimeInUse",
                  type: "sensor",
                },
                Torque: {
                  id: "Vehicle.Powertrain.ElectricMotor.Torque",
                  type: "sensor",
                },
              },
            },
            FuelSystem: {
              id: "Vehicle.Powertrain.FuelSystem",
              type: "branch",
              children: {
                AbsoluteLevel: {
                  id: "Vehicle.Powertrain.FuelSystem.AbsoluteLevel",
                  type: "sensor",
                },
                AverageConsumption: {
                  id: "Vehicle.Powertrain.FuelSystem.AverageConsumption",
                  type: "sensor",
                },
                ConsumptionSinceLastRefuel: {
                  id: "Vehicle.Powertrain.FuelSystem.ConsumptionSinceLastRefuel",
                  type: "sensor",
                },
                ConsumptionSinceStart: {
                  id: "Vehicle.Powertrain.FuelSystem.ConsumptionSinceStart",
                  type: "sensor",
                },
                HybridType: {
                  id: "Vehicle.Powertrain.FuelSystem.HybridType",
                  type: "attribute",
                },
                InstantConsumption: {
                  id: "Vehicle.Powertrain.FuelSystem.InstantConsumption",
                  type: "sensor",
                },
                IsEngineStopStartEnabled: {
                  id: "Vehicle.Powertrain.FuelSystem.IsEngineStopStartEnabled",
                  type: "sensor",
                },
                IsFuelLevelLow: {
                  id: "Vehicle.Powertrain.FuelSystem.IsFuelLevelLow",
                  type: "sensor",
                },
                IsFuelPortFlapOpen: {
                  id: "Vehicle.Powertrain.FuelSystem.IsFuelPortFlapOpen",
                  type: "actuator",
                },
                Range: {
                  id: "Vehicle.Powertrain.FuelSystem.Range",
                  type: "sensor",
                },
                RefuelPortPosition: {
                  id: "Vehicle.Powertrain.FuelSystem.RefuelPortPosition",
                  type: "attribute",
                },
                RelativeLevel: {
                  id: "Vehicle.Powertrain.FuelSystem.RelativeLevel",
                  type: "sensor",
                },
                SupportedFuel: {
                  id: "Vehicle.Powertrain.FuelSystem.SupportedFuel",
                  type: "attribute",
                },
                SupportedFuelTypes: {
                  id: "Vehicle.Powertrain.FuelSystem.SupportedFuelTypes",
                  type: "attribute",
                },
                TankCapacity: {
                  id: "Vehicle.Powertrain.FuelSystem.TankCapacity",
                  type: "attribute",
                },
                TimeRemaining: {
                  id: "Vehicle.Powertrain.FuelSystem.TimeRemaining",
                  type: "sensor",
                },
              },
            },
            IsAutoPowerOptimize: {
              id: "Vehicle.Powertrain.IsAutoPowerOptimize",
              type: "actuator",
            },
            PowerOptimizeLevel: {
              id: "Vehicle.Powertrain.PowerOptimizeLevel",
              type: "actuator",
            },
            Range: {
              id: "Vehicle.Powertrain.Range",
              type: "sensor",
            },
            TimeRemaining: {
              id: "Vehicle.Powertrain.TimeRemaining",
              type: "sensor",
            },
            TractionBattery: {
              id: "Vehicle.Powertrain.TractionBattery",
              type: "branch",
              children: {
                AccumulatedChargedEnergy: {
                  id: "Vehicle.Powertrain.TractionBattery.AccumulatedChargedEnergy",
                  type: "sensor",
                },
                AccumulatedChargedThroughput: {
                  id: "Vehicle.Powertrain.TractionBattery.AccumulatedChargedThroughput",
                  type: "sensor",
                },
                AccumulatedConsumedEnergy: {
                  id: "Vehicle.Powertrain.TractionBattery.AccumulatedConsumedEnergy",
                  type: "sensor",
                },
                AccumulatedConsumedThroughput: {
                  id: "Vehicle.Powertrain.TractionBattery.AccumulatedConsumedThroughput",
                  type: "sensor",
                },
                BatteryConditioning: {
                  id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning",
                  type: "branch",
                  children: {
                    IsActive: {
                      id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.IsActive",
                      type: "sensor",
                    },
                    IsOngoing: {
                      id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.IsOngoing",
                      type: "sensor",
                    },
                    RequestedMode: {
                      id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.RequestedMode",
                      type: "actuator",
                    },
                    StartTime: {
                      id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.StartTime",
                      type: "actuator",
                    },
                    TargetTemperature: {
                      id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.TargetTemperature",
                      type: "actuator",
                    },
                    TargetTime: {
                      id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.TargetTime",
                      type: "actuator",
                    },
                  },
                },
                CellVoltage: {
                  id: "Vehicle.Powertrain.TractionBattery.CellVoltage",
                  type: "branch",
                  children: {
                    CellVoltages: {
                      id: "Vehicle.Powertrain.TractionBattery.CellVoltage.CellVoltages",
                      type: "sensor",
                    },
                    IdMax: {
                      id: "Vehicle.Powertrain.TractionBattery.CellVoltage.IdMax",
                      type: "sensor",
                    },
                    IdMin: {
                      id: "Vehicle.Powertrain.TractionBattery.CellVoltage.IdMin",
                      type: "sensor",
                    },
                    Max: {
                      id: "Vehicle.Powertrain.TractionBattery.CellVoltage.Max",
                      type: "sensor",
                    },
                    Min: {
                      id: "Vehicle.Powertrain.TractionBattery.CellVoltage.Min",
                      type: "sensor",
                    },
                  },
                },
                Charging: {
                  id: "Vehicle.Powertrain.TractionBattery.Charging",
                  type: "branch",
                  children: {
                    AveragePower: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.AveragePower",
                      type: "sensor",
                    },
                    ChargeCurrent: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent",
                      type: "branch",
                      children: {
                        DC: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.DC",
                          type: "sensor",
                        },
                        Phase1: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.Phase1",
                          type: "sensor",
                        },
                        Phase2: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.Phase2",
                          type: "sensor",
                        },
                        Phase3: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.Phase3",
                          type: "sensor",
                        },
                      },
                    },
                    ChargeLimit: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeLimit",
                      type: "actuator",
                    },
                    ChargeRate: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeRate",
                      type: "sensor",
                    },
                    ChargeVoltage: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage",
                      type: "branch",
                      children: {
                        DC: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.DC",
                          type: "sensor",
                        },
                        Phase1: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.Phase1",
                          type: "sensor",
                        },
                        Phase2: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.Phase2",
                          type: "sensor",
                        },
                        Phase3: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.Phase3",
                          type: "sensor",
                        },
                      },
                    },
                    ChargingPort: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort",
                      type: "branch",
                      children: {
                        AnyPosition: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                        FrontLeft: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                        FrontMiddle: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                        FrontRight: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                        RearLeft: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                        RearMiddle: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                        RearRight: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight",
                          type: "branch",
                          children: {
                            IsChargingCableConnected: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.IsChargingCableConnected",
                              type: "sensor",
                            },
                            IsChargingCableLocked: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.IsChargingCableLocked",
                              type: "actuator",
                            },
                            IsFlapOpen: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.IsFlapOpen",
                              type: "actuator",
                            },
                            SupportedInletTypes: {
                              id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.SupportedInletTypes",
                              type: "attribute",
                            },
                          },
                        },
                      },
                    },
                    EvseId: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.EvseId",
                      type: "sensor",
                    },
                    IsCharging: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.IsCharging",
                      type: "sensor",
                    },
                    IsDischarging: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.IsDischarging",
                      type: "sensor",
                    },
                    Location: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.Location",
                      type: "branch",
                      children: {
                        Altitude: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.Location.Altitude",
                          type: "sensor",
                        },
                        Latitude: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.Location.Latitude",
                          type: "sensor",
                        },
                        Longitude: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.Location.Longitude",
                          type: "sensor",
                        },
                      },
                    },
                    MaxPower: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.MaxPower",
                      type: "sensor",
                    },
                    MaximumChargingCurrent: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent",
                      type: "branch",
                      children: {
                        DC: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.DC",
                          type: "sensor",
                        },
                        Phase1: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.Phase1",
                          type: "sensor",
                        },
                        Phase2: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.Phase2",
                          type: "sensor",
                        },
                        Phase3: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.Phase3",
                          type: "sensor",
                        },
                      },
                    },
                    PowerLoss: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.PowerLoss",
                      type: "sensor",
                    },
                    StartStopCharging: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.StartStopCharging",
                      type: "actuator",
                    },
                    Temperature: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.Temperature",
                      type: "sensor",
                    },
                    TimeToComplete: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.TimeToComplete",
                      type: "sensor",
                    },
                    Timer: {
                      id: "Vehicle.Powertrain.TractionBattery.Charging.Timer",
                      type: "branch",
                      children: {
                        Mode: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.Timer.Mode",
                          type: "actuator",
                        },
                        Time: {
                          id: "Vehicle.Powertrain.TractionBattery.Charging.Timer.Time",
                          type: "actuator",
                        },
                      },
                    },
                  },
                },
                CurrentCurrent: {
                  id: "Vehicle.Powertrain.TractionBattery.CurrentCurrent",
                  type: "sensor",
                },
                CurrentPower: {
                  id: "Vehicle.Powertrain.TractionBattery.CurrentPower",
                  type: "sensor",
                },
                CurrentVoltage: {
                  id: "Vehicle.Powertrain.TractionBattery.CurrentVoltage",
                  type: "sensor",
                },
                DCDC: {
                  id: "Vehicle.Powertrain.TractionBattery.DCDC",
                  type: "branch",
                  children: {
                    PowerLoss: {
                      id: "Vehicle.Powertrain.TractionBattery.DCDC.PowerLoss",
                      type: "sensor",
                    },
                    Temperature: {
                      id: "Vehicle.Powertrain.TractionBattery.DCDC.Temperature",
                      type: "sensor",
                    },
                  },
                },
                ErrorCodes: {
                  id: "Vehicle.Powertrain.TractionBattery.ErrorCodes",
                  type: "sensor",
                },
                GrossCapacity: {
                  id: "Vehicle.Powertrain.TractionBattery.GrossCapacity",
                  type: "attribute",
                },
                Id: {
                  id: "Vehicle.Powertrain.TractionBattery.Id",
                  type: "attribute",
                },
                IsGroundConnected: {
                  id: "Vehicle.Powertrain.TractionBattery.IsGroundConnected",
                  type: "sensor",
                },
                IsPowerConnected: {
                  id: "Vehicle.Powertrain.TractionBattery.IsPowerConnected",
                  type: "sensor",
                },
                MaxVoltage: {
                  id: "Vehicle.Powertrain.TractionBattery.MaxVoltage",
                  type: "attribute",
                },
                NetCapacity: {
                  id: "Vehicle.Powertrain.TractionBattery.NetCapacity",
                  type: "sensor",
                },
                NominalVoltage: {
                  id: "Vehicle.Powertrain.TractionBattery.NominalVoltage",
                  type: "attribute",
                },
                PowerLoss: {
                  id: "Vehicle.Powertrain.TractionBattery.PowerLoss",
                  type: "sensor",
                },
                ProductionDate: {
                  id: "Vehicle.Powertrain.TractionBattery.ProductionDate",
                  type: "attribute",
                },
                Range: {
                  id: "Vehicle.Powertrain.TractionBattery.Range",
                  type: "sensor",
                },
                StateOfCharge: {
                  id: "Vehicle.Powertrain.TractionBattery.StateOfCharge",
                  type: "branch",
                  children: {
                    Current: {
                      id: "Vehicle.Powertrain.TractionBattery.StateOfCharge.Current",
                      type: "sensor",
                    },
                    CurrentEnergy: {
                      id: "Vehicle.Powertrain.TractionBattery.StateOfCharge.CurrentEnergy",
                      type: "sensor",
                    },
                    Displayed: {
                      id: "Vehicle.Powertrain.TractionBattery.StateOfCharge.Displayed",
                      type: "sensor",
                    },
                  },
                },
                StateOfHealth: {
                  id: "Vehicle.Powertrain.TractionBattery.StateOfHealth",
                  type: "sensor",
                },
                Temperature: {
                  id: "Vehicle.Powertrain.TractionBattery.Temperature",
                  type: "branch",
                  children: {
                    Average: {
                      id: "Vehicle.Powertrain.TractionBattery.Temperature.Average",
                      type: "sensor",
                    },
                    CellTemperature: {
                      id: "Vehicle.Powertrain.TractionBattery.Temperature.CellTemperature",
                      type: "sensor",
                    },
                    Max: {
                      id: "Vehicle.Powertrain.TractionBattery.Temperature.Max",
                      type: "sensor",
                    },
                    Min: {
                      id: "Vehicle.Powertrain.TractionBattery.Temperature.Min",
                      type: "sensor",
                    },
                  },
                },
                TimeRemaining: {
                  id: "Vehicle.Powertrain.TractionBattery.TimeRemaining",
                  type: "sensor",
                },
              },
            },
            Transmission: {
              id: "Vehicle.Powertrain.Transmission",
              type: "branch",
              children: {
                ClutchEngagement: {
                  id: "Vehicle.Powertrain.Transmission.ClutchEngagement",
                  type: "actuator",
                },
                ClutchWear: {
                  id: "Vehicle.Powertrain.Transmission.ClutchWear",
                  type: "sensor",
                },
                CurrentGear: {
                  id: "Vehicle.Powertrain.Transmission.CurrentGear",
                  type: "sensor",
                },
                DiffLockFrontEngagement: {
                  id: "Vehicle.Powertrain.Transmission.DiffLockFrontEngagement",
                  type: "actuator",
                },
                DiffLockRearEngagement: {
                  id: "Vehicle.Powertrain.Transmission.DiffLockRearEngagement",
                  type: "actuator",
                },
                DriveType: {
                  id: "Vehicle.Powertrain.Transmission.DriveType",
                  type: "attribute",
                },
                GearChangeMode: {
                  id: "Vehicle.Powertrain.Transmission.GearChangeMode",
                  type: "actuator",
                },
                GearCount: {
                  id: "Vehicle.Powertrain.Transmission.GearCount",
                  type: "attribute",
                },
                IsElectricalPowertrainEngaged: {
                  id: "Vehicle.Powertrain.Transmission.IsElectricalPowertrainEngaged",
                  type: "actuator",
                },
                IsLowRangeEngaged: {
                  id: "Vehicle.Powertrain.Transmission.IsLowRangeEngaged",
                  type: "actuator",
                },
                IsParkLockEngaged: {
                  id: "Vehicle.Powertrain.Transmission.IsParkLockEngaged",
                  type: "actuator",
                },
                PerformanceMode: {
                  id: "Vehicle.Powertrain.Transmission.PerformanceMode",
                  type: "actuator",
                },
                SelectedGear: {
                  id: "Vehicle.Powertrain.Transmission.SelectedGear",
                  type: "actuator",
                },
                Temperature: {
                  id: "Vehicle.Powertrain.Transmission.Temperature",
                  type: "sensor",
                },
                TorqueDistribution: {
                  id: "Vehicle.Powertrain.Transmission.TorqueDistribution",
                  type: "actuator",
                },
                TravelledDistance: {
                  id: "Vehicle.Powertrain.Transmission.TravelledDistance",
                  type: "sensor",
                },
                Type: {
                  id: "Vehicle.Powertrain.Transmission.Type",
                  type: "attribute",
                },
              },
            },
            Type: {
              id: "Vehicle.Powertrain.Type",
              type: "attribute",
            },
          },
        },
        RoofLoad: {
          id: "Vehicle.RoofLoad",
          type: "attribute",
        },
        Service: {
          id: "Vehicle.Service",
          type: "branch",
          children: {
            DistanceToService: {
              id: "Vehicle.Service.DistanceToService",
              type: "sensor",
            },
            IsServiceDue: {
              id: "Vehicle.Service.IsServiceDue",
              type: "sensor",
            },
            TimeToService: {
              id: "Vehicle.Service.TimeToService",
              type: "sensor",
            },
          },
        },
        Speed: {
          id: "Vehicle.Speed",
          type: "sensor",
        },
        StartTime: {
          id: "Vehicle.StartTime",
          type: "attribute",
        },
        Trailer: {
          id: "Vehicle.Trailer",
          type: "branch",
          children: {
            IsConnected: {
              id: "Vehicle.Trailer.IsConnected",
              type: "sensor",
            },
          },
        },
        TraveledDistance: {
          id: "Vehicle.TraveledDistance",
          type: "sensor",
        },
        TraveledDistanceSinceStart: {
          id: "Vehicle.TraveledDistanceSinceStart",
          type: "sensor",
        },
        TripDuration: {
          id: "Vehicle.TripDuration",
          type: "sensor",
        },
        TripMeterReading: {
          id: "Vehicle.TripMeterReading",
          type: "actuator",
        },
        TurningDiameter: {
          id: "Vehicle.TurningDiameter",
          type: "attribute",
        },
        VehicleIdentification: {
          id: "Vehicle.VehicleIdentification",
          type: "branch",
          children: {
            AcrissCode: {
              id: "Vehicle.VehicleIdentification.AcrissCode",
              type: "attribute",
            },
            BodyType: {
              id: "Vehicle.VehicleIdentification.BodyType",
              type: "attribute",
            },
            Brand: {
              id: "Vehicle.VehicleIdentification.Brand",
              type: "attribute",
            },
            DateVehicleFirstRegistered: {
              id: "Vehicle.VehicleIdentification.DateVehicleFirstRegistered",
              type: "attribute",
            },
            KnownVehicleDamages: {
              id: "Vehicle.VehicleIdentification.KnownVehicleDamages",
              type: "attribute",
            },
            LicensePlate: {
              id: "Vehicle.VehicleIdentification.LicensePlate",
              type: "attribute",
            },
            MeetsEmissionStandard: {
              id: "Vehicle.VehicleIdentification.MeetsEmissionStandard",
              type: "attribute",
            },
            Model: {
              id: "Vehicle.VehicleIdentification.Model",
              type: "attribute",
            },
            OptionalExtras: {
              id: "Vehicle.VehicleIdentification.OptionalExtras",
              type: "attribute",
            },
            ProductionDate: {
              id: "Vehicle.VehicleIdentification.ProductionDate",
              type: "attribute",
            },
            PurchaseDate: {
              id: "Vehicle.VehicleIdentification.PurchaseDate",
              type: "attribute",
            },
            VIN: {
              id: "Vehicle.VehicleIdentification.VIN",
              type: "attribute",
            },
            VehicleConfiguration: {
              id: "Vehicle.VehicleIdentification.VehicleConfiguration",
              type: "attribute",
            },
            VehicleExteriorColor: {
              id: "Vehicle.VehicleIdentification.VehicleExteriorColor",
              type: "attribute",
            },
            VehicleInteriorColor: {
              id: "Vehicle.VehicleIdentification.VehicleInteriorColor",
              type: "attribute",
            },
            VehicleInteriorType: {
              id: "Vehicle.VehicleIdentification.VehicleInteriorType",
              type: "attribute",
            },
            VehicleModelDate: {
              id: "Vehicle.VehicleIdentification.VehicleModelDate",
              type: "attribute",
            },
            VehicleSeatingCapacity: {
              id: "Vehicle.VehicleIdentification.VehicleSeatingCapacity",
              type: "attribute",
            },
            VehicleSpecialUsage: {
              id: "Vehicle.VehicleIdentification.VehicleSpecialUsage",
              type: "attribute",
            },
            WMI: {
              id: "Vehicle.VehicleIdentification.WMI",
              type: "attribute",
            },
            Year: {
              id: "Vehicle.VehicleIdentification.Year",
              type: "attribute",
            },
          },
        },
        VersionVSS: {
          id: "Vehicle.VersionVSS",
          type: "branch",
          children: {
            Label: {
              id: "Vehicle.VersionVSS.Label",
              type: "attribute",
            },
            Major: {
              id: "Vehicle.VersionVSS.Major",
              type: "attribute",
            },
            Minor: {
              id: "Vehicle.VersionVSS.Minor",
              type: "attribute",
            },
            Patch: {
              id: "Vehicle.VersionVSS.Patch",
              type: "attribute",
            },
          },
        },
        WidthExcludingMirrors: {
          id: "Vehicle.WidthExcludingMirrors",
          type: "attribute",
        },
        WidthFoldedMirrors: {
          id: "Vehicle.WidthFoldedMirrors",
          type: "attribute",
        },
        WidthIncludingMirrors: {
          id: "Vehicle.WidthIncludingMirrors",
          type: "attribute",
        },
      },
    },
  },
};

export const BASE_METADATA = [
  {
    id: "Vehicle.ADAS.ABS.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if ABS is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    frequency: 1,
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ABS.IsEngaged",
    name: "IsEngaged",
    datatype: "boolean",
    description:
      "Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ABS.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if ABS incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ABS",
    name: "ABS",
    description: "Antilock Braking System signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ActiveAutonomyLevel",
    name: "ActiveAutonomyLevel",
    allowed: [
      "SAE_0",
      "SAE_1",
      "SAE_2_DISENGAGING",
      "SAE_2",
      "SAE_3_DISENGAGING",
      "SAE_3",
      "SAE_4_DISENGAGING",
      "SAE_4",
      "SAE_5_DISENGAGING",
      "SAE_5",
    ],
    comment:
      'Complies with https://www.sae.org/standards/content/j3016_202104/ and https://www.sae.org/blog/sae-j3016-update. Level 5 and 4 ADS (Automated driving system) disengage, if appropriate, only after it achieves a minimal risk condition or a driver is performing the DDT. Level 3 ADS disengages either an appropriate time after issuing a request to intervene or immediately upon user request. Level 2 DAS (Driving automation system) disengages immediately upon driver request. However, since many Level 2 DAS, often termed "Level 2.5", warn the driver shortly before reaching their operational limits, the VSS also supports the DISENGAGING state for SAE_2. Nevertheless, it should be noted that the SAE J3016 states that it is incorrect to describe driving automation features using fractional levels.',
    datatype: "string",
    description:
      "Indicates the currently active level of driving automation according to the SAE J3016 (Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles).",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.AdaptiveDistanceSet",
    name: "AdaptiveDistanceSet",
    datatype: "float",
    description: "Distance in meters to keep from lead vehicle",
    min: 0.0,
    type: "actuator",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.AdaptiveIntervalSet",
    name: "AdaptiveIntervalSet",
    datatype: "uint8",
    description: "Follow distance setting, commonly 1-5 with 1 being closest.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.IsActive",
    name: "IsActive",
    datatype: "boolean",
    description:
      "Indicates if cruise control system is active (i.e. actively controls speed). True = Active. False = Inactive.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.IsAdaptive",
    name: "IsAdaptive",
    datatype: "boolean",
    description:
      "Indicates if cruise control system is adaptive (i.e. actively controls speed).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if cruise control system is enabled (e.g. ready to receive configurations and settings) True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if cruise control system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl.SpeedSet",
    name: "SpeedSet",
    datatype: "float",
    description: "Set cruise control speed in kilometers per hour.",
    type: "actuator",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.CruiseControl",
    name: "CruiseControl",
    description: "Signals from Cruise Control system.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.DMS.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if DMS is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.DMS.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if DMS incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.DMS.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if DMS has registered a driver alert condition.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.DMS",
    name: "DMS",
    description: "Driver Monitoring System signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBA.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if EBA is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBA.IsEngaged",
    name: "IsEngaged",
    datatype: "boolean",
    description:
      "Indicates if EBA is currently regulating brake pressure. True = Engaged. False = Not Engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBA.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if EBA incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBA",
    name: "EBA",
    description: "Emergency Brake Assist (EBA) System signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBD.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if EBD is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBD.IsEngaged",
    name: "IsEngaged",
    datatype: "boolean",
    description:
      "Indicates if EBD is currently regulating vehicle brakeforce distribution. True = Engaged. False = Not Engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBD.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if EBD incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.EBD",
    name: "EBD",
    description: "Electronic Brakeforce Distribution (EBD) System signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if ESC is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.IsEngaged",
    name: "IsEngaged",
    datatype: "boolean",
    description:
      "Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if ESC incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.IsStrongCrossWindDetected",
    name: "IsStrongCrossWindDetected",
    datatype: "boolean",
    description:
      "Indicates if the ESC system is detecting strong cross winds. True = Strong cross winds detected. False = No strong cross winds detected.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.RoadFriction.LowerBound",
    name: "LowerBound",
    datatype: "float",
    description:
      "Lower bound road friction, as calculated by the ESC system. 5% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.RoadFriction.MostProbable",
    name: "MostProbable",
    datatype: "float",
    description:
      "Most probable road friction, as calculated by the ESC system. Exact meaning of most probable is implementation specific. 0 = no friction, 100 = maximum friction.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.RoadFriction.UpperBound",
    name: "UpperBound",
    datatype: "float",
    description:
      "Upper bound road friction, as calculated by the ESC system. 95% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC.RoadFriction",
    name: "RoadFriction",
    description: "Road friction values reported by the ESC system.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ESC",
    name: "ESC",
    description: "Electronic Stability Control System signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.LaneDepartureDetection.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.LaneDepartureDetection.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if lane departure system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.LaneDepartureDetection.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description:
      "Indicates if lane departure detection registered a lane departure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.LaneDepartureDetection",
    name: "LaneDepartureDetection",
    description: "Signals from Lane Departure Detection System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center.Distance",
    name: "Distance",
    datatype: "float",
    description: "Distance in meters to detected object",
    min: 0.0,
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if obstacle sensor system registered an obstacle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center.TimeGap",
    name: "TimeGap",
    datatype: "uint32",
    description: "Time in milliseconds before potential impact object",
    type: "sensor",
    unit: "ms",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center.WarningType",
    name: "WarningType",
    allowed: ["UNDEFINED", "CROSS_TRAFFIC", "BLIND_SPOT"],
    comment:
      "Undefined obstacle warning type would merely alert of presence of obstacle and may measure distance.",
    datatype: "string",
    description:
      "Indicates the type of obstacle warning detected as some track not only the presence of an obstacle but potential intercepting trajectory or other characteristics.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Center",
    name: "Center",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left.Distance",
    name: "Distance",
    datatype: "float",
    description: "Distance in meters to detected object",
    min: 0.0,
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if obstacle sensor system registered an obstacle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left.TimeGap",
    name: "TimeGap",
    datatype: "uint32",
    description: "Time in milliseconds before potential impact object",
    type: "sensor",
    unit: "ms",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left.WarningType",
    name: "WarningType",
    allowed: ["UNDEFINED", "CROSS_TRAFFIC", "BLIND_SPOT"],
    comment:
      "Undefined obstacle warning type would merely alert of presence of obstacle and may measure distance.",
    datatype: "string",
    description:
      "Indicates the type of obstacle warning detected as some track not only the presence of an obstacle but potential intercepting trajectory or other characteristics.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Left",
    name: "Left",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right.Distance",
    name: "Distance",
    datatype: "float",
    description: "Distance in meters to detected object",
    min: 0.0,
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if obstacle sensor system registered an obstacle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right.TimeGap",
    name: "TimeGap",
    datatype: "uint32",
    description: "Time in milliseconds before potential impact object",
    type: "sensor",
    unit: "ms",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right.WarningType",
    name: "WarningType",
    allowed: ["UNDEFINED", "CROSS_TRAFFIC", "BLIND_SPOT"],
    comment:
      "Undefined obstacle warning type would merely alert of presence of obstacle and may measure distance.",
    datatype: "string",
    description:
      "Indicates the type of obstacle warning detected as some track not only the presence of an obstacle but potential intercepting trajectory or other characteristics.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front.Right",
    name: "Right",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Front",
    name: "Front",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.Distance",
    name: "Distance",
    datatype: "float",
    description: "Distance in meters to detected object",
    min: 0.0,
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if obstacle sensor system registered an obstacle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.TimeGap",
    name: "TimeGap",
    datatype: "uint32",
    description: "Time in milliseconds before potential impact object",
    type: "sensor",
    unit: "ms",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center.WarningType",
    name: "WarningType",
    allowed: ["UNDEFINED", "CROSS_TRAFFIC", "BLIND_SPOT"],
    comment:
      "Undefined obstacle warning type would merely alert of presence of obstacle and may measure distance.",
    datatype: "string",
    description:
      "Indicates the type of obstacle warning detected as some track not only the presence of an obstacle but potential intercepting trajectory or other characteristics.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Center",
    name: "Center",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.Distance",
    name: "Distance",
    datatype: "float",
    description: "Distance in meters to detected object",
    min: 0.0,
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if obstacle sensor system registered an obstacle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.TimeGap",
    name: "TimeGap",
    datatype: "uint32",
    description: "Time in milliseconds before potential impact object",
    type: "sensor",
    unit: "ms",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left.WarningType",
    name: "WarningType",
    allowed: ["UNDEFINED", "CROSS_TRAFFIC", "BLIND_SPOT"],
    comment:
      "Undefined obstacle warning type would merely alert of presence of obstacle and may measure distance.",
    datatype: "string",
    description:
      "Indicates the type of obstacle warning detected as some track not only the presence of an obstacle but potential intercepting trajectory or other characteristics.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Left",
    name: "Left",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.Distance",
    name: "Distance",
    datatype: "float",
    description: "Distance in meters to detected object",
    min: 0.0,
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.IsWarning",
    name: "IsWarning",
    datatype: "boolean",
    description: "Indicates if obstacle sensor system registered an obstacle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.TimeGap",
    name: "TimeGap",
    datatype: "uint32",
    description: "Time in milliseconds before potential impact object",
    type: "sensor",
    unit: "ms",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right.WarningType",
    name: "WarningType",
    allowed: ["UNDEFINED", "CROSS_TRAFFIC", "BLIND_SPOT"],
    comment:
      "Undefined obstacle warning type would merely alert of presence of obstacle and may measure distance.",
    datatype: "string",
    description:
      "Indicates the type of obstacle warning detected as some track not only the presence of an obstacle but potential intercepting trajectory or other characteristics.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear.Right",
    name: "Right",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection.Rear",
    name: "Rear",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.ObstacleDetection",
    name: "ObstacleDetection",
    description: "Signals form Obstacle Sensor System.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.SupportedAutonomyLevel",
    name: "SupportedAutonomyLevel",
    allowed: ["SAE_0", "SAE_1", "SAE_2", "SAE_3", "SAE_4", "SAE_5"],
    datatype: "string",
    description:
      "Indicates the highest level of driving automation according to the SAE J3016 taxonomy the vehicle is capable of.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.TCS.IsEnabled",
    name: "IsEnabled",
    datatype: "boolean",
    description:
      "Indicates if TCS is enabled. True = Enabled. False = Disabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.TCS.IsEngaged",
    name: "IsEngaged",
    datatype: "boolean",
    description:
      "Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.TCS.IsError",
    name: "IsError",
    datatype: "boolean",
    description:
      "Indicates if TCS incurred an error condition. True = Error. False = No Error.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS.TCS",
    name: "TCS",
    description: "Traction Control System signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.ADAS",
    name: "ADAS",
    description: "All Advanced Driver Assist Systems data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Acceleration.Lateral",
    name: "Lateral",
    datatype: "float",
    description: "Vehicle acceleration in Y (lateral acceleration).",
    type: "sensor",
    unit: "m/s^2",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Acceleration.Longitudinal",
    name: "Longitudinal",
    datatype: "float",
    description: "Vehicle acceleration in X (longitudinal acceleration).",
    type: "sensor",
    unit: "m/s^2",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Acceleration.Vertical",
    name: "Vertical",
    datatype: "float",
    description: "Vehicle acceleration in Z (vertical acceleration).",
    type: "sensor",
    unit: "m/s^2",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Acceleration",
    name: "Acceleration",
    description:
      "Spatial acceleration. Axis definitions according to ISO 8855.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.AngularVelocity.Pitch",
    name: "Pitch",
    datatype: "float",
    description: "Vehicle rotation rate along Y (lateral).",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.AngularVelocity.Roll",
    name: "Roll",
    datatype: "float",
    description: "Vehicle rotation rate along X (longitudinal).",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.AngularVelocity.Yaw",
    name: "Yaw",
    datatype: "float",
    description: "Vehicle rotation rate along Z (vertical).",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.AngularVelocity",
    name: "AngularVelocity",
    description: "Spatial rotation. Axis definitions according to ISO 8855.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.AverageSpeed",
    name: "AverageSpeed",
    comment:
      "A new trip is considered to start when engine gets enabled (e.g. LowVoltageSystemState in ON or START mode). A trip is considered to end when engine is no longer enabled. The signal may however keep the value of the last trip until a new trip is started. Calculation of average speed may exclude periods when the vehicle for example is not moving or transmission is in neutral.",
    datatype: "float",
    description: "Average speed for the current trip.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.BodyType",
    name: "BodyType",
    datatype: "string",
    description: "Body type code as defined by ISO 3779.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Hood.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Hood.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Hood.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Hood",
    name: "Hood",
    comment:
      "The hood is the hinged cover over the engine compartment of a motor vehicles. Depending on vehicle, it can be either in the front or back of the vehicle. Luggage compartments are in VSS called trunks, even if they are located at the front of the vehicle.",
    description: "Hood status. Start position for Hood is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Horn.IsActive",
    name: "IsActive",
    datatype: "boolean",
    description: "Horn active or inactive. True = Active. False = Inactive.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Horn",
    name: "Horn",
    description: "Horn signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Backup.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Backup.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Backup",
    name: "Backup",
    description: "Backup lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam.High.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam.High.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam.High",
    name: "High",
    description: "Beam lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam.Low.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam.Low.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam.Low",
    name: "Low",
    description: "Beam lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Beam",
    name: "Beam",
    description: "Beam lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Brake.IsActive",
    name: "IsActive",
    allowed: ["INACTIVE", "ACTIVE", "ADAPTIVE"],
    datatype: "string",
    description:
      "Indicates if break-light is active. INACTIVE means lights are off. ACTIVE means lights are on. ADAPTIVE means that break-light is indicating emergency-breaking.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Brake.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Brake",
    name: "Brake",
    description: "Brake lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator.Left.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator.Left.IsSignaling",
    name: "IsSignaling",
    datatype: "boolean",
    description:
      "Indicates if light is signaling or off. True = signaling. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator.Left",
    name: "Left",
    description: "Indicator lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator.Right.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator.Right.IsSignaling",
    name: "IsSignaling",
    datatype: "boolean",
    description:
      "Indicates if light is signaling or off. True = signaling. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator.Right",
    name: "Right",
    description: "Indicator lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.DirectionIndicator",
    name: "DirectionIndicator",
    description: "Indicator lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog.Front.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog.Front.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog.Front",
    name: "Front",
    description: "Fog lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog.Rear.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog.Rear.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog.Rear",
    name: "Rear",
    description: "Fog lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Fog",
    name: "Fog",
    description: "Fog lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Hazard.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Hazard.IsSignaling",
    name: "IsSignaling",
    datatype: "boolean",
    description:
      "Indicates if light is signaling or off. True = signaling. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Hazard",
    name: "Hazard",
    description: "Hazard lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.IsHighBeamSwitchOn",
    name: "IsHighBeamSwitchOn",
    comment:
      "This signal indicates the status of the switch and does not indicate if low or high beam actually are on. That typically depends on vehicle logic and other signals like Lights.LightSwitch and Vehicle.LowVoltageSystemState.",
    datatype: "boolean",
    description:
      "Status of the high beam switch. True = high beam enabled. False = high beam not enabled.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.LicensePlate.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.LicensePlate.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.LicensePlate",
    name: "LicensePlate",
    description: "License plate lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.LightSwitch",
    name: "LightSwitch",
    allowed: ["OFF", "POSITION", "DAYTIME_RUNNING_LIGHTS", "AUTO", "BEAM"],
    comment:
      "A vehicle typically does not support all alternatives. Which lights that actually are lit may vary according to vehicle configuration and local legislation. OFF is typically indicated by 0. POSITION is typically indicated by ISO 7000 symbol 0456. DAYTIME_RUNNING_LIGHTS (DRL) can be indicated by ISO 7000 symbol 2611. AUTO indicates that vehicle automatically selects suitable lights. BEAM is typically indicated by ISO 7000 symbol 0083.",
    datatype: "string",
    description: "Status of the vehicle main light switch.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Parking.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Parking.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Parking",
    name: "Parking",
    description: "Parking lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Running.IsDefect",
    name: "IsDefect",
    datatype: "boolean",
    description:
      "Indicates if light is defect. True = Light is defect. False = Light has no defect.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Running.IsOn",
    name: "IsOn",
    datatype: "boolean",
    description: "Indicates if light is on or off. True = On. False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights.Running",
    name: "Running",
    description: "Daytime running lights (DRL).",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Lights",
    name: "Lights",
    description: "Exterior lights.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.DriverSide.IsFolded",
    name: "IsFolded",
    datatype: "boolean",
    description:
      "Is mirror folded? True = Fully or partially folded. False = Fully unfolded.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.DriverSide.IsHeatingOn",
    name: "IsHeatingOn",
    datatype: "boolean",
    description:
      "Mirror Heater on or off. True = Heater On. False = Heater Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.DriverSide.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description:
      "Is mirror movement locked? True = Locked, mirror will not react to Tilt/Pan change. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.DriverSide.Pan",
    name: "Pan",
    datatype: "int8",
    description:
      "Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.DriverSide.Tilt",
    name: "Tilt",
    datatype: "int8",
    description:
      "Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.DriverSide",
    name: "DriverSide",
    description: "All mirrors.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.PassengerSide.IsFolded",
    name: "IsFolded",
    datatype: "boolean",
    description:
      "Is mirror folded? True = Fully or partially folded. False = Fully unfolded.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.PassengerSide.IsHeatingOn",
    name: "IsHeatingOn",
    datatype: "boolean",
    description:
      "Mirror Heater on or off. True = Heater On. False = Heater Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.PassengerSide.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description:
      "Is mirror movement locked? True = Locked, mirror will not react to Tilt/Pan change. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.PassengerSide.Pan",
    name: "Pan",
    datatype: "int8",
    description:
      "Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.PassengerSide.Tilt",
    name: "Tilt",
    datatype: "int8",
    description:
      "Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors.PassengerSide",
    name: "PassengerSide",
    description: "All mirrors.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Mirrors",
    name: "Mirrors",
    description: "All mirrors.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Raindetection.Intensity",
    name: "Intensity",
    datatype: "uint8",
    description: "Rain intensity. 0 = Dry, No Rain. 100 = Covered.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Raindetection",
    name: "Raindetection",
    description: "Rain sensor signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.RearMainSpoilerPosition",
    name: "RearMainSpoilerPosition",
    datatype: "float",
    description:
      "Rear spoiler position, 0% = Spoiler fully stowed. 100% = Spoiler fully exposed.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Front.IsLightOn",
    name: "IsLightOn",
    comment:
      "V4.0 Moved from Vehicle.Cabin.Lights.IsTrunkOn because Trunk is not defined as part of the Cabin.",
    datatype: "boolean",
    description: "Is trunk light on",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Front.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description: "Is item locked or unlocked. True = Locked. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Front.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Front.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Front.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Front",
    name: "Front",
    comment:
      "A trunk is a luggage compartment in a vehicle. Depending on vehicle, it can be either in the front or back of the vehicle. Some vehicles may have trunks both at the front and at the rear of the vehicle.",
    description: "Trunk status. Start position for Trunk is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Rear.IsLightOn",
    name: "IsLightOn",
    comment:
      "V4.0 Moved from Vehicle.Cabin.Lights.IsTrunkOn because Trunk is not defined as part of the Cabin.",
    datatype: "boolean",
    description: "Is trunk light on",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Rear.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description: "Is item locked or unlocked. True = Locked. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Rear.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Rear.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Rear.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk.Rear",
    name: "Rear",
    comment:
      "A trunk is a luggage compartment in a vehicle. Depending on vehicle, it can be either in the front or back of the vehicle. Some vehicles may have trunks both at the front and at the rear of the vehicle.",
    description: "Trunk status. Start position for Trunk is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Trunk",
    name: "Trunk",
    comment:
      "A trunk is a luggage compartment in a vehicle. Depending on vehicle, it can be either in the front or back of the vehicle. Some vehicles may have trunks both at the front and at the rear of the vehicle.",
    description: "Trunk status. Start position for Trunk is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.IsHeatingOn",
    name: "IsHeatingOn",
    datatype: "boolean",
    description: "Windshield heater status. False - off, True - on.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.WasherFluid.IsLevelLow",
    name: "IsLevelLow",
    datatype: "boolean",
    description:
      "Low level indication for washer fluid. True = Level Low. False = Level OK.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.WasherFluid.Level",
    name: "Level",
    datatype: "uint8",
    description: "Washer fluid level as a percent. 0 = Empty. 100 = Full.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.WasherFluid",
    name: "WasherFluid",
    description: "Windshield washer fluid signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.Intensity",
    name: "Intensity",
    datatype: "uint8",
    description:
      "Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.IsWipersWorn",
    name: "IsWipersWorn",
    datatype: "boolean",
    description:
      "Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.Mode",
    name: "Mode",
    allowed: ["OFF", "SLOW", "MEDIUM", "FAST", "INTERVAL", "RAIN_SENSOR"],
    datatype: "string",
    description:
      "Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.ActualPosition",
    name: "ActualPosition",
    comment: "Default parking position might be used as reference position.",
    datatype: "float",
    description:
      "Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.DriveCurrent",
    name: "DriveCurrent",
    comment: "May be negative in special situations.",
    datatype: "float",
    description: "Actual current used by wiper drive.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.Frequency",
    name: "Frequency",
    comment:
      "Examples - 0 = Wipers stopped, 80 = Wipers doing 80 cycles per minute (in WIPE mode).",
    datatype: "uint8",
    description:
      "Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.",
    type: "actuator",
    unit: "cpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.IsBlocked",
    name: "IsBlocked",
    datatype: "boolean",
    description:
      "Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.IsEndingWipeCycle",
    name: "IsEndingWipeCycle",
    comment:
      "In continuous wiping between A and B this sensor can be used a trigger to update TargetPosition.",
    datatype: "boolean",
    description:
      "Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.IsOverheated",
    name: "IsOverheated",
    datatype: "boolean",
    description:
      "Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.IsPositionReached",
    name: "IsPositionReached",
    datatype: "boolean",
    description:
      "Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.IsWiperError",
    name: "IsWiperError",
    datatype: "boolean",
    description:
      "Indicates system failure. True if wiping is disabled due to system failure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.IsWiping",
    name: "IsWiping",
    datatype: "boolean",
    description:
      "Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.Mode",
    name: "Mode",
    allowed: ["STOP_HOLD", "WIPE", "PLANT_MODE", "EMERGENCY_STOP"],
    datatype: "string",
    description:
      "Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System.TargetPosition",
    name: "TargetPosition",
    comment: "Default parking position might be used as reference position.",
    datatype: "float",
    description:
      "Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.System",
    name: "System",
    comment:
      "These signals are typically not directly available to the user/driver of the vehicle. The overlay in overlays/extensions/dual_wiper_systems.vspec can be used to modify this branch to support two instances; Primary and Secondary.",
    description:
      "Signals to control behavior of wipers in detail. By default VSS expects only one instance.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping.WiperWear",
    name: "WiperWear",
    datatype: "uint8",
    description:
      "Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front.Wiping",
    name: "Wiping",
    description: "Windshield wiper signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Front",
    name: "Front",
    description: "Windshield signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.IsHeatingOn",
    name: "IsHeatingOn",
    datatype: "boolean",
    description: "Windshield heater status. False - off, True - on.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.WasherFluid.IsLevelLow",
    name: "IsLevelLow",
    datatype: "boolean",
    description:
      "Low level indication for washer fluid. True = Level Low. False = Level OK.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.WasherFluid.Level",
    name: "Level",
    datatype: "uint8",
    description: "Washer fluid level as a percent. 0 = Empty. 100 = Full.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.WasherFluid",
    name: "WasherFluid",
    description: "Windshield washer fluid signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.Intensity",
    name: "Intensity",
    datatype: "uint8",
    description:
      "Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.IsWipersWorn",
    name: "IsWipersWorn",
    datatype: "boolean",
    description:
      "Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.Mode",
    name: "Mode",
    allowed: ["OFF", "SLOW", "MEDIUM", "FAST", "INTERVAL", "RAIN_SENSOR"],
    datatype: "string",
    description:
      "Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.ActualPosition",
    name: "ActualPosition",
    comment: "Default parking position might be used as reference position.",
    datatype: "float",
    description:
      "Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.DriveCurrent",
    name: "DriveCurrent",
    comment: "May be negative in special situations.",
    datatype: "float",
    description: "Actual current used by wiper drive.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.Frequency",
    name: "Frequency",
    comment:
      "Examples - 0 = Wipers stopped, 80 = Wipers doing 80 cycles per minute (in WIPE mode).",
    datatype: "uint8",
    description:
      "Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.",
    type: "actuator",
    unit: "cpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsBlocked",
    name: "IsBlocked",
    datatype: "boolean",
    description:
      "Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsEndingWipeCycle",
    name: "IsEndingWipeCycle",
    comment:
      "In continuous wiping between A and B this sensor can be used a trigger to update TargetPosition.",
    datatype: "boolean",
    description:
      "Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsOverheated",
    name: "IsOverheated",
    datatype: "boolean",
    description:
      "Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsPositionReached",
    name: "IsPositionReached",
    datatype: "boolean",
    description:
      "Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsWiperError",
    name: "IsWiperError",
    datatype: "boolean",
    description:
      "Indicates system failure. True if wiping is disabled due to system failure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.IsWiping",
    name: "IsWiping",
    datatype: "boolean",
    description:
      "Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.Mode",
    name: "Mode",
    allowed: ["STOP_HOLD", "WIPE", "PLANT_MODE", "EMERGENCY_STOP"],
    datatype: "string",
    description:
      "Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System.TargetPosition",
    name: "TargetPosition",
    comment: "Default parking position might be used as reference position.",
    datatype: "float",
    description:
      "Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.System",
    name: "System",
    comment:
      "These signals are typically not directly available to the user/driver of the vehicle. The overlay in overlays/extensions/dual_wiper_systems.vspec can be used to modify this branch to support two instances; Primary and Secondary.",
    description:
      "Signals to control behavior of wipers in detail. By default VSS expects only one instance.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping.WiperWear",
    name: "WiperWear",
    datatype: "uint8",
    description:
      "Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear.Wiping",
    name: "Wiping",
    description: "Windshield wiper signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield.Rear",
    name: "Rear",
    description: "Windshield signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body.Windshield",
    name: "Windshield",
    description: "Windshield signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Body",
    name: "Body",
    description: "All body components.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Convertible.Status",
    name: "Status",
    allowed: ["UNDEFINED", "CLOSED", "OPEN", "CLOSING", "OPENING", "STALLED"],
    datatype: "string",
    description: "Roof status on convertible vehicles.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Convertible",
    name: "Convertible",
    description: "Convertible roof.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.IsChildLockActive",
    name: "IsChildLockActive",
    datatype: "boolean",
    description:
      "Is door child lock active. True = Door cannot be opened from inside. False = Door can be opened from inside.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description: "Is item locked or unlocked. True = Locked. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Shade",
    name: "Shade",
    description:
      "Side window shade. Open = Retracted, Closed = Deployed. Start position for Shade is Open/Retracted.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Window.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Window.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Window.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide.Window",
    name: "Window",
    description: "Door window status. Start position for Window is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.DriverSide",
    name: "DriverSide",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.IsChildLockActive",
    name: "IsChildLockActive",
    datatype: "boolean",
    description:
      "Is door child lock active. True = Door cannot be opened from inside. False = Door can be opened from inside.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description: "Is item locked or unlocked. True = Locked. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Shade",
    name: "Shade",
    description:
      "Side window shade. Open = Retracted, Closed = Deployed. Start position for Shade is Open/Retracted.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide.Window",
    name: "Window",
    description: "Door window status. Start position for Window is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1.PassengerSide",
    name: "PassengerSide",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row1",
    name: "Row1",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.IsChildLockActive",
    name: "IsChildLockActive",
    datatype: "boolean",
    description:
      "Is door child lock active. True = Door cannot be opened from inside. False = Door can be opened from inside.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description: "Is item locked or unlocked. True = Locked. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Shade",
    name: "Shade",
    description:
      "Side window shade. Open = Retracted, Closed = Deployed. Start position for Shade is Open/Retracted.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Window.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Window.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Window.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide.Window",
    name: "Window",
    description: "Door window status. Start position for Window is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.DriverSide",
    name: "DriverSide",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.IsChildLockActive",
    name: "IsChildLockActive",
    datatype: "boolean",
    description:
      "Is door child lock active. True = Door cannot be opened from inside. False = Door can be opened from inside.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.IsLocked",
    name: "IsLocked",
    datatype: "boolean",
    description: "Is item locked or unlocked. True = Locked. False = Unlocked.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Shade",
    name: "Shade",
    description:
      "Side window shade. Open = Retracted, Closed = Deployed. Start position for Shade is Open/Retracted.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide.Window",
    name: "Window",
    description: "Door window status. Start position for Window is Closed.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2.PassengerSide",
    name: "PassengerSide",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door.Row2",
    name: "Row2",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Door",
    name: "Door",
    description: "All doors, including windows and switches.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.DoorCount",
    name: "DoorCount",
    datatype: "uint8",
    default: 4,
    description: "Number of doors in vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.DriverPosition",
    name: "DriverPosition",
    allowed: ["LEFT", "MIDDLE", "RIGHT"],
    comment:
      "Some signals use DriverSide and PassengerSide as instances. If this signal specifies that DriverPosition is LEFT or MIDDLE, then DriverSide refers to left side and PassengerSide to right side. If this signal specifies that DriverPosition is RIGHT, then DriverSide refers to right side and PassengerSide to left side.",
    datatype: "string",
    description: "The position of the driver seat in row 1.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.AmbientAirTemperature",
    name: "AmbientAirTemperature",
    datatype: "float",
    description: "Ambient air temperature inside the vehicle.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.IsAirConditioningActive",
    name: "IsAirConditioningActive",
    datatype: "boolean",
    description: "Is Air conditioning active.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.IsFrontDefrosterActive",
    name: "IsFrontDefrosterActive",
    datatype: "boolean",
    description: "Is front defroster active.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.IsRearDefrosterActive",
    name: "IsRearDefrosterActive",
    datatype: "boolean",
    description: "Is rear defroster active.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.IsRecirculationActive",
    name: "IsRecirculationActive",
    datatype: "boolean",
    description: "Is recirculation active.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Driver.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Driver.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Driver.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Driver",
    name: "Driver",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1.Passenger",
    name: "Passenger",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row1",
    name: "Row1",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Driver.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Driver.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Driver.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Driver",
    name: "Driver",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2.Passenger",
    name: "Passenger",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row2",
    name: "Row2",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Driver.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Driver.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Driver.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Driver",
    name: "Driver",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3.Passenger",
    name: "Passenger",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row3",
    name: "Row3",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Driver.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Driver.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Driver.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Driver",
    name: "Driver",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger.AirDistribution",
    name: "AirDistribution",
    allowed: ["UP", "MIDDLE", "DOWN"],
    datatype: "string",
    description: "Direction of airstream",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger.FanSpeed",
    name: "FanSpeed",
    datatype: "uint8",
    description: "Fan Speed, 0 = off. 100 = max",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Temperature",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4.Passenger",
    name: "Passenger",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station.Row4",
    name: "Row4",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC.Station",
    name: "Station",
    description: "HVAC for single station in the vehicle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.HVAC",
    name: "HVAC",
    description: "Climate control",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.Brightness",
    name: "Brightness",
    comment:
      "The value 0 does not necessarily correspond to a turned off HMI, as it may not be allowed/supported to turn off the HMI completely.",
    datatype: "float",
    description:
      "Brightness of the HMI, relative to supported range. 0 = Lowest brightness possible. 100 = Maximum Brightness possible.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.CurrentLanguage",
    name: "CurrentLanguage",
    datatype: "string",
    description: "ISO 639-1 standard language code for the current HMI",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.DateFormat",
    name: "DateFormat",
    allowed: [
      "YYYY_MM_DD",
      "DD_MM_YYYY",
      "MM_DD_YYYY",
      "YY_MM_DD",
      "DD_MM_YY",
      "MM_DD_YY",
    ],
    datatype: "string",
    description: "Date format used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.DayNightMode",
    name: "DayNightMode",
    allowed: ["DAY", "NIGHT"],
    datatype: "string",
    description: "Current display theme",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.DisplayOffDuration",
    name: "DisplayOffDuration",
    comment:
      "Display shall be turned off at HMI.LastActionTime + HMI.DisplayOffDuration, unless HMI.IsScreenAlwaysOn==True.",
    datatype: "uint16",
    description:
      "Duration in seconds before the display is turned off. Value shall be 0 if screen never shall turn off.",
    type: "actuator",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.DistanceUnit",
    name: "DistanceUnit",
    allowed: ["MILES", "KILOMETERS"],
    datatype: "string",
    description: "Distance unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.EVEconomyUnits",
    name: "EVEconomyUnits",
    allowed: [
      "MILES_PER_KILOWATT_HOUR",
      "KILOMETERS_PER_KILOWATT_HOUR",
      "KILOWATT_HOURS_PER_100_MILES",
      "KILOWATT_HOURS_PER_100_KILOMETERS",
      "WATT_HOURS_PER_MILE",
      "WATT_HOURS_PER_KILOMETER",
    ],
    datatype: "string",
    description: "EV fuel economy unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.EVEnergyUnits",
    name: "EVEnergyUnits",
    allowed: ["WATT_HOURS", "AMPERE_HOURS", "KILOWATT_HOURS"],
    comment:
      "Ampere hours is by definition not an energy unit, but can be used as a measurement of energy if the voltage, like nominal voltage of the battery, is known.",
    datatype: "string",
    description: "EV energy unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.FontSize",
    name: "FontSize",
    allowed: ["STANDARD", "LARGE", "EXTRA_LARGE"],
    datatype: "string",
    description: "Font size used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.FuelEconomyUnits",
    name: "FuelEconomyUnits",
    allowed: [
      "MPG_UK",
      "MPG_US",
      "MILES_PER_LITER",
      "KILOMETERS_PER_LITER",
      "LITERS_PER_100_KILOMETERS",
    ],
    datatype: "string",
    description: "Fuel economy unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.FuelVolumeUnit",
    name: "FuelVolumeUnit",
    allowed: ["LITER", "GALLON_US", "GALLON_UK"],
    datatype: "string",
    description: "Fuel volume unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.IsScreenAlwaysOn",
    name: "IsScreenAlwaysOn",
    datatype: "boolean",
    description: "Used to prevent the screen going black if no action placed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.LastActionTime",
    name: "LastActionTime",
    datatype: "string",
    description:
      "Time for last hmi action, formatted according to ISO 8601 with UTC time zone.",
    type: "sensor",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.SpeedUnit",
    name: "SpeedUnit",
    allowed: ["METERS_PER_SECOND", "MILES_PER_HOUR", "KILOMETERS_PER_HOUR"],
    datatype: "string",
    description: "Speed unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.TemperatureUnit",
    name: "TemperatureUnit",
    allowed: ["C", "F"],
    datatype: "string",
    description: "Temperature unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.TimeFormat",
    name: "TimeFormat",
    allowed: ["HR_12", "HR_24"],
    datatype: "string",
    description: "Time format used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI.TirePressureUnit",
    name: "TirePressureUnit",
    allowed: ["PSI", "KPA", "BAR"],
    datatype: "string",
    description: "Tire pressure unit used in the current HMI",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.HMI",
    name: "HMI",
    description: "HMI related signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Action",
    name: "Action",
    allowed: [
      "UNKNOWN",
      "STOP",
      "PLAY",
      "FAST_FORWARD",
      "FAST_BACKWARD",
      "SKIP_FORWARD",
      "SKIP_BACKWARD",
    ],
    datatype: "string",
    description: "Tells if the media was",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.DeclinedURI",
    name: "DeclinedURI",
    datatype: "string",
    description: "URI of suggested media that was declined",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.Album",
    name: "Album",
    datatype: "string",
    description: "Name of album being played",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.Artist",
    name: "Artist",
    datatype: "string",
    description: "Name of artist being played",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.Genre",
    name: "Genre",
    datatype: "string",
    description: "Name of genre being played",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.PlaybackRate",
    name: "PlaybackRate",
    comment:
      "The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed. Values of lower than 1.0 make the media play slower than normal. Values of higher than 1.0 make the media play faster than normal.",
    datatype: "float",
    description: "Current playback rate of media being played.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.Source",
    name: "Source",
    allowed: [
      "UNKNOWN",
      "SIRIUS_XM",
      "AM",
      "FM",
      "DAB",
      "TV",
      "CD",
      "DVD",
      "AUX",
      "USB",
      "DISK",
      "BLUETOOTH",
      "INTERNET",
      "VOICE",
      "BEEP",
    ],
    datatype: "string",
    description: "Media selected for playback",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.Track",
    name: "Track",
    datatype: "string",
    description: "Name of track being played",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played.URI",
    name: "URI",
    datatype: "string",
    description: "User Resource associated with the media",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Played",
    name: "Played",
    description:
      "Collection of signals updated in concert when a new media is played",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.SelectedURI",
    name: "SelectedURI",
    datatype: "string",
    description: "URI of suggested media that was selected",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media.Volume",
    name: "Volume",
    datatype: "uint8",
    description: "Current Media Volume",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Media",
    name: "Media",
    description: "All Media actions",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.DestinationSet.Latitude",
    name: "Latitude",
    datatype: "double",
    description: "Latitude of destination in WGS 84 geodetic coordinates.",
    max: 90,
    min: -90,
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.DestinationSet.Longitude",
    name: "Longitude",
    datatype: "double",
    description: "Longitude of destination in WGS 84 geodetic coordinates.",
    max: 180,
    min: -180,
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.DestinationSet",
    name: "DestinationSet",
    description: "A navigation has been selected.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.GuidanceVoice",
    name: "GuidanceVoice",
    allowed: ["STANDARD_MALE", "STANDARD_FEMALE", "ETC"],
    comment:
      "ETC indicates a voice alternative not covered by the explicitly listed alternatives.",
    datatype: "string",
    description: "Navigation guidance state that was selected.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.Map.IsAutoScaleModeUsed",
    name: "IsAutoScaleModeUsed",
    comment:
      "If true, then auto-scaling mode is used. If false, then manual-scaling mode is used.",
    datatype: "boolean",
    description:
      "Used to select auto-scaling mode. This feature dynamically adjusts the zoom level of the map to provide an optimal view based on the current speed of the vehicle",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.Map",
    name: "Map",
    description: "All map actions",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.Mute",
    name: "Mute",
    allowed: ["MUTED", "ALERT_ONLY", "UNMUTED"],
    datatype: "string",
    description: "Navigation mute state that was selected.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation.Volume",
    name: "Volume",
    datatype: "uint8",
    description: "Current navigation volume",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.Navigation",
    name: "Navigation",
    description: "All navigation actions",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneProjection.Active",
    name: "Active",
    allowed: ["NONE", "ACTIVE", "INACTIVE"],
    comment: "NONE indicates that projection is not supported.",
    datatype: "string",
    description: "Projection activation info.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneProjection.Source",
    name: "Source",
    allowed: ["USB", "BLUETOOTH", "WIFI"],
    comment:
      "Smartphone projection exposes or controls specific applications on the Smartphone on the vehicle infotainment system.",
    datatype: "string",
    description: "Connectivity source selected for projection.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneProjection.SupportedMode",
    name: "SupportedMode",
    allowed: ["ANDROID_AUTO", "APPLE_CARPLAY", "MIRROR_LINK", "OTHER"],
    datatype: "string[]",
    description: "Supportable list for projection.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneProjection",
    name: "SmartphoneProjection",
    comment:
      "Smartphone projection exposes or controls specific applications on the Smartphone on the vehicle infotainment system.",
    description: "All smartphone projection actions.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneScreenMirroring.Active",
    name: "Active",
    allowed: ["NONE", "ACTIVE", "INACTIVE"],
    comment: "NONE indicates that mirroring is not supported.",
    datatype: "string",
    description: "Mirroring activation info.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneScreenMirroring.Source",
    name: "Source",
    allowed: ["USB", "BLUETOOTH", "WIFI"],
    datatype: "string",
    description: "Connectivity source selected for mirroring.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment.SmartphoneScreenMirroring",
    name: "SmartphoneScreenMirroring",
    comment:
      "Smartphone screen mirroring mirrors the whole screen of the Smartphone on the vehicle infotainment system.",
    description: "All smartphone screen mirroring actions.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Infotainment",
    name: "Infotainment",
    description: "Infotainment system.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.IsWindowChildLockEngaged",
    name: "IsWindowChildLockEngaged",
    comment:
      "Window child lock refers to the functionality to disable the move window button next to most windows, so that they only can be operated by the driver.",
    datatype: "boolean",
    description:
      "Is window child lock engaged. True = Engaged. False = Disengaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.DriverSide",
    name: "DriverSide",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1.PassengerSide",
    name: "PassengerSide",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row1",
    name: "Row1",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.DriverSide",
    name: "DriverSide",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2.PassengerSide",
    name: "PassengerSide",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight.Row2",
    name: "Row2",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.AmbientLight",
    name: "AmbientLight",
    description:
      "Decorative coloured light inside the cabin, usually mounted on the door, ceiling, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.InteractiveLightBar.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.InteractiveLightBar.Effect",
    name: "Effect",
    comment:
      "Default and allowed values are OEM-specific and should be defined accordingly (e.g. with the use of overlays).",
    datatype: "string",
    description:
      "Light effect selection from a predefined set of allowed values.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.InteractiveLightBar.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.InteractiveLightBar.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.InteractiveLightBar",
    name: "InteractiveLightBar",
    description:
      "Decorative coloured light bar that supports effects, usually mounted on the dashboard (e.g. BMW i7 Interactive bar).",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.IsDomeOn",
    name: "IsDomeOn",
    datatype: "boolean",
    description: "Is central dome light on",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.IsGloveBoxOn",
    name: "IsGloveBoxOn",
    datatype: "boolean",
    description: "Is glove box light on",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.PerceivedAmbientLight",
    name: "PerceivedAmbientLight",
    comment:
      'V4.0 named changed from "AmbientLight" to "PerceivedAmbientLight". This is a read-only property that refers to the pre-existing light (e.g., natural light). If you are looking for the in-cabin decorative lights that sometimes are also called "AmbientLights", please refer to the branch Vehicle.Cabin.Light.AmbientLight.',
    datatype: "uint8",
    description:
      "The percentage of ambient light that is measured (e.g., by a sensor) inside the cabin. 0 = No ambient light. 100 = Full brightness.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.DriverSide",
    name: "DriverSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1.PassengerSide",
    name: "PassengerSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row1",
    name: "Row1",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.DriverSide",
    name: "DriverSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2.PassengerSide",
    name: "PassengerSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row2",
    name: "Row2",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.DriverSide",
    name: "DriverSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3.PassengerSide",
    name: "PassengerSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row3",
    name: "Row3",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.DriverSide",
    name: "DriverSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide.Color",
    name: "Color",
    comment:
      'For example; "#C0C0C0" = Silver, "#FFD700" = Gold, "#000000" = Black, "#FFFFFF" = White, etc.',
    datatype: "string",
    description:
      'Hexadecimal color code represented as a 3-byte RGB (i.e. Red, Green, and Blue) value preceded by a hash symbol "#". Allowed range "#000000" to "#FFFFFF".',
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide.Intensity",
    name: "Intensity",
    comment:
      "Minimum value cannot be zero as on/off is controlled by the actuator IsLightOn. V4.0 moved from Cabin.Lights.AmbientLight.Intensity to enable individual control of lights via the SingleConfigurableLight.vspec.",
    datatype: "uint8",
    description:
      "How much of the maximum possible brightness of the light is used. 1 = Maximum attenuation, 100 = No attenuation (i.e. full brightness).",
    max: 100,
    min: 1,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide.IsLightOn",
    name: "IsLightOn",
    datatype: "boolean",
    description:
      "Indicates whether the light is turned on. True = On, False = Off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4.PassengerSide",
    name: "PassengerSide",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight.Row4",
    name: "Row4",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light.Spotlight",
    name: "Spotlight",
    description: "Spotlight for a specific area in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Light",
    name: "Light",
    comment:
      'V4.0 branch renamed from "Lights" to "Light" to comply with singular naming of entities. Use SingleConfigurableLight.vspec to describe interior lights that can be configured.',
    description: "Light that is part of the Cabin.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.RearShade.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.RearShade.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.RearShade.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.RearShade",
    name: "RearShade",
    description:
      "Rear window shade. Open = Retracted, Closed = Deployed. Start position for RearShade is Open/Retracted.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.RearviewMirror.DimmingLevel",
    name: "DimmingLevel",
    datatype: "uint8",
    description:
      "Dimming level of rear-view mirror. 0 = Undimmed. 100 = Fully dimmed.",
    max: 100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.RearviewMirror",
    name: "RearviewMirror",
    description: "Rear-view mirror.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Airbag.IsDeployed",
    name: "IsDeployed",
    datatype: "boolean",
    description:
      "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Airbag",
    name: "Airbag",
    description: "Airbag signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLessLumbarSupportSwitchEngaged",
    name: "IsLessLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for less lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    name: "IsLessSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for less side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLumbarDownSwitchEngaged",
    name: "IsLumbarDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsLumbarUpSwitchEngaged",
    name: "IsLumbarUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
    name: "IsMoreLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for more lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    name: "IsMoreSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for more side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsReclineBackwardSwitchEngaged",
    name: "IsReclineBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.IsReclineForwardSwitchEngaged",
    name: "IsReclineForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Lumbar.Height",
    name: "Height",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarHeight",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Lumbar.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarSupport",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Lumbar",
    name: "Lumbar",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description:
      "Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.LumbarHeight",
    name: "LumbarHeight",
    datatype: "uint8",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.LumbarSupport",
    name: "LumbarSupport",
    datatype: "float",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.Recline",
    name: "Recline",
    comment:
      "Seat z-axis depends on seat tilt. This means that movement of backrest due to seat tilting will not affect Backrest.Recline as long as the angle between Seating and Backrest are constant. Absolute recline relative to vehicle z-axis can be calculated as Tilt + Backrest.Recline.",
    datatype: "float",
    description:
      "Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.SideBolster.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.SideBolsterSupport",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.SideBolster",
    name: "SideBolster",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description: "Backrest side bolster (lumbar side support) settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest.SideBolsterSupport",
    name: "SideBolsterSupport",
    datatype: "float",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Backrest",
    name: "Backrest",
    description: "Describes signals related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.Angle",
    name: "Angle",
    datatype: "float",
    description:
      "Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.Height",
    name: "Height",
    datatype: "uint8",
    description:
      "Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Headrest",
    name: "Headrest",
    description: "Headrest settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Height",
    name: "Height",
    datatype: "uint16",
    description:
      "Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsBelted",
    name: "IsBelted",
    datatype: "boolean",
    description: "Is the belt engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsCoolerSwitchEngaged",
    name: "IsCoolerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Cooler switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsDecreaseMassageLevelSwitchEngaged",
    name: "IsDecreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Decrease massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsIncreaseMassageLevelSwitchEngaged",
    name: "IsIncreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Increase massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsOccupied",
    name: "IsOccupied",
    datatype: "boolean",
    description: "Does the seat have a passenger in it.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsTiltBackwardSwitchEngaged",
    name: "IsTiltBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsTiltForwardSwitchEngaged",
    name: "IsTiltForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.IsWarmerSwitchEngaged",
    name: "IsWarmerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Warmer switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Massage",
    name: "Massage",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.MassageLevel",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.MassageLevel",
    name: "MassageLevel",
    datatype: "uint8",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Occupant",
    name: "Occupant",
    deprecation: "v5.0 - use data from Vehicle.Occupant.",
    description: "Occupant data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Position",
    name: "Position",
    datatype: "uint16",
    description:
      "Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.SeatBeltHeight",
    name: "SeatBeltHeight",
    datatype: "uint16",
    description:
      "Seat belt position on vehicle z-axis. Position is relative within available movable range of the seat belt. 0 = Lowermost position supported.",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Seating.Length).",
    datatype: "boolean",
    description: "Is switch to decrease seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    datatype: "boolean",
    description: "Is switch to increase seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating.Length",
    name: "Length",
    datatype: "uint16",
    description:
      "Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Seating",
    name: "Seating",
    comment:
      "Seating is here considered as the part of the seat that supports the thighs. Additional cushions (if any) for support of lower legs is not covered by this branch.",
    description: "Describes signals related to the seat bottom of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.IsReclineBackwardEngaged",
    name: "IsReclineBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineBackwardSwitchEngaged",
    description:
      "Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.IsReclineForwardEngaged",
    name: "IsReclineForwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineForwardSwitchEngaged",
    description:
      "Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarDownSwitchEngaged",
    description:
      "Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessLumbarSupportSwitchEngaged",
    description:
      "Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreLumbarSupportSwitchEngaged",
    description:
      "Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarUpSwitchEngaged",
    description:
      "Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.Lumbar",
    name: "Lumbar",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.Lumbar.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest.SideBolster",
    name: "SideBolster",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.SideBolster.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Backrest",
    name: "Backrest",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Describes switches related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to to Seat.Headrest.IsBackwardSwitchEngaged",
    description:
      "Head rest backward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsDownSwitchEngaged",
    description: "Head rest down switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsForwardSwitchEngaged",
    description:
      "Head rest forward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsUpSwitchEngaged",
    description: "Head rest up switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Headrest",
    name: "Headrest",
    deprecation:
      "v5.0 - nested properties moved to to Seat.Headrest.<Property>",
    description: "Switches for SingleSeat.Headrest.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsBackwardSwitchEngaged",
    description: "Seat backward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsCoolerEngaged",
    name: "IsCoolerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsCoolerSwitchEngaged",
    description: "Cooler switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsDownSwitchEngaged",
    description: "Seat down switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsForwardSwitchEngaged",
    description: "Seat forward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsTiltBackwardEngaged",
    name: "IsTiltBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltBackwardSwitchEngaged",
    description: "Tilt backward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsTiltForwardEngaged",
    name: "IsTiltForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltForwardSwitchEngaged",
    description: "Tilt forward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsUpSwitchEngaged",
    description: "Seat up switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.IsWarmerEngaged",
    name: "IsWarmerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsWarmerSwitchEngaged",
    description: "Warmer switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Massage.IsDecreaseEngaged",
    name: "IsDecreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsDecreaseMassageLevelSwitchEngaged",
    description: "Decrease massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Massage.IsIncreaseEngaged",
    name: "IsIncreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsIncreaseMassageLevelSwitchEngaged",
    description: "Increase massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Massage",
    name: "Massage",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>",
    description: "Switches for SingleSeat.Massage.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Seating.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsBackwardSwitchEngaged",
    description:
      "Is switch to decrease seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Seating.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsForwardSwitchEngaged",
    description:
      "Is switch to increase seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch.Seating",
    name: "Seating",
    deprecation: "v5.0 - nested properties moved to Seat.Seating.<Property>.",
    description: "Describes switches related to the seating of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Switch",
    name: "Switch",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>.",
    description: "Seat switch signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide.Tilt",
    name: "Tilt",
    comment:
      "In VSS it is assumed that tilting a seat affects both seating (seat bottom) and backrest, i.e. the angle between seating and backrest will not be affected when changing Tilt.",
    datatype: "float",
    description:
      "Tilting of seat (seating and backrest) relative to vehicle x-axis. 0 = seat bottom is flat, seat bottom and vehicle x-axis are parallel. Positive degrees = seat tilted backwards, seat x-axis tilted upward, seat z-axis is tilted backward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.DriverSide",
    name: "DriverSide",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Airbag.IsDeployed",
    name: "IsDeployed",
    datatype: "boolean",
    description:
      "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Airbag",
    name: "Airbag",
    description: "Airbag signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLessLumbarSupportSwitchEngaged",
    name: "IsLessLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for less lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    name: "IsLessSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for less side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLumbarDownSwitchEngaged",
    name: "IsLumbarDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsLumbarUpSwitchEngaged",
    name: "IsLumbarUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsMoreLumbarSupportSwitchEngaged",
    name: "IsMoreLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for more lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    name: "IsMoreSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for more side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsReclineBackwardSwitchEngaged",
    name: "IsReclineBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.IsReclineForwardSwitchEngaged",
    name: "IsReclineForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Lumbar.Height",
    name: "Height",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarHeight",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Lumbar.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarSupport",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Lumbar",
    name: "Lumbar",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description:
      "Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.LumbarHeight",
    name: "LumbarHeight",
    datatype: "uint8",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.LumbarSupport",
    name: "LumbarSupport",
    datatype: "float",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.Recline",
    name: "Recline",
    comment:
      "Seat z-axis depends on seat tilt. This means that movement of backrest due to seat tilting will not affect Backrest.Recline as long as the angle between Seating and Backrest are constant. Absolute recline relative to vehicle z-axis can be calculated as Tilt + Backrest.Recline.",
    datatype: "float",
    description:
      "Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.SideBolster.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.SideBolsterSupport",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.SideBolster",
    name: "SideBolster",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description: "Backrest side bolster (lumbar side support) settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest.SideBolsterSupport",
    name: "SideBolsterSupport",
    datatype: "float",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Backrest",
    name: "Backrest",
    description: "Describes signals related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.Angle",
    name: "Angle",
    datatype: "float",
    description:
      "Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.Height",
    name: "Height",
    datatype: "uint8",
    description:
      "Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Headrest",
    name: "Headrest",
    description: "Headrest settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Height",
    name: "Height",
    datatype: "uint16",
    description:
      "Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsBelted",
    name: "IsBelted",
    datatype: "boolean",
    description: "Is the belt engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsCoolerSwitchEngaged",
    name: "IsCoolerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Cooler switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsDecreaseMassageLevelSwitchEngaged",
    name: "IsDecreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Decrease massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsIncreaseMassageLevelSwitchEngaged",
    name: "IsIncreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Increase massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsOccupied",
    name: "IsOccupied",
    datatype: "boolean",
    description: "Does the seat have a passenger in it.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsTiltBackwardSwitchEngaged",
    name: "IsTiltBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsTiltForwardSwitchEngaged",
    name: "IsTiltForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.IsWarmerSwitchEngaged",
    name: "IsWarmerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Warmer switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Massage",
    name: "Massage",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.MassageLevel",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.MassageLevel",
    name: "MassageLevel",
    datatype: "uint8",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Occupant",
    name: "Occupant",
    deprecation: "v5.0 - use data from Vehicle.Occupant.",
    description: "Occupant data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Position",
    name: "Position",
    datatype: "uint16",
    description:
      "Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.SeatBeltHeight",
    name: "SeatBeltHeight",
    datatype: "uint16",
    description:
      "Seat belt position on vehicle z-axis. Position is relative within available movable range of the seat belt. 0 = Lowermost position supported.",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Seating.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Seating.Length).",
    datatype: "boolean",
    description: "Is switch to decrease seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Seating.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    datatype: "boolean",
    description: "Is switch to increase seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Seating.Length",
    name: "Length",
    datatype: "uint16",
    description:
      "Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Seating",
    name: "Seating",
    comment:
      "Seating is here considered as the part of the seat that supports the thighs. Additional cushions (if any) for support of lower legs is not covered by this branch.",
    description: "Describes signals related to the seat bottom of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.IsReclineBackwardEngaged",
    name: "IsReclineBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineBackwardSwitchEngaged",
    description:
      "Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.IsReclineForwardEngaged",
    name: "IsReclineForwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineForwardSwitchEngaged",
    description:
      "Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarDownSwitchEngaged",
    description:
      "Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessLumbarSupportSwitchEngaged",
    description:
      "Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreLumbarSupportSwitchEngaged",
    description:
      "Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarUpSwitchEngaged",
    description:
      "Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.Lumbar",
    name: "Lumbar",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.Lumbar.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.SideBolster.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest.SideBolster",
    name: "SideBolster",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.SideBolster.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Backrest",
    name: "Backrest",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Describes switches related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to to Seat.Headrest.IsBackwardSwitchEngaged",
    description:
      "Head rest backward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsDownSwitchEngaged",
    description: "Head rest down switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsForwardSwitchEngaged",
    description:
      "Head rest forward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsUpSwitchEngaged",
    description: "Head rest up switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Headrest",
    name: "Headrest",
    deprecation:
      "v5.0 - nested properties moved to to Seat.Headrest.<Property>",
    description: "Switches for SingleSeat.Headrest.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsBackwardSwitchEngaged",
    description: "Seat backward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsCoolerEngaged",
    name: "IsCoolerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsCoolerSwitchEngaged",
    description: "Cooler switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsDownSwitchEngaged",
    description: "Seat down switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsForwardSwitchEngaged",
    description: "Seat forward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsTiltBackwardEngaged",
    name: "IsTiltBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltBackwardSwitchEngaged",
    description: "Tilt backward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsTiltForwardEngaged",
    name: "IsTiltForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltForwardSwitchEngaged",
    description: "Tilt forward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsUpSwitchEngaged",
    description: "Seat up switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.IsWarmerEngaged",
    name: "IsWarmerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsWarmerSwitchEngaged",
    description: "Warmer switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Massage.IsDecreaseEngaged",
    name: "IsDecreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsDecreaseMassageLevelSwitchEngaged",
    description: "Decrease massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Massage.IsIncreaseEngaged",
    name: "IsIncreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsIncreaseMassageLevelSwitchEngaged",
    description: "Increase massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Massage",
    name: "Massage",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>",
    description: "Switches for SingleSeat.Massage.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Seating.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsBackwardSwitchEngaged",
    description:
      "Is switch to decrease seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Seating.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsForwardSwitchEngaged",
    description:
      "Is switch to increase seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch.Seating",
    name: "Seating",
    deprecation: "v5.0 - nested properties moved to Seat.Seating.<Property>.",
    description: "Describes switches related to the seating of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Switch",
    name: "Switch",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>.",
    description: "Seat switch signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle.Tilt",
    name: "Tilt",
    comment:
      "In VSS it is assumed that tilting a seat affects both seating (seat bottom) and backrest, i.e. the angle between seating and backrest will not be affected when changing Tilt.",
    datatype: "float",
    description:
      "Tilting of seat (seating and backrest) relative to vehicle x-axis. 0 = seat bottom is flat, seat bottom and vehicle x-axis are parallel. Positive degrees = seat tilted backwards, seat x-axis tilted upward, seat z-axis is tilted backward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.Middle",
    name: "Middle",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Airbag.IsDeployed",
    name: "IsDeployed",
    datatype: "boolean",
    description:
      "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Airbag",
    name: "Airbag",
    description: "Airbag signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLessLumbarSupportSwitchEngaged",
    name: "IsLessLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for less lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    name: "IsLessSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for less side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLumbarDownSwitchEngaged",
    name: "IsLumbarDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsLumbarUpSwitchEngaged",
    name: "IsLumbarUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
    name: "IsMoreLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for more lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    name: "IsMoreSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for more side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsReclineBackwardSwitchEngaged",
    name: "IsReclineBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.IsReclineForwardSwitchEngaged",
    name: "IsReclineForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Lumbar.Height",
    name: "Height",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarHeight",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Lumbar.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarSupport",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Lumbar",
    name: "Lumbar",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description:
      "Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.LumbarHeight",
    name: "LumbarHeight",
    datatype: "uint8",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.LumbarSupport",
    name: "LumbarSupport",
    datatype: "float",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.Recline",
    name: "Recline",
    comment:
      "Seat z-axis depends on seat tilt. This means that movement of backrest due to seat tilting will not affect Backrest.Recline as long as the angle between Seating and Backrest are constant. Absolute recline relative to vehicle z-axis can be calculated as Tilt + Backrest.Recline.",
    datatype: "float",
    description:
      "Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.SideBolster.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.SideBolsterSupport",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.SideBolster",
    name: "SideBolster",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description: "Backrest side bolster (lumbar side support) settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest.SideBolsterSupport",
    name: "SideBolsterSupport",
    datatype: "float",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Backrest",
    name: "Backrest",
    description: "Describes signals related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.Angle",
    name: "Angle",
    datatype: "float",
    description:
      "Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.Height",
    name: "Height",
    datatype: "uint8",
    description:
      "Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Headrest",
    name: "Headrest",
    description: "Headrest settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Height",
    name: "Height",
    datatype: "uint16",
    description:
      "Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsBelted",
    name: "IsBelted",
    datatype: "boolean",
    description: "Is the belt engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsCoolerSwitchEngaged",
    name: "IsCoolerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Cooler switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsDecreaseMassageLevelSwitchEngaged",
    name: "IsDecreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Decrease massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsIncreaseMassageLevelSwitchEngaged",
    name: "IsIncreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Increase massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsOccupied",
    name: "IsOccupied",
    datatype: "boolean",
    description: "Does the seat have a passenger in it.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsTiltBackwardSwitchEngaged",
    name: "IsTiltBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsTiltForwardSwitchEngaged",
    name: "IsTiltForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.IsWarmerSwitchEngaged",
    name: "IsWarmerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Warmer switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Massage",
    name: "Massage",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.MassageLevel",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.MassageLevel",
    name: "MassageLevel",
    datatype: "uint8",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Occupant",
    name: "Occupant",
    deprecation: "v5.0 - use data from Vehicle.Occupant.",
    description: "Occupant data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Position",
    name: "Position",
    datatype: "uint16",
    description:
      "Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.SeatBeltHeight",
    name: "SeatBeltHeight",
    datatype: "uint16",
    description:
      "Seat belt position on vehicle z-axis. Position is relative within available movable range of the seat belt. 0 = Lowermost position supported.",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Seating.Length).",
    datatype: "boolean",
    description: "Is switch to decrease seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    datatype: "boolean",
    description: "Is switch to increase seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating.Length",
    name: "Length",
    datatype: "uint16",
    description:
      "Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Seating",
    name: "Seating",
    comment:
      "Seating is here considered as the part of the seat that supports the thighs. Additional cushions (if any) for support of lower legs is not covered by this branch.",
    description: "Describes signals related to the seat bottom of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.IsReclineBackwardEngaged",
    name: "IsReclineBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineBackwardSwitchEngaged",
    description:
      "Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.IsReclineForwardEngaged",
    name: "IsReclineForwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineForwardSwitchEngaged",
    description:
      "Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarDownSwitchEngaged",
    description:
      "Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessLumbarSupportSwitchEngaged",
    description:
      "Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreLumbarSupportSwitchEngaged",
    description:
      "Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarUpSwitchEngaged",
    description:
      "Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.Lumbar",
    name: "Lumbar",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.Lumbar.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest.SideBolster",
    name: "SideBolster",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.SideBolster.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Backrest",
    name: "Backrest",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Describes switches related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to to Seat.Headrest.IsBackwardSwitchEngaged",
    description:
      "Head rest backward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsDownSwitchEngaged",
    description: "Head rest down switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsForwardSwitchEngaged",
    description:
      "Head rest forward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsUpSwitchEngaged",
    description: "Head rest up switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Headrest",
    name: "Headrest",
    deprecation:
      "v5.0 - nested properties moved to to Seat.Headrest.<Property>",
    description: "Switches for SingleSeat.Headrest.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsBackwardSwitchEngaged",
    description: "Seat backward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsCoolerEngaged",
    name: "IsCoolerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsCoolerSwitchEngaged",
    description: "Cooler switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsDownSwitchEngaged",
    description: "Seat down switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsForwardSwitchEngaged",
    description: "Seat forward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsTiltBackwardEngaged",
    name: "IsTiltBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltBackwardSwitchEngaged",
    description: "Tilt backward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsTiltForwardEngaged",
    name: "IsTiltForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltForwardSwitchEngaged",
    description: "Tilt forward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsUpSwitchEngaged",
    description: "Seat up switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.IsWarmerEngaged",
    name: "IsWarmerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsWarmerSwitchEngaged",
    description: "Warmer switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Massage.IsDecreaseEngaged",
    name: "IsDecreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsDecreaseMassageLevelSwitchEngaged",
    description: "Decrease massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Massage.IsIncreaseEngaged",
    name: "IsIncreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsIncreaseMassageLevelSwitchEngaged",
    description: "Increase massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Massage",
    name: "Massage",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>",
    description: "Switches for SingleSeat.Massage.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Seating.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsBackwardSwitchEngaged",
    description:
      "Is switch to decrease seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Seating.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsForwardSwitchEngaged",
    description:
      "Is switch to increase seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch.Seating",
    name: "Seating",
    deprecation: "v5.0 - nested properties moved to Seat.Seating.<Property>.",
    description: "Describes switches related to the seating of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Switch",
    name: "Switch",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>.",
    description: "Seat switch signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide.Tilt",
    name: "Tilt",
    comment:
      "In VSS it is assumed that tilting a seat affects both seating (seat bottom) and backrest, i.e. the angle between seating and backrest will not be affected when changing Tilt.",
    datatype: "float",
    description:
      "Tilting of seat (seating and backrest) relative to vehicle x-axis. 0 = seat bottom is flat, seat bottom and vehicle x-axis are parallel. Positive degrees = seat tilted backwards, seat x-axis tilted upward, seat z-axis is tilted backward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1.PassengerSide",
    name: "PassengerSide",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row1",
    name: "Row1",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Airbag.IsDeployed",
    name: "IsDeployed",
    datatype: "boolean",
    description:
      "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Airbag",
    name: "Airbag",
    description: "Airbag signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLessLumbarSupportSwitchEngaged",
    name: "IsLessLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for less lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    name: "IsLessSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for less side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLumbarDownSwitchEngaged",
    name: "IsLumbarDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsLumbarUpSwitchEngaged",
    name: "IsLumbarUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
    name: "IsMoreLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for more lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    name: "IsMoreSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for more side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsReclineBackwardSwitchEngaged",
    name: "IsReclineBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.IsReclineForwardSwitchEngaged",
    name: "IsReclineForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Lumbar.Height",
    name: "Height",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarHeight",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Lumbar.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarSupport",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Lumbar",
    name: "Lumbar",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description:
      "Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.LumbarHeight",
    name: "LumbarHeight",
    datatype: "uint8",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.LumbarSupport",
    name: "LumbarSupport",
    datatype: "float",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.Recline",
    name: "Recline",
    comment:
      "Seat z-axis depends on seat tilt. This means that movement of backrest due to seat tilting will not affect Backrest.Recline as long as the angle between Seating and Backrest are constant. Absolute recline relative to vehicle z-axis can be calculated as Tilt + Backrest.Recline.",
    datatype: "float",
    description:
      "Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.SideBolster.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.SideBolsterSupport",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.SideBolster",
    name: "SideBolster",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description: "Backrest side bolster (lumbar side support) settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest.SideBolsterSupport",
    name: "SideBolsterSupport",
    datatype: "float",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Backrest",
    name: "Backrest",
    description: "Describes signals related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.Angle",
    name: "Angle",
    datatype: "float",
    description:
      "Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.Height",
    name: "Height",
    datatype: "uint8",
    description:
      "Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Headrest",
    name: "Headrest",
    description: "Headrest settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Height",
    name: "Height",
    datatype: "uint16",
    description:
      "Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsBelted",
    name: "IsBelted",
    datatype: "boolean",
    description: "Is the belt engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsCoolerSwitchEngaged",
    name: "IsCoolerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Cooler switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsDecreaseMassageLevelSwitchEngaged",
    name: "IsDecreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Decrease massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsIncreaseMassageLevelSwitchEngaged",
    name: "IsIncreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Increase massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsOccupied",
    name: "IsOccupied",
    datatype: "boolean",
    description: "Does the seat have a passenger in it.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsTiltBackwardSwitchEngaged",
    name: "IsTiltBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsTiltForwardSwitchEngaged",
    name: "IsTiltForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.IsWarmerSwitchEngaged",
    name: "IsWarmerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Warmer switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Massage",
    name: "Massage",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.MassageLevel",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.MassageLevel",
    name: "MassageLevel",
    datatype: "uint8",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Occupant",
    name: "Occupant",
    deprecation: "v5.0 - use data from Vehicle.Occupant.",
    description: "Occupant data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Position",
    name: "Position",
    datatype: "uint16",
    description:
      "Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.SeatBeltHeight",
    name: "SeatBeltHeight",
    datatype: "uint16",
    description:
      "Seat belt position on vehicle z-axis. Position is relative within available movable range of the seat belt. 0 = Lowermost position supported.",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Seating.Length).",
    datatype: "boolean",
    description: "Is switch to decrease seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    datatype: "boolean",
    description: "Is switch to increase seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating.Length",
    name: "Length",
    datatype: "uint16",
    description:
      "Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Seating",
    name: "Seating",
    comment:
      "Seating is here considered as the part of the seat that supports the thighs. Additional cushions (if any) for support of lower legs is not covered by this branch.",
    description: "Describes signals related to the seat bottom of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.IsReclineBackwardEngaged",
    name: "IsReclineBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineBackwardSwitchEngaged",
    description:
      "Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.IsReclineForwardEngaged",
    name: "IsReclineForwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineForwardSwitchEngaged",
    description:
      "Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarDownSwitchEngaged",
    description:
      "Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessLumbarSupportSwitchEngaged",
    description:
      "Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreLumbarSupportSwitchEngaged",
    description:
      "Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarUpSwitchEngaged",
    description:
      "Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.Lumbar",
    name: "Lumbar",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.Lumbar.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest.SideBolster",
    name: "SideBolster",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.SideBolster.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Backrest",
    name: "Backrest",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Describes switches related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to to Seat.Headrest.IsBackwardSwitchEngaged",
    description:
      "Head rest backward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsDownSwitchEngaged",
    description: "Head rest down switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsForwardSwitchEngaged",
    description:
      "Head rest forward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsUpSwitchEngaged",
    description: "Head rest up switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Headrest",
    name: "Headrest",
    deprecation:
      "v5.0 - nested properties moved to to Seat.Headrest.<Property>",
    description: "Switches for SingleSeat.Headrest.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsBackwardSwitchEngaged",
    description: "Seat backward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsCoolerEngaged",
    name: "IsCoolerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsCoolerSwitchEngaged",
    description: "Cooler switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsDownSwitchEngaged",
    description: "Seat down switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsForwardSwitchEngaged",
    description: "Seat forward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsTiltBackwardEngaged",
    name: "IsTiltBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltBackwardSwitchEngaged",
    description: "Tilt backward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsTiltForwardEngaged",
    name: "IsTiltForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltForwardSwitchEngaged",
    description: "Tilt forward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsUpSwitchEngaged",
    description: "Seat up switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.IsWarmerEngaged",
    name: "IsWarmerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsWarmerSwitchEngaged",
    description: "Warmer switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Massage.IsDecreaseEngaged",
    name: "IsDecreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsDecreaseMassageLevelSwitchEngaged",
    description: "Decrease massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Massage.IsIncreaseEngaged",
    name: "IsIncreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsIncreaseMassageLevelSwitchEngaged",
    description: "Increase massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Massage",
    name: "Massage",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>",
    description: "Switches for SingleSeat.Massage.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Seating.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsBackwardSwitchEngaged",
    description:
      "Is switch to decrease seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Seating.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsForwardSwitchEngaged",
    description:
      "Is switch to increase seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch.Seating",
    name: "Seating",
    deprecation: "v5.0 - nested properties moved to Seat.Seating.<Property>.",
    description: "Describes switches related to the seating of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Switch",
    name: "Switch",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>.",
    description: "Seat switch signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide.Tilt",
    name: "Tilt",
    comment:
      "In VSS it is assumed that tilting a seat affects both seating (seat bottom) and backrest, i.e. the angle between seating and backrest will not be affected when changing Tilt.",
    datatype: "float",
    description:
      "Tilting of seat (seating and backrest) relative to vehicle x-axis. 0 = seat bottom is flat, seat bottom and vehicle x-axis are parallel. Positive degrees = seat tilted backwards, seat x-axis tilted upward, seat z-axis is tilted backward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.DriverSide",
    name: "DriverSide",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Airbag.IsDeployed",
    name: "IsDeployed",
    datatype: "boolean",
    description:
      "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Airbag",
    name: "Airbag",
    description: "Airbag signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLessLumbarSupportSwitchEngaged",
    name: "IsLessLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for less lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    name: "IsLessSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for less side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLumbarDownSwitchEngaged",
    name: "IsLumbarDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsLumbarUpSwitchEngaged",
    name: "IsLumbarUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsMoreLumbarSupportSwitchEngaged",
    name: "IsMoreLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for more lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    name: "IsMoreSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for more side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsReclineBackwardSwitchEngaged",
    name: "IsReclineBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.IsReclineForwardSwitchEngaged",
    name: "IsReclineForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Lumbar.Height",
    name: "Height",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarHeight",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Lumbar.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarSupport",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Lumbar",
    name: "Lumbar",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description:
      "Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.LumbarHeight",
    name: "LumbarHeight",
    datatype: "uint8",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.LumbarSupport",
    name: "LumbarSupport",
    datatype: "float",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.Recline",
    name: "Recline",
    comment:
      "Seat z-axis depends on seat tilt. This means that movement of backrest due to seat tilting will not affect Backrest.Recline as long as the angle between Seating and Backrest are constant. Absolute recline relative to vehicle z-axis can be calculated as Tilt + Backrest.Recline.",
    datatype: "float",
    description:
      "Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.SideBolster.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.SideBolsterSupport",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.SideBolster",
    name: "SideBolster",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description: "Backrest side bolster (lumbar side support) settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest.SideBolsterSupport",
    name: "SideBolsterSupport",
    datatype: "float",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Backrest",
    name: "Backrest",
    description: "Describes signals related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.Angle",
    name: "Angle",
    datatype: "float",
    description:
      "Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.Height",
    name: "Height",
    datatype: "uint8",
    description:
      "Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Headrest",
    name: "Headrest",
    description: "Headrest settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Height",
    name: "Height",
    datatype: "uint16",
    description:
      "Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsBelted",
    name: "IsBelted",
    datatype: "boolean",
    description: "Is the belt engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsCoolerSwitchEngaged",
    name: "IsCoolerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Cooler switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsDecreaseMassageLevelSwitchEngaged",
    name: "IsDecreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Decrease massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsIncreaseMassageLevelSwitchEngaged",
    name: "IsIncreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Increase massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsOccupied",
    name: "IsOccupied",
    datatype: "boolean",
    description: "Does the seat have a passenger in it.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsTiltBackwardSwitchEngaged",
    name: "IsTiltBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsTiltForwardSwitchEngaged",
    name: "IsTiltForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.IsWarmerSwitchEngaged",
    name: "IsWarmerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Warmer switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Massage",
    name: "Massage",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.MassageLevel",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.MassageLevel",
    name: "MassageLevel",
    datatype: "uint8",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Occupant",
    name: "Occupant",
    deprecation: "v5.0 - use data from Vehicle.Occupant.",
    description: "Occupant data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Position",
    name: "Position",
    datatype: "uint16",
    description:
      "Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.SeatBeltHeight",
    name: "SeatBeltHeight",
    datatype: "uint16",
    description:
      "Seat belt position on vehicle z-axis. Position is relative within available movable range of the seat belt. 0 = Lowermost position supported.",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Seating.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Seating.Length).",
    datatype: "boolean",
    description: "Is switch to decrease seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Seating.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    datatype: "boolean",
    description: "Is switch to increase seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Seating.Length",
    name: "Length",
    datatype: "uint16",
    description:
      "Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Seating",
    name: "Seating",
    comment:
      "Seating is here considered as the part of the seat that supports the thighs. Additional cushions (if any) for support of lower legs is not covered by this branch.",
    description: "Describes signals related to the seat bottom of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.IsReclineBackwardEngaged",
    name: "IsReclineBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineBackwardSwitchEngaged",
    description:
      "Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.IsReclineForwardEngaged",
    name: "IsReclineForwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineForwardSwitchEngaged",
    description:
      "Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarDownSwitchEngaged",
    description:
      "Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessLumbarSupportSwitchEngaged",
    description:
      "Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreLumbarSupportSwitchEngaged",
    description:
      "Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarUpSwitchEngaged",
    description:
      "Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.Lumbar",
    name: "Lumbar",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.Lumbar.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.SideBolster.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest.SideBolster",
    name: "SideBolster",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.SideBolster.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Backrest",
    name: "Backrest",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Describes switches related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to to Seat.Headrest.IsBackwardSwitchEngaged",
    description:
      "Head rest backward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsDownSwitchEngaged",
    description: "Head rest down switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsForwardSwitchEngaged",
    description:
      "Head rest forward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsUpSwitchEngaged",
    description: "Head rest up switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Headrest",
    name: "Headrest",
    deprecation:
      "v5.0 - nested properties moved to to Seat.Headrest.<Property>",
    description: "Switches for SingleSeat.Headrest.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsBackwardSwitchEngaged",
    description: "Seat backward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsCoolerEngaged",
    name: "IsCoolerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsCoolerSwitchEngaged",
    description: "Cooler switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsDownSwitchEngaged",
    description: "Seat down switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsForwardSwitchEngaged",
    description: "Seat forward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsTiltBackwardEngaged",
    name: "IsTiltBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltBackwardSwitchEngaged",
    description: "Tilt backward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsTiltForwardEngaged",
    name: "IsTiltForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltForwardSwitchEngaged",
    description: "Tilt forward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsUpSwitchEngaged",
    description: "Seat up switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.IsWarmerEngaged",
    name: "IsWarmerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsWarmerSwitchEngaged",
    description: "Warmer switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Massage.IsDecreaseEngaged",
    name: "IsDecreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsDecreaseMassageLevelSwitchEngaged",
    description: "Decrease massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Massage.IsIncreaseEngaged",
    name: "IsIncreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsIncreaseMassageLevelSwitchEngaged",
    description: "Increase massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Massage",
    name: "Massage",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>",
    description: "Switches for SingleSeat.Massage.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Seating.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsBackwardSwitchEngaged",
    description:
      "Is switch to decrease seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Seating.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsForwardSwitchEngaged",
    description:
      "Is switch to increase seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch.Seating",
    name: "Seating",
    deprecation: "v5.0 - nested properties moved to Seat.Seating.<Property>.",
    description: "Describes switches related to the seating of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Switch",
    name: "Switch",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>.",
    description: "Seat switch signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle.Tilt",
    name: "Tilt",
    comment:
      "In VSS it is assumed that tilting a seat affects both seating (seat bottom) and backrest, i.e. the angle between seating and backrest will not be affected when changing Tilt.",
    datatype: "float",
    description:
      "Tilting of seat (seating and backrest) relative to vehicle x-axis. 0 = seat bottom is flat, seat bottom and vehicle x-axis are parallel. Positive degrees = seat tilted backwards, seat x-axis tilted upward, seat z-axis is tilted backward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.Middle",
    name: "Middle",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Airbag.IsDeployed",
    name: "IsDeployed",
    datatype: "boolean",
    description:
      "Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Airbag",
    name: "Airbag",
    description: "Airbag signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLessLumbarSupportSwitchEngaged",
    name: "IsLessLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for less lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    name: "IsLessSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for less side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLumbarDownSwitchEngaged",
    name: "IsLumbarDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsLumbarUpSwitchEngaged",
    name: "IsLumbarUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Lumbar up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsMoreLumbarSupportSwitchEngaged",
    name: "IsMoreLumbarSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.LumbarSupport).",
    datatype: "boolean",
    description: "Is switch for more lumbar support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    name: "IsMoreSideBolsterSupportSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.SideBolsterSupport).",
    datatype: "boolean",
    description: "Is switch for more side bolster support engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsReclineBackwardSwitchEngaged",
    name: "IsReclineBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.IsReclineForwardSwitchEngaged",
    name: "IsReclineForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Backrest.Recline).",
    datatype: "boolean",
    description: "Backrest recline forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Lumbar.Height",
    name: "Height",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarHeight",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Lumbar.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.LumbarSupport",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Lumbar",
    name: "Lumbar",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description:
      "Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.LumbarHeight",
    name: "LumbarHeight",
    datatype: "uint8",
    description:
      "Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.LumbarSupport",
    name: "LumbarSupport",
    datatype: "float",
    description:
      "Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.Recline",
    name: "Recline",
    comment:
      "Seat z-axis depends on seat tilt. This means that movement of backrest due to seat tilting will not affect Backrest.Recline as long as the angle between Seating and Backrest are constant. Absolute recline relative to vehicle z-axis can be calculated as Tilt + Backrest.Recline.",
    datatype: "float",
    description:
      "Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.SideBolster.Support",
    name: "Support",
    datatype: "float",
    deprecation: "v5.0 - refactored to Seat.Backrest.SideBolsterSupport",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.SideBolster",
    name: "SideBolster",
    deprecation: "v5.0 - nested properties moved to Seat.Backrest.<Property>.",
    description: "Backrest side bolster (lumbar side support) settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest.SideBolsterSupport",
    name: "SideBolsterSupport",
    datatype: "float",
    description:
      "Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Backrest",
    name: "Backrest",
    description: "Describes signals related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.Angle",
    name: "Angle",
    datatype: "float",
    description:
      "Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.Height",
    name: "Height",
    datatype: "uint8",
    description:
      "Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Angle).",
    datatype: "boolean",
    description: "Head rest forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Headrest.Height).",
    datatype: "boolean",
    description: "Head rest up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Headrest",
    name: "Headrest",
    description: "Headrest settings.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Height",
    name: "Height",
    datatype: "uint16",
    description:
      "Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsBelted",
    name: "IsBelted",
    datatype: "boolean",
    description: "Is the belt engaged.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsCoolerSwitchEngaged",
    name: "IsCoolerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Cooler switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsDecreaseMassageLevelSwitchEngaged",
    name: "IsDecreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Decrease massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsDownSwitchEngaged",
    name: "IsDownSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat down switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Position).",
    datatype: "boolean",
    description: "Seat forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsIncreaseMassageLevelSwitchEngaged",
    name: "IsIncreaseMassageLevelSwitchEngaged",
    comment: "Affects the property (SingleSeat.MassageLevel).",
    datatype: "boolean",
    description: "Increase massage level switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsOccupied",
    name: "IsOccupied",
    datatype: "boolean",
    description: "Does the seat have a passenger in it.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsTiltBackwardSwitchEngaged",
    name: "IsTiltBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt backward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsTiltForwardSwitchEngaged",
    name: "IsTiltForwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Tilt).",
    datatype: "boolean",
    description: "Tilt forward switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsUpSwitchEngaged",
    name: "IsUpSwitchEngaged",
    comment: "Affects the property (SingleSeat.Height).",
    datatype: "boolean",
    description: "Seat up switch engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.IsWarmerSwitchEngaged",
    name: "IsWarmerSwitchEngaged",
    comment: "Affects the property (SingleSeat.Heating).",
    datatype: "boolean",
    description: "Warmer switch for Seat heater.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Massage",
    name: "Massage",
    datatype: "uint8",
    deprecation: "v5.0 - refactored to Seat.MassageLevel",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.MassageLevel",
    name: "MassageLevel",
    datatype: "uint8",
    description: "Seat massage level. 0 = off. 100 = max massage.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Occupant",
    name: "Occupant",
    deprecation: "v5.0 - use data from Vehicle.Occupant.",
    description: "Occupant data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Position",
    name: "Position",
    datatype: "uint16",
    description:
      "Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.SeatBeltHeight",
    name: "SeatBeltHeight",
    datatype: "uint16",
    description:
      "Seat belt position on vehicle z-axis. Position is relative within available movable range of the seat belt. 0 = Lowermost position supported.",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating.IsBackwardSwitchEngaged",
    name: "IsBackwardSwitchEngaged",
    comment: "Affects the property (SingleSeat.Seating.Length).",
    datatype: "boolean",
    description: "Is switch to decrease seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating.IsForwardSwitchEngaged",
    name: "IsForwardSwitchEngaged",
    datatype: "boolean",
    description: "Is switch to increase seating length engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating.Length",
    name: "Length",
    datatype: "uint16",
    description:
      "Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).",
    min: 0,
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Seating",
    name: "Seating",
    comment:
      "Seating is here considered as the part of the seat that supports the thighs. Additional cushions (if any) for support of lower legs is not covered by this branch.",
    description: "Describes signals related to the seat bottom of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.IsReclineBackwardEngaged",
    name: "IsReclineBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineBackwardSwitchEngaged",
    description:
      "Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.IsReclineForwardEngaged",
    name: "IsReclineForwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsReclineForwardSwitchEngaged",
    description:
      "Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarDownSwitchEngaged",
    description:
      "Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessLumbarSupportSwitchEngaged",
    description:
      "Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreLumbarSupportSwitchEngaged",
    description:
      "Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Backrest.IsLumbarUpSwitchEngaged",
    description:
      "Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.Lumbar",
    name: "Lumbar",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.Lumbar.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.SideBolster.IsLessSupportEngaged",
    name: "IsLessSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsLessSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.SideBolster.IsMoreSupportEngaged",
    name: "IsMoreSupportEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.Backrest.IsMoreSideBolsterSupportSwitchEngaged",
    description:
      "Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest.SideBolster",
    name: "SideBolster",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Switches for SingleSeat.Backrest.SideBolster.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Backrest",
    name: "Backrest",
    deprecation:
      "v5.0 - nested properties refactored to Seat.Backrest.<Property>",
    description: "Describes switches related to the backrest of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to to Seat.Headrest.IsBackwardSwitchEngaged",
    description:
      "Head rest backward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsDownSwitchEngaged",
    description: "Head rest down switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsForwardSwitchEngaged",
    description:
      "Head rest forward switch engaged (SingleSeat.Headrest.Angle).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to to Seat.Headrest.IsUpSwitchEngaged",
    description: "Head rest up switch engaged (SingleSeat.Headrest.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Headrest",
    name: "Headrest",
    deprecation:
      "v5.0 - nested properties moved to to Seat.Headrest.<Property>",
    description: "Switches for SingleSeat.Headrest.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsBackwardSwitchEngaged",
    description: "Seat backward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsCoolerEngaged",
    name: "IsCoolerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsCoolerSwitchEngaged",
    description: "Cooler switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsDownEngaged",
    name: "IsDownEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsDownSwitchEngaged",
    description: "Seat down switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsForwardSwitchEngaged",
    description: "Seat forward switch engaged (SingleSeat.Position).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsTiltBackwardEngaged",
    name: "IsTiltBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltBackwardSwitchEngaged",
    description: "Tilt backward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsTiltForwardEngaged",
    name: "IsTiltForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsTiltForwardSwitchEngaged",
    description: "Tilt forward switch engaged (SingleSeat.Tilt).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsUpEngaged",
    name: "IsUpEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsUpSwitchEngaged",
    description: "Seat up switch engaged (SingleSeat.Height).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.IsWarmerEngaged",
    name: "IsWarmerEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.IsWarmerSwitchEngaged",
    description: "Warmer switch for Seat heater (SingleSeat.Heating).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Massage.IsDecreaseEngaged",
    name: "IsDecreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsDecreaseMassageLevelSwitchEngaged",
    description: "Decrease massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Massage.IsIncreaseEngaged",
    name: "IsIncreaseEngaged",
    datatype: "boolean",
    deprecation:
      "v5.0 - refactored to Seat.IsIncreaseMassageLevelSwitchEngaged",
    description: "Increase massage level switch engaged (SingleSeat.Massage).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Massage",
    name: "Massage",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>",
    description: "Switches for SingleSeat.Massage.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Seating.IsBackwardEngaged",
    name: "IsBackwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsBackwardSwitchEngaged",
    description:
      "Is switch to decrease seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Seating.IsForwardEngaged",
    name: "IsForwardEngaged",
    datatype: "boolean",
    deprecation: "v5.0 - refactored to Seat.Seating.IsForwardSwitchEngaged",
    description:
      "Is switch to increase seating length engaged (SingleSeat.Seating.Length).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch.Seating",
    name: "Seating",
    deprecation: "v5.0 - nested properties moved to Seat.Seating.<Property>.",
    description: "Describes switches related to the seating of the seat.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Switch",
    name: "Switch",
    deprecation: "v5.0 - nested properties moved to Seat.<Property>.",
    description: "Seat switch signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide.Tilt",
    name: "Tilt",
    comment:
      "In VSS it is assumed that tilting a seat affects both seating (seat bottom) and backrest, i.e. the angle between seating and backrest will not be affected when changing Tilt.",
    datatype: "float",
    description:
      "Tilting of seat (seating and backrest) relative to vehicle x-axis. 0 = seat bottom is flat, seat bottom and vehicle x-axis are parallel. Positive degrees = seat tilted backwards, seat x-axis tilted upward, seat z-axis is tilted backward.",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2.PassengerSide",
    name: "PassengerSide",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat.Row2",
    name: "Row2",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Seat",
    name: "Seat",
    description: "All seats.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.SeatPosCount",
    name: "SeatPosCount",
    comment:
      "Default value corresponds to two seats in front row and 3 seats in second row.",
    datatype: "uint8[]",
    default: [2, 3],
    description: "Number of seats across each row from the front to the rear.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.SeatRowCount",
    name: "SeatRowCount",
    comment: "Default value corresponds to two rows of seats.",
    datatype: "uint8",
    default: 2,
    description: "Number of seat rows in vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof.Position",
    name: "Position",
    datatype: "int8",
    description:
      "Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted.",
    max: 100,
    min: -100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof.Shade.IsOpen",
    name: "IsOpen",
    datatype: "boolean",
    description:
      "Is item open or closed? True = Fully or partially open. False = Fully closed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof.Shade.Position",
    name: "Position",
    comment:
      "Relationship between Open/Close and Start/End position is item dependent.",
    datatype: "uint8",
    description: "Item position. 0 = Start position 100 = End position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof.Shade.Switch",
    name: "Switch",
    allowed: ["INACTIVE", "CLOSE", "OPEN", "ONE_SHOT_CLOSE", "ONE_SHOT_OPEN"],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or blind.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof.Shade",
    name: "Shade",
    description:
      "Sun roof shade status. Open = Retracted, Closed = Deployed. Start position for Sunroof.Shade is Open/Retracted.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof.Switch",
    name: "Switch",
    allowed: [
      "INACTIVE",
      "CLOSE",
      "OPEN",
      "ONE_SHOT_CLOSE",
      "ONE_SHOT_OPEN",
      "TILT_UP",
      "TILT_DOWN",
    ],
    datatype: "string",
    description:
      "Switch controlling sliding action such as window, sunroof, or shade.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin.Sunroof",
    name: "Sunroof",
    description: "Sun roof status.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Cabin",
    name: "Cabin",
    description: "All in-cabin components, including doors.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CargoVolume",
    name: "CargoVolume",
    datatype: "float",
    description:
      "The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.",
    min: 0,
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Accelerator.PedalPosition",
    name: "PedalPosition",
    datatype: "uint8",
    description:
      "Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Accelerator",
    name: "Accelerator",
    description: "Accelerator signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.AxleWidth",
    name: "AxleWidth",
    comment: "Corresponds to SAE J1100-2009 W113.",
    datatype: "uint16",
    description:
      "The lateral distance between the wheel mounting faces, measured along the spindle axis.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.SteeringAngle",
    name: "SteeringAngle",
    comment:
      "Single track two-axle model steering angle refers to the angle that a centrally mounted wheel would have.",
    datatype: "float",
    description:
      "Single track two-axle model steering angle. Angle according to ISO 8855. Positive = degrees to the left. Negative = degrees to the right.",
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.TireAspectRatio",
    name: "TireAspectRatio",
    datatype: "uint8",
    description:
      "Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.TireDiameter",
    name: "TireDiameter",
    datatype: "float",
    description:
      "Outer diameter of tires, in inches, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "inch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.TireWidth",
    name: "TireWidth",
    datatype: "uint16",
    description:
      "Nominal section width of tires, in mm, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.TrackWidth",
    name: "TrackWidth",
    comment: "Corresponds to SAE J1100-2009 W102.",
    datatype: "uint16",
    description:
      "The lateral distance between the centers of the wheels, measured along the spindle, or axle axis. If there are dual rear wheels, measure from the midway points between the inner and outer tires.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.TreadWidth",
    name: "TreadWidth",
    comment: "Corresponds to SAE J1100-2009 W101.",
    datatype: "uint16",
    description:
      "The lateral distance between the centerlines of the base tires at ground, including camber angle. If there are dual rear wheels, measure from the midway points between the inner and outer tires.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.AngularSpeed",
    name: "AngularSpeed",
    comment:
      "Positive if wheel is trying to drive vehicle forward. Negative if wheel is trying to drive vehicle backward.",
    datatype: "float",
    description: "Angular (Rotational) speed of a vehicle's wheel.",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.FluidLevel",
    name: "FluidLevel",
    datatype: "uint8",
    description: "Brake fluid level as percent. 0 = Empty. 100 = Full.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.IsBrakesWorn",
    name: "IsBrakesWorn",
    datatype: "boolean",
    description: "Brake pad wear status. True = Worn. False = Not Worn.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.IsFluidLevelLow",
    name: "IsFluidLevelLow",
    datatype: "boolean",
    description:
      "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake.PadWear",
    name: "PadWear",
    datatype: "uint8",
    description: "Brake pad wear as percent. 0 = No Wear. 100 = Worn.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Brake",
    name: "Brake",
    description: "Brake signals for wheel",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Speed",
    name: "Speed",
    datatype: "float",
    description: "Linear speed of a vehicle's wheel.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire.IsPressureLow",
    name: "IsPressureLow",
    datatype: "boolean",
    description:
      "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire.Pressure",
    name: "Pressure",
    datatype: "uint16",
    description: "Tire pressure in kilo-Pascal.",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Tire temperature in Celsius.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left.Tire",
    name: "Tire",
    description: "Tire signals for wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Left",
    name: "Left",
    description: "Wheel signals for axle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.AngularSpeed",
    name: "AngularSpeed",
    comment:
      "Positive if wheel is trying to drive vehicle forward. Negative if wheel is trying to drive vehicle backward.",
    datatype: "float",
    description: "Angular (Rotational) speed of a vehicle's wheel.",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.FluidLevel",
    name: "FluidLevel",
    datatype: "uint8",
    description: "Brake fluid level as percent. 0 = Empty. 100 = Full.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.IsBrakesWorn",
    name: "IsBrakesWorn",
    datatype: "boolean",
    description: "Brake pad wear status. True = Worn. False = Not Worn.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.IsFluidLevelLow",
    name: "IsFluidLevelLow",
    datatype: "boolean",
    description:
      "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake.PadWear",
    name: "PadWear",
    datatype: "uint8",
    description: "Brake pad wear as percent. 0 = No Wear. 100 = Worn.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Brake",
    name: "Brake",
    description: "Brake signals for wheel",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Speed",
    name: "Speed",
    datatype: "float",
    description: "Linear speed of a vehicle's wheel.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire.IsPressureLow",
    name: "IsPressureLow",
    datatype: "boolean",
    description:
      "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire.Pressure",
    name: "Pressure",
    datatype: "uint16",
    description: "Tire pressure in kilo-Pascal.",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Tire temperature in Celsius.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right.Tire",
    name: "Tire",
    description: "Tire signals for wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel.Right",
    name: "Right",
    description: "Wheel signals for axle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.Wheel",
    name: "Wheel",
    description: "Wheel signals for axle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.WheelCount",
    name: "WheelCount",
    datatype: "uint8",
    description: "Number of wheels on the axle",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.WheelDiameter",
    name: "WheelDiameter",
    datatype: "float",
    description:
      "Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "inch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1.WheelWidth",
    name: "WheelWidth",
    datatype: "float",
    description:
      "Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "inch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row1",
    name: "Row1",
    description: "Axle signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.AxleWidth",
    name: "AxleWidth",
    comment: "Corresponds to SAE J1100-2009 W113.",
    datatype: "uint16",
    description:
      "The lateral distance between the wheel mounting faces, measured along the spindle axis.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.SteeringAngle",
    name: "SteeringAngle",
    comment:
      "Single track two-axle model steering angle refers to the angle that a centrally mounted wheel would have.",
    datatype: "float",
    description:
      "Single track two-axle model steering angle. Angle according to ISO 8855. Positive = degrees to the left. Negative = degrees to the right.",
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.TireAspectRatio",
    name: "TireAspectRatio",
    datatype: "uint8",
    description:
      "Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.TireDiameter",
    name: "TireDiameter",
    datatype: "float",
    description:
      "Outer diameter of tires, in inches, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "inch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.TireWidth",
    name: "TireWidth",
    datatype: "uint16",
    description:
      "Nominal section width of tires, in mm, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.TrackWidth",
    name: "TrackWidth",
    comment: "Corresponds to SAE J1100-2009 W102.",
    datatype: "uint16",
    description:
      "The lateral distance between the centers of the wheels, measured along the spindle, or axle axis. If there are dual rear wheels, measure from the midway points between the inner and outer tires.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.TreadWidth",
    name: "TreadWidth",
    comment: "Corresponds to SAE J1100-2009 W101.",
    datatype: "uint16",
    description:
      "The lateral distance between the centerlines of the base tires at ground, including camber angle. If there are dual rear wheels, measure from the midway points between the inner and outer tires.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.AngularSpeed",
    name: "AngularSpeed",
    comment:
      "Positive if wheel is trying to drive vehicle forward. Negative if wheel is trying to drive vehicle backward.",
    datatype: "float",
    description: "Angular (Rotational) speed of a vehicle's wheel.",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.FluidLevel",
    name: "FluidLevel",
    datatype: "uint8",
    description: "Brake fluid level as percent. 0 = Empty. 100 = Full.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.IsBrakesWorn",
    name: "IsBrakesWorn",
    datatype: "boolean",
    description: "Brake pad wear status. True = Worn. False = Not Worn.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.IsFluidLevelLow",
    name: "IsFluidLevelLow",
    datatype: "boolean",
    description:
      "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake.PadWear",
    name: "PadWear",
    datatype: "uint8",
    description: "Brake pad wear as percent. 0 = No Wear. 100 = Worn.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Brake",
    name: "Brake",
    description: "Brake signals for wheel",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Speed",
    name: "Speed",
    datatype: "float",
    description: "Linear speed of a vehicle's wheel.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire.IsPressureLow",
    name: "IsPressureLow",
    datatype: "boolean",
    description:
      "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire.Pressure",
    name: "Pressure",
    datatype: "uint16",
    description: "Tire pressure in kilo-Pascal.",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Tire temperature in Celsius.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left.Tire",
    name: "Tire",
    description: "Tire signals for wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Left",
    name: "Left",
    description: "Wheel signals for axle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.AngularSpeed",
    name: "AngularSpeed",
    comment:
      "Positive if wheel is trying to drive vehicle forward. Negative if wheel is trying to drive vehicle backward.",
    datatype: "float",
    description: "Angular (Rotational) speed of a vehicle's wheel.",
    type: "sensor",
    unit: "degrees/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.FluidLevel",
    name: "FluidLevel",
    datatype: "uint8",
    description: "Brake fluid level as percent. 0 = Empty. 100 = Full.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.IsBrakesWorn",
    name: "IsBrakesWorn",
    datatype: "boolean",
    description: "Brake pad wear status. True = Worn. False = Not Worn.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.IsFluidLevelLow",
    name: "IsFluidLevelLow",
    datatype: "boolean",
    description:
      "Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake.PadWear",
    name: "PadWear",
    datatype: "uint8",
    description: "Brake pad wear as percent. 0 = No Wear. 100 = Worn.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Brake",
    name: "Brake",
    description: "Brake signals for wheel",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Speed",
    name: "Speed",
    datatype: "float",
    description: "Linear speed of a vehicle's wheel.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire.IsPressureLow",
    name: "IsPressureLow",
    datatype: "boolean",
    description:
      "Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire.Pressure",
    name: "Pressure",
    datatype: "uint16",
    description: "Tire pressure in kilo-Pascal.",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Tire temperature in Celsius.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right.Tire",
    name: "Tire",
    description: "Tire signals for wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel.Right",
    name: "Right",
    description: "Wheel signals for axle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.Wheel",
    name: "Wheel",
    description: "Wheel signals for axle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.WheelCount",
    name: "WheelCount",
    datatype: "uint8",
    description: "Number of wheels on the axle",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.WheelDiameter",
    name: "WheelDiameter",
    datatype: "float",
    description:
      "Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "inch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2.WheelWidth",
    name: "WheelWidth",
    datatype: "float",
    description:
      "Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.",
    type: "attribute",
    unit: "inch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle.Row2",
    name: "Row2",
    description: "Axle signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Axle",
    name: "Axle",
    description: "Axle signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.AxleCount",
    name: "AxleCount",
    datatype: "uint8",
    default: 2,
    description: "Number of axles on the vehicle",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Brake.IsDriverEmergencyBrakingDetected",
    name: "IsDriverEmergencyBrakingDetected",
    comment:
      "Detection of emergency braking can trigger Emergency Brake Assist (EBA) to engage.",
    datatype: "boolean",
    description:
      "Indicates if emergency braking initiated by driver is detected. True = Emergency braking detected. False = Emergency braking not detected.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Brake.PedalPosition",
    name: "PedalPosition",
    datatype: "uint8",
    description:
      "Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Brake",
    name: "Brake",
    description: "Brake system signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.ParkingBrake.IsAutoApplyEnabled",
    name: "IsAutoApplyEnabled",
    datatype: "boolean",
    description:
      "Indicates if parking brake will be automatically engaged when the vehicle engine is turned off.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.ParkingBrake.IsEngaged",
    name: "IsEngaged",
    datatype: "boolean",
    description:
      "Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.ParkingBrake",
    name: "ParkingBrake",
    description: "Parking brake signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.SteeringWheel.Angle",
    name: "Angle",
    datatype: "int16",
    description:
      "Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.",
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.SteeringWheel.Extension",
    name: "Extension",
    datatype: "uint8",
    description:
      "Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.SteeringWheel.HeatingCooling",
    name: "HeatingCooling",
    datatype: "int8",
    description:
      "Heating or Cooling requsted for the Item. -100 = Maximum cooling, 0 = Heating/cooling deactivated, 100 = Maximum heating.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.SteeringWheel.Tilt",
    name: "Tilt",
    datatype: "uint8",
    description:
      "Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.SteeringWheel",
    name: "SteeringWheel",
    description: "Steering wheel signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis.Wheelbase",
    name: "Wheelbase",
    datatype: "uint16",
    default: 0,
    description: "Overall wheelbase, in mm.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Chassis",
    name: "Chassis",
    description:
      "All data concerning steering, suspension, wheels, and brakes.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Connectivity.IsConnectivityAvailable",
    name: "IsConnectivityAvailable",
    comment:
      "This signal can be used by onboard vehicle services to decide what features that shall be offered to the driver, for example disable the 'check for update' button if vehicle does not have connectivity.",
    datatype: "boolean",
    description:
      "Indicates if connectivity between vehicle and cloud is available. True = Connectivity is available. False = Connectivity is not available.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Connectivity",
    name: "Connectivity",
    description: "Connectivity data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurbWeight",
    name: "CurbWeight",
    datatype: "uint16",
    default: 0,
    description:
      "Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.",
    type: "attribute",
    unit: "kg",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.Altitude",
    name: "Altitude",
    datatype: "double",
    description:
      "Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.GNSSReceiver.FixType",
    name: "FixType",
    allowed: [
      "NONE",
      "TWO_D",
      "TWO_D_SATELLITE_BASED_AUGMENTATION",
      "TWO_D_GROUND_BASED_AUGMENTATION",
      "TWO_D_SATELLITE_AND_GROUND_BASED_AUGMENTATION",
      "THREE_D",
      "THREE_D_SATELLITE_BASED_AUGMENTATION",
      "THREE_D_GROUND_BASED_AUGMENTATION",
      "THREE_D_SATELLITE_AND_GROUND_BASED_AUGMENTATION",
    ],
    datatype: "string",
    description: "Fix status of GNSS receiver.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.GNSSReceiver.MountingPosition",
    name: "MountingPosition",
    description:
      "Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.GNSSReceiver",
    name: "GNSSReceiver",
    description:
      "Information on the GNSS receiver used for determining current location.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.Heading",
    name: "Heading",
    datatype: "double",
    description:
      "Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.",
    max: 360,
    min: 0,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.HorizontalAccuracy",
    name: "HorizontalAccuracy",
    datatype: "double",
    description: "Accuracy of the latitude and longitude coordinates.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.Latitude",
    name: "Latitude",
    datatype: "double",
    description:
      "Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.Longitude",
    name: "Longitude",
    datatype: "double",
    description:
      "Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.Timestamp",
    name: "Timestamp",
    datatype: "string",
    description:
      "Timestamp from GNSS system for current location, formatted according to ISO 8601 with UTC time zone.",
    type: "sensor",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation.VerticalAccuracy",
    name: "VerticalAccuracy",
    datatype: "double",
    description: "Accuracy of altitude.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentLocation",
    name: "CurrentLocation",
    description: "The current latitude and longitude of the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.CurrentOverallWeight",
    name: "CurrentOverallWeight",
    datatype: "uint16",
    description:
      "Current overall Vehicle weight. Including passengers, cargo and other load inside the car.",
    type: "sensor",
    unit: "kg",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Diagnostics.DTCCount",
    name: "DTCCount",
    datatype: "uint8",
    description: "Number of Diagnostic Trouble Codes (DTC)",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Diagnostics.DTCList",
    name: "DTCList",
    datatype: "string[]",
    description:
      "List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Diagnostics",
    name: "Diagnostics",
    description: "Diagnostics data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.AttentiveProbability",
    name: "AttentiveProbability",
    datatype: "float",
    description: "Probability of attentiveness of the driver.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.DistractionLevel",
    name: "DistractionLevel",
    datatype: "float",
    description:
      "Distraction level of the driver, which can be evaluated by multiple factors e.g. driving situation, acoustical or optical signals inside the cockpit, ongoing phone calls.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.FatigueLevel",
    name: "FatigueLevel",
    datatype: "float",
    description:
      "Fatigue level of the driver, which can be evaluated by multiple factors e.g. trip time, behaviour of steering, eye status.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.HeartRate",
    name: "HeartRate",
    datatype: "uint16",
    description: "Heart rate of the driver.",
    type: "sensor",
    unit: "bpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.Identifier",
    name: "Identifier",
    deprecation: "v5.0 - use data from Vehicle.Occupant.*.*.Identifier.",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.IsEyesOnRoad",
    name: "IsEyesOnRoad",
    datatype: "boolean",
    description: "Has driver the eyes on road or not?",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver.IsHandsOnWheel",
    name: "IsHandsOnWheel",
    datatype: "boolean",
    description: "Are the driver's hands on the steering wheel or not?",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Driver",
    name: "Driver",
    description: "Driver data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.EmissionsCO2",
    name: "EmissionsCO2",
    datatype: "int16",
    description: "The CO2 emissions.",
    type: "attribute",
    unit: "g/km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Exterior.AirTemperature",
    name: "AirTemperature",
    datatype: "float",
    description: "Air temperature outside the vehicle.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Exterior.Humidity",
    name: "Humidity",
    datatype: "float",
    description:
      "Relative humidity outside the vehicle. 0 = Dry, 100 = Air fully saturated.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Exterior.LightIntensity",
    name: "LightIntensity",
    comment:
      "Mapping to physical units and calculation method is sensor specific.",
    datatype: "float",
    description:
      "Light intensity outside the vehicle. 0 = No light detected, 100 = Fully lit.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Exterior",
    name: "Exterior",
    description: "Information about exterior measured by vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.GrossWeight",
    name: "GrossWeight",
    datatype: "uint16",
    default: 0,
    description:
      "Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.",
    type: "attribute",
    unit: "kg",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Height",
    name: "Height",
    datatype: "uint16",
    default: 0,
    description: "Overall vehicle height.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.IsBrokenDown",
    name: "IsBrokenDown",
    comment:
      "Actual criteria and method used to decide if a vehicle is broken down is implementation specific.",
    datatype: "boolean",
    description:
      "Vehicle breakdown or any similar event causing vehicle to stop on the road, that might pose a risk to other road users. True = Vehicle broken down on the road, due to e.g. engine problems, flat tire, out of gas, brake problems. False = Vehicle not broken down.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.IsMoving",
    name: "IsMoving",
    datatype: "boolean",
    description: "Indicates whether the vehicle is stationary or moving.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Length",
    name: "Length",
    datatype: "uint16",
    default: 0,
    description: "Overall vehicle length.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.LowVoltageBattery.CurrentCurrent",
    name: "CurrentCurrent",
    datatype: "float",
    description:
      "Current current flowing in/out of the low voltage battery. Positive = Current flowing in to battery, e.g. during charging or driving. Negative = Current flowing out of battery, e.g. when using the battery to start a combustion engine.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.LowVoltageBattery.CurrentVoltage",
    name: "CurrentVoltage",
    datatype: "float",
    description: "Current Voltage of the low voltage battery.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.LowVoltageBattery.NominalCapacity",
    name: "NominalCapacity",
    datatype: "uint16",
    description: "Nominal capacity of the low voltage battery.",
    type: "attribute",
    unit: "Ah",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.LowVoltageBattery.NominalVoltage",
    name: "NominalVoltage",
    comment:
      "Nominal voltage typically refers to voltage of fully charged battery when delivering rated capacity.",
    datatype: "uint16",
    description: "Nominal Voltage of the battery.",
    type: "attribute",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.LowVoltageBattery",
    name: "LowVoltageBattery",
    description: "Signals related to low voltage battery.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.LowVoltageSystemState",
    name: "LowVoltageSystemState",
    allowed: ["UNDEFINED", "LOCK", "OFF", "ACC", "ON", "START"],
    datatype: "string",
    description:
      "State of the supply voltage of the control units (usually 12V).",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MaxTowBallWeight",
    name: "MaxTowBallWeight",
    datatype: "uint16",
    default: 0,
    description: "Maximum vertical weight on the tow ball of a trailer.",
    type: "attribute",
    unit: "kg",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MaxTowWeight",
    name: "MaxTowWeight",
    datatype: "uint16",
    default: 0,
    description: "Maximum weight of trailer.",
    type: "attribute",
    unit: "kg",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueDistributionFrictionRightMaximum",
    name: "TorqueDistributionFrictionRightMaximum",
    datatype: "uint16",
    description:
      "Maximum distribution range of the friction brake request on the axle to the right wheel. 0% = Complete friction torque shall be shifted to the left wheel. 50% = At most 50% friction torque may be shifted to the right wheel. 100% = Complete friction torque may be shifted to the right wheel.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueDistributionFrictionRightMinimum",
    name: "TorqueDistributionFrictionRightMinimum",
    datatype: "uint16",
    description:
      "Minimum distribution range of the friction brake request on the axle to the right wheel. 0% = Complete friction torque may be shifted to the left wheel. 50% = At least 50% friction torque shall be shifted to the right wheel. 100% = Complete friction torque shall be shifted to the right wheel.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueElectricMinimum",
    name: "TorqueElectricMinimum",
    datatype: "int16",
    description:
      "Limit for regenerative brake torque at given axle. Brake Torque < 0Nm.",
    max: 0.0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.TorqueFrictionDifferenceMaximum",
    name: "TorqueFrictionDifferenceMaximum",
    datatype: "uint16",
    description:
      "Maximum absolute wheel torque difference between left and right wheel for friction brake.",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.OmegaLower",
    name: "OmegaLower",
    datatype: "uint16",
    description:
      "Lower wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.OmegaUpper",
    name: "OmegaUpper",
    datatype: "uint16",
    description:
      "Upper wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.Torque",
    name: "Torque",
    datatype: "int16",
    description: "Estimated friction brake torque. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.TorqueArbitrated",
    name: "TorqueArbitrated",
    datatype: "int16",
    description:
      "Brake system internally calculated friction brake torque target. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.TorqueFrictionMaximum",
    name: "TorqueFrictionMaximum",
    datatype: "int16",
    description:
      "Maximum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left.TorqueFrictionMinimum",
    name: "TorqueFrictionMinimum",
    datatype: "int16",
    description:
      "Minimum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Left",
    name: "Left",
    description: "MotionManagement signals for a specific wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.OmegaLower",
    name: "OmegaLower",
    datatype: "uint16",
    description:
      "Lower wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.OmegaUpper",
    name: "OmegaUpper",
    datatype: "uint16",
    description:
      "Upper wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.Torque",
    name: "Torque",
    datatype: "int16",
    description: "Estimated friction brake torque. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.TorqueArbitrated",
    name: "TorqueArbitrated",
    datatype: "int16",
    description:
      "Brake system internally calculated friction brake torque target. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.TorqueFrictionMaximum",
    name: "TorqueFrictionMaximum",
    datatype: "int16",
    description:
      "Maximum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right.TorqueFrictionMinimum",
    name: "TorqueFrictionMinimum",
    datatype: "int16",
    description:
      "Minimum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel.Right",
    name: "Right",
    description: "MotionManagement signals for a specific wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1.Wheel",
    name: "Wheel",
    description: "MotionManagement signals for a specific wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row1",
    name: "Row1",
    description:
      "MotionManagement for brake actuation for a specific electric axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueDistributionFrictionRightMaximum",
    name: "TorqueDistributionFrictionRightMaximum",
    datatype: "uint16",
    description:
      "Maximum distribution range of the friction brake request on the axle to the right wheel. 0% = Complete friction torque shall be shifted to the left wheel. 50% = At most 50% friction torque may be shifted to the right wheel. 100% = Complete friction torque may be shifted to the right wheel.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueDistributionFrictionRightMinimum",
    name: "TorqueDistributionFrictionRightMinimum",
    datatype: "uint16",
    description:
      "Minimum distribution range of the friction brake request on the axle to the right wheel. 0% = Complete friction torque may be shifted to the left wheel. 50% = At least 50% friction torque shall be shifted to the right wheel. 100% = Complete friction torque shall be shifted to the right wheel.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueElectricMinimum",
    name: "TorqueElectricMinimum",
    datatype: "int16",
    description:
      "Limit for regenerative brake torque at given axle. Brake Torque < 0Nm.",
    max: 0.0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.TorqueFrictionDifferenceMaximum",
    name: "TorqueFrictionDifferenceMaximum",
    datatype: "uint16",
    description:
      "Maximum absolute wheel torque difference between left and right wheel for friction brake.",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.OmegaLower",
    name: "OmegaLower",
    datatype: "uint16",
    description:
      "Lower wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.OmegaUpper",
    name: "OmegaUpper",
    datatype: "uint16",
    description:
      "Upper wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.Torque",
    name: "Torque",
    datatype: "int16",
    description: "Estimated friction brake torque. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.TorqueArbitrated",
    name: "TorqueArbitrated",
    datatype: "int16",
    description:
      "Brake system internally calculated friction brake torque target. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.TorqueFrictionMaximum",
    name: "TorqueFrictionMaximum",
    datatype: "int16",
    description:
      "Maximum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left.TorqueFrictionMinimum",
    name: "TorqueFrictionMinimum",
    datatype: "int16",
    description:
      "Minimum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Left",
    name: "Left",
    description: "MotionManagement signals for a specific wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.OmegaLower",
    name: "OmegaLower",
    datatype: "uint16",
    description:
      "Lower wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.OmegaUpper",
    name: "OmegaUpper",
    datatype: "uint16",
    description:
      "Upper wheel speed limit request controlled by friction brake. ISO 8855 wheel-spin velocity.",
    type: "actuator",
    unit: "rad/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.Torque",
    name: "Torque",
    datatype: "int16",
    description: "Estimated friction brake torque. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.TorqueArbitrated",
    name: "TorqueArbitrated",
    datatype: "int16",
    description:
      "Brake system internally calculated friction brake torque target. Brake Torque < 0Nm.",
    max: 0,
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.TorqueFrictionMaximum",
    name: "TorqueFrictionMaximum",
    datatype: "int16",
    description:
      "Maximum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right.TorqueFrictionMinimum",
    name: "TorqueFrictionMinimum",
    datatype: "int16",
    description:
      "Minimum wheel torque request for friction brake. Brake Torque < 0Nm.",
    max: 0,
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel.Right",
    name: "Right",
    description: "MotionManagement signals for a specific wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2.Wheel",
    name: "Wheel",
    description: "MotionManagement signals for a specific wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle.Row2",
    name: "Row2",
    description:
      "MotionManagement for brake actuation for a specific electric axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.Axle",
    name: "Axle",
    description:
      "MotionManagement for brake actuation for a specific electric axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.VehicleForceDistributionFrontMaximum",
    name: "VehicleForceDistributionFrontMaximum",
    datatype: "uint16",
    description:
      "Maximum distribution range request of FxWhlSum to front axle. 0% = Complete longitudinal brake force shall be shifted to rear axle. 50% = At most 50% shall be shifted to front axle. 100%  = Complete longitudinal brake force may be shifted to front axle.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.VehicleForceDistributionFrontMinimum",
    name: "VehicleForceDistributionFrontMinimum",
    datatype: "uint16",
    description:
      "Minimum distribution range request of FxWhlSum to front axle. 0% = Complete longitudinal brake force may be shifted to rear axle. 50% = At least 50% shall be shifted to front axle. 100% = Complete longitudinal brake force shall be shifted to front axle.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.VehicleForceElectric",
    name: "VehicleForceElectric",
    datatype: "int16",
    description:
      "Regenerative brake force request (FxWhlSum). Sum of all tyre longitudinal forces. Brake Force < 0N.",
    max: 0,
    type: "actuator",
    unit: "N",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.VehicleForceElectricMinimumArbitrated",
    name: "VehicleForceElectricMinimumArbitrated",
    datatype: "int16",
    description:
      "Brake system internally calculated regenerative force limit at vehicle level for eAxle actuation. Brake Force < 0N.",
    max: 0,
    type: "sensor",
    unit: "N",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake.VehicleForceMaximum",
    name: "VehicleForceMaximum",
    datatype: "int16",
    description:
      "Maximum longitudinal brake force request (FxWhlSum). Sum of all tyre longitudinal forces. Brake Force < 0N.",
    max: 0,
    type: "actuator",
    unit: "N",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Brake",
    name: "Brake",
    description:
      "MotionManagement related to braking (both frictions brakes and contribution from electric axles).",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeed",
    name: "RotationalSpeed",
    datatype: "int16",
    description:
      "Rotational speed for the specified axle, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "sensor",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeedMaximumLimit",
    name: "RotationalSpeedMaximumLimit",
    datatype: "int16",
    description:
      "Maximum allowed axle rotational speed in torque control mode, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "actuator",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeedMinimumLimit",
    name: "RotationalSpeedMinimumLimit",
    datatype: "int16",
    description:
      "Minimum allowed axle rotational speed in torque control mode, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "actuator",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.RotationalSpeedTarget",
    name: "RotationalSpeedTarget",
    datatype: "int16",
    description:
      "Target axle rotational speed in rotation speed control mode, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "actuator",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.Torque",
    name: "Torque",
    datatype: "int16",
    description:
      "Axle torque, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueLongTermMaximum",
    name: "TorqueLongTermMaximum",
    datatype: "int16",
    description:
      "Maximum long-term available eAxle torque, default time horizon = 10 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueLongTermMinimum",
    name: "TorqueLongTermMinimum",
    datatype: "int16",
    description:
      "Minimum long-term available eAxle torque, default time horizon = 10 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMaximum",
    name: "TorqueMaximum",
    datatype: "int16",
    description:
      "Maximum momentarily available eAxle torque, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMaximumLimit",
    name: "TorqueMaximumLimit",
    datatype: "int16",
    description:
      "Maximum allowed eAxle torque in rotation speed control mode, positive sign for torque in forward direction, negative sign unused.",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMinimum",
    name: "TorqueMinimum",
    datatype: "int16",
    description:
      "Minimum momentarily available eAxle torque, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueMinimumLimit",
    name: "TorqueMinimumLimit",
    datatype: "int16",
    description:
      "Minimum allowed axle torque in rotation speed control mode, positive sign unused, negative sign for torque in backward direction (ISO8855).",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueShortTermMaximum",
    name: "TorqueShortTermMaximum",
    datatype: "int16",
    description:
      "Maximum short-term available eAxle torque, default time horizon = 1 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueShortTermMinimum",
    name: "TorqueShortTermMinimum",
    datatype: "int16",
    description:
      "Minimum short-term available eAxle torque, default time horizon = 1 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1.TorqueTarget",
    name: "TorqueTarget",
    datatype: "int16",
    description:
      "Target axle torque in torque control mode, positive sign for torque in forward direction, negative sign for torque in backward direction (ISO8855).",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row1",
    name: "Row1",
    description: "MotionManagement for a specific electric axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeed",
    name: "RotationalSpeed",
    datatype: "int16",
    description:
      "Rotational speed for the specified axle, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "sensor",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeedMaximumLimit",
    name: "RotationalSpeedMaximumLimit",
    datatype: "int16",
    description:
      "Maximum allowed axle rotational speed in torque control mode, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "actuator",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeedMinimumLimit",
    name: "RotationalSpeedMinimumLimit",
    datatype: "int16",
    description:
      "Minimum allowed axle rotational speed in torque control mode, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "actuator",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.RotationalSpeedTarget",
    name: "RotationalSpeedTarget",
    datatype: "int16",
    description:
      "Target axle rotational speed in rotation speed control mode, positive sign for rotation in forward direction, negative sign for rotation in backward direction.",
    type: "actuator",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.Torque",
    name: "Torque",
    datatype: "int16",
    description:
      "Axle torque, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueLongTermMaximum",
    name: "TorqueLongTermMaximum",
    datatype: "int16",
    description:
      "Maximum long-term available eAxle torque, default time horizon = 10 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueLongTermMinimum",
    name: "TorqueLongTermMinimum",
    datatype: "int16",
    description:
      "Minimum long-term available eAxle torque, default time horizon = 10 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMaximum",
    name: "TorqueMaximum",
    datatype: "int16",
    description:
      "Maximum momentarily available eAxle torque, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMaximumLimit",
    name: "TorqueMaximumLimit",
    datatype: "int16",
    description:
      "Maximum allowed eAxle torque in rotation speed control mode, positive sign for torque in forward direction, negative sign unused.",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMinimum",
    name: "TorqueMinimum",
    datatype: "int16",
    description:
      "Minimum momentarily available eAxle torque, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueMinimumLimit",
    name: "TorqueMinimumLimit",
    datatype: "int16",
    description:
      "Minimum allowed axle torque in rotation speed control mode, positive sign unused, negative sign for torque in backward direction (ISO8855).",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueShortTermMaximum",
    name: "TorqueShortTermMaximum",
    datatype: "int16",
    description:
      "Maximum short-term available eAxle torque, default time horizon = 1 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueShortTermMinimum",
    name: "TorqueShortTermMinimum",
    datatype: "int16",
    description:
      "Minimum short-term available eAxle torque, default time horizon = 1 sec, positive sign for torque in forward direction, negative sign for torque in backward direction.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2.TorqueTarget",
    name: "TorqueTarget",
    datatype: "int16",
    description:
      "Target axle torque in torque control mode, positive sign for torque in forward direction, negative sign for torque in backward direction (ISO8855).",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle.Row2",
    name: "Row2",
    description: "MotionManagement for a specific electric axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.ElectricAxle",
    name: "ElectricAxle",
    description: "MotionManagement for a specific electric axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPosition",
    name: "RackPosition",
    datatype: "int16",
    description:
      "Represents the current position of the steering rack on axle steering actuator. Positive values leads to a left turn of the vehicle (based on ISO8855).",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionOffsetTarget",
    name: "RackPositionOffsetTarget",
    datatype: "int16",
    description:
      "Rack position offset request to the axle steering actuator (for steer-by-wire), added to the actuator internal calculated set-point. Positive values without internal calculated set point change lead to a left movement of the vehicle (based on ISO8855).",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionOffsetTargetMode",
    name: "RackPositionOffsetTargetMode",
    datatype: "uint8",
    description:
      "Mode used for controlling rack position offset interface of axle steering actuator. 0 indicates interface disabled. Other values activate vehicle specific modes.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionTarget",
    name: "RackPositionTarget",
    datatype: "int16",
    description:
      "Rack position request to the axle steering actuator (external set-point). Positive values lead to a left turn of the vehicle (based on ISO8855).",
    type: "actuator",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle.Row1.RackPositionTargetMode",
    name: "RackPositionTargetMode",
    datatype: "uint8",
    description:
      "Mode used for controlling rack position interface of axle steering actuator. 0 indicates interface disabled. Other values activate vehicle specific modes.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle.Row1",
    name: "Row1",
    description: "MotionManagement related to a specific axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.Axle",
    name: "Axle",
    description: "MotionManagement related to a specific axle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.Angle",
    name: "Angle",
    datatype: "int16",
    description:
      "Represents the current input angle of the steering system, typically corresponds to angle applied by driver on the steering-wheel. Positive for angle in counterclockwise direction (based on ISO8855).",
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.AngleTarget",
    name: "AngleTarget",
    datatype: "int16",
    description:
      "Steering-wheel angle request to the steering actuator (external set-point for steer-by-wire). Positive sign for angle in counterclockwise direction (based on ISO8855).",
    type: "actuator",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.AngleTargetMode",
    name: "AngleTargetMode",
    datatype: "uint8",
    description:
      "Mode used for controlling Steering-wheel angle interface. 0 indicates interface disabled. Other values activate vehicle specific modes.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.Torque",
    name: "Torque",
    datatype: "int16",
    description:
      "Represents the current input torque for steering system, typically corresponds to torque applied by driver on the steering wheel. Positive for torque in counterclockwise direction (based on ISO8855).",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueOffsetTarget",
    name: "TorqueOffsetTarget",
    datatype: "int16",
    description:
      "Steering-wheel torque offset request to the steering actuator, added to the actuator internal calculated target value. Positive sign for torque in counterclockwise direction (based on ISO8855).",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueOffsetTargetMode",
    name: "TorqueOffsetTargetMode",
    datatype: "uint8",
    description:
      "Mode used for controlling steering-wheel torque offset interface. 0 indicates interface disabled. Other values activate vehicle specific modes.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueTarget",
    name: "TorqueTarget",
    datatype: "int16",
    description:
      "Steering-wheel torque request to the steering actuator (external set-point for steer-by-wire). Positive sign for torque in counterclockwise direction (based on ISO8855).",
    type: "actuator",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel.TorqueTargetMode",
    name: "TorqueTargetMode",
    datatype: "uint8",
    description:
      "Mode used for controlling Steering-wheel torque interface. 0 indicates interface disabled. Other values activate vehicle specific modes.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering.SteeringWheel",
    name: "SteeringWheel",
    description: "MotionManagement related to steering wheel.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement.Steering",
    name: "Steering",
    description: "MotionManagement related to steering.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.MotionManagement",
    name: "MotionManagement",
    description: "Motion Management Information.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.AbsoluteLoad",
    name: "AbsoluteLoad",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 43 - Absolute load value",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.AcceleratorPositionD",
    name: "AcceleratorPositionD",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 49 - Accelerator pedal position D",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.AcceleratorPositionE",
    name: "AcceleratorPositionE",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 4A - Accelerator pedal position E",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.AcceleratorPositionF",
    name: "AcceleratorPositionF",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 4B - Accelerator pedal position F",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.AirStatus",
    name: "AirStatus",
    datatype: "string",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 12 - Secondary air status",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.AmbientAirTemperature",
    name: "AmbientAirTemperature",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 46 - Ambient air temperature",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.BarometricPressure",
    name: "BarometricPressure",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 33 - Barometric pressure",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst.Bank1.Temperature1",
    name: "Temperature1",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3C - Catalyst temperature from bank 1, sensor 1",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst.Bank1.Temperature2",
    name: "Temperature2",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3E - Catalyst temperature from bank 1, sensor 2",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst.Bank1",
    name: "Bank1",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Catalyst bank 1 signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst.Bank2.Temperature1",
    name: "Temperature1",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3D - Catalyst temperature from bank 2, sensor 1",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst.Bank2.Temperature2",
    name: "Temperature2",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3F - Catalyst temperature from bank 2, sensor 2",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst.Bank2",
    name: "Bank2",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Catalyst bank 2 signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Catalyst",
    name: "Catalyst",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Catalyst signals",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.CommandedEGR",
    name: "CommandedEGR",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2C - Commanded exhaust gas recirculation (EGR)",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.CommandedEVAP",
    name: "CommandedEVAP",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2E - Commanded evaporative purge (EVAP) valve",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.CommandedEquivalenceRatio",
    name: "CommandedEquivalenceRatio",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 44 - Commanded equivalence ratio",
    type: "sensor",
    unit: "ratio",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ControlModuleVoltage",
    name: "ControlModuleVoltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 42 - Control module voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.CoolantTemperature",
    name: "CoolantTemperature",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 05 - Coolant temperature",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DTCList",
    name: "DTCList",
    datatype: "string[]",
    deprecation: "v5.0 replaced with Vehicle.Diagnostics.DTCList",
    description:
      "List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DistanceSinceDTCClear",
    name: "DistanceSinceDTCClear",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 31 - Distance traveled since codes cleared",
    type: "sensor",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DistanceWithMIL",
    name: "DistanceWithMIL",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 21 - Distance traveled with MIL on",
    type: "sensor",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DriveCycleStatus.DTCCount",
    name: "DTCCount",
    datatype: "uint8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Number of sensor Trouble Codes (DTC)",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DriveCycleStatus.IgnitionType",
    name: "IgnitionType",
    allowed: ["SPARK", "COMPRESSION"],
    datatype: "string",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DriveCycleStatus.IsMILOn",
    name: "IsMILOn",
    datatype: "boolean",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Malfunction Indicator Light (MIL) - False = Off, True = On",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.DriveCycleStatus",
    name: "DriveCycleStatus",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 41 - OBD status for the current drive cycle",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EGRError",
    name: "EGRError",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2D - Exhaust gas recirculation (EGR) error",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EVAPVaporPressure",
    name: "EVAPVaporPressure",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 32 - Evaporative purge (EVAP) system pressure",
    type: "sensor",
    unit: "Pa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EVAPVaporPressureAbsolute",
    name: "EVAPVaporPressureAbsolute",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 53 - Absolute evaporative purge (EVAP) system pressure",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EVAPVaporPressureAlternate",
    name: "EVAPVaporPressureAlternate",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 54 - Alternate evaporative purge (EVAP) system pressure",
    type: "sensor",
    unit: "Pa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EngineLoad",
    name: "EngineLoad",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 04 - Engine load in percent - 0 = no load, 100 = full load",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EngineSpeed",
    name: "EngineSpeed",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 0C - Engine speed measured as rotations per minute",
    type: "sensor",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.EthanolPercent",
    name: "EthanolPercent",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 52 - Percentage of ethanol in the fuel",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FreezeDTC",
    name: "FreezeDTC",
    datatype: "string",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 02 - DTC that triggered the freeze frame",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelInjectionTiming",
    name: "FuelInjectionTiming",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 5D - Fuel injection timing",
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelLevel",
    name: "FuelLevel",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2F - Fuel level in the fuel tank",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelPressure",
    name: "FuelPressure",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 0A - Fuel pressure",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelRailPressureAbsolute",
    name: "FuelRailPressureAbsolute",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 59 - Absolute fuel rail pressure",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelRailPressureDirect",
    name: "FuelRailPressureDirect",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 23 - Fuel rail pressure direct inject",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelRailPressureVac",
    name: "FuelRailPressureVac",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 22 - Fuel rail pressure relative to vacuum",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelRate",
    name: "FuelRate",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 5E - Engine fuel rate",
    type: "sensor",
    unit: "l/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelStatus",
    name: "FuelStatus",
    datatype: "string",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 03 - Fuel status",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.FuelType",
    name: "FuelType",
    datatype: "uint8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 51 - Fuel type",
    max: 23,
    min: 0,
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.HybridBatteryRemaining",
    name: "HybridBatteryRemaining",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 5B - Remaining life of hybrid battery",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.IntakeTemp",
    name: "IntakeTemp",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 0F - Intake temperature",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.IsPTOActive",
    name: "IsPTOActive",
    datatype: "boolean",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1E - Auxiliary input status (power take off)",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.LongTermFuelTrim1",
    name: "LongTermFuelTrim1",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.LongTermFuelTrim2",
    name: "LongTermFuelTrim2",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.LongTermO2Trim1",
    name: "LongTermO2Trim1",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 56 (byte A) - Long term secondary O2 trim - Bank 1",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.LongTermO2Trim2",
    name: "LongTermO2Trim2",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 58 (byte A) - Long term secondary O2 trim - Bank 2",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.LongTermO2Trim3",
    name: "LongTermO2Trim3",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 56 (byte B) - Long term secondary O2 trim - Bank 3",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.LongTermO2Trim4",
    name: "LongTermO2Trim4",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 58 (byte B) - Long term secondary O2 trim - Bank 4",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.MAF",
    name: "MAF",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 10 - Grams of air drawn into engine per second",
    type: "sensor",
    unit: "g/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.MAP",
    name: "MAP",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 0B - Intake manifold pressure",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.MaxMAF",
    name: "MaxMAF",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 50 - Maximum flow for mass air flow sensor",
    type: "sensor",
    unit: "g/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor1.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor1.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor1",
    name: "Sensor1",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor2.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor2.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor2",
    name: "Sensor2",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor3.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor3.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor3",
    name: "Sensor3",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor4.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor4.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor4",
    name: "Sensor4",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor5.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor5.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor5",
    name: "Sensor5",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor6.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor6.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor6",
    name: "Sensor6",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor7.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor7.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor7",
    name: "Sensor7",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor8.ShortTermFuelTrim",
    name: "ShortTermFuelTrim",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte B) - Short term fuel trim",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor8.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1x (byte A) - Sensor voltage",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2.Sensor8",
    name: "Sensor8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2",
    name: "O2",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Oxygen sensors (PID 14 - PID 1B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor1.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor1.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor1.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor1",
    name: "Sensor1",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor2.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor2.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor2.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor2",
    name: "Sensor2",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor3.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor3.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor3.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor3",
    name: "Sensor3",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor4.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor4.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor4.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor4",
    name: "Sensor4",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor5.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor5.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor5.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor5",
    name: "Sensor5",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor6.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor6.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor6.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor6",
    name: "Sensor6",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor7.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor7.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor7.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor7",
    name: "Sensor7",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor8.Current",
    name: "Current",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 3x (byte CD) - Current for wide range/band oxygen sensor",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor8.Lambda",
    name: "Lambda",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor8.Voltage",
    name: "Voltage",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 2x (byte CD) - Voltage for wide range/band oxygen sensor",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR.Sensor8",
    name: "Sensor8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.O2WR",
    name: "O2WR",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.OBDStandards",
    name: "OBDStandards",
    datatype: "uint8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1C - OBD standards this vehicle conforms to",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.OilTemperature",
    name: "OilTemperature",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 5C - Engine oil temperature",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.OxygenSensorsIn2Banks",
    name: "OxygenSensorsIn2Banks",
    datatype: "uint8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 13 - Presence of oxygen sensors in 2 banks. [A0..A3] == Bank 1, Sensors 1-4. [A4..A7] == Bank 2, Sensors 1-4",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.OxygenSensorsIn4Banks",
    name: "OxygenSensorsIn4Banks",
    datatype: "uint8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 1D - Presence of oxygen sensors in 4 banks. Similar to PID 13, but [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2]",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.PidsA",
    name: "PidsA",
    allowed: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "0A",
      "0B",
      "0C",
      "0D",
      "0E",
      "0F",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "1A",
      "1B",
      "1C",
      "1D",
      "1E",
      "1F",
      "20",
    ],
    datatype: "string[]",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 00 - Array of the supported PIDs 01 to 20 in Hexadecimal.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.PidsB",
    name: "PidsB",
    allowed: [
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "2A",
      "2B",
      "2C",
      "2D",
      "2E",
      "2F",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "3A",
      "3B",
      "3C",
      "3D",
      "3E",
      "3F",
      "40",
    ],
    datatype: "string[]",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 20 - Array of the supported PIDs 21 to 40 in Hexadecimal.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.PidsC",
    name: "PidsC",
    allowed: [
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "4A",
      "4B",
      "4C",
      "4D",
      "4E",
      "4F",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
      "5A",
      "5B",
      "5C",
      "5D",
      "5E",
      "5F",
      "60",
    ],
    datatype: "string[]",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 40 - Array of the supported PIDs 41 to 60 in Hexadecimal.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.RelativeAcceleratorPosition",
    name: "RelativeAcceleratorPosition",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 5A - Relative accelerator pedal position",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.RelativeThrottlePosition",
    name: "RelativeThrottlePosition",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 45 - Relative throttle position",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.RunTime",
    name: "RunTime",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 1F - Engine run time",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.RunTimeMIL",
    name: "RunTimeMIL",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 4D - Run time with MIL on",
    type: "sensor",
    unit: "min",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ShortTermFuelTrim1",
    name: "ShortTermFuelTrim1",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ShortTermFuelTrim2",
    name: "ShortTermFuelTrim2",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ShortTermO2Trim1",
    name: "ShortTermO2Trim1",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 55 (byte A) - Short term secondary O2 trim - Bank 1",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ShortTermO2Trim2",
    name: "ShortTermO2Trim2",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 57 (byte A) - Short term secondary O2 trim - Bank 2",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ShortTermO2Trim3",
    name: "ShortTermO2Trim3",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 55 (byte B) - Short term secondary O2 trim - Bank 3",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ShortTermO2Trim4",
    name: "ShortTermO2Trim4",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 57 (byte B) - Short term secondary O2 trim - Bank 4",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Speed",
    name: "Speed",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 0D - Vehicle speed",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Status.DTCCount",
    name: "DTCCount",
    datatype: "uint8",
    deprecation: "v5.0 replaced with Vehicle.Diagnostics.DTCCount",
    description: "Number of Diagnostic Trouble Codes (DTC)",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Status.IgnitionType",
    name: "IgnitionType",
    allowed: ["SPARK", "COMPRESSION"],
    datatype: "string",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Status.IsMILOn",
    name: "IsMILOn",
    datatype: "boolean",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "Malfunction Indicator Light (MIL) False = Off, True = On",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.Status",
    name: "Status",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 01 - OBD status",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ThrottleActuator",
    name: "ThrottleActuator",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 4C - Commanded throttle actuator",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ThrottlePosition",
    name: "ThrottlePosition",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description:
      "PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ThrottlePositionB",
    name: "ThrottlePositionB",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 47 - Absolute throttle position B",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.ThrottlePositionC",
    name: "ThrottlePositionC",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 48 - Absolute throttle position C",
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.TimeSinceDTCCleared",
    name: "TimeSinceDTCCleared",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 4E - Time since trouble codes cleared",
    type: "sensor",
    unit: "min",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.TimingAdvance",
    name: "TimingAdvance",
    datatype: "float",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 0E - Time advance",
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD.WarmupsSinceDTCClear",
    name: "WarmupsSinceDTCClear",
    datatype: "uint8",
    deprecation: "v5.0 OBD-branch is deprecated.",
    description: "PID 30 - Number of warm-ups since codes cleared",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.OBD",
    name: "OBD",
    description: "OBD data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Pitch",
    name: "Pitch",
    datatype: "float",
    description:
      "Head pitch angle, measured as angle from vehicle sprung mass XY-plane as defined by ISO 23150:2023 to the head X-axis. 0 = Head in normal position. Positive values = Head leaning up. Negative values = Head leaning down.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Roll",
    name: "Roll",
    datatype: "float",
    description:
      "Head roll angle about the head X-axis (right-hand rule). 0 = Head in normal position. Positive values = Head leaning to the right. Negative values = Head leaning to the left.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Longitudinal position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = forward of (first) rear-axle. Negative values = backward of (first) rear-axle.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Lateral position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = left of rear-axle center. Negative values = right of rear-axle center.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Yaw",
    name: "Yaw",
    datatype: "float",
    description:
      "Head yaw angle, measured from the vehicle sprung mass X-axis as defined by ISO 23150:2023 to the head X-axis, around the vehicle Z-axis (right-hand rule). 0 = Head in normal position. Positive values = Head turned left. Negative values = Head turned right.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Height position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = above center of rear-axle reference point. Negative values = below center of rear-axle reference point.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.HeadPosition",
    name: "HeadPosition",
    description:
      "The current position of the driver head on vehicle axis according to ISO 23150:2023.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.Identifier",
    name: "Identifier",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.MidEyeGaze.Azimuth",
    name: "Azimuth",
    datatype: "float",
    description:
      "Mid eye azimuth gaze (right-hand rule) on vehicle sprung mass Z-axis as defined by ISO 23150:2023 0 = Driver looking forward. Positive values = Driver looking at something on the left side of driver. Negative values = Driver looking at something on the right side of driver.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.MidEyeGaze.Elevation",
    name: "Elevation",
    datatype: "float",
    description:
      "Elevation to observed object measured as angle between vehicle sprung mass XY-plane as defined by ISO 23150:2023 at driver mid eye position and object. 0 = Driver looking at something at same height as mid eye position. Positive values = Driver looking at something above mid eye position. Negative values = Driver looking at something below mid eye position.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide.MidEyeGaze",
    name: "MidEyeGaze",
    description:
      "Direction from mid eye position to object driver is looking at.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.DriverSide",
    name: "DriverSide",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Pitch",
    name: "Pitch",
    datatype: "float",
    description:
      "Head pitch angle, measured as angle from vehicle sprung mass XY-plane as defined by ISO 23150:2023 to the head X-axis. 0 = Head in normal position. Positive values = Head leaning up. Negative values = Head leaning down.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Roll",
    name: "Roll",
    datatype: "float",
    description:
      "Head roll angle about the head X-axis (right-hand rule). 0 = Head in normal position. Positive values = Head leaning to the right. Negative values = Head leaning to the left.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Longitudinal position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = forward of (first) rear-axle. Negative values = backward of (first) rear-axle.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Lateral position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = left of rear-axle center. Negative values = right of rear-axle center.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Yaw",
    name: "Yaw",
    datatype: "float",
    description:
      "Head yaw angle, measured from the vehicle sprung mass X-axis as defined by ISO 23150:2023 to the head X-axis, around the vehicle Z-axis (right-hand rule). 0 = Head in normal position. Positive values = Head turned left. Negative values = Head turned right.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Height position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = above center of rear-axle reference point. Negative values = below center of rear-axle reference point.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.HeadPosition",
    name: "HeadPosition",
    description:
      "The current position of the driver head on vehicle axis according to ISO 23150:2023.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.Identifier",
    name: "Identifier",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.MidEyeGaze.Azimuth",
    name: "Azimuth",
    datatype: "float",
    description:
      "Mid eye azimuth gaze (right-hand rule) on vehicle sprung mass Z-axis as defined by ISO 23150:2023 0 = Driver looking forward. Positive values = Driver looking at something on the left side of driver. Negative values = Driver looking at something on the right side of driver.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.MidEyeGaze.Elevation",
    name: "Elevation",
    datatype: "float",
    description:
      "Elevation to observed object measured as angle between vehicle sprung mass XY-plane as defined by ISO 23150:2023 at driver mid eye position and object. 0 = Driver looking at something at same height as mid eye position. Positive values = Driver looking at something above mid eye position. Negative values = Driver looking at something below mid eye position.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle.MidEyeGaze",
    name: "MidEyeGaze",
    description:
      "Direction from mid eye position to object driver is looking at.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.Middle",
    name: "Middle",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Pitch",
    name: "Pitch",
    datatype: "float",
    description:
      "Head pitch angle, measured as angle from vehicle sprung mass XY-plane as defined by ISO 23150:2023 to the head X-axis. 0 = Head in normal position. Positive values = Head leaning up. Negative values = Head leaning down.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Roll",
    name: "Roll",
    datatype: "float",
    description:
      "Head roll angle about the head X-axis (right-hand rule). 0 = Head in normal position. Positive values = Head leaning to the right. Negative values = Head leaning to the left.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Longitudinal position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = forward of (first) rear-axle. Negative values = backward of (first) rear-axle.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Lateral position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = left of rear-axle center. Negative values = right of rear-axle center.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Yaw",
    name: "Yaw",
    datatype: "float",
    description:
      "Head yaw angle, measured from the vehicle sprung mass X-axis as defined by ISO 23150:2023 to the head X-axis, around the vehicle Z-axis (right-hand rule). 0 = Head in normal position. Positive values = Head turned left. Negative values = Head turned right.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Height position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = above center of rear-axle reference point. Negative values = below center of rear-axle reference point.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.HeadPosition",
    name: "HeadPosition",
    description:
      "The current position of the driver head on vehicle axis according to ISO 23150:2023.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.Identifier",
    name: "Identifier",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.MidEyeGaze.Azimuth",
    name: "Azimuth",
    datatype: "float",
    description:
      "Mid eye azimuth gaze (right-hand rule) on vehicle sprung mass Z-axis as defined by ISO 23150:2023 0 = Driver looking forward. Positive values = Driver looking at something on the left side of driver. Negative values = Driver looking at something on the right side of driver.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.MidEyeGaze.Elevation",
    name: "Elevation",
    datatype: "float",
    description:
      "Elevation to observed object measured as angle between vehicle sprung mass XY-plane as defined by ISO 23150:2023 at driver mid eye position and object. 0 = Driver looking at something at same height as mid eye position. Positive values = Driver looking at something above mid eye position. Negative values = Driver looking at something below mid eye position.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide.MidEyeGaze",
    name: "MidEyeGaze",
    description:
      "Direction from mid eye position to object driver is looking at.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1.PassengerSide",
    name: "PassengerSide",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row1",
    name: "Row1",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Pitch",
    name: "Pitch",
    datatype: "float",
    description:
      "Head pitch angle, measured as angle from vehicle sprung mass XY-plane as defined by ISO 23150:2023 to the head X-axis. 0 = Head in normal position. Positive values = Head leaning up. Negative values = Head leaning down.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Roll",
    name: "Roll",
    datatype: "float",
    description:
      "Head roll angle about the head X-axis (right-hand rule). 0 = Head in normal position. Positive values = Head leaning to the right. Negative values = Head leaning to the left.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Longitudinal position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = forward of (first) rear-axle. Negative values = backward of (first) rear-axle.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Lateral position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = left of rear-axle center. Negative values = right of rear-axle center.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Yaw",
    name: "Yaw",
    datatype: "float",
    description:
      "Head yaw angle, measured from the vehicle sprung mass X-axis as defined by ISO 23150:2023 to the head X-axis, around the vehicle Z-axis (right-hand rule). 0 = Head in normal position. Positive values = Head turned left. Negative values = Head turned right.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Height position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = above center of rear-axle reference point. Negative values = below center of rear-axle reference point.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.HeadPosition",
    name: "HeadPosition",
    description:
      "The current position of the driver head on vehicle axis according to ISO 23150:2023.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.Identifier",
    name: "Identifier",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.MidEyeGaze.Azimuth",
    name: "Azimuth",
    datatype: "float",
    description:
      "Mid eye azimuth gaze (right-hand rule) on vehicle sprung mass Z-axis as defined by ISO 23150:2023 0 = Driver looking forward. Positive values = Driver looking at something on the left side of driver. Negative values = Driver looking at something on the right side of driver.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.MidEyeGaze.Elevation",
    name: "Elevation",
    datatype: "float",
    description:
      "Elevation to observed object measured as angle between vehicle sprung mass XY-plane as defined by ISO 23150:2023 at driver mid eye position and object. 0 = Driver looking at something at same height as mid eye position. Positive values = Driver looking at something above mid eye position. Negative values = Driver looking at something below mid eye position.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide.MidEyeGaze",
    name: "MidEyeGaze",
    description:
      "Direction from mid eye position to object driver is looking at.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.DriverSide",
    name: "DriverSide",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Pitch",
    name: "Pitch",
    datatype: "float",
    description:
      "Head pitch angle, measured as angle from vehicle sprung mass XY-plane as defined by ISO 23150:2023 to the head X-axis. 0 = Head in normal position. Positive values = Head leaning up. Negative values = Head leaning down.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Roll",
    name: "Roll",
    datatype: "float",
    description:
      "Head roll angle about the head X-axis (right-hand rule). 0 = Head in normal position. Positive values = Head leaning to the right. Negative values = Head leaning to the left.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Longitudinal position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = forward of (first) rear-axle. Negative values = backward of (first) rear-axle.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Lateral position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = left of rear-axle center. Negative values = right of rear-axle center.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Yaw",
    name: "Yaw",
    datatype: "float",
    description:
      "Head yaw angle, measured from the vehicle sprung mass X-axis as defined by ISO 23150:2023 to the head X-axis, around the vehicle Z-axis (right-hand rule). 0 = Head in normal position. Positive values = Head turned left. Negative values = Head turned right.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Height position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = above center of rear-axle reference point. Negative values = below center of rear-axle reference point.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.HeadPosition",
    name: "HeadPosition",
    description:
      "The current position of the driver head on vehicle axis according to ISO 23150:2023.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.Identifier",
    name: "Identifier",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.MidEyeGaze.Azimuth",
    name: "Azimuth",
    datatype: "float",
    description:
      "Mid eye azimuth gaze (right-hand rule) on vehicle sprung mass Z-axis as defined by ISO 23150:2023 0 = Driver looking forward. Positive values = Driver looking at something on the left side of driver. Negative values = Driver looking at something on the right side of driver.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.MidEyeGaze.Elevation",
    name: "Elevation",
    datatype: "float",
    description:
      "Elevation to observed object measured as angle between vehicle sprung mass XY-plane as defined by ISO 23150:2023 at driver mid eye position and object. 0 = Driver looking at something at same height as mid eye position. Positive values = Driver looking at something above mid eye position. Negative values = Driver looking at something below mid eye position.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle.MidEyeGaze",
    name: "MidEyeGaze",
    description:
      "Direction from mid eye position to object driver is looking at.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.Middle",
    name: "Middle",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Pitch",
    name: "Pitch",
    datatype: "float",
    description:
      "Head pitch angle, measured as angle from vehicle sprung mass XY-plane as defined by ISO 23150:2023 to the head X-axis. 0 = Head in normal position. Positive values = Head leaning up. Negative values = Head leaning down.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Roll",
    name: "Roll",
    datatype: "float",
    description:
      "Head roll angle about the head X-axis (right-hand rule). 0 = Head in normal position. Positive values = Head leaning to the right. Negative values = Head leaning to the left.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.X",
    name: "X",
    datatype: "int16",
    description:
      "Longitudinal position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = forward of (first) rear-axle. Negative values = backward of (first) rear-axle.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Y",
    name: "Y",
    datatype: "int16",
    description:
      "Lateral position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = left of rear-axle center. Negative values = right of rear-axle center.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Yaw",
    name: "Yaw",
    datatype: "float",
    description:
      "Head yaw angle, measured from the vehicle sprung mass X-axis as defined by ISO 23150:2023 to the head X-axis, around the vehicle Z-axis (right-hand rule). 0 = Head in normal position. Positive values = Head turned left. Negative values = Head turned right.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition.Z",
    name: "Z",
    datatype: "int16",
    description:
      "Height position of head center measured as mid eye position on X-axis of the vehicle rear-axle coordinate system as defined by ISO 23150:2023 section 3.7.12 Mid eye position refers to the center of a line drawn between the center of the drivers eyes. Positive values = above center of rear-axle reference point. Negative values = below center of rear-axle reference point.",
    type: "sensor",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.HeadPosition",
    name: "HeadPosition",
    description:
      "The current position of the driver head on vehicle axis according to ISO 23150:2023.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.Identifier.Issuer",
    name: "Issuer",
    datatype: "string",
    description:
      "Unique Issuer for the authentication of the occupant e.g. https://accounts.funcorp.com.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.Identifier.Subject",
    name: "Subject",
    datatype: "string",
    description:
      "Subject for the authentication of the occupant e.g. UserID 7331677.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.Identifier",
    name: "Identifier",
    description: "Identifier attributes based on OAuth 2.0.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.MidEyeGaze.Azimuth",
    name: "Azimuth",
    datatype: "float",
    description:
      "Mid eye azimuth gaze (right-hand rule) on vehicle sprung mass Z-axis as defined by ISO 23150:2023 0 = Driver looking forward. Positive values = Driver looking at something on the left side of driver. Negative values = Driver looking at something on the right side of driver.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.MidEyeGaze.Elevation",
    name: "Elevation",
    datatype: "float",
    description:
      "Elevation to observed object measured as angle between vehicle sprung mass XY-plane as defined by ISO 23150:2023 at driver mid eye position and object. 0 = Driver looking at something at same height as mid eye position. Positive values = Driver looking at something above mid eye position. Negative values = Driver looking at something below mid eye position.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide.MidEyeGaze",
    name: "MidEyeGaze",
    description:
      "Direction from mid eye position to object driver is looking at.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2.PassengerSide",
    name: "PassengerSide",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant.Row2",
    name: "Row2",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Occupant",
    name: "Occupant",
    description: "Occupant (Driver or Passenger) data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.AccumulatedBrakingEnergy",
    name: "AccumulatedBrakingEnergy",
    datatype: "float",
    description:
      "The accumulated energy from regenerative braking over lifetime.",
    type: "sensor",
    unit: "kWh",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.AspirationType",
    name: "AspirationType",
    allowed: ["UNKNOWN", "NATURAL", "SUPERCHARGER", "TURBOCHARGER"],
    datatype: "string",
    default: "UNKNOWN",
    description:
      "Type of aspiration (natural, turbocharger, supercharger etc).",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.Bore",
    name: "Bore",
    datatype: "float",
    description: "Bore in millimetres.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.CompressionRatio",
    name: "CompressionRatio",
    datatype: "string",
    description:
      "Engine compression ratio, specified in the format 'X:1', e.g. '9.2:1'.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.Configuration",
    name: "Configuration",
    allowed: [
      "UNKNOWN",
      "STRAIGHT",
      "V",
      "BOXER",
      "W",
      "ROTARY",
      "RADIAL",
      "SQUARE",
      "H",
      "U",
      "OPPOSED",
      "X",
    ],
    datatype: "string",
    default: "UNKNOWN",
    description: "Engine configuration.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.Capacity",
    name: "Capacity",
    datatype: "float",
    description: "Capacity in liters of the Diesel Exhaust Fluid Tank.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.IsLevelLow",
    name: "IsLevelLow",
    datatype: "boolean",
    description:
      "Indicates if the Diesel Exhaust Fluid level is low. True if level is low. Definition of low is vehicle dependent.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.Level",
    name: "Level",
    datatype: "uint8",
    description:
      "Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid.Range",
    name: "Range",
    datatype: "uint32",
    description:
      "Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselExhaustFluid",
    name: "DieselExhaustFluid",
    comment:
      "In retail and marketing other names are typically used for the fluid.",
    description:
      "Signals related to Diesel Exhaust Fluid (DEF). DEF is called AUS32 in ISO 22241.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter.DeltaPressure",
    name: "DeltaPressure",
    datatype: "float",
    description: "Delta Pressure of Diesel Particulate Filter.",
    type: "sensor",
    unit: "Pa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter.InletTemperature",
    name: "InletTemperature",
    datatype: "float",
    description: "Inlet temperature of Diesel Particulate Filter.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter.OutletTemperature",
    name: "OutletTemperature",
    datatype: "float",
    description: "Outlet temperature of Diesel Particulate Filter.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.DieselParticulateFilter",
    name: "DieselParticulateFilter",
    description: "Diesel Particulate Filter signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.Displacement",
    name: "Displacement",
    datatype: "uint16",
    description: "Displacement in cubic centimetres.",
    type: "attribute",
    unit: "cm^3",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.ECT",
    name: "ECT",
    datatype: "float",
    deprecation: "v5.0 moved to EngineCoolant.Temperature",
    description: "Engine coolant temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EOP",
    name: "EOP",
    datatype: "uint16",
    description: "Engine oil pressure.",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EOT",
    name: "EOT",
    datatype: "float",
    deprecation: "v5.0 moved to EngineOil.Temperature",
    description: "Engine oil temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCode",
    name: "EngineCode",
    comment:
      "For hybrid vehicles the engine code may refer to the combination of combustion and electric engine.",
    datatype: "string",
    description:
      "Engine code designation, as specified by vehicle manufacturer.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.Capacity",
    name: "Capacity",
    datatype: "float",
    description: "Engine coolant capacity in liters.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.Level",
    name: "Level",
    allowed: ["CRITICALLY_LOW", "LOW", "NORMAL"],
    datatype: "string",
    description: "Engine coolant level.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.LifeRemaining",
    name: "LifeRemaining",
    comment:
      "In addition to this a signal a vehicle can report remaining time to service (including e.g. coolant change) by Vehicle.Service.TimeToService.",
    datatype: "int32",
    description:
      "Remaining engine coolant life in seconds. Negative values can be used to indicate that lifetime has been exceeded.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Engine coolant temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCoolant",
    name: "EngineCoolant",
    description: "Signals related to the engine coolant",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineCoolantCapacity",
    name: "EngineCoolantCapacity",
    datatype: "float",
    deprecation: "v5.0 moved to EngineCoolant.Capacity",
    description: "Engine coolant capacity in liters.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineHours",
    name: "EngineHours",
    datatype: "float",
    description:
      "Accumulated time during engine lifetime with 'engine speed (rpm) > 0'.",
    type: "sensor",
    unit: "h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOil.Capacity",
    name: "Capacity",
    datatype: "float",
    description: "Engine oil capacity in liters.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOil.Level",
    name: "Level",
    allowed: ["CRITICALLY_LOW", "LOW", "NORMAL", "HIGH", "CRITICALLY_HIGH"],
    datatype: "string",
    description: "Engine oil level.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOil.LifeRemaining",
    name: "LifeRemaining",
    comment:
      "In addition to this a signal a vehicle can report remaining time to service (including e.g. oil change) by Vehicle.Service.TimeToService.",
    datatype: "int32",
    description:
      "Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOil.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "EOT, Engine oil temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOil",
    name: "EngineOil",
    description: "Signals related to the engine oil",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOilCapacity",
    name: "EngineOilCapacity",
    datatype: "float",
    deprecation: "v5.0 moved to EngineOil.Capacity",
    description: "Engine oil capacity in liters.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.EngineOilLevel",
    name: "EngineOilLevel",
    allowed: ["CRITICALLY_LOW", "LOW", "NORMAL", "HIGH", "CRITICALLY_HIGH"],
    datatype: "string",
    deprecation: "v5.0 moved to EngineOil.Level",
    description: "Engine oil level.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.IdleHours",
    name: "IdleHours",
    comment:
      "Vehicles may calculate accumulated idle time for an engine. It might be based on engine speed (rpm) below a certain limit or any other mechanism.",
    datatype: "float",
    description:
      "Accumulated idling time during engine lifetime. Definition of idling is not standardized.",
    type: "sensor",
    unit: "h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.IsRunning",
    name: "IsRunning",
    datatype: "boolean",
    description: "Engine Running. True if engine is rotating (Speed > 0).",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.MAF",
    name: "MAF",
    datatype: "uint16",
    description: "Grams of air drawn into engine per second.",
    type: "sensor",
    unit: "g/s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.MAP",
    name: "MAP",
    datatype: "uint16",
    description:
      "Manifold absolute pressure possibly boosted using forced induction.",
    type: "sensor",
    unit: "kPa",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.MaxPower",
    name: "MaxPower",
    datatype: "uint16",
    default: 0,
    description: "Peak power, in kilowatts, that engine can generate.",
    type: "attribute",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.MaxTorque",
    name: "MaxTorque",
    datatype: "uint16",
    default: 0,
    description: "Peak torque, in newton meter, that the engine can generate.",
    type: "attribute",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.NumberOfCylinders",
    name: "NumberOfCylinders",
    datatype: "uint16",
    description: "Number of cylinders.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.NumberOfValvesPerCylinder",
    name: "NumberOfValvesPerCylinder",
    datatype: "uint16",
    description: "Number of valves per cylinder.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.OilLifeRemaining",
    name: "OilLifeRemaining",
    comment:
      "In addition to this a signal a vehicle can report remaining time to service (including e.g. oil change) by Vehicle.Service.TimeToService.",
    datatype: "int32",
    deprecation: "v5.0 moved to EngineOil.LifeRemaining",
    description:
      "Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.Power",
    name: "Power",
    datatype: "uint16",
    description:
      "Current engine power output. Shall be reported as 0 during engine breaking.",
    type: "sensor",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.Speed",
    name: "Speed",
    datatype: "uint16",
    description: "Engine speed measured as rotations per minute.",
    type: "sensor",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.StrokeLength",
    name: "StrokeLength",
    datatype: "float",
    description: "Stroke length in millimetres.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.TPS",
    name: "TPS",
    datatype: "uint8",
    description: "Current throttle position.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine.Torque",
    name: "Torque",
    comment:
      "During engine breaking the engine delivers a negative torque to the transmission.",
    datatype: "int16",
    description:
      "Current engine torque. Shall be reported as a negative number during engine breaking.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.CombustionEngine",
    name: "CombustionEngine",
    description: "Engine-specific data, stopping at the bell housing.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.CoolantTemperature",
    name: "CoolantTemperature",
    datatype: "float",
    deprecation: "v5.0 moved to EngineCoolant.Temperature",
    description: "Motor coolant temperature (if applicable).",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.EngineCode",
    name: "EngineCode",
    datatype: "string",
    description:
      "Engine code designation, as specified by vehicle manufacturer.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.Capacity",
    name: "Capacity",
    datatype: "float",
    description: "Engine coolant capacity in liters.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.Level",
    name: "Level",
    allowed: ["CRITICALLY_LOW", "LOW", "NORMAL"],
    datatype: "string",
    description: "Engine coolant level.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.LifeRemaining",
    name: "LifeRemaining",
    comment:
      "In addition to this a signal a vehicle can report remaining time to service (including e.g. coolant change) by Vehicle.Service.TimeToService.",
    datatype: "int32",
    description:
      "Remaining engine coolant life in seconds. Negative values can be used to indicate that lifetime has been exceeded.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Engine coolant temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.EngineCoolant",
    name: "EngineCoolant",
    description: "Signals related to the engine coolant (if applicable).",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.MaxPower",
    name: "MaxPower",
    datatype: "uint16",
    default: 0,
    description: "Peak power, in kilowatts, that motor(s) can generate.",
    type: "attribute",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.MaxRegenPower",
    name: "MaxRegenPower",
    datatype: "uint16",
    default: 0,
    description:
      "Peak regen/brake power, in kilowatts, that motor(s) can generate.",
    type: "attribute",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.MaxRegenTorque",
    name: "MaxRegenTorque",
    datatype: "uint16",
    default: 0,
    description:
      "Peak regen/brake torque, in newton meter, that the motor(s) can generate.",
    type: "attribute",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.MaxTorque",
    name: "MaxTorque",
    datatype: "uint16",
    default: 0,
    description: "Peak power, in newton meter, that the motor(s) can generate.",
    type: "attribute",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.Power",
    name: "Power",
    datatype: "int16",
    description:
      "Current motor power output. Negative values indicate regen mode.",
    type: "sensor",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.Speed",
    name: "Speed",
    datatype: "int32",
    description:
      "Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.",
    type: "sensor",
    unit: "rpm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "Motor temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.TimeInUse",
    name: "TimeInUse",
    comment: "Vehicles may define their READY state.",
    datatype: "float",
    description:
      "Accumulated time during engine lifetime when the vehicule state's is 'READY'.",
    type: "sensor",
    unit: "h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor.Torque",
    name: "Torque",
    datatype: "int16",
    description: "Current motor torque. Negative values indicate regen mode.",
    type: "sensor",
    unit: "Nm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.ElectricMotor",
    name: "ElectricMotor",
    description: "Electric Motor specific data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.AbsoluteLevel",
    name: "AbsoluteLevel",
    datatype: "float",
    description: "Current available fuel in the fuel tank expressed in liters.",
    type: "sensor",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.AverageConsumption",
    name: "AverageConsumption",
    datatype: "float",
    description: "Average consumption in liters per 100 km.",
    min: 0,
    type: "sensor",
    unit: "l/100km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.ConsumptionSinceLastRefuel",
    name: "ConsumptionSinceLastRefuel",
    comment: "Amount of fuel consumed since last refueling.",
    datatype: "float",
    description: "Fuel consumption since last refueling.",
    type: "sensor",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.ConsumptionSinceStart",
    name: "ConsumptionSinceStart",
    comment:
      "A new trip is considered to start when engine gets enabled (e.g. LowVoltageSystemState in ON or START mode). A trip is considered to end when engine is no longer enabled. The signal may however keep the value of the last trip until a new trip is started.",
    datatype: "float",
    description: "Fuel amount in liters consumed since start of current trip.",
    type: "sensor",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.HybridType",
    name: "HybridType",
    allowed: [
      "UNKNOWN",
      "NOT_APPLICABLE",
      "STOP_START",
      "BELT_ISG",
      "CIMG",
      "PHEV",
    ],
    datatype: "string",
    default: "UNKNOWN",
    description: "Defines the hybrid type of the vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.InstantConsumption",
    name: "InstantConsumption",
    datatype: "float",
    description: "Current consumption in liters per 100 km.",
    min: 0,
    type: "sensor",
    unit: "l/100km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.IsEngineStopStartEnabled",
    name: "IsEngineStopStartEnabled",
    datatype: "boolean",
    description: "Indicates whether eco start stop is currently enabled.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.IsFuelLevelLow",
    name: "IsFuelLevelLow",
    datatype: "boolean",
    description: "Indicates that the fuel level is low (e.g. <50km range).",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.IsFuelPortFlapOpen",
    name: "IsFuelPortFlapOpen",
    datatype: "boolean",
    description:
      "Status of the fuel port flap(s). True if at least one is open.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.Range",
    name: "Range",
    datatype: "uint32",
    description: "Remaining range in meters using only liquid fuel.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.RefuelPortPosition",
    name: "RefuelPortPosition",
    allowed: [
      "FRONT_LEFT",
      "FRONT_MIDDLE",
      "FRONT_RIGHT",
      "REAR_LEFT",
      "REAR_MIDDLE",
      "REAR_RIGHT",
      "LEFT_FRONT",
      "LEFT_MIDDLE",
      "LEFT_REAR",
      "RIGHT_FRONT",
      "RIGHT_MIDDLE",
      "RIGHT_REAR",
    ],
    datatype: "string[]",
    description:
      "Position of refuel port(s). First part indicates side of vehicle, second part relative position on that side.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.RelativeLevel",
    name: "RelativeLevel",
    datatype: "uint8",
    description:
      "Level in fuel tank as percent of capacity. 0 = empty. 100 = full.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.SupportedFuel",
    name: "SupportedFuel",
    allowed: [
      "E5_95",
      "E5_98",
      "E10_95",
      "E10_98",
      "E85",
      "B7",
      "B10",
      "B20",
      "B30",
      "B100",
      "XTL",
      "LPG",
      "CNG",
      "LNG",
      "H2",
      "OTHER",
    ],
    comment: "RON 95 is sometimes referred to as Super, RON 98 as Super Plus.",
    datatype: "string[]",
    description:
      "Detailed information on fuels supported by the vehicle. Identifiers originating from DIN EN 16942:2021-08, appendix B, with additional suffix for octane (RON) where relevant.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.SupportedFuelTypes",
    name: "SupportedFuelTypes",
    allowed: ["GASOLINE", "DIESEL", "E85", "LPG", "CNG", "LNG", "H2", "OTHER"],
    comment:
      "If a vehicle also has an electric drivetrain (e.g. hybrid) that will be obvious from the PowerTrain.Type signal.",
    datatype: "string[]",
    description: "High level information of fuel types supported",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.TankCapacity",
    name: "TankCapacity",
    datatype: "float",
    description: "Capacity of the fuel tank in liters.",
    type: "attribute",
    unit: "l",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem.TimeRemaining",
    name: "TimeRemaining",
    datatype: "uint32",
    description: "Time remaining in seconds before the fuel tank is empty.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.FuelSystem",
    name: "FuelSystem",
    description: "Fuel system data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.IsAutoPowerOptimize",
    name: "IsAutoPowerOptimize",
    datatype: "boolean",
    description:
      "Auto Power Optimization Flag When set to 'true', the system enables automatic power optimization, dynamically adjusting the power optimization level based on runtime conditions or features managed by the OEM. When set to 'false', manual control of the power optimization level is allowed.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.PowerOptimizeLevel",
    name: "PowerOptimizeLevel",
    datatype: "uint8",
    description:
      "Power optimization level for this branch/subsystem. A higher number indicates more aggressive power optimization. Level 0 indicates that all functionality is enabled, no power optimization enabled. Level 10 indicates most aggressive power optimization mode, only essential functionality enabled.",
    max: 10,
    min: 0,
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Range",
    name: "Range",
    datatype: "uint32",
    description:
      "Remaining range in meters using all energy sources available in the vehicle.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TimeRemaining",
    name: "TimeRemaining",
    datatype: "uint32",
    description:
      "Time remaining in seconds before all energy sources available in the vehicle are empty.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.AccumulatedChargedEnergy",
    name: "AccumulatedChargedEnergy",
    datatype: "float",
    description:
      "The accumulated energy delivered to the battery during charging over lifetime of the battery.",
    type: "sensor",
    unit: "kWh",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.AccumulatedChargedThroughput",
    name: "AccumulatedChargedThroughput",
    datatype: "float",
    description:
      "The accumulated charge throughput delivered to the battery during charging over lifetime of the battery.",
    type: "sensor",
    unit: "Ah",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.AccumulatedConsumedEnergy",
    name: "AccumulatedConsumedEnergy",
    datatype: "float",
    description:
      "The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.",
    type: "sensor",
    unit: "kWh",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.AccumulatedConsumedThroughput",
    name: "AccumulatedConsumedThroughput",
    datatype: "float",
    description:
      "The accumulated charge throughput leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.",
    type: "sensor",
    unit: "Ah",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.IsActive",
    name: "IsActive",
    comment:
      "This signal is typically true when mode is not INACTIVE and time is within defined start/end times.",
    datatype: "boolean",
    description:
      "Indicates if battery conditioning is active (i.e. actively monitors battery temperature). True = Active. False = Inactive.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.IsOngoing",
    name: "IsOngoing",
    comment:
      "When battery conditioning is active, but temperature is already within acceptable range so that no cooling or heating is needed then IsOngoing shall report False.",
    datatype: "boolean",
    description:
      "Indicating if battery conditioning is currently ongoing. Battery conditioning is considered ongoing when the battery conditioning system is actively heating or cooling the battery, or requesting heating or cooling.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.RequestedMode",
    name: "RequestedMode",
    allowed: ["INACTIVE", "FAST_CHARGING_PREPARATION", "DRIVING_PREPARATION"],
    comment:
      "The Mode and TargetTime can be used to calculate TargetTemperature and StartTime",
    datatype: "string",
    description:
      "Defines requested mode for battery conditioning. INACTIVE - Battery conditioning inactive. FAST_CHARGING_PREPARATION - Battery conditioning for fast charging. DRIVING_PREPARATION - Battery conditioning for driving.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.StartTime",
    name: "StartTime",
    comment:
      "If the vehicle is asleep, this is the time the vehicle and the battery conditioning system must wake up and start monitoring the battery and if necessary start heating/cooling of the battery.",
    datatype: "string",
    description:
      "Start time for battery conditioning, formatted according to ISO 8601 with UTC time zone.",
    type: "actuator",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.TargetTemperature",
    name: "TargetTemperature",
    comment:
      "Target temperature possibly differs between different modes as well as other factors. Allowed deviation from target temperature is implementation dependent.",
    datatype: "float",
    description: "Target temperature for battery conditioning.",
    type: "actuator",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning.TargetTime",
    name: "TargetTime",
    comment:
      "For FAST_CHARGING mode this is typically the time when charging is supposed to start. For DRIVING mode this is typically the expected departure time. Battery conditioning will be deactivated when this time has passed.",
    datatype: "string",
    description:
      "Target time when conditioning shall be finished, formatted according to ISO 8601 with UTC time zone.",
    type: "actuator",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.BatteryConditioning",
    name: "BatteryConditioning",
    description:
      "Properties related to preparing the vehicle battery for charging or driving.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CellVoltage.CellVoltages",
    name: "CellVoltages",
    comment: "Cells are identified by relative position in array.",
    datatype: "float[]",
    description:
      "Array of cell voltages. Length or array shall correspond to number of cells in vehicle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CellVoltage.IdMax",
    name: "IdMax",
    comment:
      "Identifier is supposed to be relative index of the cell, starting with 0 the first cell.",
    datatype: "uint16",
    description: "Identifier of the battery cell with highest voltage.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CellVoltage.IdMin",
    name: "IdMin",
    comment:
      "Identifier is supposed to be relative index of the cell, starting with 0 the first cell.",
    datatype: "uint16",
    description: "Identifier of the battery cell with lowest voltage.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CellVoltage.Max",
    name: "Max",
    datatype: "float",
    description: "Current voltage of the battery cell with highest voltage.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CellVoltage.Min",
    name: "Min",
    datatype: "float",
    description: "Current voltage of the battery cell with lowest voltage.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CellVoltage",
    name: "CellVoltage",
    description: "Voltage information for cells in the battery pack.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.AveragePower",
    name: "AveragePower",
    datatype: "float",
    description: "Average charging power of last or current charging event.",
    type: "sensor",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.DC",
    name: "DC",
    datatype: "float",
    description:
      "Current DC charging current at inlet. Negative if returning energy to grid.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.Phase1",
    name: "Phase1",
    datatype: "float",
    description:
      "Current AC charging current (rms) at inlet for Phase 1. Negative if returning energy to grid.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.Phase2",
    name: "Phase2",
    datatype: "float",
    description:
      "Current AC charging current (rms) at inlet for Phase 2. Negative if returning energy to grid.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent.Phase3",
    name: "Phase3",
    datatype: "float",
    description:
      "Current AC charging current (rms) at inlet for Phase 3. Negative if returning energy to grid.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeCurrent",
    name: "ChargeCurrent",
    description: "Current charging current.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeLimit",
    name: "ChargeLimit",
    datatype: "uint8",
    default: 100,
    description: "Target charge limit (state of charge) for battery.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeRate",
    name: "ChargeRate",
    datatype: "float",
    description:
      "Current charging rate, as in kilometers of range added per hour.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.DC",
    name: "DC",
    datatype: "float",
    description: "Current DC charging voltage at charging inlet.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.Phase1",
    name: "Phase1",
    datatype: "float",
    description: "Current AC charging voltage (rms) at inlet for Phase 1.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.Phase2",
    name: "Phase2",
    datatype: "float",
    description: "Current AC charging voltage (rms) at inlet for Phase 2.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage.Phase3",
    name: "Phase3",
    datatype: "float",
    description: "Current AC charging voltage (rms) at inlet for Phase 3.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargeVoltage",
    name: "ChargeVoltage",
    description: "Current charging voltage, as measured at the charging inlet.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.AnyPosition",
    name: "AnyPosition",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontLeft",
    name: "FrontLeft",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontMiddle",
    name: "FrontMiddle",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.FrontRight",
    name: "FrontRight",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearLeft",
    name: "RearLeft",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearMiddle",
    name: "RearMiddle",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.IsChargingCableConnected",
    name: "IsChargingCableConnected",
    datatype: "boolean",
    description:
      "Indicates whether a charging cable is physically connected to a particular charging port or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.IsChargingCableLocked",
    name: "IsChargingCableLocked",
    comment:
      "Locking of charging cable can be used to prevent unintentional removing during charging.",
    datatype: "boolean",
    description: "Is charging cable locked to prevent removal.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.IsFlapOpen",
    name: "IsFlapOpen",
    comment:
      "True = at least one flap of this port is open, False = All flaps of this port are closed.",
    datatype: "boolean",
    description: "Status of the charging port flap(s).",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight.SupportedInletTypes",
    name: "SupportedInletTypes",
    allowed: [
      "IEC_TYPE_1_AC",
      "IEC_TYPE_2_AC",
      "IEC_TYPE_3_AC",
      "IEC_TYPE_4_DC",
      "IEC_TYPE_1_CCS_DC",
      "IEC_TYPE_2_CCS_DC",
      "TESLA_ROADSTER",
      "TESLA_HPWC",
      "TESLA_SUPERCHARGER",
      "GBT_AC",
      "GBT_DC",
      "OTHER",
    ],
    comment:
      "A vehicle may have multiple charging ports. IEC_TYPE_1_AC refers to Type 1 as defined in IEC 62196-2. Also known as Yazaki or J1772 connector. IEC_TYPE_2_AC refers to Type 2 as defined in IEC 62196-2. Also known as Mennekes connector. IEC_TYPE_3_AC refers to Type 3 as defined in IEC 62196-2. Also known as Scame connector. IEC_TYPE_4_DC refers to AA configuration as defined in IEC 62196-3. Also known as Type 4 or CHAdeMO connector. IEC_TYPE_1_CCS_DC refers to EE Configuration as defined in IEC 62196-3. Also known as CCS1 or Combo1 connector. IEC_TYPE_2_CCS_DC refers to FF Configuration as defined in IEC 62196-3. Also known as CCS2 or Combo2 connector. TESLA_ROADSTER, TESLA_HPWC (High Power Wall Connector) and TESLA_SUPERCHARGER refer to non-standardized charging ports/methods used by Tesla. GBT_AC refers to connector specified in GB/T 20234.2. GBT_DC refers to connector specified in GB/T 20234.3. Also specified as BB Configuration in IEC 62196-3. OTHER shall be used for charging ports not included in the list above. For additional information see https://en.wikipedia.org/wiki/IEC_62196.",
    datatype: "string[]",
    description:
      "A list of the supported (i.e., available) charging inlets in a particular charging port. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort.RearRight",
    name: "RearRight",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.ChargingPort",
    name: "ChargingPort",
    comment:
      "If a vehicle has a single charging port, then use the instance AnyPosition.",
    description:
      "Properties related to a particular charging port available in the vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.EvseId",
    name: "EvseId",
    comment:
      "Length of id between 7 and 37 characters. ZZ00000 to be used if SECC cannot provide id",
    datatype: "string",
    description:
      "EVSE charging point ID (without separators) of last or current charging event according to ISO 15118-2 Annex H.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.IsCharging",
    name: "IsCharging",
    datatype: "boolean",
    description:
      "True if charging is ongoing. Charging is considered to be ongoing if energy is flowing from charger to vehicle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.IsDischarging",
    name: "IsDischarging",
    datatype: "boolean",
    description:
      "True if discharging (vehicle to grid) is ongoing. Discharging is considered to be ongoing if energy is flowing from vehicle to charger/grid.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Location.Altitude",
    name: "Altitude",
    datatype: "double",
    description:
      "Altitude relative to WGS 84 reference ellipsoid of last or current charging event.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Location.Latitude",
    name: "Latitude",
    datatype: "double",
    description:
      "Latitude of last or current charging event in WGS 84 geodetic coordinates.",
    max: 90,
    min: -90,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Location.Longitude",
    name: "Longitude",
    datatype: "double",
    description:
      "Longitude of last or current charging event in WGS 84 geodetic coordinates.",
    max: 180,
    min: -180,
    type: "sensor",
    unit: "degrees",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Location",
    name: "Location",
    comment:
      "This may depending on implementation represent the location of (the charge port of) the vehicle during charging, or the actual location of the charger/load connected to the vehicle.",
    description: "Location of last or current charging event.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.MaxPower",
    name: "MaxPower",
    datatype: "float",
    description: "Maximum charging power of last or current charging event.",
    type: "sensor",
    unit: "kW",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.DC",
    name: "DC",
    datatype: "float",
    description:
      "Maximum DC charging current at inlet that can be accepted by the system.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.Phase1",
    name: "Phase1",
    datatype: "float",
    description:
      "Maximum AC charging current (rms) at inlet for Phase 1 that can be accepted by the system.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.Phase2",
    name: "Phase2",
    datatype: "float",
    description:
      "Maximum AC charging current (rms) at inlet for Phase 2 that can be accepted by the system.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent.Phase3",
    name: "Phase3",
    datatype: "float",
    description:
      "Maximum AC charging current (rms) at inlet for Phase 3 that can be accepted by the system.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.MaximumChargingCurrent",
    name: "MaximumChargingCurrent",
    description:
      "Maximum charging current that can be accepted by the system, as measured at the charging inlet.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.PowerLoss",
    name: "PowerLoss",
    datatype: "float",
    description:
      "Electrical energy lost by power dissipation to heat inside the AC/DC converter.",
    type: "sensor",
    unit: "W",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.StartStopCharging",
    name: "StartStopCharging",
    allowed: ["START", "STOP"],
    datatype: "string",
    description: "Start or stop the charging process.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Temperature",
    name: "Temperature",
    datatype: "float",
    description:
      "Current temperature of AC/DC converter converting grid voltage to battery voltage.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.TimeToComplete",
    name: "TimeToComplete",
    comment:
      "Shall consider time set by Charging.Timer.Time. E.g. if charging shall start in 3 hours and 2 hours of charging is needed, then Charging.TimeToComplete shall report 5 hours.",
    datatype: "uint32",
    description:
      "The time needed for the current charging process to reach Charging.ChargeLimit. 0 if charging is complete or no charging process is active or planned.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Timer.Mode",
    name: "Mode",
    allowed: ["INACTIVE", "START_TIME", "END_TIME"],
    datatype: "string",
    description:
      "Defines timer mode for charging: INACTIVE - no timer set, charging may start as soon as battery is connected to a charger. START_TIME - charging shall start at Charging.Timer.Time. END_TIME - charging shall be finished (reach Charging.ChargeLimit) at Charging.Timer.Time. When charging is completed the vehicle shall change mode to 'inactive' or set a new Charging.Timer.Time. Charging shall start immediately if mode is 'starttime' or 'endtime' and Charging.Timer.Time is a time in the past.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Timer.Time",
    name: "Time",
    datatype: "string",
    description:
      "Time for next charging-related action, formatted according to ISO 8601 with UTC time zone. Value has no significance if Charging.Timer.Mode is 'inactive'.",
    type: "actuator",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging.Timer",
    name: "Timer",
    description: "Properties related to timing of battery charging sessions.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Charging",
    name: "Charging",
    description: "Properties related to battery charging.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CurrentCurrent",
    name: "CurrentCurrent",
    datatype: "float",
    description:
      "Current current flowing in/out of battery. Positive = Current flowing in to battery, e.g. during charging. Negative = Current flowing out of battery, e.g. during driving.",
    type: "sensor",
    unit: "A",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CurrentPower",
    name: "CurrentPower",
    datatype: "float",
    description:
      "Current electrical energy flowing in/out of battery. Positive = Energy flowing in to battery, e.g. during charging. Negative = Energy flowing out of battery, e.g. during driving.",
    type: "sensor",
    unit: "W",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.CurrentVoltage",
    name: "CurrentVoltage",
    datatype: "float",
    description: "Current Voltage of the battery.",
    type: "sensor",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.DCDC.PowerLoss",
    name: "PowerLoss",
    datatype: "float",
    description:
      "Electrical energy lost by power dissipation to heat inside DC/DC converter.",
    type: "sensor",
    unit: "W",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.DCDC.Temperature",
    name: "Temperature",
    datatype: "float",
    description:
      "Current temperature of DC/DC converter converting battery high voltage to vehicle low voltage (typically 12 Volts).",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.DCDC",
    name: "DCDC",
    description:
      "Properties related to DC/DC converter converting high voltage (from high voltage battery) to vehicle low voltage (supply voltage, typically 12 Volts).",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.ErrorCodes",
    name: "ErrorCodes",
    comment:
      "Error code format is not defined, it may be DTCs according to OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX ) or any other format.",
    datatype: "string[]",
    description: "Current error codes related to the battery, if any.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.GrossCapacity",
    name: "GrossCapacity",
    datatype: "uint16",
    description: "Gross capacity of the battery.",
    type: "attribute",
    unit: "kWh",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Id",
    name: "Id",
    comment:
      "This could be serial number, part number plus serial number, UUID, or any other identifier that the OEM want to use to uniquely identify the battery individual.",
    datatype: "string",
    description: "Battery Identification Number as assigned by OEM.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.IsGroundConnected",
    name: "IsGroundConnected",
    comment:
      "It might be possible to disconnect the traction battery used by an electric powertrain. This is achieved by connectors, typically one for plus and one for minus.",
    datatype: "boolean",
    description:
      "Indicating if the ground (negative terminator) of the traction battery is connected to the powertrain.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.IsPowerConnected",
    name: "IsPowerConnected",
    comment:
      "It might be possible to disconnect the traction battery used by an electric powertrain. This is achieved by connectors, typically one for plus and one for minus.",
    datatype: "boolean",
    description:
      "Indicating if the power (positive terminator) of the traction battery is connected to the powertrain.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.MaxVoltage",
    name: "MaxVoltage",
    datatype: "uint16",
    description: "Max allowed voltage of the battery, e.g. during charging.",
    type: "attribute",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.NetCapacity",
    name: "NetCapacity",
    datatype: "uint16",
    description: "Total net capacity of the battery considering aging.",
    type: "sensor",
    unit: "kWh",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.NominalVoltage",
    name: "NominalVoltage",
    comment:
      "Nominal voltage typically refers to voltage of fully charged battery when delivering rated capacity.",
    datatype: "uint16",
    description: "Nominal Voltage of the battery.",
    type: "attribute",
    unit: "V",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.PowerLoss",
    name: "PowerLoss",
    datatype: "float",
    description:
      "Electrical energy lost by power dissipation to heat inside the battery.",
    type: "sensor",
    unit: "W",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.ProductionDate",
    name: "ProductionDate",
    datatype: "string",
    description:
      "Production date of battery in ISO8601 format, e.g. YYYY-MM-DD.",
    type: "attribute",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Range",
    name: "Range",
    datatype: "uint32",
    description: "Remaining range in meters using only battery.",
    type: "sensor",
    unit: "m",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.StateOfCharge.Current",
    name: "Current",
    datatype: "float",
    description:
      "Physical state of charge of the high voltage battery, relative to net capacity. This is not necessarily the state of charge being displayed to the customer.",
    max: 100.0,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.StateOfCharge.CurrentEnergy",
    name: "CurrentEnergy",
    comment:
      "Current energy could be calculated as .StateOfCharge.Current * .NetCapacity.",
    datatype: "float",
    description:
      "Physical state of charge of high voltage battery expressed in kWh.",
    type: "sensor",
    unit: "kWh",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.StateOfCharge.Displayed",
    name: "Displayed",
    datatype: "float",
    description: "State of charge displayed to the customer.",
    max: 100.0,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.StateOfCharge",
    name: "StateOfCharge",
    description:
      "Information on the state of charge of the vehicle's high voltage battery.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.StateOfHealth",
    name: "StateOfHealth",
    comment:
      "Exact formula is implementation dependent. Could be e.g. current capacity at 20 degrees Celsius divided with original capacity at the same temperature.",
    datatype: "float",
    description: "Calculated battery state of health at standard conditions.",
    max: 100,
    min: 0,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Temperature.Average",
    name: "Average",
    datatype: "float",
    description: "Current average temperature of the battery cells.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Temperature.CellTemperature",
    name: "CellTemperature",
    comment: "Cells are identified by relative position in array.",
    datatype: "float[]",
    description:
      "Array of cell temperatures. Length or array shall correspond to number of cells in vehicle.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Temperature.Max",
    name: "Max",
    datatype: "float",
    description:
      "Current maximum temperature of the battery cells, i.e. temperature of the hottest cell.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Temperature.Min",
    name: "Min",
    datatype: "float",
    description:
      "Current minimum temperature of the battery cells, i.e. temperature of the coldest cell.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.Temperature",
    name: "Temperature",
    description: "Temperature Information for the battery pack.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery.TimeRemaining",
    name: "TimeRemaining",
    datatype: "uint32",
    description: "Time remaining in seconds before the battery is empty.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.TractionBattery",
    name: "TractionBattery",
    description: "Battery Management data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.ClutchEngagement",
    name: "ClutchEngagement",
    datatype: "float",
    description:
      "Clutch engagement. 0% = Clutch fully disengaged. 100% = Clutch fully engaged.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.ClutchWear",
    name: "ClutchWear",
    datatype: "uint8",
    description: "Clutch wear as a percent. 0 = no wear. 100 = worn.",
    max: 100,
    type: "sensor",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.CurrentGear",
    name: "CurrentGear",
    datatype: "int8",
    description:
      "The current gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.DiffLockFrontEngagement",
    name: "DiffLockFrontEngagement",
    datatype: "float",
    description:
      "Front Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.DiffLockRearEngagement",
    name: "DiffLockRearEngagement",
    datatype: "float",
    description:
      "Rear Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.",
    max: 100,
    min: 0,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.DriveType",
    name: "DriveType",
    allowed: [
      "UNKNOWN",
      "FORWARD_WHEEL_DRIVE",
      "REAR_WHEEL_DRIVE",
      "ALL_WHEEL_DRIVE",
    ],
    datatype: "string",
    default: "UNKNOWN",
    description: "Drive type.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.GearChangeMode",
    name: "GearChangeMode",
    allowed: ["MANUAL", "AUTOMATIC"],
    datatype: "string",
    description: "Is the gearbox in automatic or manual (paddle) mode.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.GearCount",
    name: "GearCount",
    datatype: "int8",
    default: 0,
    description: "Number of forward gears in the transmission. -1 = CVT.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.IsElectricalPowertrainEngaged",
    name: "IsElectricalPowertrainEngaged",
    comment:
      "In some hybrid solutions it is possible to disconnect/disengage the electrical powertrain mechanically to avoid induced voltage reaching a too high level when driving at high speed.",
    datatype: "boolean",
    description:
      "Is electrical powertrain mechanically connected/engaged to the drivetrain or not. False = Disconnected/Disengaged. True = Connected/Engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.IsLowRangeEngaged",
    name: "IsLowRangeEngaged",
    comment:
      "The possibility to switch between low and high gear range is typically only available in heavy vehicles and off-road vehicles.",
    datatype: "boolean",
    description:
      "Is gearbox in low range mode or not. False = Normal/High range engaged. True = Low range engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.IsParkLockEngaged",
    name: "IsParkLockEngaged",
    datatype: "boolean",
    description:
      "Is the transmission park lock engaged or not. False = Disengaged. True = Engaged.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.PerformanceMode",
    name: "PerformanceMode",
    allowed: ["NORMAL", "SPORT", "ECONOMY", "SNOW", "RAIN"],
    datatype: "string",
    description: "Current gearbox performance mode.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.SelectedGear",
    name: "SelectedGear",
    datatype: "int8",
    description:
      "The selected gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse, 126=Park, 127=Drive.",
    type: "actuator",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.Temperature",
    name: "Temperature",
    datatype: "float",
    description: "The current gearbox temperature.",
    type: "sensor",
    unit: "celsius",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.TorqueDistribution",
    name: "TorqueDistribution",
    datatype: "float",
    description:
      "Torque distribution between front and rear axle in percent. -100% = Full torque to front axle, 0% = 50:50 Front/Rear, 100% = Full torque to rear axle.",
    max: 100,
    min: -100,
    type: "actuator",
    unit: "percent",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.TravelledDistance",
    name: "TravelledDistance",
    datatype: "float",
    description:
      "Odometer reading, total distance travelled during the lifetime of the transmission.",
    type: "sensor",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission.Type",
    name: "Type",
    allowed: ["UNKNOWN", "SEQUENTIAL", "H", "AUTOMATIC", "DSG", "CVT"],
    datatype: "string",
    default: "UNKNOWN",
    description: "Transmission type.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Transmission",
    name: "Transmission",
    description: "Transmission-specific data, stopping at the drive shafts.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain.Type",
    name: "Type",
    allowed: ["COMBUSTION", "HYBRID", "ELECTRIC"],
    comment:
      "For vehicles with a combustion engine (including hybrids) more detailed information on fuels supported can be found in FuelSystem.SupportedFuelTypes and FuelSystem.SupportedFuels.",
    datatype: "string",
    description: "Defines the powertrain type of the vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Powertrain",
    name: "Powertrain",
    description: "Powertrain data for battery management, etc.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.RoofLoad",
    name: "RoofLoad",
    datatype: "int16",
    description:
      "The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.",
    type: "attribute",
    unit: "kg",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Service.DistanceToService",
    name: "DistanceToService",
    datatype: "float",
    description:
      "Remaining distance to service (of any kind). Negative values indicate service overdue.",
    type: "sensor",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Service.IsServiceDue",
    name: "IsServiceDue",
    datatype: "boolean",
    description:
      "Indicates if vehicle needs service (of any kind). True = Service needed now or in the near future. False = No known need for service.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Service.TimeToService",
    name: "TimeToService",
    datatype: "int32",
    description:
      "Remaining time to service (of any kind). Negative values indicate service overdue.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Service",
    name: "Service",
    description: "Service data.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Speed",
    name: "Speed",
    datatype: "float",
    description: "Vehicle speed.",
    type: "sensor",
    unit: "km/h",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.StartTime",
    name: "StartTime",
    comment:
      "This signal is supposed to be set whenever a new trip starts. A new trip is considered to start when engine gets enabled (e.g. LowVoltageSystemState in ON or START mode). A trip is considered to end when engine is no longer enabled. The default value indicates that the vehicle never has been started, or that latest start time is unknown.",
    datatype: "string",
    default: "0000-01-01T00:00Z",
    description:
      "Start time of current or latest trip, formatted according to ISO 8601 with UTC time zone.",
    type: "attribute",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Trailer.IsConnected",
    name: "IsConnected",
    datatype: "boolean",
    description: "Signal indicating if trailer is connected or not.",
    type: "sensor",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.Trailer",
    name: "Trailer",
    description: "Trailer signals.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.TraveledDistance",
    name: "TraveledDistance",
    datatype: "float",
    description:
      "Odometer reading, total distance traveled during the lifetime of the vehicle.",
    type: "sensor",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.TraveledDistanceSinceStart",
    name: "TraveledDistanceSinceStart",
    comment:
      "A new trip is considered to start when engine gets enabled (e.g. LowVoltageSystemState in ON or START mode). A trip is considered to end when engine is no longer enabled. The signal may however keep the value of the last trip until a new trip is started.",
    datatype: "float",
    description: "Distance traveled since start of current trip.",
    type: "sensor",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.TripDuration",
    name: "TripDuration",
    comment:
      "This signal is not assumed to be continuously updated, but instead set to 0 when a trip starts and set to the actual duration of the trip when a trip ends. A new trip is considered to start when engine gets enabled (e.g. LowVoltageSystemState in ON or START mode). A trip is considered to end when engine is no longer enabled.",
    datatype: "float",
    description: "Duration of latest trip.",
    type: "sensor",
    unit: "s",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.TripMeterReading",
    name: "TripMeterReading",
    comment:
      "The trip meter is an odometer that can be manually reset by the driver",
    datatype: "float",
    description: "Trip meter reading.",
    type: "actuator",
    unit: "km",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.TurningDiameter",
    name: "TurningDiameter",
    datatype: "uint16",
    description:
      "Minimum turning diameter, Wall-to-Wall, as defined by SAE J1100-2009 D102.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.AcrissCode",
    name: "AcrissCode",
    datatype: "string",
    description:
      "The ACRISS Car Classification Code is a code used by many car rental companies.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.BodyType",
    name: "BodyType",
    datatype: "string",
    description:
      "Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.Brand",
    name: "Brand",
    datatype: "string",
    description: "Vehicle brand or manufacturer.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.DateVehicleFirstRegistered",
    name: "DateVehicleFirstRegistered",
    datatype: "string",
    description:
      "The date in ISO 8601 format of the first registration of the vehicle with the respective public authorities.",
    type: "attribute",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.KnownVehicleDamages",
    name: "KnownVehicleDamages",
    datatype: "string",
    description:
      "A textual description of known damages, both repaired and unrepaired.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.LicensePlate",
    name: "LicensePlate",
    comment:
      "Depending on the context, this attribute might not be up to date or might be misconfigured, and therefore should be considered untrustworthy in the absence of another method of verification.",
    datatype: "string",
    description: "The license plate of the vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.MeetsEmissionStandard",
    name: "MeetsEmissionStandard",
    datatype: "string",
    description:
      "Indicates that the vehicle meets the respective emission standard.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.Model",
    name: "Model",
    datatype: "string",
    description: "Vehicle model.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.OptionalExtras",
    name: "OptionalExtras",
    comment:
      "Allowed values are not standardized, each OEM can specify detail descriptions of array elements.",
    datatype: "string[]",
    description:
      "Optional extras refers to all car equipment options that are not installed as standard by the manufacturer.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.ProductionDate",
    name: "ProductionDate",
    datatype: "string",
    description:
      "The date in ISO 8601 format of production of the item, e.g. vehicle.",
    type: "attribute",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.PurchaseDate",
    name: "PurchaseDate",
    datatype: "string",
    description:
      "The date in ISO 8601 format of the item e.g. vehicle was purchased by the current owner.",
    type: "attribute",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VIN",
    name: "VIN",
    datatype: "string",
    description:
      "17-character Vehicle Identification Number (VIN) as defined by ISO 3779.",
    pattern:
      "^([0-9A-HJ-NPR-Z]{3})([0-9A-HJ-NPR-Z]{6})([0-9A-HJ-NPR-Z]{4}[0-9]{4})$",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleConfiguration",
    name: "VehicleConfiguration",
    datatype: "string",
    description:
      "A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleExteriorColor",
    name: "VehicleExteriorColor",
    datatype: "string",
    description:
      "The main color of the exterior within the basic color palette (eg. red, blue, black, white, ...).",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleInteriorColor",
    name: "VehicleInteriorColor",
    datatype: "string",
    description:
      "The color or color combination of the interior of the vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleInteriorType",
    name: "VehicleInteriorType",
    datatype: "string",
    description:
      "The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleModelDate",
    name: "VehicleModelDate",
    datatype: "string",
    description:
      "The release date in ISO 8601 format of a vehicle model (often used to differentiate versions of the same make and model).",
    type: "attribute",
    unit: "iso8601",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleSeatingCapacity",
    name: "VehicleSeatingCapacity",
    datatype: "uint16",
    description:
      "The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.VehicleSpecialUsage",
    name: "VehicleSpecialUsage",
    datatype: "string",
    description:
      "Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.WMI",
    name: "WMI",
    datatype: "string",
    description:
      "3-character World Manufacturer Identification (WMI) as defined by ISO 3780.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification.Year",
    name: "Year",
    datatype: "uint16",
    description: "Model year of the vehicle.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VehicleIdentification",
    name: "VehicleIdentification",
    description: "Attributes that identify a vehicle.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VersionVSS.Label",
    name: "Label",
    comment:
      "COVESA VSS project typically use dev for latest master, and empty string for released versions.",
    datatype: "string",
    default: "dev",
    description: "Label to further describe the version.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VersionVSS.Major",
    name: "Major",
    datatype: "uint32",
    default: 6,
    description: "Supported Version of VSS - Major version.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VersionVSS.Minor",
    name: "Minor",
    datatype: "uint32",
    default: 0,
    description: "Supported Version of VSS - Minor version.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VersionVSS.Patch",
    name: "Patch",
    datatype: "uint32",
    default: 0,
    description: "Supported Version of VSS - Patch version.",
    type: "attribute",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.VersionVSS",
    name: "VersionVSS",
    description: "Supported Version of VSS.",
    type: "branch",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.WidthExcludingMirrors",
    name: "WidthExcludingMirrors",
    datatype: "uint16",
    default: 0,
    description:
      "Overall vehicle width excluding mirrors, as defined by SAE J1100-2009 W103.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.WidthFoldedMirrors",
    name: "WidthFoldedMirrors",
    datatype: "uint16",
    description:
      "Overall vehicle width with mirrors folded, as defined by SAE J1100-2009 W145.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle.WidthIncludingMirrors",
    name: "WidthIncludingMirrors",
    datatype: "uint16",
    description:
      "Overall vehicle width including mirrors, as defined by SAE J1100-2009 W144.",
    type: "attribute",
    unit: "mm",
    template: "my_custom_schema",
  },
  {
    id: "Vehicle",
    name: "Vehicle",
    description: "High-level vehicle data.",
    type: "branch",
    template: "my_custom_schema",
  },
];
