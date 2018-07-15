/*detect.js*/
var MobileEsp={initCompleted:false,isWebkit:false,isMobilePhone:false,isIphone:false,isAndroid:false,isAndroidPhone:false,isTierTablet:false,isTierIphone:false,isTierRichCss:false,isTierGenericMobile:false,engineWebKit:"webkit",deviceIphone:"iphone",deviceIpod:"ipod",deviceIpad:"ipad",deviceMacPpc:"macintosh",deviceAndroid:"android",deviceGoogleTV:"googletv",deviceHtcFlyer:"htc_flyer",deviceWinPhone7:"windows phone os 7",deviceWinPhone8:"windows phone 8",deviceWinMob:"windows ce",deviceWindows:"windows",deviceIeMob:"iemobile",devicePpc:"ppc",enginePie:"wm5 pie",deviceBB:"blackberry",deviceBB10:"bb10",vndRIM:"vnd.rim",deviceBBStorm:"blackberry95",deviceBBBold:"blackberry97",deviceBBBoldTouch:"blackberry 99",deviceBBTour:"blackberry96",deviceBBCurve:"blackberry89",deviceBBCurveTouch:"blackberry 938",deviceBBTorch:"blackberry 98",deviceBBPlaybook:"playbook",deviceSymbian:"symbian",deviceSymbos:"symbos",deviceS60:"series60",deviceS70:"series70",deviceS80:"series80",deviceS90:"series90",devicePalm:"palm",deviceWebOS:"webos",deviceWebOShp:"hpwos",engineBlazer:"blazer",engineXiino:"xiino",deviceNuvifone:"nuvifone",deviceBada:"bada",deviceTizen:"tizen",deviceMeego:"meego",deviceKindle:"kindle",engineSilk:"silk-accelerated",vndwap:"vnd.wap",wml:"wml",deviceTablet:"tablet",deviceBrew:"brew",deviceDanger:"danger",deviceHiptop:"hiptop",devicePlaystation:"playstation",devicePlaystationVita:"vita",deviceNintendoDs:"nitro",deviceNintendo:"nintendo",deviceWii:"wii",deviceXbox:"xbox",deviceArchos:"archos",engineOpera:"opera",engineNetfront:"netfront",engineUpBrowser:"up.browser",engineOpenWeb:"openweb",deviceMidp:"midp",uplink:"up.link",engineTelecaQ:"teleca q",engineObigo:"obigo",devicePda:"pda",mini:"mini",mobile:"mobile",mobi:"mobi",maemo:"maemo",linux:"linux",mylocom2:"sony/com",manuSonyEricsson:"sonyericsson",manuericsson:"ericsson",manuSamsung1:"sec-sgh",manuSony:"sony",manuHtc:"htc",svcDocomo:"docomo",svcKddi:"kddi",svcVodafone:"vodafone",disUpdate:"update",uagent:"",InitDeviceScan:function(){this.initCompleted=false;if(navigator&&navigator.userAgent)this.uagent=navigator.userAgent.toLowerCase();this.isWebkit=this.DetectWebkit();this.isIphone=this.DetectIphone();this.isAndroid=this.DetectAndroid();this.isAndroidPhone=this.DetectAndroidPhone();this.isMobilePhone=this.DetectMobileQuick();this.isTierIphone=this.DetectTierIphone();this.isTierTablet=this.DetectTierTablet();this.isTierRichCss=this.DetectTierRichCss();this.isTierGenericMobile=this.DetectTierOtherPhones();this.initCompleted=true},DetectIphone:function(){if(this.initCompleted||this.isIphone)return this.isIphone;if(this.uagent.search(this.deviceIphone)>-1){if(this.DetectIpad()||this.DetectIpod())return false;else return true}else return false},DetectIpod:function(){if(this.uagent.search(this.deviceIpod)>-1)return true;else return false},DetectIphoneOrIpod:function(){if(this.DetectIphone()||this.DetectIpod())return true;else return false},DetectIpad:function(){if(this.uagent.search(this.deviceIpad)>-1&&this.DetectWebkit())return true;else return false},DetectIos:function(){if(this.DetectIphoneOrIpod()||this.DetectIpad())return true;else return false},DetectAndroid:function(){if(this.initCompleted||this.isAndroid)return this.isAndroid;if(this.uagent.search(this.deviceAndroid)>-1||this.DetectGoogleTV())return true;if(this.uagent.search(this.deviceHtcFlyer)>-1)return true;else return false},DetectAndroidPhone:function(){if(this.initCompleted||this.isAndroidPhone)return this.isAndroidPhone;if(this.DetectAndroid()&&this.uagent.search(this.mobile)>-1)return true;if(this.DetectOperaAndroidPhone())return true;if(this.uagent.search(this.deviceHtcFlyer)>-1)return true;else return false},DetectAndroidTablet:function(){if(!this.DetectAndroid())return false;if(this.DetectOperaMobile())return false;if(this.uagent.search(this.deviceHtcFlyer)>-1)return false;if(this.uagent.search(this.mobile)>-1)return false;else return true},DetectAndroidWebKit:function(){if(this.DetectAndroid()&&this.DetectWebkit())return true;else return false},DetectGoogleTV:function(){if(this.uagent.search(this.deviceGoogleTV)>-1)return true;else return false},DetectWebkit:function(){if(this.initCompleted||this.isWebkit)return this.isWebkit;if(this.uagent.search(this.engineWebKit)>-1)return true;else return false},DetectWindowsPhone:function(){if(this.DetectWindowsPhone7()||this.DetectWindowsPhone8())return true;else return false},DetectWindowsPhone7:function(){if(this.uagent.search(this.deviceWinPhone7)>-1)return true;else return false},DetectWindowsPhone8:function(){if(this.uagent.search(this.deviceWinPhone8)>-1)return true;else return false},DetectWindowsMobile:function(){if(this.DetectWindowsPhone())return false;if(this.uagent.search(this.deviceWinMob)>-1||this.uagent.search(this.deviceIeMob)>-1||this.uagent.search(this.enginePie)>-1)return true;if(this.uagent.search(this.devicePpc)>-1&&!(this.uagent.search(this.deviceMacPpc)>-1))return true;if(this.uagent.search(this.manuHtc)>-1&&this.uagent.search(this.deviceWindows)>-1)return true;else return false},DetectBlackBerry:function(){if(this.uagent.search(this.deviceBB)>-1||this.uagent.search(this.vndRIM)>-1)return true;if(this.DetectBlackBerry10Phone())return true;else return false},DetectBlackBerry10Phone:function(){if(this.uagent.search(this.deviceBB10)>-1&&this.uagent.search(this.mobile)>-1)return true;else return false},DetectBlackBerryTablet:function(){if(this.uagent.search(this.deviceBBPlaybook)>-1)return true;else return false},DetectBlackBerryWebKit:function(){if(this.DetectBlackBerry()&&this.uagent.search(this.engineWebKit)>-1)return true;else return false},DetectBlackBerryTouch:function(){if(this.DetectBlackBerry()&&(this.uagent.search(this.deviceBBStorm)>-1||this.uagent.search(this.deviceBBTorch)>-1||this.uagent.search(this.deviceBBBoldTouch)>-1||this.uagent.search(this.deviceBBCurveTouch)>-1))return true;else return false},DetectBlackBerryHigh:function(){if(this.DetectBlackBerryWebKit())return false;if(this.DetectBlackBerry()&&(this.DetectBlackBerryTouch()||this.uagent.search(this.deviceBBBold)>-1||this.uagent.search(this.deviceBBTour)>-1||this.uagent.search(this.deviceBBCurve)>-1))return true;else return false},DetectBlackBerryLow:function(){if(this.DetectBlackBerry()){if(this.DetectBlackBerryHigh()||this.DetectBlackBerryWebKit())return false;else return true}else return false},DetectS60OssBrowser:function(){if(this.DetectWebkit()){if(this.uagent.search(this.deviceS60)>-1||this.uagent.search(this.deviceSymbian)>-1)return true;else return false}else return false},DetectSymbianOS:function(){if(this.uagent.search(this.deviceSymbian)>-1||this.uagent.search(this.deviceS60)>-1||this.uagent.search(this.deviceSymbos)>-1&&this.DetectOperaMobile||this.uagent.search(this.deviceS70)>-1||this.uagent.search(this.deviceS80)>-1||this.uagent.search(this.deviceS90)>-1)return true;else return false},DetectPalmOS:function(){if(this.DetectPalmWebOS())return false;if(this.uagent.search(this.devicePalm)>-1||this.uagent.search(this.engineBlazer)>-1||this.uagent.search(this.engineXiino)>-1)return true;else return false},DetectPalmWebOS:function(){if(this.uagent.search(this.deviceWebOS)>-1)return true;else return false},DetectWebOSTablet:function(){if(this.uagent.search(this.deviceWebOShp)>-1&&this.uagent.search(this.deviceTablet)>-1)return true;else return false},DetectOperaMobile:function(){if(this.uagent.search(this.engineOpera)>-1&&(this.uagent.search(this.mini)>-1||this.uagent.search(this.mobi)>-1))return true;else return false},DetectOperaAndroidPhone:function(){if(this.uagent.search(this.engineOpera)>-1&&this.uagent.search(this.deviceAndroid)>-1&&this.uagent.search(this.mobi)>-1)return true;else return false},DetectOperaAndroidTablet:function(){if(this.uagent.search(this.engineOpera)>-1&&this.uagent.search(this.deviceAndroid)>-1&&this.uagent.search(this.deviceTablet)>-1)return true;else return false},DetectKindle:function(){if(this.uagent.search(this.deviceKindle)>-1&&!this.DetectAndroid())return true;else return false},DetectAmazonSilk:function(){if(this.uagent.search(this.engineSilk)>-1)return true;else return false},DetectGarminNuvifone:function(){if(this.uagent.search(this.deviceNuvifone)>-1)return true;else return false},DetectBada:function(){if(this.uagent.search(this.deviceBada)>-1)return true;else return false},DetectTizen:function(){if(this.uagent.search(this.deviceTizen)>-1)return true;else return false},DetectMeego:function(){if(this.uagent.search(this.deviceMeego)>-1)return true;else return false},DetectDangerHiptop:function(){if(this.uagent.search(this.deviceDanger)>-1||this.uagent.search(this.deviceHiptop)>-1)return true;else return false},DetectSonyMylo:function(){if(this.uagent.search(this.manuSony)>-1&&(this.uagent.search(this.qtembedded)>-1||this.uagent.search(this.mylocom2)>-1))return true;else return false},DetectMaemoTablet:function(){if(this.uagent.search(this.maemo)>-1)return true;if(this.uagent.search(this.linux)>-1&&this.uagent.search(this.deviceTablet)>-1&&!this.DetectWebOSTablet()&&!this.DetectAndroid())return true;else return false},DetectArchos:function(){if(this.uagent.search(this.deviceArchos)>-1)return true;else return false},DetectGameConsole:function(){if(this.DetectSonyPlaystation()||this.DetectNintendo()||this.DetectXbox())return true;else return false},DetectSonyPlaystation:function(){if(this.uagent.search(this.devicePlaystation)>-1)return true;else return false},DetectGamingHandheld:function(){if(this.uagent.search(this.devicePlaystation)>-1&&this.uagent.search(this.devicePlaystationVita)>-1)return true;else return false},DetectNintendo:function(){if(this.uagent.search(this.deviceNintendo)>-1||this.uagent.search(this.deviceWii)>-1||this.uagent.search(this.deviceNintendoDs)>-1)return true;else return false},DetectXbox:function(){if(this.uagent.search(this.deviceXbox)>-1)return true;else return false},DetectBrewDevice:function(){if(this.uagent.search(this.deviceBrew)>-1)return true;else return false},DetectSmartphone:function(){if(this.DetectTierIphone()||this.DetectS60OssBrowser()||this.DetectSymbianOS()||this.DetectWindowsMobile()||this.DetectBlackBerry()||this.DetectPalmOS())return true;return false},DetectMobileQuick:function(){if(this.DetectTierTablet())return false;if(this.initCompleted||this.isMobilePhone)return this.isMobilePhone;if(this.DetectSmartphone())return true;if(this.uagent.search(this.mobile)>-1)return true;if(this.DetectKindle()||this.DetectAmazonSilk())return true;if(this.uagent.search(this.deviceMidp)>-1||this.DetectBrewDevice())return true;if(this.DetectOperaMobile()||this.DetectArchos())return true;if(this.uagent.search(this.engineObigo)>-1||this.uagent.search(this.engineNetfront)>-1||this.uagent.search(this.engineUpBrowser)>-1||this.uagent.search(this.engineOpenWeb)>-1)return true;return false},DetectMobileLong:function(){if(this.DetectMobileQuick())return true;if(this.DetectGameConsole())return true;if(this.DetectDangerHiptop()||this.DetectMaemoTablet()||this.DetectSonyMylo()||this.DetectGarminNuvifone())return true;if(this.uagent.search(this.devicePda)>-1&&!(this.uagent.search(this.disUpdate)>-1))return true;if(this.uagent.search(this.manuSamsung1)>-1||this.uagent.search(this.manuSonyEricsson)>-1||this.uagent.search(this.manuericsson)>-1)return true;if(this.uagent.search(this.svcDocomo)>-1||this.uagent.search(this.svcKddi)>-1||this.uagent.search(this.svcVodafone)>-1)return true;return false},DetectTierTablet:function(){if(this.initCompleted||this.isTierTablet)return this.isTierTablet;if(this.DetectIpad()||this.DetectAndroidTablet()||this.DetectBlackBerryTablet()||this.DetectWebOSTablet())return true;else return false},DetectTierIphone:function(){if(this.initCompleted||this.isTierIphone)return this.isTierIphone;if(this.DetectIphoneOrIpod()||this.DetectAndroidPhone()||this.DetectWindowsPhone()||this.DetectBlackBerry10Phone()||this.DetectPalmWebOS()||this.DetectBada()||this.DetectTizen()||this.DetectGamingHandheld())return true;if(this.DetectBlackBerryWebKit()&&this.DetectBlackBerryTouch())return true;else return false},DetectTierRichCss:function(){if(this.initCompleted||this.isTierRichCss)return this.isTierRichCss;if(this.DetectTierIphone()||this.DetectKindle()||this.DetectTierTablet())return false;if(!this.DetectMobileQuick())return false;if(this.DetectWebkit())return true;if(this.DetectS60OssBrowser()||this.DetectBlackBerryHigh()||this.DetectWindowsMobile()||this.uagent.search(this.engineTelecaQ)>-1)return true;else return false},DetectTierOtherPhones:function(){if(this.initCompleted||this.isTierGenericMobile)return this.isTierGenericMobile;if(this.DetectTierIphone()||this.DetectTierRichCss()||this.DetectTierTablet())return false;if(this.DetectMobileLong())return true;else return false},DetectAndroidOldVersion:function(){var e=navigator.userAgent;if(e.indexOf("Android")>=0){var t=parseFloat(e.slice(e.indexOf("Android")+8));return t<4}}};MobileEsp.InitDeviceScan();
var curLocation = window.location.href;
var basePath = window.location.hostname;
var apiUrl;
var responseCheck=false;
var errorString="";


