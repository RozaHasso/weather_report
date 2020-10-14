import view1 from './view1.js'
import dataModel1 from './dataModel1.js'

window.init = function () {
    const request = new XMLHttpRequest()
    request.responseType = 'json';

    request.open('GET', 'http://localhost:8080/data')
    request.send()
    request.onload = () => {
        const data = request.response
        //1.1) first query, •	All data for the latest measurement of weather data
        const latestdate = new Date(Math.max.apply(null, data.map(e => { return new Date(e.time) })));
        const weatherdataforlatestdate = data.filter(e => { const d = new Date(e.time); return d.getDate() == latestdate.getDate() })
        const tempweather = weatherdataforlatestdate.filter(t => t.type == 'temperature')
        const preweather = weatherdataforlatestdate.filter(t => t.type == 'precipitation')
        const windweather = weatherdataforlatestdate.filter(t => t.type == 'wind speed')
        const cloudweather = weatherdataforlatestdate.filter(t => t.type == 'cloud coverage')

        request.open('GET', 'http://localhost:8080/forecast')
        request.send()
        //1.2) first query, •  All data for the latest measurement of weather data of forecast
        request.onload = () => {
            const forecast = request.response
            // const forecastlatestDate = Math.max.apply(null, forecast.map(e => { return new Date(e.time) }));
            // console.log(latestDate2)
            const forecastdataforlatestdate = forecast.filter(e => { const d = (e.time); return d.split('T')[0] == '2020-10-15'})
            // .getDate() == latestDate2.getDate()
            const tempforecast = forecastdataforlatestdate.filter(t => t.type == 'temperature')
            const preforecast = forecastdataforlatestdate.filter(t => t.type == 'precipitation')
            const windforecast = forecastdataforlatestdate.filter(t => t.type == 'wind speed')
            const cloudforecast = forecastdataforlatestdate.filter(t => t.type == 'cloud coverage')
            const theModel = dataModel1(tempweather, preweather, windweather, cloudweather, 
                tempforecast, preforecast, windforecast, cloudforecast)
            const theView = view1(window)
            theView.update(theModel)
        }
    }
}