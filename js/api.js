export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca80245c5f4800d95a6e13e051a3d3b0&lang=ru&units=metric`)

        return await response.json()

    } catch (error) {
        console.error(error)
    }
}
