$(".services-mobile-menu").click(function () {
    $(".mobile-menu-services").toggle(), $(".mobile-menu-services-items-box").animate({ bottom: "110px" });
}),
    $(".mobile-menu-services").click(function () {
        $(this).hide();
    }),
    $(document).ready(function () {
        $("#india").show(),
            $("#usa").hide(),
            $("#australia").hide(),
            $("#london").hide(),
            $("#india_btn").click(function () {
                $("#india").show(), $("#usa").hide(), $("#australia").hide(), $("#london").hide();
            }),
            $("#usa_btn").click(function () {
                $("#india").hide(), $("#usa").show(), $("#australia").hide(), $("#london").hide();
            }),
            $("#aus_btn").click(function () {
                $("#india").hide(), $("#usa").hide(), $("#australia").show(), $("#london").hide();
            }),
            $("#london_btn").click(function () {
                $("#india").hide(), $("#usa").hide(), $("#australia").hide(), $("#london").show();
            });
    }),
    $(document).on("change keyup", ".required", function (e) {
        let n = !0;
        $(".required").each(function () {
            let e = this.value;
            if (!e || "" == e.trim()) return (n = !0), !1;
            n = !1;
        }),
            n ? $(".toggle-disabled").prop("disabled", !0) : $(".toggle-disabled").prop("disabled", !1);
    }),
    (function (e) {
        "use strict";
        new WOW().init(),
            e(".main_header_area").length &&
                (e(window).on("scroll", function () {
                    e(window).scrollTop() >= 50 ? e(".main_header_area").addClass("navbar_fixed") : e(".main_header_area").removeClass("navbar_fixed");
                }),
                e(".menu-opener").on("click", function () {
                    e(".toggle_menu").toggleClass("active");
                }),
                e("section").on("click", function () {
                    e(".toggle_menu").removeClass("active");
                })),
            e(".scroll-top").length &&
                (e(window).on("scroll", function () {
                    e(this).scrollTop() > 200 ? e(".scroll-top").fadeIn() : e(".scroll-top").fadeOut();
                }),
                e(".scroll-top").on("click", function () {
                    return e("html, body").animate({ scrollTop: 0 }, 1e3), !1;
                })),
            e(".popup-youtube").length && e(".popup-youtube").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
            e(".work_area").length &&
                (e(".works_inner").imagesLoaded(function () {
                    e(".works_inner").isotope({ layoutMode: "masonry" });
                }),
                e(".works_filter li").on("click", function () {
                    e(".works_filter li").removeClass("active"), e(this).addClass("active");
                    var n = e(this).attr("data-filter");
                    return e(".works_inner").isotope({ filter: n, animationOptions: { duration: 450, easing: "linear", queue: !1 } }), !1;
                })),
            (function () {
                if (e("#parallax").length) {
                    var n = document.getElementById("parallax");
                    new Parallax(n);
                }
            })(),
            e(".countarup_area").length && e(".counter").counterUp({ delay: 10, time: 400 }),
            e(".blog_slide").length &&
                e(".blog_carousel").owlCarousel({
                    loop: !0,
                    margin: 20,
                    nav: !0,
                    autoplay: !0,
                    items: 2.5,
                    navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-next'></i>"],
                    responsive: { 0: { items: 1, margin: 0 }, 767: { items: 2 }, 1000: { items: 3 }, 1199: { items: 1.8 }, 1299: { items: 2 }, 1700: { items: 2.5 } },
                }),
            e(".preloader").length &&
                e(window).on("load", function () {
                    e(".preloader").fadeOut(), e(".preloader").delay(50).fadeOut("slow");
                });
    })(jQuery),
    $(".india-name").click(function () {
        $(".india-box").show(),
            $(".usa-box").hide(),
            $(".spain-box").hide(),
            $(".aus-box").hide(),
            $(this).addClass("global-name-active "),
            $(".usa-name").removeClass("global-name-active"),
            $(".spain-name").removeClass("global-name-active"),
            $(".aus-name").removeClass("global-name-active");
    }),
    $(".usa-name").click(function () {
        $(".india-box").hide(),
            $(".usa-box").show(),
            $(".spain-box").hide(),
            $(".aus-box").hide(),
            $(this).addClass("global-name-active "),
            $(".india-name").removeClass("global-name-active"),
            $(".spain-name").removeClass("global-name-active"),
            $(".aus-name").removeClass("global-name-active");
    }),
    $(".spain-name").click(function () {
        $(".india-box").hide(),
            $(".usa-box").hide(),
            $(".spain-box").show(),
            $(".aus-box").hide(),
            $(this).addClass("global-name-active "),
            $(".india-name").removeClass("global-name-active"),
            $(".usa-name").removeClass("global-name-active"),
            $(".aus-name").removeClass("global-name-active");
    }),
    $(".aus-name").click(function () {
        $(".india-box").hide(),
            $(".usa-box").hide(),
            $(".spain-box").hide(),
            $(".aus-box").show(),
            $(this).addClass("global-name-active "),
            $(".india-name").removeClass("global-name-active"),
            $(".usa-name").removeClass("global-name-active"),
            $(".spain-name").removeClass("global-name-active");
    }),
    $(".dropdown-toggle").mouseenter(function () {
        $(".menu-last-images").fadeIn();
    }),
    $("#uxui-design").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-ui-ux-design").fadeIn();
    }),
    $("#product-design").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-product-design").fadeIn();
    }),
    $("#website-design").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-web-design").fadeIn();
    }),
    $("#wireframe-design").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-wireframe-design").fadeIn();
    }),
    $("#mobile-ui-design").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-mobile-ui-design").fadeIn();
    }),
    $("#android-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-android-development").fadeIn();
    }),
    $("#web-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-web-development").fadeIn();
    }),
    $("#artificial-intelligence").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-artificial-intelligence").fadeIn();
    }),
    $("#augmented-reality").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-augmented-reality").fadeIn();
    }),
    $("#bot-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-artificial-intelligence").fadeIn();
    }),
    $("#cloud-computing").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-cloud-computing").fadeIn();
    }),
    $("#dapp-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-dapp-development").fadeIn();
    }),
    $("#iot-app-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-iot-app-development").fadeIn();
    }),
    $("#ios-app-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-ios-app-development").fadeIn();
    }),
    $("#wearable-app-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-wearable-app-development").fadeIn();
    }),
    $("#machine-learning").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-machine-learning").fadeIn();
    }),
    $("#blockchain-solutions").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-dapp-development").fadeIn();
    }),
    $("#blockchain-app-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-blockchain-app-development").fadeIn();
    }),
    $("#eos-blockchain-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-eos-blockchain-development").fadeIn();
    }),
    $("#ethereum-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-ethereum-development").fadeIn();
    }),
    $("#hedera-hashgraph-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-hedera-hashgraph-development").fadeIn();
    }),
    $("#ipfs-blockchain-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-ipfs-blockchain-development").fadeIn();
    }),
    $("#private-blockchain-solution").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-private-blockchain-solution").fadeIn();
    }),
    $("#r3-corda-blockchain-development").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-r3-corda-blockchain-development").fadeIn();
    }),
    $("#strato-blockchain").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-strato-blockchain").fadeIn();
    }),
    $("#enterprise-mobility-solutions").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-enterprise-mobility-solutions").fadeIn();
    }),
    $("#voice-technology").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-voice-technology").fadeIn();
    }),
    $("#strategic-consulting").mouseenter(function () {
        $(".menu-img img").fadeOut(), $("#menu-img-strategic-consulting").fadeIn();
    }),
    $(document).ready(function () {
        $(".Leader-box-one").click(function () {
            $(".line").animate({ top: "0px" });
        }),
            $(".Leader-box-two").click(function () {
                $(".line").animate({ top: "250px" });
            }),
            $(".Leader-box-three").click(function () {
                $(".line").animate({ top: "550px" });
            }),
            $(".svg-change-btn-one").click(function () {
                $(this).addClass("svg-change-btn-active"), $(".svg-change-btn-two").removeClass("svg-change-btn-active"), $("#mobile-svg").hide(), $(".header-svg").show();
            }),
            $(".svg-change-btn-two").click(function () {
                $(this).addClass("svg-change-btn-active"), $(".svg-change-btn-one").removeClass("svg-change-btn-active"), $("#mobile-svg").show(), $(".header-svg").hide();
            });
    });
