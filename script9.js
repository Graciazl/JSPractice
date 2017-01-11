/**
 * Created by Gracia on 17/1/9.
 */


function getInput(value) {
    var text = value.replace(/\r+|\n+|\s+|\,+/g, '\,'),
        result = text.split(',');

    var index = result.indexOf('');
    while (index !== -1) {
        result.splice(index, 1);
        index = result.indexOf('');
    }

    return unique(result);
}

function unique(arr) {
    var set = new Set(arr);

    return Array.from(set);
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

document.getElementById('tagInput').addEventListener('keydown', function(e) {
    var key = e.keyCode;

    if (key === 13 || key === 32 || key === 188){
        var tagValue = document.getElementById('tagInput').value,
            tagArr = getInput(tagValue);

        render(tagArr, 'resultTag');
    }
});

document.getElementById('submit').addEventListener('click', function() {
    var hobbiesValue = document.getElementById('hobbies').value,
        hobbiesArr = getInput(hobbiesValue);

    render(hobbiesArr, 'resultHobbies');
});