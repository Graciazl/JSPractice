/**
 * Created by Gracia on 16/8/31.
 */

var airPollutionData = [
    ['Cairo', 97.3],
    ['Madrid', 58.89],
    ['Beijing', 94.41],
    ['San Francisco', 38.61],
    ['Mexico City', 88.72],
    ['Lima', 88.57],
    ['Singapore', 37.69],
    ['Rome', 67.73],
    ['Paris', 66.09],
    ['Bogota', 73.98],
    ['Taipei', 47.56],
    ['Toronto', 44.91]
];

(function () {
    var len = airPollutionData.length;
    for (i = 0; i < len - 1; i++) {
        var data = airPollutionData[i];
        if (data[1] >= 60) {
            showCity(data);
        }
    }

    function showCity(list) {
        var node = document.createElement('li');
        var textnode = document.createTextNode(list);
        node.appendChild(textnode);
        document.getElementById('cityList').appendChild(node);
    }
})();