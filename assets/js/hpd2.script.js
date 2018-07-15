//GENERAL FUNCTIONS


var $_website_cookie_logic = null;

function website_cookie_logic() {
    var $this = this;
    var cookie = {
        nameTerms: "cookiePrivacy",
        valueAcceptTerms: "1",
        expiry: $env.utils.expiry("1year"),
        
        path: "/"
    };
    var cookieProfiling = {
        nameTerms: "profiling_buddy",
        valueAcceptTerms: "1",
        expiry: $env.utils.expiry("1year"),
        
        path: "/"
    };
    $this.cookieTermsVal = $env.utils.getCookie(cookie.nameTerms);
    $this.isCookieSetted = $this.cookieTermsVal === cookie.valueAcceptTerms;

    $this.cookieWrap = $('.cookie_bar');
    $this.cookieButton = $this.cookieWrap.find('button');

    $this.cookieButton.click(function() {
        $env.utils.setCookie(cookie.nameTerms, cookie.valueAcceptTerms, cookie.expiry, cookie.path, cookie.domain);
        $env.utils.setCookie(cookieProfiling.nameTerms, cookieProfiling.valueAcceptTerms, cookieProfiling.expiry, cookieProfiling.path, cookieProfiling.domain);
        $this.cookieWrap.removeClass('show');
        $this.isCookieSetted = true;
        setTimeout(function() {
            $this.cookieWrap.remove();
        }, 500);
    });

    $this.showCookie = function() {
        $this.cookieWrap.addClass('show');
    };

    setTimeout(function() {
        if (!$this.isCookieSetted) {
            $this.showCookie();
            //console.log("cooookieeeee");
            return null;
        } else {
            $this.cookieWrap.remove();
            //console.log("cookiewrap remove");
        }
    }, 500);



}

var hp_chat_static_logic = null;