const items = document.querySelectorAll(".accordion a");
function toggleAccordion() {
    this.classList.toggle("active"), this.nextElementSibling.classList.toggle("active");
}



function validateformside(form) {
         var selected = new Array();
         var tblFruits = document.getElementById("myform");
         var website = document.getElementById("website");
         var iOS = document.getElementById("iOS");
         var digital = document.getElementById("digital");
         var design = document.getElementById("design");
         var notsure = document.getElementById("notsure");
         var Android = document.getElementById("Android");


         let Android1 = form1.Android.value;
         let iOS1 = form1.iOS.value;
         let website1 = form1.website.value;
         let digital1 = form1.digital.value;
         let design1 = form1.design.value;
         let notsure1 = form1.notsure.value;
         if (website.checked == true) {
            selected.push(website1);
         }
         if (iOS.checked == true) {
            selected.push(iOS1);
         }
         if (digital.checked == true) {
            selected.push(digital1);
         }
         if (design.checked == true) {
            selected.push(design1);
         }
         if (Android.checked == true) {
            selected.push(Android1);
         }
         if (notsure.checked == true) {
            selected.push(notsure1);
         }

         console.log(selected)
         console.log(form1)
         let comment = form1.comment.value;
         let budget = form1.budget.value;
         let launch = form1.launch.value;
         let client_name = form1.client_name.value;
         let email = form1.email.value;
         let country = form1.country.value;
         let phone = form1.phone.value;
         let whatsapp = form1.whatsapp.value;
         let skype = form1.skype.value;
         let about = form1.about.value;


         const data1 = {
            lookingFor: selected,
            productRequirement: comment,
            Budget: budget,
            launchDate: launch,
            name: client_name,
            email: email,
            countryName: country,
            phoneNo: phone,
            whatsappNo: whatsapp,
            skypeEmail: skype,
            knowAboutUs: about
         };

         console.log('Success:', data1)


         fetch('https://api.perfectiongeeks.com/api/user/addrequirementDetails', {
            method: 'POST', // or 'PUT'
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
         })
            // .then(response => response.json())
            .then(response => {
               console.log('Success:', response);
            })
            .catch((error) => {
               console.error('*******************************Error:', error);
            });

         alert("Form is Submitted")
         location.href = "https://www.perfectiongeeks.com/thank-you";
      }



