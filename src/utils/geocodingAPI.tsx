export const reverseGeocoding = (lat: Number,lon: Number) => {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lon+'&result_type=locality&key=AIzaSyDUhqTD2-hLXp1_0WfN4QHDddJ8c_nwMxA')
    .then(response => response.json());
}

export const getCoordsForPlaceID = (placeID: String) => {
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?place_id='+placeID+'&key=AIzaSyDUhqTD2-hLXp1_0WfN4QHDddJ8c_nwMxA')
    .then(response => response.json());
}
