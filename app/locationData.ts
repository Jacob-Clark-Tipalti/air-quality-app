interface Address {
    city: string,
    city_district: string,
    country: string,
    country_code: string,
    postcode: string,
    road: string,
    state: string,
    state_district: string,
    suburb: string,
}

export interface LocationData {
    address: Address,
    display_name: string,
    lat: string,
    lon: string,
    name: string,
    type: string,
}