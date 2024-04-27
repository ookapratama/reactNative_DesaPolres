import { Text, View } from "react-native";

// screens
import Home from "../screens/Home";
import Splash from "../screens/Splash";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenStackList } from "./initial-navigation";

enableScreens();

const Stack = createNativeStackNavigator<ScreenStackList>();

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName={"Splash"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
