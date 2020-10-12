const dataModel = 
(
    data, forecast, mintemp, 
   
    filter = () => true) => 
    {
    
    
    const weatherData = () => data.map(w => ({...w})).filter(filter)
    const updateData = p => model(data.map(pp => p.id == pp.id? p : pp), filter)

    const forecastData = () => forecast.map(w => ({...w})).filter(filter)
    const updateForecastData = p => model(forecast.map(pp => p.id == pp.id? p : pp), filter)

    const mintempData = () => mintemp.map(w => ({...w})).filter(filter)
    const updateMintempData = p => model(mintemp.map(pp => p.id == pp.id? p : pp), filter)

    const filtered = filter => model(datas, forecast, mintemp
      
        , filter )

    const all = () => model(data, forecast, mintemp
       
        )

    return { weatherData,updateData, forecastData,updateForecastData,mintempData ,updateMintempData,filtered, all }
}

export default dataModel