import view from './view.js'


window.init = function () {
    const request = new XMLHttpRequest()
    request.responseType = 'json';

    request.open('GET', 'http://localhost:8080/data')
    request.send()
    request.onload = () => {
        const data = request.response

        //1.1) first query,•  All data for the latest measurement of weather data
        const latestDateHis = new Date(Math.max.apply(null, data.map(e => { return new Date(e.time) })));
        const latestDataHis = data.filter(e => { const d = new Date(e.time); return d.getTime() == latestDateHis.getTime() })


        //2) second query,•  Minimum temperature for the last 5 days
        const for5Days = () => {
            const date = new Date();
            const before5days = date.setDate(date.getDate() - 5);
            return new Date(before5days)
        }
        const last5daysObject = data.filter(e => { const d = new Date(e.time); return d.getDate() > for5Days().getDate() })


       
       
        const temp = last5daysObject.filter(t => t.type === 'temperature')
        const finalformintemp = temp.reduce((tm, { value, type, unit, time, place }) => {
            const [date] = time.split('T', 1)
            time = time.split('T', 1)
            tm[date] = tm[date] || { value: Infinity, type, unit, time, place }
            tm[date].value = tm[date].value > value ? value : tm[date].value
            return tm
        }, {})





        //3) third query, conyinue,•  Maximum temperature for the last 5 days 
        const finalformaxtemp = temp.reduce((tmm, { value, type, unit, time, place }) => {
            const [date] = time.split('T', 1)
            time = time.split('T', 1)
            tmm[date] = tmm[date] || { value: -Infinity, type, unit, time, place }
            tmm[date].value = tmm[date].value < value ? value : tmm[date].value
            return tmm
        }, {})






        //4) forth query,•  Total precipitation for the last 5 days
        const precipitation = last5daysObject.filter(t => t.type === 'precipitation')
        const tmpPre = {};
        precipitation.forEach(function (item) {
            // if property for current date already exists  we update existing otherwise start new one
            const obj = tmpPre[item.time.split('T', 1)] = tmpPre[item.time.split('T', 1)] || { total: 0, type: item.type, precipitation_type: item.precipitation_type, unit: item.unit, time: item.time, place: item.place }
            obj.total += item.value
        });

        const finalfortotalpre = Object.entries(tmpPre).map(function (entry) {
            return { value: entry[1].total, type: entry[1].type, precipitation_type: entry[1].precipitation_type, unit: entry[1].unit, time: entry[0], place: entry[1].place }
        })




        //5) fifth query,•  Average wind speed for the last 5 days 
        const windS = last5daysObject.filter(t => t.type === 'wind speed')
        const wind = {};
        windS.forEach(function (item) {
            // if property for current date already exists  we update existing otherwise start new one
            const obj = wind[item.time.split('T', 1)] = wind[item.time.split('T', 1)] || { count: 0, total: 0, type: item.type, direction: item.direction, unit: item.unit, time: item.time, place: item.place }
            obj.count++
            obj.total += item.value
        });

        const finalfifthavgwind = Object.entries(wind).map(function (entry) {
            return { value: entry[1].total / entry[1].count, type: entry[1].type, direction: entry[1].direction, unit: entry[1].unit, time: entry[0], place: entry[1].place }
        })





        // 6) sixt query, •   Dominant wind direction for the last 5 days
        const windspeed = data.filter(t => t.type === 'wind speed')
        const finalforwinddirection = windspeed.reduce((dm, { value, type, direction, unit, time, place }) => {
            const [date] = time.split('T', 1)
            time = time.split('T', 1)
            dm[date] = dm[date] || { value: -Infinity, type,direction,unit, time, place }
            dm[date].value = dm[date].value < value ? value : dm[date].value
            return dm
        }, {})



        //7) seventh query, •   Average cloud average for the last 5 days
        const cloud = data.filter(t => t.type === 'cloud coverage')
        const tmpcloud = {};
        cloud.forEach(function (item) {
            // if property for current date already exists  we update existing otherwise start new one
            const obj = tmpcloud[item.time.split('T', 1)] = tmpcloud[item.time.split('T', 1)] || { count: 0, total: 0, type: item.type, unit: item.unit, time: item.time, place: item.place }
            obj.count++
            obj.total += item.value
        });

        const finalavgcloud = Object.entries(tmpcloud).map(function (entry) {
            return { value: entry[1].total / entry[1].count, type: entry[1].type, unit: entry[1].unit, time: entry[0], place: entry[1].place }
        })



        request.open('GET', 'http://localhost:8080/forecast')
        request.send()

        request.onload = () => {
            const forecast = request.response
            //1.2) first query, •  All data for the latest measurement of weather data of forecast
            const latestDateFor = new Date(Math.max.apply(null, forecast.map(e => { return new Date(e.time) })));
            const latestDataFor = forecast.filter(e => { const d = new Date(e.time); return d.getTime() == latestDateFor.getTime() })



            //8) eighth query,•	 Hourly predictions for the next 24 hours
            const forNextDay = () => {
                const date = new Date();
                const before1day = date.setDate(date.getDate() - 5);
                return new Date(before1day)
            }
            const NextDayObject = forecast.filter(e => { const d = new Date(e.time); return d.getDate() > forNextDay().getDate() })


            const theView = view(window)
            theView.update(latestDataHis, latestDataFor, Object.values(finalformintemp),
            Object.values(finalformaxtemp), Object.values(finalfortotalpre),Object.values(finalfifthavgwind),
            Object.values(finalforwinddirection),Object.values(finalavgcloud), NextDayObject)
        }

    }
}



