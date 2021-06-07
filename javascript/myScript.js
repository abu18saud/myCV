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