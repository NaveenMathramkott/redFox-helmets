const colorPallete = [
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#ececec",
    name: "white",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
];

// includes mesh name then only shown in the current screen
const customMesh = [
  "Glass",
  "SliderOut",
  "BackShield",
  "GlassGuard",
  "MouthGuard",
  "BackPlate",
  "UnderGuard",
  "InnerCloth",
  "Glass001",
  "OuterCover",
  "LightMoutLight",
  "LightMoutLightLed",
  "bluetooth",
  "TopVent",
  "Holder",
];

//ids of meshes need able to config in helmet component
const configMesh = [
  "bluetooth",
  "TopVent",
  "bluetooth-01",
  "TopVent-02",
  "Holder",
  // "BackPlate",
  // "BackShield",
];

// includes options in the options pop up
const configOptions = [
  {
    type: "bluetooth",
    data: [
      { name: "Intercom", meshName: "bluetooth" },
      { name: "bluetooth", meshName: "bluetooth-01" },
      { name: "none", meshName: "bluetooth-none" },
    ],
  },

  {
    type: "TopVent",
    data: [
      { name: "Vent-1", meshName: "TopVent" },
      { name: "Vent-2", meshName: "TopVent-02" },
      { name: "none", meshName: "TopVent-none" },
    ],
  },
  {
    type: "Holder",
    data: [
      { name: "Cam Holder", meshName: "Holder" },
      { name: "none", meshName: "Holder-none" },
    ],
  },
];

export { colorPallete, customMesh, configOptions, configMesh };
