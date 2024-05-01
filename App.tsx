import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContainer from "./src/navigation/AppContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import { LogBox } from "react-native";

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

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
