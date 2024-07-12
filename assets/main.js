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

function isEmail(email) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function submitNewsletter(token) {
    var subscriptionUrl = "https://news-p-weu-core-app-fn.azurewebsites.net/api/v1/newsletters/pagopa/lists/2/recipients";
    var email = $("#newsletteremail").val().trim();
    var groups = $("#group").val().split(',');
    var data = { "recaptchaToken" : token, "email" : email, "groups": groups };
    var ajaxreq = $.ajax({url: subscriptionUrl,
            type: "post",
            data: JSON.stringify(data),
            success: function(data, textStatus, xhr) {
                if (xhr.status==200) {
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

// URL params
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

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


    function onFieldsChange() {
        var groupOtionsChecked = [];
        $('.js-nl-groups .js-nl-group-option').each(function (el) {
            if ($(this).is(":checked"))
                groupOtionsChecked.push($(this).data('value'));
        });

        // Sets the #group element value to a comma-separated list of ids as per
        // http://help.mailup.com/display/mailupapi/HTTP+API+Specifications#HTTPAPISpecifications-Groups
        if (document.getElementById('group') != null)
            document.getElementById('group').value = groupOtionsChecked.toString();

        // Enables submit button when at least one option is selected and the input field is filled with an actual email
        $('.js-newsletter-submit')
            .prop('disabled', (groupOtionsChecked.length == 0) || (!isEmail($('.js-newsletter-email').val())));
    }

    var UrlParameterEmail = getUrlParameter('email');

    // If ?email=email@example.com, pre-populates email input field
    // TODO pre-populate entire user data
    if (UrlParameterEmail && isEmail(UrlParameterEmail)) {
        $('.js-newsletter-email')[0].value = UrlParameterEmail;
        onFieldsChange();
    }

    $('.js-newsletter-email')
        .on('input', onFieldsChange);
    $('.js-nl-groups .js-nl-group-option')
        .on('change', onFieldsChange);

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

    $("#videocommand").click(function(event) {
        event.preventDefault();
        var btn = $(this);
        var video = document.getElementById("homevideo");

        if (video.paused) {
            video.play();
            btn.removeClass("stopped").addClass("playing");
        } else {
            video.pause();
            btn.removeClass("playing").addClass("stopped");
        }
        
    });

    // track Checkout site calls
    $("*[data-ga-send-title]").click(function(e) {
        e.preventDefault();
        var sendTitle = $(this).attr('data-ga-send-title') || "";
        var sendUrl = $(this).attr('href') || "";
        try {
            ga('send', 'event', 'button', 'click', sendTitle, 1, {
                hitCallback: function() {
                    window.location.href = sendUrl;
                }
              });
          } catch (error) {
            window.location.href = sendUrl;
        }
        
    });


});

