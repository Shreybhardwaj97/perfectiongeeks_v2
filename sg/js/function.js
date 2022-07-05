/*---mobile nav---*/
$(document).ready(function () {
    $(".menu-icon").click(function () {
        $(".menu").toggle();
        $(this).hide();
        $(".close-menu").show();
    });
    $(".close-menu").click(function () {
        $(".menu").hide();
        $(this).hide();
        $(".menu-icon").show();
    });


});

/*---mobile nav end---*/


/*--portfiolio section--*/
$(document).ready(function () {
    $("#right").click(function () {
        $(".portfolio-images-box").animate({ left: '-300px' });

    });
    $("#left").click(function () {
        $(".portfolio-images-box").animate({ left: '0px' });

    });
});

/*--portfiolio section end--*/

/*---form--*/


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
         // alert("Form is Submitted")
         // location.href = "https://www.perfectiongeeks.com/thank-you";
         console.log(data);


      }


/*--form end--*/


/*------services ------*/
$(".tab-link").click(function () {
    $(".tab-link").removeClass("tab-current");
    $(this).addClass("tab-current");

});

$("#tab-one").click(function () {
    $(".tab-content").hide();
    $("#tab-1").show();


});


$("#tab-two").click(function () {
    $(".tab-content").hide();
    $("#tab-2").show();

});

$("#tab-three").click(function () {
    $(".tab-content").hide();
    $("#tab-3").show();

});

$("#tab-four").click(function () {
    $(".tab-content").hide();
    $("#tab-4").show();

});

$("#tab-five").click(function () {
    $(".tab-content").hide();
    $("#tab-5").show();

});

$("#tab-six").click(function () {
    $(".tab-content").hide();
    $("#tab-6").show();

});

$("#tab-seven").click(function () {
    $(".tab-content").hide();
    $("#tab-7").show();

});


$(".show-content-one").click(function () {
    $(this).hide();
    $(".hide-content-one").show();
});

$(".show-content-two").click(function () {
    $(this).hide();
    $(".hide-content-two").show();
});

$(".show-content-three").click(function () {
    $(this).hide();
    $(".hide-content-three").show();
});

$(".show-content-four").click(function () {
    $(this).hide();
    $(".hide-content-four").show();
});
$(".show-content-five").click(function () {
    $(this).hide();
    $(".hide-content-five").show();
});
$(".show-content-six").click(function () {
    $(this).hide();
    $(".hide-content-six").show();
});
$(".show-content-seven").click(function () {
    $(this).hide();
    $(".hide-content-seven").show();
});
$(".show-content-eight").click(function () {
    $(this).hide();
    $(".hide-content-eight").show();
});



/*------services end--------*/

/*---faq----*/

const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
    const e = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) items[i].setAttribute("aria-expanded", "false");
    "false" == e && this.setAttribute("aria-expanded", "true");
}
items.forEach((e) => e.addEventListener("click", toggleAccordion));
/*---faq end---*/


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("skype-input");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);


}