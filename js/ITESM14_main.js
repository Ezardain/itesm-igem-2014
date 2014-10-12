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

$(document).ready(function(){
  $("overviewTab").click(function(){
    $("#overviewheader").show();
    $("#notebookheader").hide();
    $("#procolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Overview";
  });
  $("#notebookTab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").show();
    $("#procolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Notebook";
  });
  $("#protocolsTab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#procolsheader").show();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Protocols";
  });
  $("#modelingTab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#procolsheader").hide();
    $("#modelingheader").show();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Modeling";
  });
  $("#module1Tab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#procolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").show();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Module 1";
  });
  $("#module2Tab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#procolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").show();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Module 2";
  });
  $("#module3Tab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#procolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").show();
    $("#module4header").hide();
    document.title = "Module 3";
  });
  $("#module4Tab").click(function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#procolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").show();
    document.title = "Module 4";
  });
});

// Javascript to enable link to tab
var hash = document.location.hash;
var prefix = "tab_";
if (hash) {
    $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
}

// Change hash for page-reload
$('.nav-tabs a').on('shown', function (e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
});