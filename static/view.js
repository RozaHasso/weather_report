export default window => {
    const document = window.document
    const table_body = document.getElementById('weather_data')
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

    const update = model => {
      
        model.prediction_equals().forEach(addData)
    }
 
    return { addData, update, listen, prompt }
}
