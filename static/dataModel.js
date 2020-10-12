const dataModel = 
(
    datas,
   
    filter = () => true) => 
    {
    
    const weatherData = () => datas.map(w => ({...w})).filter(filter)
    const updateData = p => model(datas.map(pp => p.id == pp.id? p : pp), filter)
    const filtered = filter => model(datas
      
        , filter )

    const all = () => model(datas
       
        )

    return { weatherData,updateData,filtered, all }
}

export default dataModel