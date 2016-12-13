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

    function renderTable() {
        myTB.innerHTML = '';

        for (var prop in list) {
            var cityList = document.createTextNode(prop),
                airIndex = document.createTextNode(list[prop]),
                newCell1 = document.createElement('td'),
                newCell2 = document.createElement('td'),
                newCell3 = document.createElement('td'),
                newRow = document.createElement('tr'),
                newBtn = document.createElement('button'),
                del = document.createTextNode('Delete');

            newCell1.appendChild(cityList);
            newRow.appendChild(newCell1);
            newCell2.appendChild(airIndex);
            newRow.appendChild(newCell2);
            newBtn.appendChild(del);
            newCell3.appendChild(newBtn);
            newRow.appendChild(newCell3);
            myTB.appendChild(newRow);
        }
    }

    function delBtn(target) {
        var tr = target.parentElement.parentElement,
            prop = tr.firstChild.innerHTML;

        delete list[prop];
        renderTable();
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
        renderTable();

    });

    myTB.addEventListener('click', function(event){
        if(event.target.nodeName === 'BUTTON') {
            delBtn(event.target);
        }
    });
})();

