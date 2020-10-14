export default window => {
    const document = window.document
    const table_body = document.getElementById('weather_data')
    const table_body1 = document.getElementById('forecast_data')

    const listeners = []

    const listen = l => listeners.push(l)

    const addDataTemp = p => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(p.value))
        tr.insertCell().appendChild(document.createTextNode(p.type))
        tr.insertCell().appendChild(document.createTextNode(p.unit))
        tr.insertCell().appendChild(document.createTextNode(p.time))
        tr.insertCell().appendChild(document.createTextNode(p.place))  
    }
    const addDataPre = p => {
        const  trmih  = table_body.appendChild(document.createElement('tr'))
        trmih.insertCell().appendChild(document.createTextNode(p.value))
        trmih.insertCell().appendChild(document.createTextNode(p.type))
        trmih.insertCell().appendChild(document.createTextNode(p.unit))
        trmih.insertCell().appendChild(document.createTextNode(p.time))
        trmih.insertCell().appendChild(document.createTextNode(p.place))       
    }
    const addDataWind = p => {
        const  trmia  = table_body.appendChild(document.createElement('tr'))
        trmia.insertCell().appendChild(document.createTextNode(p.value))
        trmia.insertCell().appendChild(document.createTextNode(p.type))
        trmia.insertCell().appendChild(document.createTextNode(p.unit))
        trmia.insertCell().appendChild(document.createTextNode(p.time))
        trmia.insertCell().appendChild(document.createTextNode(p.place))        
    }
    const addDataCloud = p => {
        const  trmic  = table_body.appendChild(document.createElement('tr'))
        trmic.insertCell().appendChild(document.createTextNode(p.value))
        trmic.insertCell().appendChild(document.createTextNode(p.type))
        trmic.insertCell().appendChild(document.createTextNode(p.unit))
        trmic.insertCell().appendChild(document.createTextNode(p.time))
        trmic.insertCell().appendChild(document.createTextNode(p.place))        
    }
    const addForecastDataTemp = p => {
        const  trft  = table_body1.appendChild(document.createElement('tr'))
        trft.insertCell().appendChild(document.createTextNode(p.from))
        trft.insertCell().appendChild(document.createTextNode(p.to))
        trft.insertCell().appendChild(document.createTextNode(p.type))
        trft.insertCell().appendChild(document.createTextNode(p.unit))
        trft.insertCell().appendChild(document.createTextNode(p.time))
        trft.insertCell().appendChild(document.createTextNode(p.place))        
    }
    const addForecastDataPre = p => {
        const  trfp  = table_body1.appendChild(document.createElement('tr'))
        trfp.insertCell().appendChild(document.createTextNode(p.from))
        trfp.insertCell().appendChild(document.createTextNode(p.to))
        trfp.insertCell().appendChild(document.createTextNode(p.type))
        trfp.insertCell().appendChild(document.createTextNode(p.unit))
        trfp.insertCell().appendChild(document.createTextNode(p.time))
        trfp.insertCell().appendChild(document.createTextNode(p.place))        
    }
    const addForecastDataWind = p => {
        const  trfw  = table_body1.appendChild(document.createElement('tr'))
        trfw.insertCell().appendChild(document.createTextNode(p.from))
        trfw.insertCell().appendChild(document.createTextNode(p.to))
        trfw.insertCell().appendChild(document.createTextNode(p.type))
        trfw.insertCell().appendChild(document.createTextNode(p.unit))
        trfw.insertCell().appendChild(document.createTextNode(p.time))
        trfw.insertCell().appendChild(document.createTextNode(p.place))        
    }
    const addForecastDataCloud = p => {
        const  trfc  = table_body1.appendChild(document.createElement('tr'))
        trfc.insertCell().appendChild(document.createTextNode(p.from))
        trfc.insertCell().appendChild(document.createTextNode(p.to))
        trfc.insertCell().appendChild(document.createTextNode(p.type))
        trfc.insertCell().appendChild(document.createTextNode(p.unit))
        trfc.insertCell().appendChild(document.createTextNode(p.time))
        trfc.insertCell().appendChild(document.createTextNode(p.place))        
    }   
    const update = model => {      
        model.weatherDataTemp().forEach(addDataTemp)
        model.weatherDataPre().forEach(addDataPre)
        model.weatherDataWind().forEach(addDataWind)
        model.weatherDataCloud().forEach(addDataCloud)
        model.forecastDataTemp().forEach(addForecastDataTemp)
        model.forecastDataPre().forEach(addForecastDataPre)
        model.forecastDataWind().forEach(addForecastDataWind)
        model.forecastDataCloud().forEach(addForecastDataCloud)
        
    }
    return {update}
}
