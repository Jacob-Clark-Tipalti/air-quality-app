import { FocusedView } from "@/components/FocusedView";
import { Header } from "@/components/Header";
import { VariableItem } from "@/components/VariableItem";
import { Text, ScrollView, StyleSheet, Pressable, Button } from "react-native";
import * as Location from 'expo-location';
import { useCallback, useEffect, useState } from "react";
import { AirData } from "./airData";
import React from "react";
import axios from "axios";
import { airQualityRating } from './airQualityRating';
import { Link, Redirect, router, useNavigation } from "expo-router";
import { StackActions } from "@react-navigation/native";

export default function Index() {
  const [airData, setAirData] = useState<AirData|null>(null);

  const fetchAirData = useCallback( async(locData?: Location.LocationObject | undefined): Promise<AirData> => {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${locData?.coords.latitude}&longitude=${locData?.coords.longitude}&current=european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,uv_index,grass_pollen&forecast_days=3`;
    const response = await axios.get<AirData>(url);
    console.log("fetching");
    return response.data;
  },[])

  const fetchLocation = async() =>{
    let{status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
        console.log('Permission to access location was denied');
        return;
    }
    let locationData = await Location.getCurrentPositionAsync({});
    return locationData;
  }

  useEffect(() => {
    const getAllData = async () => {
      const locData = await fetchLocation();
      console.log(locData);
      const data = await fetchAirData(locData);
      setAirData(data);
    }
    getAllData();
  }, []);

  if(!airData){
    return null;
  }

  // const navigation = useNavigation();
  // const handleNavigate = () => {
  //   navigation.navigate('graph');
  // }

  return (
    <>

      <Header location="City of London, England" />
      {/* <Link href="/graph"> graphy </Link> */}
      {/* <Button
        title="Go to graph"
        onPress={() => StackActions.push('/graph')}
      />
       */}

      {/* <View onPress={() => {router.push("/CategoryScreen")}}> 
        <Text>graphy</Text>
      </View> */}

    {/* <View>
      <Button title="Go to ScreenB" onPress={handleNavigate} />
    </View> */}

      <ScrollView contentContainerStyle={styles.view}>
        <FocusedView value={airData?.current?.european_aqi} rating={airQualityRating("european_aqi", airData?.current?.european_aqi)} name="Air Quality" />
        <VariableItem value={airData?.current?.nitrogen_dioxide} rating={airQualityRating("nitrogen_dioxide", airData?.current?.nitrogen_dioxide)} name='NO2' />
        <VariableItem value={airData?.current?.pm10} rating={airQualityRating("pm10", airData?.current?.pm10)} name='PM10' />
        <VariableItem value={airData?.current?.pm2_5} rating={airQualityRating("pm2_5", airData?.current?.pm2_5)} name='PM2.5' />
        <VariableItem value={airData?.current?.sulphur_dioxide} rating={airQualityRating("sulphur_dioxide", airData?.current?.sulphur_dioxide)} name='SO2' />
        <VariableItem value={airData?.current?.ozone} rating={airQualityRating("ozone", airData?.current?.ozone)}name='03' />
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
