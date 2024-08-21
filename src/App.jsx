import Experience from "./components/Experience";
import { CustomizationProvider } from "./context/Customization";

const App = () => {
  return (
    <CustomizationProvider>
      <Experience />
    </CustomizationProvider>
  );
};

export default App;
