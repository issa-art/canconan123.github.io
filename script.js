// When document has finished loading
$(document).ready(function() {

    var resizeText = function () {
        // Standard height, for which the body font size is correct
        var preferredFontSize = 280; // %
        var preferredSize = 1920 * 1080;

        var currentSize = $(window).width() * $(window).height();
        var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
        var newFontSize = preferredFontSize * scalePercentage;
        $("body").css("font-size", newFontSize + '%');
    };

    $(window).bind('resize', function() {
        resizeText();
    }).trigger('resize');

});

$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="jp"]').show(); // show just Japanese text
$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case.
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'jp':
            $('[lang]').hide();
            $('[lang="jp"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="jp"]').show();
        }
});
