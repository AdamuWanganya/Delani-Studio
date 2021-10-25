console.log('connected');
$(document).ready(function() {
    $("#design-icon").click(function() {
        $("#design-icon").slideDown().hide();
        $("#design").show();
    });
    $("#design").click(function() {
        $("#design").slideUp();
        $("#design-icon").slideDown();
    });
});

$(document).ready(function() {
    $("#dev-icon").click(function() {
        $("#dev-icon").slideDown().hide();
        $("#dev").show();
    });
    $("#dev").click(function() {
        $("#dev").slideUp();
        $("#dev-icon").slideDown();
    });
});
$(document).ready(function() {
    $("#product-icon").click(function() {
        $("#product-icon").slideDown().hide();
        $("#product").show();
    });
    $("#product").click(function() {
        $("#product").slideUp();
        $("#product-icon").slideDown();
    });
});