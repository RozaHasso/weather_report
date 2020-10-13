export default window => {
    const document = window.document
    const table_body = document.getElementById('weather_data')
    const table_body1 = document.getElementById('forecast_data')
    const table_body2 = document.getElementById('min_temp')
    const table_body3 = document.getElementById('max_temp')
    const table_body4 = document.getElementById('total_pre')
    const table_body5 = document.getElementById('avg_wind')
    const table_body6 = document.getElementById('dom_wind')
    const table_body7 = document.getElementById('avg_cloud')
   

    const listeners = []

    const listen = l => listeners.push(l)

    const addData = p => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.value))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.place))

        
        
    }

    const addForecastData = p => {
        const  trf  = table_body1.appendChild(document.createElement('tr'))
        trf.insertCell().appendChild(document.createTextNode(p.from))
        trf.insertCell().appendChild(document.createTextNode(p.to))
        trf.insertCell().appendChild(document.createTextNode(p.type))
        trf.insertCell().appendChild(document.createTextNode(p.unit))
        trf.insertCell().appendChild(document.createTextNode(p.time))
        trf.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }


    const addMinTempHorData = p => {
        const  trmih  = table_body2.appendChild(document.createElement('tr'))
        trmih.insertCell().appendChild(document.createTextNode(p.value))
        trmih.insertCell().appendChild(document.createTextNode(p.type))
        trmih.insertCell().appendChild(document.createTextNode(p.unit))
        trmih.insertCell().appendChild(document.createTextNode(p.time))
        trmih.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }
    const addMinTempAarData = p => {
        const  trmia  = table_body2.appendChild(document.createElement('tr'))
        trmia.insertCell().appendChild(document.createTextNode(p.value))
        trmia.insertCell().appendChild(document.createTextNode(p.type))
        trmia.insertCell().appendChild(document.createTextNode(p.unit))
        trmia.insertCell().appendChild(document.createTextNode(p.time))
        trmia.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }
    const addMinTempCphData = p => {
        const  trmic  = table_body2.appendChild(document.createElement('tr'))
        trmic.insertCell().appendChild(document.createTextNode(p.value))
        trmic.insertCell().appendChild(document.createTextNode(p.type))
        trmic.insertCell().appendChild(document.createTextNode(p.unit))
        trmic.insertCell().appendChild(document.createTextNode(p.time))
        trmic.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }



    const addMaxTempHorData = p => {
        const  trmxh  = table_body3.appendChild(document.createElement('tr'))
        trmxh.insertCell().appendChild(document.createTextNode(p.value))
        trmxh.insertCell().appendChild(document.createTextNode(p.type))
        trmxh.insertCell().appendChild(document.createTextNode(p.unit))
        trmxh.insertCell().appendChild(document.createTextNode(p.time))
        trmxh.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }
    

    const addMaxTempAarData = p => {
        const  trmxa  = table_body3.appendChild(document.createElement('tr'))
        trmxa.insertCell().appendChild(document.createTextNode(p.value))
        trmxa.insertCell().appendChild(document.createTextNode(p.type))
        trmxa.insertCell().appendChild(document.createTextNode(p.unit))
        trmxa.insertCell().appendChild(document.createTextNode(p.time))
        trmxa.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }

    const addMaxTempCphData = p => {
        const  trmxc  = table_body3.appendChild(document.createElement('tr'))
        trmxc.insertCell().appendChild(document.createTextNode(p.value))
        trmxc.insertCell().appendChild(document.createTextNode(p.type))
        trmxc.insertCell().appendChild(document.createTextNode(p.unit))
        trmxc.insertCell().appendChild(document.createTextNode(p.time))
        trmxc.insertCell().appendChild(document.createTextNode(p.place))
        
        
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
    const addAverageWindHorData = p => {
        const  trw  = table_body5.appendChild(document.createElement('tr'))
        trw.insertCell().appendChild(document.createTextNode(p.value))
        trw.insertCell().appendChild(document.createTextNode(p.type))
        trw.insertCell().appendChild(document.createTextNode(p.direction))
        trw.insertCell().appendChild(document.createTextNode(p.unit))
        trw.insertCell().appendChild(document.createTextNode(p.time))
        trw.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }

    const addAverageWindAarData = p => {
        const  trA  = table_body5.appendChild(document.createElement('tr'))
        trA.insertCell().appendChild(document.createTextNode(p.value))
        trA.insertCell().appendChild(document.createTextNode(p.type))        
        trA.insertCell().appendChild(document.createTextNode(p.direction))
        trA.insertCell().appendChild(document.createTextNode(p.unit))
        trA.insertCell().appendChild(document.createTextNode(p.time))
        trA.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }

    const addAverageWindCopData = p => {
        const  trC  = table_body5.appendChild(document.createElement('tr'))
        trC.insertCell().appendChild(document.createTextNode(p.value))
        trC.insertCell().appendChild(document.createTextNode(p.type))        
        trC.insertCell().appendChild(document.createTextNode(p.direction))
        trC.insertCell().appendChild(document.createTextNode(p.unit))
        trC.insertCell().appendChild(document.createTextNode(p.time))
        trC.insertCell().appendChild(document.createTextNode(p.place))
        
        
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

   
    const update = model => {
      
        model.weatherData().forEach(addData)
        model.forecastData().forEach(addForecastData)
        model.mintempHorData().forEach(addMinTempHorData)
        model.mintempAarData().forEach(addMinTempAarData)
        model.mintempCphData().forEach(addMinTempCphData)
        model.maxtempHorData().forEach(addMaxTempHorData)
        model.maxtempAarData().forEach(addMaxTempAarData)
        model.maxtempCphData().forEach(addMaxTempCphData)
        model.totalpreData().forEach(addTotalPreData)
        model.avgWindHorData().forEach(addAverageWindHorData)
        model.avgWindAarData().forEach(addAverageWindAarData)
        model.avgWindCopData().forEach(addAverageWindCopData)
        model.domWindData().forEach(addDominantWindData)
        model.avgCloudData().forEach(addAverageCloudData)
    }
    
 
    return { addData,update,listen, prompt }
}
