import { FocusedView } from "@/components/FocusedView";
import { Header } from "@/components/Header";
import { VariableItem } from "@/components/VariableItem";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { AirData } from "./airData";
import React from "react";
import { airQualityRating } from './airQualityRating';
import { router} from "expo-router";
import { fetchAirData, fetchLocation } from "./airService";

export default function Index() {
  const [airData, setAirData] = useState<AirData|null>(null);

  useEffect(() => {
    const getAllData = async () => {
      const locData = await fetchLocation();
      const data = await fetchAirData(locData);
      setAirData(data);
      console.log(locData);
    }
    getAllData();
  }, []);

  if(!airData){
    return null;
  }

  return (
    <>
      <Header location="City of London, England" />

      {/* <Text onPress={() => {
        router.push("/graph")}}> 
        <Text>graphy</Text>
      </Text> */}

      <ScrollView contentContainerStyle={styles.view}>
      <View style={styles.scrollStyle}>
        <FocusedView value={airData?.current?.european_aqi} rating={airQualityRating("european_aqi", airData?.current?.european_aqi)} name="Air Quality" />
        <VariableItem value={airData?.current?.nitrogen_dioxide} rating={airQualityRating("nitrogen_dioxide", airData?.current?.nitrogen_dioxide)} name='NO2' />
        <VariableItem value={airData?.current?.pm10} rating={airQualityRating("pm10", airData?.current?.pm10)} name='PM10' />
        <VariableItem value={airData?.current?.pm2_5} rating={airQualityRating("pm2_5", airData?.current?.pm2_5)} name='PM2.5' />
        <VariableItem value={airData?.current?.sulphur_dioxide} rating={airQualityRating("sulphur_dioxide", airData?.current?.sulphur_dioxide)} name='SO2' />
        <VariableItem value={airData?.current?.ozone} rating={airQualityRating("ozone", airData?.current?.ozone)}name='03' />
        <VariableItem value={airData?.current?.uv_index} rating={airQualityRating("uv_index", airData?.current?.uv_index)}name='UV' />
      </View>
      </ScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    top: 150,
  }, 
  scrollStyle: {
    paddingBottom: '50%',
    alignItems: 'center',
  }
});
