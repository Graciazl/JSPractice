/**
 * Created by Gracia on 16/9/6.
 */


var $ = function (id) {
    return document.getElementById(id.substr(1));
};

(function () {
    var data = [],
        city = $('#cityInput'),
        air = $('#airInput'),
        cityValue = city.value.trim(),
        airValue = city.value.trim(),
        p1 = $('#alertP1'),
        p2 = $('#alertP2'),
        list = {};

    function addData() {
        if ( (p1.innerHTML === '') && (p2.innerHTML === '')) {
            return list[cityValue] = airValue;
        }
    }

    function isInteger(x) {
        return x % 1 === 0;
    }   // Check if the number is an integer

    function createNewRow(data) {
        var newCell = document.createElement('td'),
            newRow = document.createElement('tr'),
            newText = document.createTextNode(data);

        newCell.appendChild(newText);
        newRow.appendChild(newRow);
        $('#tableData').appendChild(newRow);
    }

    function delBtn() {

    }

    city.addEventListener('blur', function() {
        if (city.validity.valueMissing) {
            p1.innerHTML = 'City name should not be empty.';
        } else if (city.validity.patternMismatch) {
            p1.innerHTML = 'Please enter right name of city.';
        } else {
            p1.innerHTML = '';
        }
    });

    air.addEventListener('blur', function() {
        if (air.validity.valueMissing) {
            p2.innerHTML = 'Air index should not be empty.';
        } else if (isNaN(air.value)) {
            p2.innerHTML = 'Please enter the valid value of air index.';
        } else if (isInteger(air.value) === false ) {
            p2.innerHTML = 'Valid value of air index should be integer.';
        } else {
            p2.innerHTML = '';
        }
    });

    $('#add-btn').addEventListener('click', function () {

    });

})();

