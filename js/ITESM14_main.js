$(document).on("scroll",function(){
    if($(document).scrollTop()>450){
        $("header").removeClass("initial-nav-scroll-up").addClass("nav-scroll-down");
        $(".mypic").fadeOut(700);
        $("#social-media").fadeOut(600);
        $("#show-menu").fadeOut(600);
        $("#igem-brand").fadeIn(600);
    } else{
        $("header").removeClass("nav-scroll-down").addClass("initial-nav-scroll-up");
        $("#navbar-control").addClass("pull-right");
        $(".mypic").fadeIn(600);
        $("#social-media").fadeIn(600);
        $("#show-menu").fadeIn(600);
        $("#igem-brand").fadeOut(700);
    }
});

$('#show-menu').on('click', function(e) {
    e.preventDefault();
    if($('.left-menu').is(":visible")) {
       $('.left-menu').hide();
       $('.right-menu').hide();
       $( "#show-menu" ).removeClass("glyphicon-collapse-up");
       $( "#show-menu" ).addClass("glyphicon-collapse-down");
     }else{
       $('.left-menu').show();
       $('.right-menu').show();
       $( "#show-menu" ).removeClass("glyphicon-collapse-down");
       $( "#show-menu" ).addClass("glyphicon-collapse-up");
     }
});

$(function () {
  $('#myTab a:first').tab('show')
});

$(document).ready(function(){
  $("#overviewTab").click(function(){
    $("#notebookheader").show();
    $("#module1header").hide();
    document.title = "Overview";
  });
  $("#notebookTab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Notebook";
  });
  $("#protocolsTab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Protocols";
  });
  $("#modelingTab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Modeling";
  });
  $("#module1Tab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Module 1";
  });
  $("#module2Tab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Module 2";
  });
  $("#module3Tab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Module 3";
  });
  $("#module4Tab").click(function(){
    $("#notebookheader").hide();
    $("#module1header").show();
    document.title = "Module 4";
  });
});
