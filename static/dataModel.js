const dataModel = 
(
    data, forecast, mintemp, maxtemp, totalpre, avgwindHor, avgwindAar,avgwindCop, avgcloud,
   
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

    const avgWindHorData = () => avgwindHor.map(w => ({...w})).filter(filter)
    const updateAvgWindHorData = p => model(avgwindHor.map(pp => p.id == pp.id? p : pp), filter)

    const avgWindAarData = () => avgwindAar.map(w => ({...w})).filter(filter)
    const updateAvgWindAarData = p => model(avgwindAar.map(pp => p.id == pp.id? p : pp), filter)

    const avgWindCopData = () => avgwindCop.map(w => ({...w})).filter(filter)
    const updateAvgWindCopData = p => model(avgwindCop.map(pp => p.id == pp.id? p : pp), filter)


    const avgCloudData = () => avgcloud.map(w => ({...w})).filter(filter)
    const updateAvgCloudData = p => model(avgcloud.map(pp => p.id == pp.id? p : pp), filter)

    const filtered = filter => model(datas, forecast, mintemp, maxtemp, totalpre, avgwindHor, avgwindCop,  avgcloud
      
        , filter )

    const all = () => model(data, forecast, mintemp, maxtemp, totalpre, avgwindHor, AvgwindAar, avgwindCop, avgcloud
       
        )

    return { weatherData,updateData, forecastData,updateForecastData,mintempData ,updateMintempData,maxtempData,updateMaxtempData ,
        totalpreData, updateTotalPreData, avgWindHorData, updateAvgWindHorData,
        avgWindAarData, updateAvgWindAarData,avgWindCopData, updateAvgWindCopData,avgCloudData,updateAvgCloudData,filtered, all }
}

export default dataModel