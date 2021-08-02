/* (function ($) {
    "use strict";

    $('form#contact-form').on('submit', function (e) {
        var name = "عبدالله السالم";
        var mobileNo = "0508532127";
        var email = "abdullahalsalem18@gmail.com";
        var chatId = "-554604399";
        var salute = (DateTime.Now.Hour > 12) ? "مساء الخير 🌹 \n" : "صباح الخبر 🌹☀ \n";
        var link = "";
        var apilToken = "1691033961:AAGV48qYKz6eN_Vk-U1VD2BswaB-TE-rPBs";
        var contents = salute + "\n";
        contents += "هناك شخص طلب إعلاناً على موقع متاجر منتجاتي: 📇\n";
        contents += "______________________\n\n معلومات مقدّم الطلب 👨👩‍🦰:\n";
        contents += "الاسم ✍: " + name + "\n";
        contents += "الجوال 📱: " + mobileNo + "\n";
        contents += "البريد الإلكتروني 📧: " + email + "\n";
        //contents += "التواصل عبر واتسآب 🔗:\n "+ shareWithSocialMediaController.sendToCustomer(mobileNo)}\n\n\n";
        contents += "نود إشعاركم بأنكم تلقيتم طلب إعلان بواسطة موقع متاجر منتجاتي 🛒 \n تطوير فريق فرسان البرمجة 🐴";

        link = "https://api.telegram.org/bot{apilToken}/sendMessage?chat_id=" + chatId + "&text=" + contents.Replace("\n", " % 0A");
        window.location.replace("https://google.com");
    });

})(jQuery); */


//calling the function in window.onload to make sure the HTML is loaded



//< !--Custom Style-- >
//<!--للبنات-->
//<!--**-->
//<!--**-->
//<!--**-->
//<!--اليوم الوطني-->
//<link href="stylesheets/arColors/style-brown.css" rel="stylesheet">
/* =============== Achievement toggle button =============== */
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    prvHref:"stylesheets/arColors/style-brown.css",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var pink = {
    arTitle: "وردي",
    enTitle: "Pink",
    prvHref:"stylesheets/arColors/style-red.css",
    href: "stylesheets/arColors/style-pink.css",
    enHref: "stylesheets/style-pink.css"
};
var purple = {
    arTitle: "بنفسجي",
    enTitle: "Purple",
    prvHref:"stylesheets/arColors/style-pink.css",
    href: "stylesheets/arColors/style-purple.css",
    enHref: "stylesheets/style-purple.css"
};
var deepPurple = {
    arTitle: "بنفسجي غامق",
    enTitle: "deep-purple",
    prvHref:"stylesheets/arColors/style-purple.css",
    href: "stylesheets/arColors/style-deep-purple.css",
    enHref: "stylesheets/style-deep-purple.css"
};
var indigo = {
    arTitle: "نيلي",
    enTitle: "indigo",
    prvHref:"stylesheets/arColors/style-deep-purple.css",
    href: "stylesheets/arColors/style-indigo.css",
    enHref: "stylesheets/style-indigo.css"
};
var blue = {
    arTitle: "أزرق",
    enTitle: "blue",
    prvHref:"stylesheets/arColors/style-indigo.css",
    href: "stylesheets/arColors/style-blue.css",
    enHref: "stylesheets/style-blue.css"
};
var teal = {
    arTitle: "تركواز",
    enTitle: "Teal",
    prvHref:"stylesheets/arColors/style-blue.css",
    href: "stylesheets/arColors/style-teal.css",
    enHref: "stylesheets/style-teal.css"
};
var green = {
    arTitle: "أخضر",
    enTitle: "green",
    prvHref:"stylesheets/arColors/style-teal.css",
    href: "stylesheets/arColors/style-green.css",
    enHref: "stylesheets/style-green.css"
};
var lightGreen = {
    arTitle: "أخضر فاتح",
    enTitle: "light-green",
    prvHref:"stylesheets/arColors/style-green.css",
    href: "stylesheets/arColors/style-light-green.css",
    enHref: "stylesheets/style-light-green.css"
};
var amber = {
    arTitle: "عنبر",
    enTitle: "amber",
    prvHref:"stylesheets/arColors/style-light-green.css",
    href: "stylesheets/arColors/style-amber.css",
    enHref: "stylesheets/style-amber.css"
};
var orange = {
    arTitle: "برتقالي",
    enTitle: "orange",
    prvHref:"stylesheets/arColors/style-amber.css",
    href: "stylesheets/arColors/style-orange.css",
    enHref: "stylesheets/style-orange.css"
};
var deepOrange = {
    arTitle: "برتقالي غامق",
    enTitle: "deep-orange",
    prvHref:"stylesheets/arColors/style-orange.css",
    href: "stylesheets/arColors/style-deep-orange.css",
    enHref: "stylesheets/style-deep-orange.css"
};
var brown = {
    arTitle: "بني",
    enTitle: "brown",
    prvHref:"stylesheets/arColors/style-deep-orange.css",
    href: "stylesheets/arColors/style-brown.css",
    enHref: "stylesheets/style-brown.css"
};

var styles = new Array(red, pink, purple, deepPurple, indigo, blue, teal, green, lightGreen, amber, orange, deepOrange, brown);

window.onload = function () {
    let pos = 0;
    var t = setInterval(move, 10000);

    function move() {
        if (pos == styles.length) {
            //clearInterval(t);
            $('link[href="stylesheets/arColors/style-'+ styles[styles.length-2] +'.css"]').attr('href', styles[0].href);
            pos = 0;
            return;
        }
        else {
            // if (styles[pos].enTitle == "brown") {
            //     pos = 1;
            // }
            //alert(styles[pos].arTitle);
            if (pos == 0) {
                $('link[href="stylesheets/arColors/style-brown.css"]').attr('href', styles[pos].href);
            } else {
                //alert(styles[pos - 1].arTitle);
                $('link[href="' + styles[pos].prvHref + '"]').attr('href', styles[pos].href);
            }
            $("#BottomLeftCorner").html("<p>(لون السيرة " + styles[pos].arTitle + ")</p>");
            pos++;
        }
    }
};


function sendTelegram(name, mobileNo, email) {
    //var name = "عبدالله السالم";
    //var mobileNo = "0508532127";
    //var email = "abdullahalsalem18@gmail.com";
    var chatId = "-554604399";
    var salute = "تحية طيبة 🌹 %0A";
    var apilToken = "1691033961:AAGV48qYKz6eN_Vk-U1VD2BswaB-TE-rPBs";
    var contents = salute + "%0A";
    contents += "هناك شخص طلب إعلاناً على موقع متاجر منتجاتي: 📇%0A";
    contents += "______________________%0A%0A معلومات مقدّم الطلب 👨👩‍🦰:%0A";
    contents += "الاسم ✍: " + name + "%0A";
    contents += "الجوال 📱: " + mobileNo + "%0A";
    contents += "البريد الإلكتروني 📧: " + email + "%0A";
    //contents += "التواصل عبر واتسآب 🔗:\n "+ shareWithSocialMediaController.sendToCustomer(mobileNo)}\n\n\n";
    contents += "نود إشعاركم بأنكم تلقيتم طلب إعلان بواسطة موقع متاجر منتجاتي 🛒 %0A تطوير فريق فرسان البرمجة 🐴";

    var link = "https://api.telegram.org/bot" + apilToken + "/sendMessage?chat_id=" + chatId + "&text=" + contents.replace("<br>", "%0A");
    window.location.replace(link);
    return false;
}