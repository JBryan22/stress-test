var stress = 0;
var health = 0;
var cope = 0;

$(function(){
  $("#test").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      stress += 1;
    });
    $("input:checkbox[name=health-signs]:checked").each(function(){
      health += 1;
    });
    $("input:checkbox[name=coping]:checked").each(function(){
      cope += 1;
    });

    if (cope === 0){
      $(".output").text("Here are some things you can do to help cope with stress:");
    } else if ((stress + health) >= cope) {
      $(".output").text("Here are some helpful links:");
    } else {
      $(".output").text("You're doing a pretty good job");
    }

  });
});
