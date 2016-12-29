/**
 * Created by Gracia on 16/12/17.
 */

function randomBuildData(seed) {
    var returnData = {},
        dat = new Date("01-01-2016"),
        datStr = '';

    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }

    return returnData;
}

function getDateStr(dat) {
    var y = dat.getFullYear(),
        m = dat.getMonth() + 1,
        d = dat.getDate();

    m = m < 10 ? '0' + m : m;
    d = d < 10 ? '0' + d : d;

    return y + '-' + m + '-' + d;
}

var aqiSourceData = {
    "Beijing": randomBuildData(500),
    "Singapore": randomBuildData(100),
    "Mexico": randomBuildData(500),
    "Toronto": randomBuildData(80)
};

var timeSelected,
    citySelected;

function timeSelect() {
    var time = document.getElementsByName('graficTime');

    for (var i = 0; i < time.length; i++) {
        if (time[i].checked) {
            return timeSelected = time[i].value;
        }
    }
}

function citySelect() {
    var optIndex = document.getElementById('citySelect').selectedIndex;

    citySelected = document.getElementsByTagName('option')[optIndex].value;

    return citySelected;
}

function getAirIndex(air) {
    var airIndex = [];

    for (var obj in air) {
        airIndex.push(air[obj]);
    }

    return airIndex;
}

function getDate(data) {
    var dateList = Object.getOwnPropertyNames(data),
        date1 = new Date(dateList[0].replace(/-/g, '\/')),
        date2 = new Date(dateList[dateList.length - 1].replace(/-/g, '\/'));

    var firstDate = date1.getDay(),
        lastDate = date2.getDay();

    var firstCount,
        lastCount = lastDate,
        count = [];

    if (firstDate === 1) {
        firstCount = 0;
    } else if (firstDate === 0) {
        firstCount = 1;
    } else {
        firstCount = 8 - firstDate;
    }

    count.push(firstCount);
    count.push(lastCount);

    return count;
}