(function(){
    // Slide In Panel - by CodyHouse.co
	var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
	if( panelTriggers.length > 0 ) {
		for(var i = 0; i < panelTriggers.length; i++) {
			(function(i){
				var panelClass = 'js-cd-panel-'+panelTriggers[i].getAttribute('data-panel'),
					panel = document.getElementsByClassName(panelClass)[0];
				// open panel when clicking on trigger btn
				panelTriggers[i].addEventListener('click', function(event){
					event.preventDefault();
					addClass(panel, 'cd-panel--is-visible');
				});
				//close panel when clicking on 'x' or outside the panel
				panel.addEventListener('click', function(event){
					if( hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
						event.preventDefault();
						removeClass(panel, 'cd-panel--is-visible');
					}
				});
			})(i);
		}
	}
	
	//class manipulations - needed if classList is not supported
	//https://jaketrent.com/post/addremove-classes-raw-javascript/
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
	 	if (el.classList) el.classList.add(className);
	 	else if (!hasClass(el, className)) el.className += " " + className;
	}
	function removeClass(el, className) {
	  	if (el.classList) el.classList.remove(className);
	  	else if (hasClass(el, className)) {
	    	var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	    	el.className=el.className.replace(reg, ' ');
	  	}
	}
})();



$(document).ready(function () {
            $(".show-menu").click(function () {

                $("#mobile-menu").animate({
                    width: "toggle"
                });
            });

            $(".close-menu").click(function () {
                $("#mobile-menu").hide();
            });
        });



 

    $("#android-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-android-development").fadeIn();
    });







    $("#uxui-design").mouseenter(function () {
      $(".menu-img img").hide();

      $("#menu-img-ui-ux-design").fadeIn();
    });

    $("#product-design").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-product-design").fadeIn();
    });

    $("#website-design").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-web-design").fadeIn();
    });

    $("#wireframe-design").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-wireframe-design").fadeIn();
    });

    $("#mobile-ui-design").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-mobile-ui-design").fadeIn();
    });



    $("#web-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-web-development").fadeIn();
    });
    $("#artificial-intelligence").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-artificial-intelligence").fadeIn();
    });
    $("#augmented-reality").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-augmented-reality").fadeIn();
    });
    $("#bot-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-bot-development").fadeIn();
    });
    $("#cloud-computing").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-cloud-computing").fadeIn();
    });

    $("#software-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-software-development").fadeIn();
    });
    $("#dapp-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-dapp-development").fadeIn();
    });
    $("#iot-app-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-iot-app-development").fadeIn();
    });

    $("#mlm-app-developement").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-mlm-app-developement").fadeIn();
    });

    $("#ios-app-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-ios-app-development").fadeIn();
    });
    $("#wearable-app-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-wearable-app-development").fadeIn();
    });
    $("#machine-learning").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-machine-learning").fadeIn();
    });
    $("#blockchain-solutions").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-dapp-development").fadeIn();
    });
    $("#blockchain-app-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-blockchain-app-development").fadeIn();
    });
    $("#eos-blockchain-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-eos-blockchain-development").fadeIn();
    });
    $("#ethereum-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-ethereum-development").fadeIn();
    });
    $("#hedera-hashgraph-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-hedera-hashgraph-development").fadeIn();
    });
    $("#ipfs-blockchain-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-ipfs-blockchain-development").fadeIn();
    });
    $("#private-blockchain-solution").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-private-blockchain-solution").fadeIn();
    });
    $("#r3-corda-blockchain-development").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-r3-corda-blockchain-development").fadeIn();
    });
    $("#strato-blockchain").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-strato-blockchain").fadeIn();
    });
    $("#enterprise-mobility-solutions").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-enterprise-mobility-solutions").fadeIn();
    });
    $("#voice-technology").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-voice-technology").fadeIn();
    });
    $("#strategic-consulting").mouseenter(function () {
      $(".menu-img img").hide();
      $("#menu-img-strategic-consulting").fadeIn();
    });



	// $(".show-services").click(function () {
  //     $(".toggle-services").slideToggle("slow");
  //   });

  //   $(".close-toggle-services").click(function () {
  //     $(".toggle-services").slideUp("slow");
  //   });
 

   
 
		
