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
        myTB = $('#tableData'),
        p1 = $('#alertP1'),
        p2 = $('#alertP2'),
        list = {};

    function addData(property, value) {
        if ( (p1.innerHTML === '') && (p2.innerHTML === '')) {
            return list[property] = value;
        }
    }

    function isInteger(x) {
        return x % 1 === 0;
    }   // Check if the number is an integer

    function renderTable(data) {
        var newCell = document.createElement('td'),
            newRow = document.createElement('tr'),
            newBtn = document.createElement('button'),
            del = document.createTextNode('Delete');

        for (var prop in data) {
            var airList = document.createTextNode(prop + data[prop]);
        }

        newCell.appendChild(airList);
        newRow.appendChild(newCell);
        newBtn.appendChild(del);
        newCell.appendChild(newBtn);
        newRow.appendChild(newCell);
        myTB.appendChild(newRow);
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
        var airValue = air.value;

        if (air.validity.valueMissing) {
            p2.innerHTML = 'Air index should not be empty.';
        } else if (isNaN(airValue)) {
            p2.innerHTML = 'Please enter the valid value of air index.';
        } else if (isInteger(airValue) === false ) {
            p2.innerHTML = 'Valid value of air index should be integer.';
        } else {
            p2.innerHTML = '';
        }
    });

    $('#add-btn').addEventListener('click', function () {
        var cityValue = city.value.trim(),
            airValue = air.value.trim();

        addData(cityValue, airValue);
        renderTable(list);

    });

})();

