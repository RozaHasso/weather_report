const dataModel = 
(
    data, forecast, mintemphor, maxtemphor, mintempaar, maxtempaar, mintempcph, maxtempcph, totalpre, avgwindHor, avgwindAar,avgwindCop, avgcloud, domwind,
   
    filter = () => true) => 
    {
    
    
    const weatherData = () => data.map(w => ({...w})).filter(filter)
    const updateData = p => model(data.map(pp => p.id == pp.id? p : pp), filter)

    const forecastData = () => forecast.map(w => ({...w})).filter(filter)
    const updateForecastData = p => model(forecast.map(pp => p.id == pp.id? p : pp), filter)

    const mintempHorData = () => mintemphor.map(w => ({...w})).filter(filter)
    const updateMintempHorData = p => model(mintemphor.map(pp => p.id == pp.id? p : pp), filter)

    const maxtempHorData = () => maxtemphor.map(w => ({...w})).filter(filter)
    const updateMaxtempHorData = p => model(maxtemphor.map(pp => p.id == pp.id? p : pp), filter)

    const mintempAarData = () => mintempaar.map(w => ({...w})).filter(filter)
    const updateMintempAarData = p => model(mintempaar.map(pp => p.id == pp.id? p : pp), filter)

    const maxtempAarData = () => maxtempaar.map(w => ({...w})).filter(filter)
    const updateMaxtempAarData = p => model(maxtempaar.map(pp => p.id == pp.id? p : pp), filter)

    const mintempCphData = () => mintempcph.map(w => ({...w})).filter(filter)
    const updateMintempCphData = p => model(mintempcph.map(pp => p.id == pp.id? p : pp), filter)

    const maxtempCphData = () => maxtempcph.map(w => ({...w})).filter(filter)
    const updateMaxtempCphData = p => model(maxtempcph.map(pp => p.id == pp.id? p : pp), filter)

    const totalpreData = () => totalpre.map(w => ({...w})).filter(filter)
    const updateTotalPreData = p => model(totalpre.map(pp => p.id == pp.id? p : pp), filter)

    const avgWindHorData = () => avgwindHor.map(w => ({...w})).filter(filter)
    const updateAvgWindHorData = p => model(avgwindHor.map(pp => p.id == pp.id? p : pp), filter)

    const avgWindAarData = () => avgwindAar.map(w => ({...w})).filter(filter)
    const updateAvgWindAarData = p => model(avgwindAar.map(pp => p.id == pp.id? p : pp), filter)

    const avgWindCopData = () => avgwindCop.map(w => ({...w})).filter(filter)
    const updateAvgWindCopData = p => model(avgwindCop.map(pp => p.id == pp.id? p : pp), filter)
    const domWindData = () => domwind.map(w => ({...w})).filter(filter)
    const updateDomWindData = p => model(domwind.map(pp => p.id == pp.id? p : pp), filter)


    const avgCloudData = () => avgcloud.map(w => ({...w})).filter(filter)
    const updateAvgCloudData = p => model(avgcloud.map(pp => p.id == pp.id? p : pp), filter)

    const filtered = filter => model(datas, forecast, mintemp, maxtemp, totalpre, avgwindHor, avgwindCop,  avgcloud
      
        , filter )

    const all = () => model(data, forecast, mintemp, maxtemp, totalpre, avgwindHor, AvgwindAar, avgwindCop, avgcloud
       
        )

    return { weatherData,updateData, forecastData,updateForecastData,mintempHorData ,updateMintempHorData,maxtempHorData,
        updateMaxtempHorData,mintempAarData, updateMintempAarData,maxtempAarData,updateMaxtempAarData, mintempCphData, 
        updateMintempCphData,maxtempCphData,updateMaxtempCphData, totalpreData, updateTotalPreData, 
        avgWindHorData, updateAvgWindHorData, avgWindAarData, updateAvgWindAarData,avgWindCopData, updateAvgWindCopData, domWindData,
        updateDomWindData, avgCloudData,updateAvgCloudData,filtered, all }
}

export default dataModel