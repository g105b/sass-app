;document.addEventListener("DOMContentLoaded", function() {
var
	// First find all elements with the data-pjax attribute.
	pjaxContainerList = document.querySelectorAll("[data-pjax]:not(a)"),
	pjaxAnchorList = 
		document.querySelectorAll("a[data-pjax]:not([data-pjax='false'])"),
	// Then store all links to pre-load in their own array.
	pjaxAnchorArray = [],
	len_anchor,
	i_anchor,
$;

// Add anchors within containers to the array:
Array.prototype.forEach.call(pjaxContainerList, function(el) {
	var
		data = el.getAttribute("data-pjax"),
		list,
	$;

	if(data == "true") {
		data = "a";
	}

	list = el.querySelectorAll(data);

	Array.prototype.forEach.call(list, function(anchor) {
		pjaxAnchorArray.push(anchor);
	});
});

// Add anchors with their own data-pjax attribute to the array:
Array.prototype.forEach.call(pjaxAnchorList, function(anchor) {
	pjaxAnchorArray.push(anchor);
});

// Load cached page for each anchor's href:
len_anchor = pjaxAnchorArray.length;
for(i_anchor = 0; i_anchor < len_anchor; i++) {
	cache(pjaxAnchorArray[i_anchor]);
}

function cache(anchor) {
	var
		xhr = new XMLHttpRequest(),
	$;

	if(localStorage[anchor.href]) {
		// Check validity.
	}
};

function e_click(e) {

};
});