$(".plans__point").click(function () {
  $(".plans__point").removeClass("active");
  $(this).addClass("active");
  $(this).find("input").prop("checked", true);

  var count = $(".count").val();
  var price = $(this).data("price");
  $(".sum").html(count * price);

  var text = $(this).data("number");
  $(".selectedPlan").html("#" + text);
});
