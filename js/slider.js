var tracking,
    rightTracking,
    $slider = $(".slideshow .slider"),
    maxItems = $(".item", $slider).length,
    dragging = !1;
for (
    $sliderRight = $(".slideshow").clone().addClass("slideshow-right").appendTo($(".split-slideshow")), rightItems = $(".item", $sliderRight).toArray(), reverseItems = rightItems.reverse(), $(".slider", $sliderRight).html(""), i = 0;
    i < maxItems;
    i++
)
    $(reverseItems[i]).appendTo($(".slider", $sliderRight));
$slider.addClass("slideshow-left"),
    $(".slideshow-left")
        .slick({ vertical: !0, verticalSwiping: !0, arrows: !1, infinite: !0, dots: !0, speed: 1e3, cssEase: "cubic-bezier(0.7, 0, 0.3, 1)" })
        .on("beforeChange", function (i, s, e, t) {
            e > t && 0 == t && e == maxItems - 1
                ? ($(".slideshow-right .slider").slick("slickGoTo", -1), $(".slideshow-text").slick("slickGoTo", maxItems))
                : e < t && 0 == e && t == maxItems - 1
                ? ($(".slideshow-right .slider").slick("slickGoTo", maxItems), $(".slideshow-text").slick("slickGoTo", -1))
                : ($(".slideshow-right .slider").slick("slickGoTo", maxItems - 1 - t), $(".slideshow-text").slick("slickGoTo", t));
        })
        .on("mousewheel", function (i) {
            i.preventDefault(), i.deltaX > 0 || i.deltaY < 0 ? $(this).slick("slickNext") : (i.deltaX < 0 || i.deltaY > 0) && $(this).slick("slickPrev");
        })
        .on("mousedown touchstart", function () {
            (dragging = !0),
                (tracking = $(".slick-track", $slider).css("transform")),
                (tracking = parseInt(tracking.split(",")[5])),
                (rightTracking = $(".slideshow-right .slick-track").css("transform")),
                (rightTracking = parseInt(rightTracking.split(",")[5]));
        })
        .on("mousemove touchmove", function () {
            dragging &&
                ((newTracking = $(".slideshow-left .slick-track").css("transform")),
                (newTracking = parseInt(newTracking.split(",")[5])),
                (diffTracking = newTracking - tracking),
                $(".slideshow-right .slick-track").css({ transform: "matrix(1, 0, 0, 1, 0, " + (rightTracking - diffTracking) + ")" }));
        })
        .on("mouseleave touchend mouseup", function () {
            dragging = !1;
        }),
    $(".slideshow-right .slider").slick({ swipe: !1, vertical: !0, arrows: !1, infinite: !0, speed: 950, cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", initialSlide: maxItems - 1 }),
    $(".slideshow-text").slick({ swipe: !1, vertical: !0, arrows: !1, infinite: !0, speed: 900, cssEase: "cubic-bezier(0.7, 0, 0.3, 1)" });
