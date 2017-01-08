/**
 * Created by Gracia on 17/1/4.
 */
var arr = [];

function getInput() {
    var text = document.getElementById('textInput').value,
        replacedText = text.replace(/\t+|\r+|\n+|\s+|\,+/g, '\,'),//replace tab,return,space into comma
        newText = replacedText.split(',');

    var index = newText.indexOf('');
    while (index !== -1) {
        newText.splice(index, 1);
        index = newText.indexOf('');
    }

    return newText;
}

function search() {
    var input = document.getElementById('searchInput').value,
        remind = document.getElementById('remind'),
        count = 0,
        len = arr.length;

    if (len !== 0) {
        var index = arr.indexOf(input);

        render(arr);

        for (var i = 0; i < len; i++) {
            if (arr[i] === input) {
                var highlight = document.getElementById('result').childNodes[i];
                highlight.style.background = 'blue';
                count++;
            }
        }

        if (count === 0) {
            remind.innerHTML = 'No result matched.';
        } else if (count === 1) {
            remind.innerHTML = '1 result matched';
        } else {
            remind.innerHTML = count + ' results matched';
        }

    } else {
        remind.innerHTML = 'Can not search without content.';
    }
}

function render(arr) {
    document.getElementById('result').innerHTML = '';
    document.getElementById('remind').innerHTML = '';

    if (arr.length !== 0) {
        for (var i = 0; i < arr.length; i++) {
            var newDiv = document.createElement('div'),
                text = document.createTextNode(arr[i]);

            newDiv.style.background = 'red';
            newDiv.style.color = 'white';
            newDiv.style.padding = '10px';
            newDiv.style.margin = '10px';
            newDiv.style.display = 'inline-block';

            newDiv.appendChild(text);
            document.getElementById('result').appendChild(newDiv);
        }
    }
}

document.getElementById('submit').addEventListener('click', function() {
    arr = getInput();
    render(arr);
});

document.getElementById('searchBtn').addEventListener('click', search);