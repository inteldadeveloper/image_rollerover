(function($){
$.fn.changeImage = function() {
return this.each(function(i, v) {

// get old and new urls
var oldURL = $(v).attr("src");
var newURL = $(v).attr("id");

// preload images
var rolloverImage = new Image();
rolloverImage.src = newURL;

// set up event handlers
$(v).hover(

function() {
$(v).attr("src", newURL);
},

function() {
$(v).attr("src", oldURL);
}

); // end hover
});
};

})(jQuery);
