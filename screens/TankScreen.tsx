import {Dimensions, View} from "react-native";
import {LineChart} from "react-native-chart-kit";
import {StyleSheet} from "react-native";

export default function TankScreen() {
    function* yLabel() {
        yield* ["0","25","50","75","100"];
    }
    const yLabelIterator = yLabel()

    let data= [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
    ]

    return (

        <View style={styles.container}>
            {/*<LineChart*/}
            {/*    withDots={false}*/}
            {/*    data={{*/}
            {/*        labels: [],*/}
            {/*        datasets: [*/}
            {/*            {*/}
            {/*                data: data,*/}
            {/*                strokeWidth: 2,*/}
            {/*            },*/}
            {/*            { data: [0] },*/}
            {/*            { data: [100] }*/}
            {/*        ]*/}
            {/*    }}*/}
            {/*    withVerticalLines={false}*/}
            {/*    withVerticalLabels={false}*/}
            {/*    yLabelsOffset={-35}*/}
            {/*    width={Dimensions.get("window").width - 20} // from react-native*/}
            {/*    height={220}*/}
            {/*    yAxisSuffix="%"*/}
            {/*    style={{*/}
            {/*        paddingRight: 0*/}
            {/*    }}*/}
            {/*    formatYLabel={*/}
            {/*        () => yLabelIterator.next().value as string*/}
            {/*    }*/}

            {/*    chartConfig={{*/}
            {/*        backgroundGradientTo: "#ffffff",*/}
            {/*        backgroundGradientFrom: "#ffffff",*/}
            {/*        decimalPlaces: 2,*/}
            {/*        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,*/}
            {/*        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,*/}
            {/*        style: {*/}
            {/*            borderRadius: 16,*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    bezier*/}
            {/*/>*/}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    }
});