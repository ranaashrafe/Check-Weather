
var $ = jQuery = require("jquery")

var dictionary = {
    'Lang': {
    
        'en': 'عربي',
       
        'ar':'English',
    },
    'Logout': {
    
        'en': 'Logout',
       
        'ar':'تسجيل الخروج',
    },
    'parag' :{
        'en':'Type the name of a city to find out the weather conditions',
        'ar':'اكتب اسم مدينة لمعرفة أحوال الطقس',
    },
    'cityName' :{
        'en':'City Name',
        'ar':'اسم المدينة',
    }
    ,
    'submit' :{
        'en':'Search',
        'ar':'بحث',
    },
    'next' :{
        'en':'Next',
        'ar':'التالي',
    }
};

window.onload=function()
{
    if(localStorage.getItem("current_lang")==="en")
    {
        $("[data-translate]").each(function(){
            var key = $(this).data('translate');
            $(this).html(dictionary[key]["en"] || "N/A");
        });

    }
    else
    {
        $("[data-translate]").each(function(){
            var key = $(this).data('translate');
            $(this).html(dictionary[key]["ar"] || "N/A");
        });

    }
}
console.log(localStorage.getItem("current_lang"));

var langs = ['en','ar'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

//Defualt ImageSource 
//var LanguageImg=document.getElementById("LangImg");
console.log(localStorage.getItem("current_lang"))
   
check();
function check(){
 if(localStorage.getItem("current_lang")==="en")
{
    var body=document.getElementById("body");
  
   // document.getElementById("LangImg").src="../Images/arbtn.png";

   body.dir='ltr';
}
else
{ 
    var body=document.getElementById("body");
    body.dir='rtl';


   // document.getElementById("LangImg").src="../Images/enbtn.png";
}
}
document.getElementById("ChangeLang").addEventListener("click",function(){
  
    current_lang_index = ++current_lang_index % 2;
    current_lang = langs[current_lang_index];
    translate();
      localStorage.setItem("current_lang",current_lang);
    check();

})

function translate() {

    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });


}

translate();