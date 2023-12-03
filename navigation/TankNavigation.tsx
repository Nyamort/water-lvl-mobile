import {createStackNavigator} from "@react-navigation/stack";
import TanksScreen from "../screens/TanksScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TankScreen from "../screens/TankScreen";

export function TankNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="tanks"
                          component={TanksScreen}
                          options={{
                              title: 'Citernes',
                              tabBarIcon: () => <MaterialCommunityIcons name="propane-tank-outline"
                                                                        size={24}
                                                                        color="black"/>,
                          }}
            />
            <Stack.Screen name="tankDetail"
                            component={TankScreen}
                            options={{
                                title: 'Citernes',
                                tabBarIcon: () => <MaterialCommunityIcons name="propane-tank-outline"
                                                                            size={24}
                                                                            color="black"/>,
                            }}
            />
        </Stack.Navigator>
    )

}