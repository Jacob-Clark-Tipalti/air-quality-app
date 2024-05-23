import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { AirData } from './airData';

export default function App() {
  const [location, setLocation] = React.useState<Location.LocationObjectCoords|null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const [airData, setAirData] = useState<AirData>();

    const fetchAirData = async(): Promise<AirData> => {
      const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,uv_index,grass_pollen&forecast_days=3`;
      const response = await axios.get<AirData>(url);
      return response.data;
    }

    const fetchLocation = async() =>{
      let{status} = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
          setErrorMsg('Permission to access location was denied');
          return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    }

    useEffect(() => {
      const getAllData = async () => {
        fetchLocation();
        const data = await Promise.resolve(fetchAirData());
        setAirData(data);
      }
    }, []);

    return (
        <View>
          <Text>{"lat: " + latitude}</Text>
          <Text>{"lon: " + longitude}</Text>
          <Text>{JSON.stringify(airData)}</Text>
        </View>
      );

};
