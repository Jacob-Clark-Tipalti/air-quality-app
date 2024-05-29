import axios from "axios";
import * as Location from 'expo-location';
import { useCallback } from "react";
import { AirData } from "./airData";

export const fetchLocation = async() =>{
    let{status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
        console.log('Permission to access location was denied');
        return;
    }
    let locationData = await Location.getCurrentPositionAsync({});
    return locationData;
}

export const fetchAirData = useCallback( async(locData?: Location.LocationObject | undefined): Promise<AirData> => {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${locData?.coords.latitude}&longitude=${locData?.coords.longitude}&current=european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,uv_index,grass_pollen&forecast_days=3`;
    const response = await axios.get<AirData>(url);
    console.log("fetching");
    return response.data;
  },[])

export const fetchHourly = useCallback (async(locData?: Location.LocationObject | undefined, air?:string): Promise<AirData> => {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${locData?.coords.latitude}&longitude=${locData?.coords.longitude}&hourly=${air}&forecast_hours=5&past_hours=5`;
    const response = await axios.get<AirData>(url);
    console.log("fetching");
    return response.data;
}, [])