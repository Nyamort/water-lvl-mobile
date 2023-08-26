import {StyleSheet} from 'react-native';
import BottomNavigation from "./navigation/BottomNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import store from "./redux/store";

export default function App() {
    return (
        <SafeAreaProvider store={store}>
            <BottomNavigation></BottomNavigation>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
