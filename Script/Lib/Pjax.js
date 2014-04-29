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

	pjax = {},
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
for(i_anchor = 0; i_anchor < len_anchor; i_anchor++) {
	cache(pjaxAnchorArray[i_anchor]);
}

function cache(anchor) {
	var
		xhr = new XMLHttpRequest(),
	$;

	if(localStorage[anchor.pathname]) {
		if(pjax[anchor.pathname]) {
			return;
		}

		cacheLoad(anchor, localStorage[anchor.pathname]);
		return;
	}

	xhr.open("get", anchor.pathname, true);
	xhr.addEventListener("load", function() {
		cacheLoad(anchor, this.responseText);
	});
	xhr.send();
};

function cacheLoad(anchor, html) {
	var
		doc = document.implementation.createHTMLDocument(''),
		parent = anchor,
	$;

	doc.documentElement.innerHTML = html;
	localStorage[anchor.pathname] = html;

	pjax[anchor.pathname] = {
		"title": doc.title,
		"body": doc.body.innerHTML,
	};

	while(parent) {
		if(parent.hasAttribute("data-pjax-event")) {
			parent.getAttribute("data-pjax-event").split(" ").forEach(
			function(eventName) {
				console.log(eventName);
				anchor.addEventListener(eventName, e_click);
			});
			break;
		}
		parent = parent.parentElement;
	}
	anchor.addEventListener("click", e_click);
};

function e_click(e) {
	if(!pjax[this.pathname]) {
		return true;
	}

	e.preventDefault();

	document.title = pjax[this.pathname].title;
	document.body.innerHTML = pjax[this.pathname].body;
	document.dispatchEvent(new Event("DOMContentLoaded"));
};

});