function $_hp_chat_static_logic() {
    var $this = this;
    $this.chatContainer = $(".b_hp_chat_container");
    //$this.chatContainer.height($(".hp_iphone_inner_container").height());
    $this.chatContainer.mCustomScrollbar({
        theme: "minimal",
        callbacks: {
            onUpdate: function() {
                jQuery(this).mCustomScrollbar("scrollTo", "bottom");
            }
        }
    });
    $this.chatStaticContainer = $this.chatContainer.find(".b_hp_static_chat_container");
    $this.chatDynamicContainer = $this.chatContainer.find(".b_hp_dynamic_chat_container");
    $this.chatInputContainer = $(".chat_footer_input_dynamic_container");
    $this.allMessagesContainer = $this.chatContainer.find(".b_hp_container_chat_messages");
    $this.allMessagesContainer.height($this.chatStaticContainer.height());
    $this.currentMex = null;
    $this.firstDynamicMessage = true;
    $this.currentDynamicMex = null;
    $this.numberNextMex = 1;
    $this.currentNumberMex = 1;

    $this.videoChatObjects = null;

    $this.footerResponsesContainer = $(".chat_footer_user_response_container");
    $this.footerResponsesList = $this.footerResponsesContainer.find(".b_hp_single_response_chat");

    $this.footerVideoContainer = $(".chat_footer_video_full_container");


    var cookieChatSetting = {
        nameTerms: "CookieChatSetting",
       
       
        path: "/"
    };
    $this.cookieChatVal = $env.utils.getCookie(cookieChatSetting.nameTerms);
    $this.cookieChatVal = ($this.cookieChatVal == "") ? [] : $this.cookieChatVal.split(",");

    $this.footerResponsesList.click(function(ev) {
        if (!$(this).is("a")) {
            ev.preventDefault();
        }
        var thisObj = $(this);
        $this.numberNextMex = thisObj.attr("data-next-chat");
        var objToHide = thisObj.parents(".chat_footer_user_response");
        $this.footerResponsesContainer.slideUp();
        setTimeout(function() {
            objToHide.hide();
        }, 300);
        if (thisObj.attr("data-start-chat") == "true") {
            initLiveChat();
            return;
        }
        if ($this.chatContainer.find("[data-current-chat=" + $this.numberNextMex + "]").length > 0) {
            setTimeout(function() {
                $this.print_mex_logic();
            }, 300);
        }

    });
    $this.init = function() {

        if ($this.cookieChatVal.length > 0) {
            //checkCookie
            //print all message

            $this.cookieChatVal.forEach(function(i, n) {
                $this.chatContainer.find("[data-current-chat=" + n + "]").addClass("show_mex");
                $this.numberNextMex = $this.chatContainer.find("[data-current-chat=" + n + "]").attr("data-next-chat");
                $this.allMessagesContainer.height($this.chatStaticContainer.height());
            });

            setTimeout(function() {
                $this.heightMexContainer = $this.allMessagesContainer.height();
                $(".b_hp_big_push_B_container").hide();
                $("body").removeClass("hp_page_loading bigb_active");
                setTimeout(function() {
                    $this.print_mex_logic();
                }, 300);
            }, 500);



        } else {
            $("body").removeClass("hp_page_loading");
            $(".b_hp_big_push_B").click(function() {
                $(".b_hp_big_message_B").slideUp(400);
                $(".b_hp_big_push_B").fadeOut(400);

                setTimeout(function() {
                    $(".first_chat_message_overlay").addClass("zoom_in_message");
                }, 450);


                setTimeout(function() {
                    $this.heightMexContainer = $this.allMessagesContainer.height();
                    $(".b_hp_big_push_B_container").addClass("b_hp_big_push_B_smaller");
                }, 2000);

                setTimeout(function() {
                    $("body").removeClass("bigb_active");
                }, 2100);

                setTimeout(function() {
                    $(".b_hp_big_push_B_container").fadeOut();
                    $this.print_mex_logic();
                }, 2400);
            });
        }

    };


    $this.active_header_ring = function() {
        $("#header").addClass("chat_active_rings");
        setTimeout(function() {
            $("#header").removeClass("chat_active_rings");
        }, 10000);
    }

    $this.print_mex_logic = function() {
        var nMex = $this.numberNextMex;
        $this.currentNumberMex = nMex;


        $this.currentMex = $this.chatContainer.find("[data-current-chat=" + nMex + "]");
        var delay = $this.currentMex.attr("data-wait") ? parseInt($this.currentMex.attr("data-wait")) : 2000;
        $this.allMessagesContainer.addClass("chat_writing");
        setTimeout(function() {
            var cookieText;
            var thisObj = $this.currentMex;

            if ($this.currentNumberMex > 1 && typeof thisObj.attr("data-last-mex") == "undefined" && $_website_cookie_logic.isCookieSetted) {
                $this.cookieChatVal.push($this.currentNumberMex);
                cookieText = $this.cookieChatVal.toString();
                $env.utils.setCookie(cookieChatSetting.nameTerms, cookieText, cookieChatSetting.expiry, cookieChatSetting.path, cookieChatSetting.domain);
            }

            thisObj.addClass("show_mex");
            setTimeout(function() {
                $this.heightMexContainer += thisObj.height();
                $this.allMessagesContainer.height($this.heightMexContainer);

                $this.allMessagesContainer.removeClass("chat_writing");
            }, 200);
            $this.numberNextMex = thisObj.attr("data-next-chat");
            if (thisObj.attr("data-is-ring")) {
                $this.active_header_ring();
            }
            if (thisObj.attr("data-is-video") || thisObj.attr("data-response")) {
                if (thisObj.attr("data-is-video")) {
                    var thisVideoObj = thisObj.find(".b_hp_video_chat");
                    thisVideoObj.find(".b_hp_video_chat_play_cta").click(function(ev) {
                        ev.preventDefault();
                        $this.footerVideoContainer.show();
                        $this.videoChatObjects = new vsBgVideoPlayerHTML5({
                            jObj: $(".chat_footer_video"),
                            respondTo: $(".chat_footer_video_full_container"),
                            autoplay: true,
                            bntmuted: "chat_footer_video_mute_cta",
                            bntclose: "chat_footer_video_close_cta",
                            loop: "",
                            controls: false,
                            mute: "",
                            preload: "none",
                            fallbackImage: "",
                            levels: {
                                videourl_mp4: thisVideoObj.attr("data-video-mp4"),
                                videourl_ogg: thisVideoObj.attr("data-video-ogg"),
                                videourl_webm: thisVideoObj.attr("data-video-webm")
                            },
                            isVideoChat: true,
                            videoStep: thisVideoObj.attr("data-video-step"),
                            responseClick: thisVideoObj.parents(".b_hp_single_chat_container").attr("data-current-chat"),
                            fullscreen: true
                        });

                        setTimeout(function() {
                            $this.footerVideoContainer.addClass("show_chat_footer");
                        }, 200);

                    });
                }
                if (thisObj.attr("data-response")) {
                    setTimeout(function() {
                        $this.footerResponsesContainer.find("[data-current-chat=" + $this.currentNumberMex + "]").show();
                        $this.footerResponsesContainer.slideDown();
                    }, 300);
                }
            } else {
                //print all message until i show video block
                if ($this.chatContainer.find("[data-current-chat=" + $this.numberNextMex + "]").length > 0) {
                    setTimeout(function() {
                        $this.print_mex_logic();
                    }, 700);
                }

            }
        }, delay);

    };

    $this.print_chat_dynamic_mex = function(newMex) {
        if (newMex == "") return;
        if ($this.firstDynamicMessage) {
            $this.chatContainer.addClass("dynamic_chat_started");
            $this.firstDynamicMessage = false;
        }

        $this.chatStaticContainer.append(newMex);
        var thisObj = $this.chatStaticContainer.find(".b_hp_single_chat_container:last-child");

        if (thisObj.hasClass("right_chat")) {
            $("#textline").height(25);
        }

        setTimeout(function() {
            thisObj.addClass("show_mex");
            $this.heightMexContainer += thisObj.height();
            $this.allMessagesContainer.height($this.heightMexContainer);
            $this.allMessagesContainer.removeClass("chat_writing");
        }, 200);

    };


    $this.init();
};



$(document).ready(function() {


    //GENERAL VAR

    $(".b_header .b_header_hamburger").remove();

    //general

    $(".b_content", ".b_wrapper").addClass("loaded");

    $_website_cookie_logic = new website_cookie_logic();
    hp_chat_static_logic = new $_hp_chat_static_logic();

});
/*
function textAreaAdjust(o) {
  o.style.height = "1px";
  o.style.height = (o.scrollHeight)+"px";


}*/

function textAreaAdjust(e) {
    var o = e;
    e = e || window.event;
    var key = e.keyCode || e.which;
    if (key == 13) {
        if (e.type == "keyup") {
            sendLine();
            setVisitorTyping(false);
        }
        return false;
    } else {
        setVisitorTyping(true);
        o.style.height = "1px";
        o.style.height = (o.scrollHeight) + "px";
    }
}