
$(document).ready(function () {
    $("#find-product").on("change paste keyup", function() {

        var pharase = document.getElementById('find-product').value;

        $.ajax({
        url: 'app.php',
        dataType: 'json',
        data: {phrase: pharase},
        type: 'post',
        success: function(data){
            console.log(data);
        }
    });
});
});