items.forEach((e) => e.addEventListener("click", toggleAccordion)),
    $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
            items: 1,
            itemsDesktop: [1e3, 2],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1],
            pagination: !1,
            navigation: !0,
            slideSpeed: 1e3,
            singleItem: !0,
            transitionStyle: "goDown",
            navigationText: ["", ""],
            autoPlay: !1,
        });
    }),
    $(document).ready(function () {
        $(".services-info-box-one").mouseenter(function () {
            $(".ui-ux-img").hide(), $(".ui-ux-img-one").show();
        }),
            $(".services-info-box-two").mouseenter(function () {
                $(".ui-ux-img").hide(), $(".ui-ux-img-two").show();
            }),
            $(".services-info-box-three").mouseenter(function () {
                $(".ui-ux-img").hide(), $(".ui-ux-img-three").show();
            }),
            $(".services-info-box-four").mouseenter(function () {
                $(".ui-ux-img").hide(), $(".ui-ux-img-four").show();
            }),
            $(".services-info-box-five").mouseenter(function () {
                $(".ui-ux-img").hide(), $(".ui-ux-img-five").show();
            }),
            $(".services-info-box-six").mouseenter(function () {
                $(".ui-ux-img").hide(), $(".ui-ux-img-six").show();
            });
    });
    



    function validateform(form) {
         var name = form.name.value;
         var email = form.email.value;
         var phone = form.phone.value;
         var message = form.message.value;
         const data = { name: name, email: email, phone: phone, message: message };



         fetch('https://api.perfectiongeeks.com/api/user/sendEmail', {
            method: 'POST', // or 'PUT'
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         })
            .then(response => response.json())
            //console.log(json())
            .then(data => {
               console.log('********************************Success:', data);
            })
            .catch((error) => {
               console.error('*******************************Error:', error);
            });
         alert("Form is Submitted")
         location.href = "https://www.perfectiongeeks.com/thank-you";

      }