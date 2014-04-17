<?php class _Common_PageCode extends PageCode {
public function go($api, $dom, $template, $tool) {
	$main = $dom["body > main"];
	if($main->hasAttribute("data-title")) {
		$dom["body > header > h1"]->textContent = 
			$main->getAttribute("data-title");
	}
}	
}#