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

leftIn.addEventListener('click', function () {
    var num = numInput.value;

    if (numInput.checkValidity()) {
        if (arr.length < 60) {
            arr.unshift(num);
            render(arr);
        } else {
            val.innerHTML = 'The total number is limited to 60.';
            render(arr);
        }
    } else {
        val.innerHTML = 'Please enter number between 10 to 100.';
        render(arr);
    }
});

rightIn.addEventListener('click', function() {
    var num = numInput.value;

    if (numInput.checkValidity()) {
        if (arr.length < 60) {
            arr.push(num);
            render(arr);
        } else {
            val.innerHTML = 'The total number is limited to 60.';
            render(arr);
        }
    } else {
        val.innerHTML = 'Please enter number between 10 to 100.';
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

function render(arr) {
    result.innerHTML = '';

    if (arr.length !== 0) {
        for (var i = 0; i < arr.length; i++) {
            var newDiv = document.createElement('div');

            newDiv.style.background = 'red';
            newDiv.style.color = 'white';
            newDiv.style.height = arr[i] + 'px';
            newDiv.style.width = '12px';
            newDiv.style.display = 'inline-block';

            result.appendChild(newDiv);
        }
    }
}