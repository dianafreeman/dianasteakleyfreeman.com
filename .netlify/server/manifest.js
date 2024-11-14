export const manifest = (() => {
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
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/v2/entries",
				pattern: /^\/api\/v2\/entries\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/v2/entries/_server.js'))
			},
			{
				id: "/api/v2/entries/[slug]",
				pattern: /^\/api\/v2\/entries\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/v2/entries/_slug_/_server.js'))
			},
			{
				id: "/api/v2/[entity]",
				pattern: /^\/api\/v2\/([^/]+?)\/?$/,
				params: [{"name":"entity","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/v2/_entity_/_server.js'))
			},
			{
				id: "/api/v2/[entity]/[value]",
				pattern: /^\/api\/v2\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"entity","optional":false,"rest":false,"chained":false},{"name":"value","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/v2/_entity_/_value_/_server.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/feedback",
				pattern: /^\/feedback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[category]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[category]/[subcategory]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"subcategory","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
