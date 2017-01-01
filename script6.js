/**
 * Created by Gracia on 16/12/31.
 */
var arr = [],
    numInput = document.getElementById('inputNum'),
    result = document.getElementById('result'),
    leftIn = document.getElementById('leftIn'),
    rightIn = document.getElementById('rightIn'),
    leftOut = document.getElementById('leftOut'),
    rightOut = document.getElementById('rightOut');


leftIn.addEventListener('click', function() {
    var num = numInput.value;
    arr.unshift(num);
    render(arr);
});

rightIn.addEventListener('click', function() {
    var num = numInput.value;
    arr.push(num);
    render(arr);
});

leftOut.addEventListener('click', function() {
    arr.shift();
    render(arr);
});

rightOut.addEventListener('click', function() {
    arr.pop();
    render(arr);
});

function render(arr) {
    result.innerHTML = '';

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
            result.appendChild(newDiv);
        }
    }
}