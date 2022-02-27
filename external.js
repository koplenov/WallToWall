// Vk
const serviceName = "Vk";

const bridge = vkBridge.default;


function InitVK(){
	// console.log(apps_init.get('access_token'));

	// Vk
	bridge.subscribe((e) => console.log("vkBridge event", e));
	bridge.send("VKWebAppInit", {});
}

// ads
function showAdPreloader (){
	bridge.send("VKWebAppShowNativeAds", {ad_format:"preloader"})
		.then(data => result(data.result))
		.catch(error => result("false"));
}
function showAdReward  (){
	bridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
		.then(data => result(data.result))
		.catch(error => result("false"));
}

function showAdInterstitial  () {
	bridge.send("VKWebAppShowNativeAds", {ad_format: "interstitial"})
		.then(data => result(data.result))
		.catch(error => result("false"));
}

function result(value) {
	unityInstance.SendMessage('[WebGLBridge]', 'AdResponse', value.toString());
}

function inviteFriends  () {
	bridge.send("VKWebAppShowInviteBox", {})
		.then(data => console.log(data.success))
		.catch(error => console.log(error));
}
