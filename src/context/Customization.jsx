import { createContext, useContext, useEffect, useState } from "react";
import { colorPallete, customMesh } from "./data";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [cushionMaterial, setCushionMaterial] = useState("leather");
  const [backLed, setBackLed] = useState(1);
  const [innerVisor, setInnerVisor] = useState(1);
  const [bluetoothModule, setBlutoothModule] = useState(1);
  const [innerMeshColor, setInnerMeshColor] = useState(colorPallete[0]);
  const [customSelect, setCustomSelect] = useState([]);
  const [customMeshId, setCustomMeshId] = useState(customMesh);
  const [coverColor, setCoverColor] = useState(colorPallete[0].color);

  useEffect(() => {
    setCustomMeshId(customMesh);
  }, []);

  return (
    <CustomizationContext.Provider
      value={{
        cushionMaterial,
        backLed,
        innerVisor,
        bluetoothModule,
        innerMeshColor,
        customSelect,
        customMeshId,
        coverColor,
        setBackLed,
        setBlutoothModule,
        setCushionMaterial,
        setInnerMeshColor,
        setInnerVisor,
        setCustomSelect,
        setCustomMeshId,
        setCoverColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
