import {TouchableHighlight, View} from "react-native";
import {StyleSheet} from "react-native";
import {Tank} from "../models/Tank";
import {Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export interface TankItemProps {
    tank: Tank
}

export function TankItem(props: TankItemProps) {
    const navigation = useNavigation();

    const getPercentColor = () => {
        if (props.tank.percentFilled < 20) {
            return '#ff0000';
        } else if (props.tank.percentFilled < 50) {
            return '#ffbf00';
        } else {
            return '#00ff00';
        }
    }

    const goToTankDetail = () => {
        navigation.navigate('tankDetail', {tank: props.tank});
    }

    return (
        <TouchableHighlight style={styles.container} underlayColor="#C9C9C9FF" onPress={()=>goToTankDetail()}>
            <View style={styles.textContainer}>
                <View style={styles.label}>
                    <MaterialCommunityIcons name="propane-tank-outline" size={24} color="black" />
                    <Text style={styles.text}>{props.tank.name}</Text>
                </View>
                <Text style={[styles.percent, {color: getPercentColor()}]}>{props.tank.percentFilled} %</Text>
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
    },
    label: {
        flexDirection: 'row',
    }
});