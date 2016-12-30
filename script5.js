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
        //Use regexp to replace date string , this method can rectify the one day off problem.

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

function sumAndAvg(arr) {
    var sum,
        avg,
        len = arr.length;

    sum = arr.reduce(function(a, b) {
        return a + b;
    });

    return avg = Math.floor(sum / len);
}

function midAvg(arr) {
    var len = (arr.length + 1) / 7,
        midAvg = [];

    for(var i = 0; i < len - 1; i++) {
        var newArr = arr.slice(i * 7, i * 7 + 6),
            avg = sumAndAvg(newArr);

        midAvg.push(avg);
    }

    return midAvg;
}

function calWeek(airIdx, airObj) {
    var newArr = airIdx.slice(),
        len = newArr.length,
        count = getDate(airObj);
        lastPosition = len - 1 - count[1];

    var firstWeek = newArr.slice(0, count[0]),
        lastWeek = newArr.slice(lastPosition, len - 1);

    var firstAvg = sumAndAvg(firstWeek),
        lastAvg = sumAndAvg(lastWeek);

    newArr.splice(lastPosition, count[1]);
    newArr.splice(0, count[0]);

    var midArr = midAvg(newArr);
    midArr.splice(midArr.length, 0, lastAvg);
    midArr.splice(0, 0, firstAvg);

    return midArr;
}

function calMonth(airIdx) {
    var newArr = [];

    var janAvg = sumAndAvg(airIdx.slice(0, 30)),
        febAvg = sumAndAvg(airIdx.slice(31, 59)),
        marAvg = sumAndAvg(airIdx.slice(60, 91));

    newArr.push(janAvg);
    newArr.push(febAvg);
    newArr.push(marAvg);

    return newArr;
}

function calculateData(city, time) {
    var airObj = aqiSourceData[city],
        airArr = getAirIndex(airObj);

    if (time === 'week') {
        return calWeek(airArr, airObj);
    } else if (time === 'month') {
        return calMonth(airArr);
    } else {
        return airArr;
    }
}