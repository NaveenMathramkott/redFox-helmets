import { useEffect, useState } from "react";
import AppLoading from "./components/AppLoading";
import Experience from "./components/Experience";
import { CustomizationProvider } from "./context/Customization";
import { useProgress } from "@react-three/drei";
import { CartProvider } from "./context/Cart";

const App = () => {
  const { progress } = useProgress();
  const [appOnLive, setAppOnLive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress === 100) {
        setAppOnLive(true);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);
  return (
    <CustomizationProvider>
      <CartProvider>{appOnLive ? <Experience /> : <AppLoading />}</CartProvider>
    </CustomizationProvider>
  );
};

export default App;
