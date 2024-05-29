import { Text, ScrollView, StyleSheet, Pressable, Button, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { useNavigation, router } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import BarComponent from "./barComponent";
import { fetchHourly, fetchLocation } from "./airService";
import { getTwelveHourTime } from "./getTwelveHourTime";

export default function Graph() {
    const [hourlyData, setHourlyData] = useState<number[] | string[] | undefined>();
    const [hours, setHours] = useState<string[] | undefined>();
    const navigation = useNavigation();

    useEffect(() => {

        const options: NativeStackNavigationOptions = {"headerShown": false}
        navigation.setOptions(options);

        const getAllData = async () => {
            const locData = await fetchLocation();
            const fetchedHourlyData = await fetchHourly(locData, "european_aqi");
            console.log(fetchedHourlyData);
            const hours = fetchedHourlyData?.hourly?.time;
            const times = hours?.map(getTwelveHourTime);
            setHourlyData(fetchedHourlyData.hourly?.european_aqi);
            setHours(times);
        }
        getAllData();
      }, []);

    // TODO: change value display to hours
  return (
    <>
        <Header location="City of London, England" />
        <Text onPress={() => {router.back()}}> 
            <Text>indexy</Text>
        </Text>

        <View style={styles.container}>
            <ScrollView style={styles.app} horizontal={true}>
                {hourlyData?.map((item, index) => {
                    const hour = hours? hours[index]: "";
                    return (
                        <View style={styles.items}>
                            <BarComponent data={item} /> 
                            <Text style={{textAlignVertical: "center",textAlign: "center"}}>{hour}</Text> 
                        </View>
                    );
                })}
            </ScrollView>


        </View>

    </>
  );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
    },
    app: {
        // marginHorizontal: "auto",
        // flexDirection: "row",
    },
    items:{
        // flexDirection: 'column',
        // alignContent: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
    }
});