function loadConfiguration(cb) {
    var request = new XMLHttpRequest();
    request.open("GET", "/config.json", true);
    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE) {
            cb(JSON.parse(request.responseText))
        }
    };
    request.send(null);
}

function mobileDetection() {
	var isMobile = MobileEsp.isTierTablet || MobileEsp.isMobilePhone;
	if (isMobile) {
		if (($(window).width() >= 1024 && $(window).height() >= 768)
				|| ($(window).width() >= 768 && $(window).height() >= 1024)) {// ipad
			// ha
			// desktop
			return true;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function redirectToDesk(isItMobile) {
	if (!isItMobile) {
		var newLocation = curLocation.substring(basePath.length,
				curLocation.length);
		newLocation = curLocation.replace("it/m/", "it/");
		window.location.href = newLocation;
	}
}

function redirectToMob(isItMobile) {
	if (isItMobile) {
		var newLocation = curLocation.substring(basePath.length,
				curLocation.length);
		newLocation = curLocation.replace("it/", "it/m/");
		window.location.href = newLocation;
	}
}

// CONCIERGE FORM FUNCTION

function formDeviceDetection() {
	var uagent = navigator.userAgent.toLowerCase()
	if (mobileDetection()) {
		if (uagent.search("iphone") > -1) {
			return 1;
		} else if (uagent.search("android") > -1) {
			return 0;
		}
	}
	return 0;
}

function validateEmail(inputToValidate) {
    var re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    console.log(re.test(inputToValidate.val()));
    return re.test(inputToValidate.val());
}

function validateTaxcode(inputToValidate) {
    if(inputToValidate.val().length==16){
        return true;
    }else{
        return false;
    }
}

function validateFormTexts(inputToValidate) {
    inputToValidate.text(inputToValidate.val());
}

function fillFieldsToAdvance(triggerButton) {
    //number of inputs per section
    var sectionInputs = $("input, select", triggerButton.parent());//<-- set section container as context
    //console.log(sectionInputs);
    var numberOfInputs = sectionInputs.length;
    var checkFilledInputs = 0;
    console.log(sectionInputs);
    console.log("Inputs in this section: " + numberOfInputs);
    //check whether or not inputs have been filled
    sectionInputs.each(function () {
        if ($(this).is(':checkbox')) {
            if ($(this).is(':required') && $(this).is(":checked")) {
                console.log($(this),"is required and checked");
                checkFilledInputs++;
                $(this).siblings(".labelforCheck").css({ "border-color": "#fff" });
            } else if (!$(this).is(':required')) {
                console.log($(this), "is unrequired");
                checkFilledInputs++;
            } else {
                console.log($(this), "is required but unchecked");
                //required checkbox is unchecked style here
                $(this).siblings(".labelforCheck").css({ "border-color": "#f14569" });
            }
        } else if ($(this).val() && $(this).val() != null) {
            if ($(this).hasClass("email")) {
				//check on email
				console.log($(this));
                var emCheckResult = validateEmail($(this))
                console.log(emCheckResult);
                if (emCheckResult) {
                    checkFilledInputs++;
                    $(this).css({ "border-color": "#fff" });
                } else {
                    errorString+="email;";
                    $(this).css({ "border-color": "#f14569" });
                }
            } else if ($(this).hasClass("taxcode")) {
                //check on taxcode
                taxCheckResult = validateTaxcode($(this))
                console.log(taxCheckResult);
                if (taxCheckResult) {
					checkFilledInputs++;
                    $(this).css({ "border-color": "#fff" });
                } else {
                    errorString+="taxcode;";
                    $(this).css({ "border-color": "#f14569" });
                }
            } else {
                checkFilledInputs++;
                $(this).css({ "border-color": "#fff" });
            }
        } else {
            errorString+=$(this).attr("class")+";";
            $(this).css({ "border-color": "#f14569" });
        }
    });
    if (checkFilledInputs == numberOfInputs) {
        console.log("Successfully filled " + checkFilledInputs + " inputs");
        return true;
    } else {
        missingInputs = numberOfInputs - checkFilledInputs;
        console.log("Missing " + missingInputs + " required fields");
        console.log(errorString);
        dataLayer.push({
            'event': 'standardEvent',
            'eventCategory': 'Waiting List Mobile',
            'eventAction': 'Signup Error',
            'eventLabel': errorString
        });
        return false;
    }
}

function sendData() {
    var request = new XMLHttpRequest

    request.onreadystatechange = function () {
        setTimeout(function () {
            if (request.readyState == XMLHttpRequest.DONE && !responseCheck) {
                responseData = JSON.parse(request.responseText);
                console.log(responseData);
                responseCheck = true;
                finalStepLoader(responseData.message);
            }
        }, 500);
    };

    request.open("POST", apiUrl + "register");
    request.setRequestHeader("Content-Type", "application/json");
    console.log({
		"email": $("#email").val(),
		"name": $('#codicefiscale').val(),
		"age": $("#telefono").val(),
		"cap": "undefined",
		"has_iphone": formDeviceDetection(),
		"accept_privacy": 1,
        "accept_profiling": $("#clienteuni").is(":checked")? 1 : 0,
        "accept_marketing": 0,
        "language": "it",
        "g-recaptcha-response": reCaptchaResponse,
    });
    request.send(JSON.stringify({
        "email": $("#email").val(),
		"name": $('#codicefiscale').val(),
		"age": $("#telefono").val(),
		"cap": "undefined",
		"has_iphone": formDeviceDetection(),
		"accept_privacy": 1,
        "accept_profiling": $("#clienteuni").is(":checked")? 1 : 0,
        "accept_marketing": 0,
        "language": "it",
        "g-recaptcha-response": reCaptchaResponse,
    }));
}

function finalStepLoader(response){
    switch(response){
        case 'REGISTERED':
            $(".mail-name",".registered").text($("#email").val());
            $(".registered",".final-step").fadeIn(300);
            dataLayer.push({
                'event': 'standardEvent',
                'eventCategory': 'Waiting List Mobile',
                'eventAction': 'Email Check ok',
                'eventLabel': null
            });
            break;
        case 'ALREADY_REGISTERED':
            $(".already_registered",".final-step").fadeIn(300);
            break;
        case 'INVALID_REQUEST':
        case 'FATAL_ERROR':
        default:
            $(".error",".final-step").fadeIn(300);
            break;
    }
}

// MANUAL DELETE

function sendDataManDel() {
    var request = new XMLHttpRequest

    request.onreadystatechange = function () {
        setTimeout(function () {
            if (request.readyState == XMLHttpRequest.DONE && !responseCheck) {
                responseData = JSON.parse(request.responseText);
                console.log(responseData);
                responseCheck = true;
                finalStepLoaderManDel(responseData.message);
            }
        }, 500);
    };

    request.open("POST", apiUrl + "confirmDelete");
    request.setRequestHeader("Content-Type", "application/json");
    console.log({
		"email": $("#email").val(),
        "g-recaptcha-response": reCaptchaResponse,
    });
    request.send(JSON.stringify({
        "email": $("#email").val(),
        "g-recaptcha-response": reCaptchaResponse,
    }));
}

function finalStepLoaderManDel(response){
    switch(response){
        case 'EMAIL_SENT':
            $(".registered",".final-step").fadeIn(300);
            break;
        default:
            $(".error",".final-step").fadeIn(300);
            break;
    }
}

function trackFunction(){
    function loadScriptByUrl (url, sleeptime){
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        // Fire the loading
        setTimeout( function(){head.appendChild(script)} , sleeptime);
    }
    $(".trac_cta_tags").click(function(){
        var trackCode=$(this).attr("data-tagcode");
        var ebRand = Math.random()+'';
        ebRand = ebRand * 1000000;
        loadScriptByUrl('HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&amp;ActivityID='+trackCode+'&amp;rnd=' + ebRand,5);
    });
}

$(document).ready(function() {

	if (curLocation.search("/m/") != -1) {
		redirectToDesk(mobileDetection());
	} else {
		redirectToMob(mobileDetection());
	}

	// if concierge form
	if($("#fullpage",".b_wrapper").length>0){
        console.log(menuHeight);
		$("#fullpage",".b_wrapper").fullpage({
			controlArrows: false,
			keyboardScrolling: true,
            verticalCentered: true,
            paddingTop: mobileDetection()? "46px" : "75px",
		});

		$.fn.fullpage.setAllowScrolling(false);
		$(".section-back").click(function(){$.fn.fullpage.moveSectionUp();});
		$(".section-button").click(function(){
            if($(this).hasClass("submit")){
                if(fillFieldsToAdvance($(this))  && reCaptchaResponse && reCaptchaResponse != null){
                    sendData();
                    var checkingForResponse=setInterval(function(){
                        console.log("waiting for response");
                        $(".submit-loading",".section").fadeTo(200, 1)
                        if(responseCheck){
                            $.fn.fullpage.moveSectionDown();
                            clearInterval(checkingForResponse);
                        }
                    }, 300);
                }else if(fillFieldsToAdvance($(this))){
                    errorString+="recaptcha;";
                    dataLayer.push({
                        'event': 'standardEvent',
                        'eventCategory': 'Waiting List Mobile',
                        'eventAction': 'Signup Error',
                        'eventLabel': errorString
                    });
                }
            }else if($(this).hasClass("submit-delete")){
                if(fillFieldsToAdvance($(this))  && reCaptchaResponse && reCaptchaResponse != null){
                    sendDataManDel();
                    var checkingForResponse=setInterval(function(){
                        console.log("waiting for response");
                        $(".submit-loading",".section").fadeTo(200, 1)
                        if(responseCheck){
                            $.fn.fullpage.moveSectionDown();
                            clearInterval(checkingForResponse);
                        }
                    }, 300);
                }
            }else if($(this).hasClass("privacy")){
                $.fn.fullpage.moveSectionDown();
                dataLayer.push({
                    'event': 'standardEvent',
                    'eventCategory': 'Waiting List Mobile',
                    'eventAction': 'Privacy Agreement',
                    'eventLabel': null
                });
            }else if(fillFieldsToAdvance($(this))){
                $.fn.fullpage.moveSectionDown();
            }
		});
		loadConfiguration(function (config) {
			apiUrl = config.apiUrl
		});
    }

    trackFunction();

});

var customerPhoneIsIOS = MobileEsp.isIphone;


var $env = {
    utils : {
        getCookie : function(cname,splitWithChar,isJson) {
            var name = cname + "=";
            var ca = document.cookie.split(';');

            if(splitWithChar && splitWithChar !== ""){
                //return array of splitted cookie
                for(var i=0; i<ca.length; i++) {
                    var c=ca[i].trim();
                    if(c.indexOf(name)===0){
                        var cookie_val=decodeURIComponent(c.substring(name.length,c.length));
                            var cookie_array=cookie_val.split(splitWithChar);
                            for(var j=0; j<cookie_array.length; j++){
                            cookie_array[j] = cookie_array[j].split('=');
                        }
                        return cookie_array;
                    }
                }
                return new Array();
            }else{
                //return textual cookie
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i=0; i<ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0)===' ') c = c.substring(1);
                    if (c.indexOf(name) === 0){
                        if(isJson){
                            var tmp = decodeURIComponent(c.substring(name.length, c.length));
                            return $j.parseJSON(tmp);
                        }else{
                            return decodeURIComponent(c.substring(name.length, c.length));
                        }
                    }
                }
                return "";
            }
        },
        setCookie : function(cname, cvalue, expires, path, domain) {
            //var d = new Date();
            //d.setTime(d.getTime() + (exdays*24*60*60*1000));
            document.cookie = cname + "=" + cvalue +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "");
        },
        checkCookie : function(cname) {
            var cookieEnabled=(navigator.cookieEnabled)? true : false
            if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){
                    document.cookie=cname;
                    cookieEnabled=(document.cookie.indexOf(cname)!=-1)? true : false
            }
            if(cookieEnabled){
                if ($env.utils.getCookie(cname) != null && $env.utils.getCookie(cname) != "") return true;
                else return false;
            }
	},
        removeCookie : function(cname) {
            var cvalue = "";
            var path = "/*";
            document.cookie = cname + "=" + cvalue + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"+ path + ";";
        },
        expiry : function(type){
            var today = new Date();
            //ex: Thu Jun 16 2016 10:16:41 GMT+0200 (CEST)
            switch(type){
                case "1minute": return new Date(today.getTime() + 60 * 1000); //ex: Thu Jun 16 2016 10:17:41 GMT+0200 (CEST)
                case "1hour": return new Date(today.getTime() + 60 * 60 * 1000); //ex: Thu Jun 16 2016 11:16:41 GMT+0200 (CEST)
                case "1day": return new Date(today.getTime() + 24 * 60 * 60 * 1000); //ex: Fri Jun 17 2016 10:16:41 GMT+0200 (CEST)
                case "2days": return new Date(today.getTime() + 48 * 60 * 60 * 1000); //ex: Fri Jun 17 2016 10:16:41 GMT+0200 (CEST)
                case "1week": return new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); //ex: Thu Jun 23 2016 10:16:41 GMT+0200 (CEST)
                case "1month": return new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000); //ex: Sat Jul 16 2016 10:16:41 GMT+0200 (CEST)
                case "1year": return new Date(today.getTime() + 365 * 60 * 60 * 24 * 1000); //ex: Fri Jun 16 2017 10:16:41 GMT+0200 (CEST)
            }
        },
        cutString : function(str,limit,endChars){
            if(str.length > limit){
                var trimmed = str.substr(0, limit);
                str = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")));
                str += endChars;
            }
            return str;
        },
        isDate:function(txtDate){
            var currVal=txtDate;if(currVal==='')return false;var rxDatePattern=/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;var dtArray=currVal.match(rxDatePattern);if(dtArray===null)return false;dtDay=dtArray[1];dtMonth=dtArray[3];dtYear=dtArray[5];if(dtMonth<1||dtMonth>12)return false;else if(dtDay<1||dtDay>31)return false;else if((dtMonth===4||dtMonth===6||dtMonth===9||dtMonth===11)&&dtDay===31)return false;else if(dtMonth===2){var isleap=(dtYear%4===0&&(dtYear%100!==0||dtYear%400===0));if(dtDay>29||(dtDay===29&&!isleap))return false;}return true;
        }
        }
}
