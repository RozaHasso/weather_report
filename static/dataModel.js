const dataModel = 
(
    datas, data2,
   
    filter = () => true) => 
    {
    
    const weatherData = () => datas.map(w => ({...w})).filter(filter)
    const updateData = p => model(datas.map(pp => p.id == pp.id? p : pp), filter)
    const weatherData2 = () => data2.map(w => ({...w})).filter(filter)
    const updateData2 = p => model(data2.map(pp => p.id == pp.id? p : pp), filter)
    const filtered = filter => model(datas, data2
      
        , filter )

    const all = () => model(datas, data2
       
        )

    return { weatherData,updateData, weatherData2,updateData2,filtered, all }
}

export default dataModel