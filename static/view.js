export default window => {
    const document = window.document
    const wheatherDataTable = document.getElementById('weather_data')
    const forecast_dataTable = document.getElementById('forecast_data')
    const table_body2 = document.getElementById('min_temp')
    const table_body3 = document.getElementById('max_temp')
    const table_body4 = document.getElementById('total_pre')
    const table_body5 = document.getElementById('avg_wind')
    const table_body6 = document.getElementById('dom_wind')
    const table_body7 = document.getElementById('avg_cloud')
    const table_body8 = document.getElementById('hourly_pre')



  

    const addWheatherData = p => {
        const tr = wheatherDataTable.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.value))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.precipitation_type))
        tr.insertCell().appendChild(document.createTextNode(p.direction))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.place))
      
        
        
    }

    const addForecastData = p => {
        const tr = forecast_dataTable.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.from))
        tr.insertCell().appendChild(document.createTextNode(p.to))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.precipitation_types))
        tr.insertCell().appendChild(document.createTextNode(p.directions))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.place))


    }
    const addMinTempData = p => {
        const trmih = table_body2.appendChild(document.createElement('tr'))
        trmih.insertCell().appendChild(document.createTextNode(p.value))
        trmih.insertCell().appendChild(document.createTextNode(p.type))
        trmih.insertCell().appendChild(document.createTextNode(p.unit))
        trmih.insertCell().appendChild(document.createTextNode(p.time))
        trmih.insertCell().appendChild(document.createTextNode(p.place))


    }
    
    const addMaxTempData = p => {
        const  trmxh  = table_body3.appendChild(document.createElement('tr'))
        trmxh.insertCell().appendChild(document.createTextNode(p.value))
        trmxh.insertCell().appendChild(document.createTextNode(p.type))
        trmxh.insertCell().appendChild(document.createTextNode(p.unit))
        trmxh.insertCell().appendChild(document.createTextNode(p.time))
        trmxh.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }
    

    const addTotalPreData = p => {
        const  trt  = table_body4.appendChild(document.createElement('tr'))
        trt.insertCell().appendChild(document.createTextNode(p.value))
        trt.insertCell().appendChild(document.createTextNode(p.type))
        trt.insertCell().appendChild(document.createTextNode(p.precipitation_type))
        trt.insertCell().appendChild(document.createTextNode(p.unit))
        trt.insertCell().appendChild(document.createTextNode(p.time))
        trt.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }
    const addAverageWindData = p => {
        const  trw  = table_body5.appendChild(document.createElement('tr'))
        trw.insertCell().appendChild(document.createTextNode(p.value))
        trw.insertCell().appendChild(document.createTextNode(p.type))
        trw.insertCell().appendChild(document.createTextNode(p.direction))
        trw.insertCell().appendChild(document.createTextNode(p.unit))
        trw.insertCell().appendChild(document.createTextNode(p.time))
        trw.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }

    const addDominantWindData = p => {
        const trd = table_body6.appendChild(document.createElement('tr'))
        trd.insertCell().appendChild(document.createTextNode(p.value))
        trd.insertCell().appendChild(document.createTextNode(p.direction))
        trd.insertCell().appendChild(document.createTextNode(p.type))
        trd.insertCell().appendChild(document.createTextNode(p.unit))
        trd.insertCell().appendChild(document.createTextNode(p.time))
        trd.insertCell().appendChild(document.createTextNode(p.place))
    }

    const addAverageCloudData = p => {
        const  trAc = table_body7.appendChild(document.createElement('tr'))
        trAc.insertCell().appendChild(document.createTextNode(p.value))
        trAc.insertCell().appendChild(document.createTextNode(p.type))
        trAc.insertCell().appendChild(document.createTextNode(p.unit))
        trAc.insertCell().appendChild(document.createTextNode(p.time))
        trAc.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }

    const addHourlyPredictionData = p => {
        const  trHp = table_body8.appendChild(document.createElement('tr'))
        trHp.insertCell().appendChild(document.createTextNode(p.from))
        trHp.insertCell().appendChild(document.createTextNode(p.to))
        trHp.insertCell().appendChild(document.createTextNode(p.type))
        trHp.insertCell().appendChild(document.createTextNode(p.precipitation_types))
        trHp.insertCell().appendChild(document.createTextNode(p.directions))
        trHp.insertCell().appendChild(document.createTextNode(p.unit))
        trHp.insertCell().appendChild(document.createTextNode(p.time))
        trHp.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }



    const update = (latestDataHis, latestDataFor, finalformintemp,finalformaxtemp,finalfortotalpre,
        finalfifthavgwind,finalforwinddirection,finalavgcloud,NextDayObject) => {
       

        latestDataHis.forEach(addWheatherData)
        latestDataFor.forEach(addForecastData)
        finalformintemp.forEach(addMinTempData)
        finalformaxtemp.forEach(addMaxTempData)
        finalfortotalpre.forEach(addTotalPreData)
        finalfifthavgwind.forEach(addAverageWindData)
        finalforwinddirection.forEach(addDominantWindData)
        finalavgcloud.forEach(addAverageCloudData)
        NextDayObject.forEach(addHourlyPredictionData)

    }

    return { addWheatherData,addForecastData,addMinTempData,addMaxTempData,addTotalPreData,addAverageWindData,
        addDominantWindData,addAverageCloudData,addHourlyPredictionData,
        update }
}
