import { Text, ScrollView, StyleSheet, Pressable, Button, View, Image} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { useNavigation, router } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import BarComponent from "./barComponent";
import { fetchHourly, fetchLocation } from "./airService";
import { getTwelveHourTime } from "./getTwelveHourTime";
import {ReactComponent as leftArrow} from "./leftArrow.png";

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

  return (
    <>
        <View style={styles.header}>
            <Header location="City of London, England" />
            <Pressable onPress={() => {router.back()}}> 
                <Image style={styles.icon} source={require('./leftArrow.png')} />
            </Pressable>
        </View>
       

        <View style={styles.container}>
            <ScrollView horizontal={true}>
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

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    UV Index
                </Text>
                <Text style={styles.text}>
                The UV Index is a measure of the intensity of ultraviolet radiation from the sun at the Earth's surface. It provides important information to help people prevent overexposure to UV rays, which can lead to sunburns, premature aging of the skin, and an increased risk of skin cancer.
                </Text>
            </View>
        </View>

    </>
  );
}

const styles = StyleSheet.create({
    icon:{
        width: 25,
        height: 25,
        marginTop:18,
        marginLeft: 18
    },
    header:{
        
    },
    container: {
        top:100,
        padding: 25
    },
    items:{
        justifyContent: 'center',
        marginTop: 'auto',
    },
    title:{
        color:'#4D4D4D',
        fontSize: 20,
        fontWeight: '700'
    },
    text:{
        textAlignVertical: "center",
        color:'#4D4D4D',
        top:25
    },
    textContainer:{
        top:35,
        alignItems: 'center',
        textAlignVertical: "center",
        justifyContent: 'center',
        textAlign: 'center'
    }
});
