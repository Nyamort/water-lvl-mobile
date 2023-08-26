import {TouchableHighlight, View} from "react-native";
import {StyleSheet} from "react-native";
import {Tank} from "../models/Tank";
import {Text} from "react-native";

export interface TankItemProps {
    tank: Tank
}

export function TankItem(props: TankItemProps) {
    return (
        <TouchableHighlight style={styles.container} underlayColor="#C9C9C9FF" onPress={()=>console.log(props.tank)}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.tank.name}</Text>
                <Text style={styles.percent}>{props.tank.latestMeasure} %</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 12
    },
    text: {
        color: '#0f2d37',
    },
    percent: {
        color: '#0f2d37',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});