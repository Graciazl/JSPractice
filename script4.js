/**
 * Created by Gracia on 16/9/6.
 */


var $ = function(id) {
    return document.getElementById(id.substr(1));
};

(function(){
    var data = [],
        list = {
            city : $('#cityInput').value,
            air : $('#airInput').value
        };

    function createNewRow() {
        var newCell = document.createElement('td'),
            newRow = document.createElement('tr'),
            newText = document.createTextNode();

        newCell.appendChild(newText);
        newRow.appendChild(newRow);
        $('#tableData').appendChild(newRow);
    }
    

})();

