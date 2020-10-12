export default window => {
    const document = window.document
    const table_body = document.getElementById('weather_data')
    const table_body1 = document.getElementById('forecast_data')
    const table_body2 = document.getElementById('min_temp')
    const table_body3 = document.getElementById('max_temp')

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


    const addMinTempData = p => {
        const  trm  = table_body2.appendChild(document.createElement('tr'))
        trm.insertCell().appendChild(document.createTextNode(p.value))
        trm.insertCell().appendChild(document.createTextNode(p.type))
        trm.insertCell().appendChild(document.createTextNode(p.unit))
        trm.insertCell().appendChild(document.createTextNode(p.time))
        trm.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }



    const addMaxTempData = p => {
        const  trma  = table_body3.appendChild(document.createElement('tr'))
        trma.insertCell().appendChild(document.createTextNode(p.value))
        trma.insertCell().appendChild(document.createTextNode(p.type))
        trma.insertCell().appendChild(document.createTextNode(p.unit))
        trma.insertCell().appendChild(document.createTextNode(p.time))
        trma.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }

   
    const update = model => {
      
        model.weatherData().forEach(addData)
        model.forecastData().forEach(addForecastData)
        model.mintempData().forEach(addMinTempData)
        model.maxtempData().forEach(addMaxTempData)
    }
    
 
    return { addData,update,listen, prompt }
}
