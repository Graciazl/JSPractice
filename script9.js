/**
 * Created by Gracia on 17/1/9.
 */
var arrTag = [],
    arrHobbies = [];

function SessionStorageStore() { }

SessionStorageStore.prototype.load = function(key) {
    return sessionStorage.getItem(key);
};

SessionStorageStore.prototype.save = function(key, data) {
    return sessionStorage.setItem(key, data);
};

var results = (function(key, data) {
    var storage = new SessionStorageStore();

    return {
        load: function(key, data) {
            data = JSON.parse(storage.load(key)) || [];
            return data;
        },

        save: function(key, data) {
            storage.save(key, JSON.stringify(data));
        }
    }
}());

function getInput(value) {
    var text = value.replace(/\r+|\n+|\s+|\,+/g, '\,'),
        arr = text.split(',');

    var index = arr.indexOf('');
    while (index !== -1) {
        arr.splice(index, 1);
        index = arr.indexOf('');
    }

    return arr;
}

function joinArr(arr1, arr2) {
    var arr = arr1.concat(arr2);

    return lengthControl(unique(arr)).slice();
}

function unique(arr) {
    var set = new Set(arr);

    return Array.from(set);
}

function lengthControl(arr) {
    var len = arr.length;

    while (len > 10) {
        arr.shift();
        len = arr.length;
    }

    return arr;
}

function render(arr, ele) {
    document.getElementById(ele).innerHTML = '';

    if (arr.length !== 0) {
        for (var i = 0; i < arr.length; i++) {
            var newDiv = document.createElement('div'),
                text = document.createTextNode(arr[i]);

            newDiv.style.background = '#3498db';
            newDiv.style.color = 'white';
            newDiv.style.padding = '10px';
            newDiv.style.margin = '10px';
            newDiv.style.display = 'inline-block';

            newDiv.appendChild(text);
            document.getElementById(ele).appendChild(newDiv);
        }
    }
}

function getResult(ele1, ele2, arr, key) {
    var value = document.getElementById(ele1).value;
    arr = joinArr(arr, getInput(value));
    results.save(key, arr);
    render(arr, ele2);
}

document.getElementById('tagInput').addEventListener('keydown', function(e) {
    var key = e.keyCode;

    arrTag = results.load('tags', arrTag);

    if (key === 13 || key === 32 || key === 188){
        getResult('tagInput', 'resultTag', arrTag, 'tags');
    }
});

document.getElementById('submit').addEventListener('click', function() {
    arrHobbies = results.load('hobbies', arrHobbies);

    getResult('hobbies', 'resultHobbies', arrHobbies, 'hobbies');
});

document.getElementById('resultTag').addEventListener('mouseover', function(e) {
    if (e.target.nodeName === 'DIV') {
        var value = e.target.childNodes[0].nodeValue;
        e.target.style.background = 'red';
        e.target.innerHTML = 'Delete ' + value;
    }
});

document.getElementById('resultTag').addEventListener('mouseout', function() {
    arrTag = results.load('tags', arrTag);

    render(arrTag, 'resultTag');
});

document.getElementById('resultTag').addEventListener('click', function(e) {
    if (e.target.nodeName === 'DIV') {
        var value = e.target.childNodes[0].nodeValue,
            index = arrTag.indexOf(value);

        arrTag.splice(index, 1);
        results.save('tags', arrTag);
        render(arrTag, 'resultTag');
    }
});