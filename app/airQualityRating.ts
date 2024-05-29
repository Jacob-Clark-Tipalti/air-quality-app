import {pollutantDictionary} from './pollutantDictionary';

export const airQualityRating = (pollutant: string, value?:number) =>{
    const values = pollutantDictionary[pollutant];
    let result = "test";

    if(value && value < values[0]){
        return "Fair"
    }else if(value && value < values[1]){
        return "Medium"
    }else{
        result = "Poor"
    }

    return result;
}
