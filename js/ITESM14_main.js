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

$(document).on('click', '#show-menu', function(e) {
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
  $("a[href='#overview']").on('shown.bs.tab', function(){
    $("#overviewheader").show();
    $("#notebookheader").hide();
    $("#protocolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Overview";
  });
  $("a[href='#notebook']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").show();
    $("#protocolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Notebook";
  });
  $("a[href='#protocols']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#protocolsheader").show();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Protocols";
  });
  $("a[href='#modeling']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#protocolsheader").hide();
    $("#modelingheader").show();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Modeling";
  });
  $("a[href='#module1']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#protocolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").show();
    $("#module2header").hide();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Module 1";
  });
  $("a[href='#module2']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#protocolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").show();
    $("#module3header").hide();
    $("#module4header").hide();
    document.title = "Module 2";
  });
  $("a[href='#module3']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#protocolsheader").hide();
    $("#modelingheader").hide();
    $("#module1header").hide();
    $("#module2header").hide();
    $("#module3header").show();
    $("#module4header").hide();
    document.title = "Module 3";
  });
  $("a[href='#module4']").on('shown.bs.tab', function(){
    $("#overviewheader").hide();
    $("#notebookheader").hide();
    $("#protocolsheader").hide();
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
    $(hash.replace(prefix,"") + 'header').show();
    window.scrollTo(0,0);
}

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
});

//Javascript to enable link to tab
$('.dropdown-menu a').click(function() {
var url = document.location.toString();
  if (url.match('#')) {
      $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show');
      window.scrollTo(0,0);
  }
});
