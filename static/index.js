
import view from './view.js'
import dataModel from './dataModel.js'

window.init = function () {
    const request = new XMLHttpRequest()
    request.responseType = 'json';

    request.open('GET', 'http://localhost:8080/data')
    request.send()
    request.onload = () => {
        const data = request.response
        //1.1) first query, •	All data for the latest measurement of weather data
        const latestDate1 = new Date(Math.max.apply(null, data.map(e => { return new Date(e.time) })));
        const latestData1 = data.filter(e => { const d = new Date(e.time); return d.getTime() == latestDate1.getTime() })
        //2) second query, •  Minimum temperature for the last 5 days
        const last5Data = request.response
        const for5Days = () => {
            const date = new Date();
            const ts = date.getTime();
            const fiveDays = ts - (1000 * 60 * 60 * 24 * 5);
            return new Date(fiveDays)
        }
        const last5daysObject = last5Data.filter(e => { const d = new Date(e.time); return d.getDate() > for5Days().getDate() })

        

        //4) forth query, •   Total precipitation for the last 5 days
        const precipitation = last5daysObject.filter(t => t.type === 'precipitation')
        const tmppre = {};
        precipitation.forEach(function (item) {
            // if property for current date already exists  we update existing otherwise start new one
            const obj = tmppre[item.time.split('T', 1)] = tmppre[item.time.split('T', 1)] || { total: 0, type: item.type, precipitation_type: item.precipitation_type, unit: item.unit, time: item.time, place: item.place }
            obj.total += item.value
        });

        const finalfortotalpre = Object.entries(tmppre).map(function (entry) {
            return { value: entry[1].total, type: entry[1].type, precipitation_type: entry[1].precipitation_type, unit: entry[1].unit, time: entry[0], place: entry[1].place }
        })

        // 6) sixt query, •   Dominant wind direction for the last 5 days
        const windspeed = last5daysObject.filter(t => t.type === 'wind speed')
        const finalforwinddirection = windspeed.reduce((dm, { value, direction, type, unit, time, place }) => {
            const [date] = time.split('T', 1)
            time = time.split('T', 1)
            dm[date] = dm[date] || { value: -Infinity, direction, type, unit, time, place }
            dm[date].value = dm[date].value < value ? value : dm[date].value
            return dm
        }, {})

        //7) seventh query, •   Average cloud average for the last 5 days
        const cloud = last5daysObject.filter(t => t.type === 'cloud coverage')
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
            const latestDate2 = new Date(Math.max.apply(null, forecast.map(e => { return new Date(e.time) })));
            const latestData2 = forecast.filter(e => { const d = new Date(e.time); return d.getTime() == latestDate2.getTime() })



            //8) eighth query,•	 Hourly predictions for the next 24 hours
            const forNextDay = () => {
                const date = new Date();
                const ts = date.getTime();
                const oneDay = ts - (1000 * 60 * 60 *24);
                return new Date(oneDay)
            }
            const NextDayObject = forecast.filter(e => { const d = new Date(e.time); return d.getDate() > forNextDay().getDate() })




            request.open('GET', 'http://localhost:8080/data/Horsens')
            request.send()
            request.onload = () => {
                const last5DataAveHor = request.response
                //5) fifth query, •   Average wind speed for the last 5 days for Horsens
                const last5daysObjectAveHor = last5DataAveHor.filter(e => { const d = new Date(e.time); return d.getDate() > for5Days().getDate() })
                const wind = last5daysObjectAveHor.filter(t => t.type === 'wind speed')
                const tmpwind = {};
                wind.forEach(function (item) {
                    // if property for current date already exists  we update existing otherwise start new one
                    const obj = tmpwind[item.time.split('T', 1)] = tmpwind[item.time.split('T', 1)] || { count: 0, total: 0, type: item.type, direction: item.direction, unit: item.unit, time: item.time, place: item.place }
                    obj.count++
                    obj.total += item.value
                });

                const finalfifthavgwindHor = Object.entries(tmpwind).map(function (entry) {
                    return { value: entry[1].total / entry[1].count, type: entry[1].type, direction: entry[1].direction, unit: entry[1].unit, time: entry[0], place: entry[1].place }
                })

                //2) second query, conyinue,•  Minimum temperature for the last 5 days for Horsens
                const temp = last5daysObjectAveHor.filter(t => t.type === 'temperature')
                const finalformintempHor = temp.reduce((tm, { value, type, unit, time, place }) => {
                    const [date] = time.split('T', 1)
                    time = time.split('T', 1)
                    tm[date] = tm[date] || { value: Infinity, type, unit, time, place }
                    tm[date].value = tm[date].value > value ? value : tm[date].value
                    return tm
                }, {})

                //3) third query, conyinue,•  Minimum temperature for the last 5 days for Horsens
                const finalformaxtempHor = temp.reduce((tmm, { value, type, unit, time, place }) => {
                    const [date] = time.split('T', 1)
                    time = time.split('T', 1)
                    tmm[date] = tmm[date] || { value: -Infinity, type, unit, time, place }
                    tmm[date].value = tmm[date].value < value ? value : tmm[date].value
                    return tmm
                }, {})



                request.open('GET', 'http://localhost:8080/data/Aarhus')
                request.send()
                request.onload = () => {
                    const last5DataAveAar = request.response
                    //5) fifth query, •   Average wind speed for the last 5 days for Aarhus
                    const last5daysObjectAveAar = last5DataAveAar.filter(e => { const d = new Date(e.time); return d.getDate() > for5Days().getDate() })
                    const wind = last5daysObjectAveAar.filter(t => t.type === 'wind speed')
                    const tmpwind = {};
                    wind.forEach(function (item) {
                        // if property for current date already exists  we update existing otherwise start new one
                        const obj = tmpwind[item.time.split('T', 1)] = tmpwind[item.time.split('T', 1)] || { count: 0, total: 0, type: item.type, direction: item.direction, unit: item.unit, time: item.time, place: item.place }
                        obj.count++
                        obj.total += item.value
                    });

                    const finalfifthavgwindAar = Object.entries(tmpwind).map(function (entry) {
                        return { value: entry[1].total / entry[1].count, type: entry[1].type, direction: entry[1].direction, unit: entry[1].unit, time: entry[0], place: entry[1].place }
                    })

                    //2) second query, conyinue,•  Minimum temperature for the last 5 days for Aarhus
                    const temp = last5daysObjectAveAar.filter(t => t.type === 'temperature')
                    const finalformintempAar = temp.reduce((tm, { value, type, unit, time, place }) => {
                        const [date] = time.split('T', 1)
                        time = time.split('T', 1)
                        tm[date] = tm[date] || { value: Infinity, type, unit, time, place }
                        tm[date].value = tm[date].value > value ? value : tm[date].value
                        return tm
                    }, {})

                    //3) third query, conyinue,•  Minimum temperature for the last 5 days for Aarhus
                    const finalformaxtempAar = temp.reduce((tmm, { value, type, unit, time, place }) => {
                        const [date] = time.split('T', 1)
                        time = time.split('T', 1)
                        tmm[date] = tmm[date] || { value: -Infinity, type, unit, time, place }
                        tmm[date].value = tmm[date].value < value ? value : tmm[date].value
                        return tmm
                    }, {})


                    request.open('GET', 'http://localhost:8080/data/Copenhagen')
                    request.send()
                    request.onload = () => {
                        const last5DataAveCph = request.response
                        //5) fifth query, •   Average wind speed for the last 5 days for Copenhagen
                        const last5daysObjectAveCph = last5DataAveCph.filter(e => { const d = new Date(e.time); return d.getDate() > for5Days().getDate() })
                        const wind = last5daysObjectAveCph.filter(t => t.type === 'wind speed')
                        const tmpwind = {};
                        wind.forEach(function (item) {
                            // if property for current date already exists  we update existing otherwise start new one
                            const obj = tmpwind[item.time.split('T', 1)] = tmpwind[item.time.split('T', 1)] || { count: 0, total: 0, type: item.type, direction: item.direction, unit: item.unit, time: item.time, place: item.place }
                            obj.count++
                            obj.total += item.value
                        });

                        const finalfifthavgwindCph = Object.entries(tmpwind).map(function (entry) {
                            return { value: entry[1].total / entry[1].count, type: entry[1].type, direction: entry[1].direction, unit: entry[1].unit, time: entry[0], place: entry[1].place }
                        })

                        //2) second query, conyinue,•  Minimum temperature for the last 5 days for Copenhagen
                        const temp = last5daysObjectAveCph.filter(t => t.type === 'temperature')
                        const finalformintempCph = temp.reduce((tm, { value, type, unit, time, place }) => {
                            const [date] = time.split('T', 1)
                            time = time.split('T', 1)
                            tm[date] = tm[date] || { value: Infinity, type, unit, time, place }
                            tm[date].value = tm[date].value > value ? value : tm[date].value
                            return tm
                        }, {})

                        //3) third query, conyinue,•  Minimum temperature for the last 5 days for Copenhagen
                        const finalformaxtempCph = temp.reduce((tmm, { value, type, unit, time, place }) => {
                            const [date] = time.split('T', 1)
                            time = time.split('T', 1)
                            tmm[date] = tmm[date] || { value: -Infinity, type, unit, time, place }
                            tmm[date].value = tmm[date].value < value ? value : tmm[date].value
                            return tmm
                        }, {})



                        const theModel = dataModel(latestData1, latestData2, Object.values(finalformintempHor),
                            Object.values(finalformaxtempHor), Object.values(finalformintempAar), Object.values(finalformaxtempAar),
                            Object.values(finalformintempCph), Object.values(finalformaxtempCph), Object.values(finalfortotalpre),
                            Object.values(finalfifthavgwindHor), Object.values(finalfifthavgwindAar), Object.values(finalfifthavgwindCph),
                            Object.values(finalavgcloud), Object.values(finalforwinddirection),NextDayObject)


                        const theView = view(window)
                        theView.update(theModel)
                    }

                }
            }
        }

    }
}