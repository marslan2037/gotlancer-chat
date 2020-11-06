$(document).ready(function() {
    $(".mobile-search-button").on("click", function() {
        var parent_element = $(this).parent();  
        parent_element.addClass("have-single-column have-only-search-bar");
    })

    $(".mobile-search-close-button").on("click", function() {
        var parent_element = $(this).parent();
        console.log(parent_element)
        
        parent_element.removeClass("have-single-column have-only-search-bar");
    })

    $(".mobile-menu-button").on("click", function() {
        var parent_element = $(this).parent();
        console.log(parent_element)
        
        parent_element.addClass("have-mobile-menu-open");
    })

    $(".mobile-menu-close-button").on("click", function() {
        var parent_element = $(this).parent();
        console.log(parent_element)
        
        parent_element.removeClass("have-mobile-menu-open");
    })
})