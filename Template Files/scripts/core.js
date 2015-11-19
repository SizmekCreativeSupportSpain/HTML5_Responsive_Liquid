/* break point config */
var config = {
	breakPoints: [
		{"min-width": 1030, "banner": 240},
		{"min-width": 749, "max-width": 1029, "banner": 240},
		{"min-width": 500, "max-width": 748, "banner": 240},
		{"max-width": 499, "banner": 240}
	]
};
/* end of break point config */


function handleClick(){
	EB.clickthrough();
}

window.addEventListener("message", function(event){
	try{
		var data = JSON.parse(event.data);
		if(data.type == "requestBreakPoints"){
			if(typeof config == "object" && typeof EB == "object"){
				EB._sendMessage("setBreakPoints", {breakPoints: config.breakPoints});
			}
		}
	}catch(err){
	}
}, false);

function onInit(){
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	} else {
		startAd();
	}
}
function startAd(){
	document.getElementById("bannerClickBtn").addEventListener("click", handleClick, false);
}