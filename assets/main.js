function newsletterResponse(success) {
    var ko = $("#newsletter-ko");
    var ok = $("#newsletter-ok");

    if (success==true) {
        ko.hide();
        ok.fadeIn();
    } else {
        ok.hide();
        ko.fadeIn();
    }
    $("#newsletter-button").hide();
}

function submitNewsletter(token) {
    var subscriptionUrl = "https://api.io.italia.it/api/payportal/v1/newsletters/pagopa/lists/2/recipients";
    var email = $("#email").val().trim();
    var data = { "recaptchaToken" : token, "email" : email };
    $.ajax({url: subscriptionUrl,
            type: "post",
            data: JSON.stringify(data),
            success: function(data, textStatus, xhr) {
                if (xhr.status==200 && xhr.statusText=="OK") {
                    newsletterResponse(true);
                } else {
                    newsletterResponse(false);
                }
            },
            error: function(data, textStatus, xhr) {
                newsletterResponse(false);
            },

           });
}

$(function() {
    // get "the monday" of a Date
    function getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1);
        var monday = new Date(d.setDate(diff));
        var options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        return monday.toLocaleDateString("it", options);
    }
    // Quarter check
    function getYearQuarter() {
        var today = new Date();
        var quarter = Math.floor((today.getMonth() + 3) / 3);
        return today.getFullYear().toString() + quarter.toString();
    }

    // monday for project-page
    $('#getmonday').text(getMonday(new Date()));

    // timeline set
    var $timelineItems = $('[data-timeline]');
    var $timelineItemsContainer = $('.timeline-element');
    var currentQuarter = getYearQuarter();
    var $timelineFilter = $('[data-timeline-filter]');

    $timelineItems.each(function() {
        var quarter = $(this).attr('data-timeline');
        if ( quarter < currentQuarter ) {
            $(this).addClass('it-evidence');
        } else if (quarter == currentQuarter) {
            $(this).addClass('it-now');
        } else {
            $(this).parent().attr('data-timeline-next','1');
        }
    })

    $timelineFilter.on('click', function(e) {
        e.preventDefault();
        var filter = $(this).attr('data-timeline-filter') || 'all';
        $(this).addClass('active').siblings().removeClass('active');

        switch (filter) {
            case 'prodotto':
                $timelineItemsContainer.addClass('d-none');
                $('[data-timeline-prodotto]').removeClass('d-none');
                break;
            case 'servizio':
                $timelineItemsContainer.addClass('d-none');
                $('[data-timeline-servizio]').removeClass('d-none');
                break;
            case 'next':
                $timelineItemsContainer.addClass('d-none');
                $('[data-timeline-next]').removeClass('d-none');
                break;
            case 'all':
                $timelineItemsContainer.removeClass('d-none');
        }
        
    });

    $('.cookiebar__close').on('click', function(e) {
        var $cookiebar = $('.cookiebar');
        var date = new Date();
        date.setTime(date.getTime() + (7*24*60*60*1000));
        //var expires = "expires=" + date.toUTCString();
        var expires = "expires=0";

        document.cookie = "cookies_notnow=true;" + expires + "; path=/";

        $cookiebar.removeClass('show').addClass('notnow').attr('aria-hidden','true');

    });

// test if user says no-cookies-now
    if (!(document.cookie.indexOf('cookies_consent=true') === -1 && document.cookie.indexOf('cookies_notnow=true') === -1 )) {
        var $cookiebar = $('.cookiebar');
        $cookiebar.removeClass('show').addClass('notnow').attr('aria-hidden','true');
        
    }

    function getHash() {
        var hash = window.location.hash;
        return hash.substring(1); 
        }

    if (window.location.hash!="") {
        var accordionNumber = getHash();
        var $accordionBtn = $("#collapse"+accordionNumber);
        var $heading = $("#btnHeading"+accordionNumber);
        if (accordionNumber!='' && $accordionBtn) {
            $accordionBtn.collapse('show');
            $heading.focus();
        }
    }
    $("*[data-parent='#collapseDiv']").on('show.bs.collapse', function () {
        var idToHash = $(this).attr('id');
        idToHash = idToHash.replace('collapse','');
        window.history.replaceState(null,null,'#'+idToHash);
    });

    $("#newsletter-form").on("submit" , function(e) {
        e.preventDefault();
        grecaptcha.execute();
    })

    $(".playvideo").click( function(e) {
        e.preventDefault();
        var src = $(this).attr("data-url");
        var replace = $(this).attr("data-replace");
        var $elVideoWrapper = $(this).siblings(".videoWrapper");
        var $button = $(this);
        
        if (replace) {
            var elToReplace = $(replace);
            $elVideoWrapper.children("iframe").attr("src",src);
            elToReplace.fadeOut( 1000, function() {
                $button.hide();
                $elVideoWrapper.removeClass('d-none');
                
              });
        } else {
            $(".overlay-video").show();
            $("#player").attr("src", src);
            setTimeout(function() {
                $(".overlay-video").addClass("o1");
                
            }, 100);
        }
    });
    
    $(".overlay-video").click(function(event) {
        if (!$(event.target).closest(".videoWrapperExt").length) {
            var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
            $("#player").attr("src", PlayingVideoSrc);
            $(".overlay-video").removeClass("o1");
            setTimeout(function() {
                $(".overlay-video").hide();
            }, 600);
        }
    });
    
    $(".videoWrapper__close").click(function(event) {
            var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
            $("#player").attr("src", PlayingVideoSrc);
            $(".overlay-video").removeClass("o1");
            setTimeout(function() {
                $(".overlay-video").hide();
            }, 600);
    
    });


});

