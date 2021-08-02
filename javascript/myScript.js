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
    //    <link href="stylesheets/arColors/style-purple.css" rel="stylesheet">
    //        <link href="stylesheets/arColors/style-deep-purple.css" rel="stylesheet">-->
    //<!--للبنات-->
    //<!--<link href="stylesheets/arColors/style-indigo.css" rel="stylesheet">-->
    //<!--**-->
    //<!--<link href="stylesheets/arColors/style-blue.css" rel="stylesheet">
    //                    <link href="stylesheets/arColors/style-teal.css" rel="stylesheet">-->
    //<!--**-->
    //<!--<link href="stylesheets/arColors/style-green.css" rel="stylesheet">-->
    //<!--**-->
    //<!--اليوم الوطني-->
    //<!--<link href="stylesheets/arColors/style-light-green.css" rel="stylesheet">
    //                                <link href="stylesheets/arColors/style-amber.css" rel="stylesheet">
    //                                    <link href="stylesheets/arColors/style-orange.css" rel="stylesheet">
    //                                        <link href="stylesheets/arColors/style-deep-orange.css" rel="stylesheet">-->
    //<link href="stylesheets/arColors/style-brown.css" rel="stylesheet">
/* =============== Achievement toggle button =============== */
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var pink = {
    arTitle: "وردي",
    enTitle: "Pink",
    href: "stylesheets/arColors/style-pink.css",
    enHref: "stylesheets/style-pink.css"
};
/* var purple = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
};
var red = {
    arTitle: "أحمر",
    enTitle: "Red",
    href: "stylesheets/arColors/style-red.css",
    enHref: "stylesheets/style-red.css"
}; */



var styles = new Array(red, pink);






window.onload = function () {
    var pos = 0;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 10);

    function move() {
        if (pos >= 150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            $('link[href="stylesheets/arColors/style-brown.css"]').attr('href', styles[pos].href);
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