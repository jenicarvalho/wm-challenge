import { call, put } from "redux-saga/effects"
import { Creators} from "./index"
import { VehicleService } from "../../../services/vehicles-service"

export function* getMakes(action) {
    try {

        const response = yield call(VehicleService.getVehicle);
        yield put(Creators.loadMakesSuccess({
            ...response,
            data: action.payload
        }));
    } catch (err) {
        console.error(err);
        yield put(Creators.loadMakesFailure());
    }
}
