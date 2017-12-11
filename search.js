
var json = null;

$(document).ready(function () {
  $("#find-product").on("change paste keyup", function () {

    var phrase = document.getElementById('find-product').value;

    $.ajax({
      url: 'app.php',
      dataType: 'json',
      data: { phrase: phrase },
      type: 'post',
      success: function (data) {
        json = data;
      }
    });

    console.log(json);

    var options = {

      url: function (phrase) {
        return "app.php";
      },

      getValue: function (element) {
        return element.name;
      },

      ajaxSettings: {
        dataType: "json",
        method: "POST",
        dataType: 'json',
        data: { phrase: phrase },
      },

      preparePostData: function (data) {
        data.phrase = $("#find-product").val();
        return data;
      },

      requestDelay: 400
    };

    $("#find-product").easyAutocomplete(options);
  });

});