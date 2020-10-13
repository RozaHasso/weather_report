const dataModel = 
(
    data, forecast, mintemp, maxtemp, totalpre,
   
    filter = () => true) => 
    {
    
    
    const weatherData = () => data.map(w => ({...w})).filter(filter)
    const updateData = p => model(data.map(pp => p.id == pp.id? p : pp), filter)

    const forecastData = () => forecast.map(w => ({...w})).filter(filter)
    const updateForecastData = p => model(forecast.map(pp => p.id == pp.id? p : pp), filter)

    const mintempData = () => mintemp.map(w => ({...w})).filter(filter)
    const updateMintempData = p => model(mintemp.map(pp => p.id == pp.id? p : pp), filter)

    const maxtempData = () => maxtemp.map(w => ({...w})).filter(filter)
    const updateMaxtempData = p => model(maxtemp.map(pp => p.id == pp.id? p : pp), filter)

    const totalpreData = () => totalpre.map(w => ({...w})).filter(filter)
    const updateTotalPreData = p => model(totalpre.map(pp => p.id == pp.id? p : pp), filter)

    const filtered = filter => model(datas, forecast, mintemp, maxtemp, totalpre
      
        , filter )

    const all = () => model(data, forecast, mintemp, maxtemp, totalpre
       
        )

    return { weatherData,updateData, forecastData,updateForecastData,mintempData ,updateMintempData,maxtempData,updateMaxtempData ,
        totalpreData, updateTotalPreData ,filtered, all }
}

export default dataModel