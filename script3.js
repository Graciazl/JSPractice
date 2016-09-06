/**
 * Created by Gracia on 16/8/31.
 */

var $ = function(id) {
    return document.getElementById(id.substr(1));
};

(function(){

    function getData() {
        var data = [],
            ul = $('#source').childElementCount;

        for (i = 0; i < ul; i++) {
            var child = $('#source').children[i],
                str = child.innerHTML.split(':'),
                air = parseInt(str[1]),
                str1 = str[0].split('of '),
                city = str1[1];
                arr = [city, air];
            data.push(arr);
        }

        return data;
    }

    function sortData() {
        var airList = getData();

        airList.sort(function (a, b){
            return a[1] > b[1] ? 1 : -1;
        });

        return airList;
    }

    function renderData() {
        var cityList = sortData(),
            len = cityList.length;

        for (i = 0; i < len; i++) {
            var city = cityList[i][0],
                air = cityList[i][1],
                textnode = document.createTextNode("Air pollution index of " + city + ":" + air),
                node = document.createElement('li');
            node.appendChild(textnode);
            $('#resort').appendChild(node);
        }

    }

    document.getElementById('sortBtn').addEventListener('click', function(){
        renderData();
    });

})();