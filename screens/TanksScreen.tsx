import {FlatList, RefreshControl, ScrollView, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect, useState} from "react";
import {getTankList} from "../redux/actions/tankActions";

export default function TanksScreen() {
    const tankList = useSelector(state => state.tankReducer.tanks);
    const [refreshing, setRefreshing] = useState(false);
    const loadTanks = async () => {
        await dispatch(getTankList());
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadTanks().then(() => setRefreshing(false));
    }, []);

    const dispatch = useDispatch();
    useEffect(() => {

        loadTanks();
    }, [dispatch]);

    return (
        <FlatList
            style={styles.container}
            data={tankList}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            renderItem={({item}) => <TankItem tank={item}></TankItem>}
        />
    )
}

import {TankItem} from "../components/TankItem";

const styles = StyleSheet.create({
    container: {
        height: "100%",
    }
});