import { FocusedView } from "@/components/FocusedView";
import { Header } from "@/components/Header";
import { VariableItem } from "@/components/VariableItem";
import { Text, ScrollView, StyleSheet } from "react-native";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { AirData } from "./airData";
import React from "react";
import axios from "axios";

export default function Index() {
  const [location, setLocation] = useState<Location.LocationObjectCoords|null>(null);
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [airData, setAirData] = useState<AirData|null>(null);

  const fetchAirData = async(): Promise<AirData> => {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,uv_index,grass_pollen&forecast_days=3`;
    const response = await axios.get<AirData>(url);
    console.log(response)
    return response.data;
  }

  const fetchLocation = async() =>{
    let{status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
        console.log('Permission to access location was denied');
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
    getAllData();
  }, []);

  return (
    <>
      <Header location="City of London, England" />
      <ScrollView contentContainerStyle={styles.view}>
        <FocusedView value={airData?.current?.european_aqi} rating="Fair" name="Air Quality" />
        <VariableItem value={airData?.current?.nitrogen_dioxide} rating='Medium' name='NO2' />
        {/* <Text>{latitude}</Text> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    top: 150,
  }
});
