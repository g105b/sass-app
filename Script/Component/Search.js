;document.addEventListener("DOMContentLoaded", function() {
Array.prototype.forEach.call(document.querySelectorAll("input[type='search']"),
function(el) {
	var 
		container = document.createElement("div"),
		placeholder = document.createElement("label"),
		id = el.id,
		p = container.getAttribute("placeholder"),
	$;

	container.classList.add("sass-app-search");
	placeholder.classList.add("placeholder");

	if(p) {
		el.setAttribute("data-placeholder", p);
		placeholder.textContent = p;
	}
	else {
		placeholder.textContent = "Search";
	}

	if(!id) {
		id = "sass-app-search-placeholder-"
			+ Math.random().toString(16).split(".")[1];
		el.id = id;
	}
	placeholder.setAttribute("for", id);

	el.parentElement.insertBefore(container, el);
	container.appendChild(el);
	container.appendChild(placeholder);
});

});