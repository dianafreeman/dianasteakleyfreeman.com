import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/open-dyslexic/OpenDyslexic-Bold.otf","fonts/open-dyslexic/OpenDyslexic-BoldItalic.otf","fonts/open-dyslexic/OpenDyslexic-Italic.otf","fonts/open-dyslexic/OpenDyslexic-Regular.otf","fonts/open-dyslexic/OpenDyslexicAlta-Bold.otf","fonts/open-dyslexic/OpenDyslexicAlta-BoldItalic.otf","fonts/open-dyslexic/OpenDyslexicAlta-Italic.otf","fonts/open-dyslexic/OpenDyslexicAlta-Regular.otf","fonts/open-dyslexic/OpenDyslexicMono-Regular.otf","images/.DS_Store","images/ATII-hero.jpeg","images/ATII_logo.png","images/DSF_VennDiagram.jpg","images/OF_logo.jpg","images/Rafiki.png","images/diana-and-rafiki.jpg","images/distant-together-screencap.jpg","images/homeScreenshot.png","images/iphone-on-fire.jpeg","images/laptop-in-a-box.jpeg","images/people-on-phones.jpeg","images/phone-disconnected-from-chain.jpeg","images/psychiatry-research-cover.jpg","images/rafiki-to-the-rescue/HappyThankgivingRafiki-01.png","images/rafiki-to-the-rescue/InsteadOfThisTryThis.jpeg","images/rafiki-to-the-rescue/RafikiInMirrorRafikiLovesYou.jpeg","images/rafiki-to-the-rescue/SelfCareIdeas1.jpeg","images/rafiki-to-the-rescue/benice.jpeg","images/rafiki-to-the-rescue/cells.jpeg","images/rafiki-to-the-rescue/pullThrough.jpeg","images/rafiki-to-the-rescue/sad.jpeg","images/snapshot-make-them-hear-you.jpg","images/social-exclusion-cover.jpg","images/social-exclusion-cover.webp","images/therapy-with-a-chatbot.jpeg","images/video-thumbnail-make-them-hear-you.jpg","screenshot.png"]),
	mimeTypes: {".otf":"font/otf",".jpeg":"image/jpeg",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.b3ace347.js","app":"_app/immutable/entry/app.436b8d60.js","imports":["_app/immutable/entry/start.b3ace347.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/singletons.3fa1cbea.js","_app/immutable/chunks/index.8fdb53eb.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.436b8d60.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.390e152a.js","_app/immutable/chunks/index.0ef552ce.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/10.js'))
		],
		routes: [
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[category]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
