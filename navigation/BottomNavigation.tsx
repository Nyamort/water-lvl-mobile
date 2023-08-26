import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import TanksScreen from "../screens/TanksScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function BottomNavigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator>
                <BottomTabNavigator.Screen
                    name="tanks"
                    component={TanksScreen}
                    options={{
                        title: 'Citernes',
                        tabBarIcon: () => <MaterialCommunityIcons name="propane-tank-outline" size={24} color="black" />,
                    }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}