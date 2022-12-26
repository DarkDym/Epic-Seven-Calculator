jQuery("body").on("click", ".ez-toc-title-toggle", function () {
    var panel = jQuery('.ez-toc-list');
    if (panel.css('max-height') != '0px') {
        panel.css('max-height', '0px');
    } else {
        panel.css('max-height', '8000px');
    }
});