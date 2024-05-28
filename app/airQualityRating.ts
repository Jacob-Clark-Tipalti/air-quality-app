import {pollutantDictionary} from './pollutantDictionary';

export const airQualityRating = (aqi: number): string =>{
    const values = pollutantDictionary["european_aqi"];
    let result = "test";

    if(Math.abs(aqi) < values[0]){
        return "Fair"
    }else if(Math.abs(aqi) < values[1]){
        return "Medium"
    }else{
        result = "Poor"
    }

    return result;
}
