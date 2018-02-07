let letValue = 1;

$("#let").val(letValue);
$("#letValue").text(letValue);

$(function(){
  $('#let').bind('input propertychange', function() {
    // input 中的值
    let params = $(this).val();
    $("#letValue").text(params);
  });
});