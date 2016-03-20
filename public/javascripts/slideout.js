
$(document).ready(function () {
    // Set Slideout menu
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu':  document.getElementById('menu'),
        // 'padding': 256,
        'padding': 266,
        'tolerance': 70
    });

    // Toggle button
    $('.slideout-menu-toggle-button').click(function () {
        slideout.toggle();
    });
});
