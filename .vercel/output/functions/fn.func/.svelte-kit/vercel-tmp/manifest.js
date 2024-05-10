export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.svg","2.svg","3.svg","4.svg","bg.jpg","bg.png","bur.svg","burger.svg","client/lenovo.png","client/samsung.png","client/venmo.png","client/visa.png","client/zoom.png","daur ulang.svg","daurulang.png","daurulang_pt.svg","favicon.png","glow1.svg","glow2.svg","Group.svg","intro.mp4","intro.webm","intro.webmx","intros.mp4","introx.mp4","logo.svg","mask.svg","mask.xsvg","maskxx.svg","mask_sampah.svg","mask_sampahx.svg","mizuri-au-valorantlogoreyna.jpg","o.svg","ox.svg","pattern - Copy.svg","pattern.svg","patternxxx.svg","pelatihan.png","pelatihan.svg","pelatihan_pt.svg","pendampingan.png","pendampingan.svg","pendampingan_pt.svg","pengelolaan.png","pengelolaan.svg","pengelolaan_pt.svg","standarisasi.png","standarisasi.svg","standarisasi_pt.svg","v1.9.3-chromium-save-link-as.crx"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".mp4":"video/mp4",".webm":"video/webm"},
	_: {
		client: {"start":"_app/immutable/entry/start.tt8FBkAh.js","app":"_app/immutable/entry/app.BS8M5a4F.js","imports":["_app/immutable/entry/start.tt8FBkAh.js","_app/immutable/chunks/entry.Bzn7fECA.js","_app/immutable/chunks/scheduler.oxOA7y9_.js","_app/immutable/chunks/index.D9t5hcHj.js","_app/immutable/entry/app.BS8M5a4F.js","_app/immutable/chunks/scheduler.oxOA7y9_.js","_app/immutable/chunks/index.BIoX6FCq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
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
				id: "/layanan",
				pattern: /^\/layanan\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
