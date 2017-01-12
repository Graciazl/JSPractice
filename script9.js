/**
 * Created by Gracia on 17/1/9.
 */


function getInput(value) {
    var text = value.replace(/\r+|\n+|\s+|\,+/g, '\,'),
        arr = text.split(',');

    var index = arr.indexOf('');
    while (index !== -1) {
        arr.splice(index, 1);
        index = arr.indexOf('');
    }

    return lengthControl(unique(arr));
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

function getResult(ele1, ele2) {
    var value = document.getElementById(ele1).value,
        arr = getInput(value);

    render(arr, ele2);
}

document.getElementById('tagInput').addEventListener('keydown', function(e) {
    var key = e.keyCode;

    if (key === 13 || key === 32 || key === 188){
        getResult('tagInput', 'resultTag');
    }
});

document.getElementById('submit').addEventListener('click', function() {
    getResult('hobbies', 'resultHobbies');
});

document.getElementById('resultTag').addEventListener('mouseover', function(e) {
    if (e.target.nodeName === 'DIV') {
        var value = e.target.childNodes[0].nodeValue;
        e.target.style.background = 'red';
        e.target.innerHTML = 'Delete ' + value;
    }
});

document.getElementById('resultTag').addEventListener('mouseout', function() {
    getResult('tagInput', 'resultTag');
});

document.getElementById('resultTag').addEventListener('click', function(e) {
    if (e.target.nodeName === 'DIV') {
        var value = e.target.childNodes[0].nodeValue,
            arr = getInput(document.getElementById('tagInput').value);
            index = arr.indexOf(value);

        arr.splice(index, 1);
        render(arr, 'resultTag');
    }
});