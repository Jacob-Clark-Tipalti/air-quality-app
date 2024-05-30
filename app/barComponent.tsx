import { View, StyleSheet } from "react-native";
import { airQualityRating } from "./airQualityRating";

type BarComponentProps = {
    data: string | number;
}

// maybe use map to get all data & times and display them with one compnent??
const BarComponent: React.FC<BarComponentProps>= ({data}) => {
    let height;
    height = Number(data) * 7;

    let rating = airQualityRating("european_aqi", Number(data));
    let barColor;
    if (rating === 'Fair') {
        barColor = '#50CCAA';
    } else if (rating === 'Medium') {
        barColor = '#FDBA74';
    } else {
        barColor = '#DC2626';
    }

    return(
        <>
            <View style={{...styles.box, height: height, backgroundColor: barColor}} />
        </>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 45,
        height: 100,
        backgroundColor: '#50CCAA',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        margin:5,
    }
});

export default BarComponent;