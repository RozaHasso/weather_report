const dataModel1 = 
(
    weathertemp, weatherpre, weatherwind, weathercloud, forecasttemp, forecastpre,forecastwind,forecastcloud,
    filter = () => true) => 
    {
    const weatherDataTemp = () => weathertemp.map(w => ({...w}))
    console.log(weathertemp)
    
    const weatherDataPre = () => weatherpre.map(w => ({...w}))
    
    const weatherDataWind = () => weatherwind.map(w => ({...w}))
    
    const weatherDataCloud = () => weathercloud.map(w => ({...w}))

    const forecastDataTemp = () => forecasttemp.map(w => ({...w}))

    const forecastDataPre = () => forecastpre.map(w => ({...w}))

    const forecastDataWind = () => forecastwind.map(w => ({...w}))

    const forecastDataCloud = () => forecastcloud.map(w => ({...w}))

    return { weatherDataTemp,  weatherDataPre, weatherDataWind, weatherDataCloud, 
        forecastDataTemp, forecastDataPre, forecastDataWind, forecastDataCloud}
}

export default dataModel1