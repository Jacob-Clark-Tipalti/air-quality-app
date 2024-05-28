export interface Dictionary{
    [key:string]:number[];
}

export const pollutantDictionary:Dictionary = {
    carbon_monoxide: [160, 180, 190],
    european_aqi: [25, 30, 40],
    grass_pollen: [5, 10, 20],
    nitrogen_dioxide: [5, 20, 40],
    ozone: [11, 15, 20],
    pm2_5: [5, 14, 20],
    pm10: [5, 10, 16],
    sulphur_dioxide: [5, 10, 20],
    uv_index: [1, 3, 5]
}