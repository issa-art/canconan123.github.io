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
$('[lang="jp"]').show(); // show just JP text
$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case.
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
            $("#JPN_calendar").attr("src","Images/Home Page/EN Calendar.png");
            $("#JPN_schedule").attr("src","Images/Home Page/EN Schedule.png");
        break;
        case 'jp':
            $('[lang]').hide();
            $('[lang="jp"]').show();
            $("#JPN_calendar").attr("src","Images/Home Page/JPN Calendar.png");
            $("#JPN_schedule").attr("src","Images/Home Page/JPN Schedule.png");
        break;
        default:
            $('[lang]').hide();
            $('[lang="jp"]').show();
        }
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
