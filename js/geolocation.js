import {getWeatherData} from "./api.js";
import {resetWeatherContent} from "./helper.js";

export const handleWeatherByGeolocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = async (pos) => {
        const crd = pos.coords

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=4c7afa8de0324667b3721d6300ea3ae4`
        )

        const result = await response.json()

        const weather = await getWeatherData(result.features[0].properties.city)
        resetWeatherContent(weather.name, weather)
    }

    const error = error => {
        console.log(error.code + ' ' + error.message)
    }
    navigator.geolocation.getCurrentPosition(success, error, options)
}