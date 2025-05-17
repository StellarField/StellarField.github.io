var screen = document.getElementById("screen");
if (localStorage.getItem("markSrc") !== null) {screen.scrollTop = localStorage.getItem("markSrc");}
window.addEventListener("beforeunload",function() {localStorage.setItem("markSrc",screen.scrollTop);});

var changeBack = new MutationObserver(function(styleChanges)
	{
	styleChanges.forEach(function(styleChange)
		{
		var element = styleChange.target;
		var elementStyle = element.style;
		switch(element.tagName)
			{
			case "P": case "H1": case "H2": case "H3": case "EM": case "A": case "NAV": case "UL": case "LI": case "HEADER": case "SECTION": case "ARTICLE": case "BODY": case "HTML":
				elementStyle.removeProperty("filter");
				elementStyle.removeProperty("background");
				elementStyle.removeProperty("background-image");
				elementStyle.removeProperty("background-color");
				elementStyle.removeProperty("color-scheme");
				elementStyle.removeProperty("border");
				elementStyle.removeProperty("box-shadow");
				elementStyle.removeProperty("color");
				elementStyle.removeProperty("text-shadow");
			break;
			}
		});
	});

changeBack.observe(document.getElementById("site"),{attributes:true,subtree:true,attributeFilter:["style"]});