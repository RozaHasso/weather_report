export default window => {
    const document = window.document
    const table_body = document.getElementById('weather_data')
    const table_body2 = document.getElementById('forecast_data')
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
        

        const  trf  = table_body2.appendChild(document.createElement('tr'))
        trf.insertCell().appendChild(document.createTextNode(p.from))
        trf.insertCell().appendChild(document.createTextNode(p.to))
        trf.insertCell().appendChild(document.createTextNode(p.type))
        trf.insertCell().appendChild(document.createTextNode(p.unit))
        trf.insertCell().appendChild(document.createTextNode(p.time))
        trf.insertCell().appendChild(document.createTextNode(p.place))
        
        
    }


   
    const update = model => {
      
        model.weatherData().forEach(addData)
        model.weatherData().forEach(addForecastData)
    }
    
 
    return { addData,update,listen, prompt }
}
