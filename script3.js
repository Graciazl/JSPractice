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

        for (i = 0; i < ul-1; i++) {
            var child = $('#source').children[i],
                str = child.innerHTML.split(':'),
                air = str[1],
                str1 = str[0].split('of'),
                city = str1[1];
            data.push(city,air);
        }

        return data;
    }

    function sortData() {

    }

    function renderData() {

    }

    document.getElementById('sortBtn').addEventListener('click', function(){

    });

})();