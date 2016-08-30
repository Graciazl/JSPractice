/**
 * Created by Gracia on 16/8/30.
 */

// Common lib
var $ = function(id) {
    return document.getElementById(id.substr(1));
};

(function(){

    function dataVali(){
        var data = $('#airInput').value;
        if (!isNaN(data) && data >= 0 && data <= 1000 ) {
            $('#airDisplay').innerHTML = data;
        } else {
            $('#airDisplay').innerHTML = "Please enter valid data";
        }
    }

    $('#button').addEventListener('click', dataVali);

    $('#airInput').addEventListener('keyup', function(e){
        if (e.keyCode === 13) {
            dataVali();
        }
    });

})();