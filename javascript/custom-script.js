(function ($) {
    "use strict";


    /* =============== Page pre-loader =============== */
    $(window).load(function () {
        $('#page-loader').fadeOut(400);

        $('#intro').addClass('animated fadeInDown');
        $('#intro-div').addClass('animated fadeInUp');
        $('#profile').addClass('animated zoomIn');


        /* =============== Portfolio Filterizr Initialize =============== */
        $(function () {
            //Initialize filterizr with default options
            $('.filtr-container').filterizr();

            $('.simple-filter li').on('click', function () {
                $('.simple-filter li').removeClass('active-cat');
                $(this).addClass('active-cat');
            });
        });

    });



    $(document).ready(function () {

        /* =============== AOS Initialize =============== */
        AOS.init({
            offset: 50,
            duration: 500,
            delay: 300,
            easing: 'ease-in-sine',
            once: true,
        });
        AOS.refresh();



        /* =============== Side Nav =============== */
        var $menuBtn = $('#nav-btn');
        var $sideNav = $('#side-nav');
        var $sideNavMask = $('#side-nav-mask');
        var $link = $('.nav-link');

        $menuBtn.on('click', function () {
            $sideNav.animate({ left: 0 }, 'fast');
            $sideNavMask.addClass('visible');
        });

        $link.on('click', function () {
            $sideNav.animate({ left: -240 }, 'fast');
            $sideNavMask.removeClass('visible');
        });

        $sideNavMask.on('click', function () {
            $sideNav.animate({ left: -240 }, 'fast');
            $sideNavMask.removeClass('visible');
        });



        /* =============== Page Scrolling Smoothly to Link Target =============== */
        $('a[href*=#]:not([href=#])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 32
                    }, 1000);
                    return false;
                }
            }
        });




        /* =============== Skill Bar value =============== */
        $('.skill-progress').each(function () {
            $(this).find('.skill-determinate').css({
                width: jQuery(this).attr('data-percent')
            }, 7000);
        });




        /* =============== Achievement toggle button =============== */
        var achJquery = {
            title: "شهادة JQuery",
            icon: "mdi mdi-jquery",
            period: "25 يوليو 2021",
            approval: "SoloLearn",
            urlApproval: "https://www.sololearn.com/home",
            dated: "25 يوليو 2021",
            expiredDate: "لا تنتهي",
            id: "1082-21378354",
            url: "https://www.sololearn.com/Certificate/1082-21378354/jpg"
        };
        var achJS = {
            title: "شهادة JavaScript",
            icon: "mdi mdi-nodejs",
            period: "18 يوليو 2021",
            approval: "SoloLearn",
            urlApproval: "https://www.sololearn.com/home",
            dated: "18 يوليو 2021",
            expiredDate: "لا تنتهي",
            id: "21378354-1024",
            url: "https://www.sololearn.com/certificates/course/en/21378354/1024/landscape/png"
        };

        var achievements = new Array(achJquery, achJS);

        var i = 50;

        for (var ach of achievements) {

            var btn = "#btn-"+ i;
            var _content = ".content-" + i;

            $(btn).on('click', function () {
                $(_content).slideToggle(1000);
            });

            var contents = "<!-- -" + i + " Achievement -->" +
                "<div class='col col-md-4 col-sm-6 col-xs-12 float-right'>" +
                "<div class='achievement'>" +
                "<div class='achievement-top-bar'>" +
                "<!-- Achievement Title Here -->" +
                "<h5 class='text-center text-capitalize rtl_dir_center'>" +
                ach.title +
                "</h5>" +
                "</div>" +
                "<div class='achievement-inner'>" +
                "<div class='achievement-header'>" +
                "<div class='achievement-heading'>" +
                "<!-- Icon and Date -->" +
                "<i class='text-center " + ach.icon + "'></i>" +
                "<h6 class='text-center rtl_dir_center'>" + ach.period + "</h6>" +
                "</div>" +

                "<!-- Button ID For Content ID -->" +
                "<a id='btn-" + i + "'" +
                "class='btn-floating waves-effect waves-light btn-large achievement-more-btn custom-btn'" +
                "data-aos='zoom-in' data-aos-delay='300'>" +
                "<i class='ion-ios-arrow-down'></i>" +
                "</a>" +

                "</div>" +

                "<!-- Content ID -->" +
                "<div id='content-" + i + "' class='achievement-content content-" + i + "'>" +
                "<!-- Description -->" +
                "<p class='rtl_dir'>" +
                "جهة الإعتماد: <a href='" + ach.urlApproval + "'>" + ach.approval + "</a><br />" +
                "تاريخ الإصدار: " + ach.dated + "<br />" +
                "تاريخ الإنتهاء: " + ach.expiredDate + "<br />" +
                "معرف الشهادة: " + ach.id + "<br />" +
                "<a class='rtl_dir_center'" +
                "href='" + ach.url + "'" +
                "target='_blank'>عرض الإعتماد</a>" +
                "</p>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<!-- ./-" + i + " Achievement -->";





            //$("#achievementRows").prepend(contents);
            i++;
        }





        $("#btn--6").on('click', function () {
            $("#content--6").slideToggle(1000);
        });
        $("#btn--5").on('click', function () {
            $("#content--5").slideToggle(1000);
        });
        $("#btn--4").on('click', function () {
            $("#content--4").slideToggle(1000);
        });
        $("#btn--3").on('click', function () {
            $("#content--3").slideToggle(1000);
        });

        $("#btn--2").on('click', function () {
            $("#content--2").slideToggle(1000);
        });

        $("#btn--1").on('click', function () {
            $("#content--1").slideToggle(1000);
        });
        $("#btn-0").on('click', function () {
            $("#content-0").slideToggle(1000);
        });

        $("#btn-1").on('click', function () {
            $("#content-1").slideToggle(1000);
        });

        $("#btn-2").on('click', function () {
            $("#content-2").slideToggle(1000);
        });

        $("#btn-3").on('click', function () {
            $("#content-3").slideToggle(1000);
        });

        $("#btn-4").on('click', function () {
            $("#content-4").slideToggle(1000);
        });

        $("#btn-5").on('click', function () {
            $("#content-5").slideToggle(1000);
        });

        $("#btn-6").on('click', function () {
            $("#content-6").slideToggle(1000);
        });
        $("#btn-7").on('click', function () {
            $("#content-7").slideToggle(1000);
        });

        $("#btn-8").on('click', function () {
            $("#content-8").slideToggle(1000);
        });

        $("#btn-9").on('click', function () {
            $("#content-9").slideToggle(1000);
        });
        $("#btn-10").on('click', function () {
            $("#content-10").slideToggle(1000);
        });

        $("#btn-11").on('click', function () {
            $("#content-11").slideToggle(1000);
        });

        $("#btn-12").on('click', function () {
            $("#content-12").slideToggle(1000);
        });



        /* =============== Client Swiper Initialize =============== */
        var clientSwiper = new Swiper('#client-slider', {
            slidesPerView: 1,
            loop: true,
            direction: 'horizontal',
            effect: "slide",
            speed: 3000,
            autoplay: 5000,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
        });



        /* =============== Pricing table =============== */
        var $monthBtn = $('#month-btn');
        var $yearBtn = $('#year-btn');
        var $month = $('#month');
        var $year = $('#year');

        $month.show();
        $year.hide();

        $monthBtn.on('click', function () {
            $month.show();
            $year.hide();
            $month.addClass('animated fadeIn');
            $monthBtn.addClass('active-cat');
            $yearBtn.removeClass('active-cat');

        });

        $yearBtn.on('click', function () {
            $month.hide();
            $year.show();
            $year.addClass('animated fadeIn');
            $yearBtn.addClass('active-cat animated');
            $monthBtn.removeClass('active-cat');
        });



        /* =============== Back To Top =============== */
        var offset = 300,
            scroll_top_duration = 700,
            $back_to_top = $('.back-to-top');
        $(window).scroll(function () {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible');
        });

        //smooth scroll to top --->>> Optional
        $back_to_top.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
            );
        });



        /* =============== Email Handling =============== */
        $('form#contact-form').on('submit', function (e) {
            e.preventDefault(); //Prevents default submit
            var form = $(this);
            $("#submit").attr('disabled', 'disabled'); //Disable the submit button on click

            var d = new Date();
            var curr_date = d.getDate();
            var curr_month = d.getMonth() + 1; //Months are zero based
            var curr_year = d.getFullYear();

            var post_data = form.serialize(); //Serialized the form data
            var name = $("#name").val();
            var mobileNo = $("#mobile").val();
            var subject = $("#subject").val();
            var message = $("#textarea").val();
            var chatId = "7956856";
            var newLine = "%0A";
            var salute = "تحية طيبة 🌹 " + newLine;
            var apilToken = "1703156053:AAGC_Xb2sYmywq6Rq1ew3qM2Sp9buvM3VVI";
            var contents = salute + newLine;
            contents += "هناك شخص شاهد سيرتك الذاتية وأرسل لك رسالةً تفاصيلها أدانه 😊❤:" + newLine;
            contents += "______________________" + newLine + newLine + " تفاصيل المرسل والرسالة ‍💌:";
            contents += "الاسم ✍: " + name + newLine;
            contents += "الجوال 📱: " + mobileNo + newLine;
            contents += "الموضوع 🚀: " + subject + newLine;
            contents += "نص الرسالة 📧: " + newLine + message + newLine;
            contents += "وقت الإرسال 📆: " + d + newLine;


            //contents += "التواصل عبر واتسآب 🔗:\n "+ shareWithSocialMediaController.sendToCustomer(mobileNo)}\n\n\n";
            contents += "لقد تم إرسال هذه الرسالة بواسطة موقع سيرتك الذاتية 📄 " + newLine + " تطوير فريق فرسان البرمجة 🐴";

            var link = "https://api.telegram.org/bot" + apilToken + "/sendMessage?chat_id=" + chatId + "&text=" + contents.replace("<br>", "%0A");
            $.ajax({
                type: 'POST',
                url: link, // Form script
                data: post_data
            })
                .done(function () {

                    // Get the snackbar DIV
                    var x = document.getElementById("snackbar");
                    // Add the "show" class to DIV
                    x.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

                    $("form#contact-form")[0].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button

                })
                .fail(function () {

                    // Get the fail-snackbar DIV
                    var y = document.getElementById("fail-snackbar");
                    // Add the "show" class to DIV
                    y.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function () { y.className = y.className.replace("show", ""); }, 3000);

                    $("form#contact-form")[0].reset();
                    Materialize.updateTextFields(); // Rest floating labels
                    $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button
                });
        });

    });






})(jQuery);