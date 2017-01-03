/**
 * Created by Gracia on 17/1/1.
 */

var arr = [],
    numInput = document.getElementById('inputNum'),
    result = document.getElementById('result'),
    val = document.getElementById('validation'),
    leftIn = document.getElementById('leftIn'),
    rightIn = document.getElementById('rightIn'),
    leftOut = document.getElementById('leftOut'),
    rightOut = document.getElementById('rightOut');

leftIn.addEventListener('click', function() {
    var num = numInput.value;

    if (numInput.checkValidity() === false) {
        val.innerHTML = 'Please enter number between 10 to 100.';
    } else {
        arr.unshift(num);
        render(arr);
    }
});

rightIn.addEventListener('click', function() {
    var num = numInput.value;

    if (numInput.checkValidity() === false) {
        val.innerHTML = 'Please enter number between 10 to 100.';
    } else {
        arr.push(num);
        render(arr);
    }
});

leftOut.addEventListener('click', function() {
    alert(arr[0] + ' has been deleted.');
    arr.shift();
    render(arr);
});

rightOut.addEventListener('click', function() {
    alert(arr[arr.length - 1] + ' has been deleted.');
    arr.pop();
    render(arr);
});

result.addEventListener('click', function (e) {
    if (e.target.nodeName === 'DIV') {
        var num = e.target.firstChild.nodeValue,
            idx = arr.indexOf(num);

        alert(num + ' has been deleted.');
        arr.splice(idx, 1);
        render(arr);
    }

});

/*function inputValidation(input) {
    if (input.checkValidity() === false) {
        /!*result.innerHTML = input.validationMessage;*!/

        result.innerHTML = "Warring";
    }
}*/

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