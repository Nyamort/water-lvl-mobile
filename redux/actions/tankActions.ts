import env from "../../config";
import {Tank} from "../../models/Tank";
import {FETCH_TANKS} from "../../constantes";

function setTankList(tankList: Tank[]) {
    return {
        type: FETCH_TANKS,
        payload: tankList,
    };
}

export const getTankList = () => {
    const tankUrl = env.API_URL+'/tanks';
    return async dispatch => {
        try {
            const tankPromise = await fetch(tankUrl);
            const tankListJson = await tankPromise.json();
            const tankList: Tank[] = tankListJson.map(elt => new Tank(elt["_id"],elt["name"], elt["dimensions"], elt["ioT"], elt["latestMeasure"]));
            dispatch(setTankList(tankList));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}