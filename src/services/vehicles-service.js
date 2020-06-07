import http from "./api";

export const VehicleService = {
  getVehicle: () => http.get('/Make'),
};

export default VehicleService;
