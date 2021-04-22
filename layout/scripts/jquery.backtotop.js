/*
Template Name: Shiphile
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});

// for scrolling effect when a nav item is clicked
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});

jQuery("#scrliwtd,#scrliws,#scrlisa,#scrlicu").click(function () {

    jQuery("body,html").animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 600);
});

// for nav bar fixing to the top on page scroll
$(document).ready(function() {
    var whatWeDoPosition = document.getElementById("whatwedo").getBoundingClientRect().top;
    var whySolarPosition = document.getElementById("whysolar").getBoundingClientRect().top;
    var solarAppPosition = document.getElementById("solarapp").getBoundingClientRect().top;
    var contactUsPosition = document.getElementById("contactus").getBoundingClientRect().top;
    var h = window.innerHeight;
    console.log(whatWeDoPosition,h);
    
    if($(window).scrollTop() < whatWeDoPosition){
        document.getElementById("scrlihome").className='navactive';
    }
    $(window).scroll(function () { 
  
    //   console.log($(window).scrollTop());
    if($(window).scrollTop() < whatWeDoPosition){
        document.getElementById("scrlihome").className='navactive';
    }
  
      if ($(window).scrollTop() > 194) {
        document.getElementById("navv").style.position = "fixed";
        document.getElementById("navv").style.top = "0";
        document.getElementById("navv").style.zIndex = "999";
      }
  
      if ($(window).scrollTop() < 194) {
        document.getElementById("navv").style.position = "";
        document.getElementById("navv").style.top = "";
        
      }
    // console.log(document.getElementById("whatwedo").getBoundingClientRect().top);
    if($(window).scrollTop()+h >= contactUsPosition ){
        document.getElementById("scrlisa").className='';
        document.getElementById("scrlicu").className='navactive';
        
    }else if($(window).scrollTop()+h >= solarAppPosition ){
        document.getElementById("scrlisa").className='navactive';
        document.getElementById("scrlicu").className='';
        document.getElementById("scrliws").className='';
    }else if($(window).scrollTop()+h >= whySolarPosition ){
        document.getElementById("scrliws").className='navactive';
        document.getElementById("scrliwtd").className='';
        document.getElementById("scrlisa").className='';
    }else if($(window).scrollTop()+h >= whatWeDoPosition ){
        document.getElementById("scrliwtd").className='navactive';
        document.getElementById("scrlihome").className='';
        document.getElementById("scrliws").className='';
    }else{
        document.getElementById("scrlihome").className='navactive';
        document.getElementById("scrliwtd").className='';
    }
      
    });
  });



