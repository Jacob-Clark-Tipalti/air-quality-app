interface Current {
    carbon_monoxide: number,
    european_aqi: number,
    grass_pollen: number,
    interval: number,
    nitrogen_dioxide: number,
    ozone: number,
    pm2_5: number,
    pm10: number,
    sulphur_dioxide: number,
    time: string,
    uv_index: number,
}

interface CurrentUnits {
    carbon_monoxide: string,
    european_aqi: string,
    grass_pollen: string,
    interval: string,
    nitrogen_dioxide: string,
    ozone: string,
    pm2_5: string,
    pm10: string,
    sulphur_dioxide: string,
    time: string,
    uv_index: string,
}

interface Hourly {
    time: string[],
    [index: string]: number[] | string[],
}

interface HourlyUnits {
    [index: string]: string,
}

export interface AirData {
    current?: Current,
    current_units?: CurrentUnits,
    hourly?: Hourly,
    hourly_units?: HourlyUnits,
    elevation: number,
    geneartiontime_ms: number,
    latitude: number,
    longitude: number,
    timezone: string,
    timezone_abbreviation: string,
    utc_offset_seconds: number
}