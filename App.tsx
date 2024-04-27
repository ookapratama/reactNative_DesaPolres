import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContainer from "./src/navigation/AppContainer";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
