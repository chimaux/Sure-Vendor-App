if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-c2c0676f"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/WeND_uz6N3kR8s-YAMEpk/_buildManifest.js",
          revision: "2ec694eb52ae4f523f265a46bae4d768",
        },
        {
          url: "/_next/static/WeND_uz6N3kR8s-YAMEpk/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/173-9360a84cac0a0818.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/213-63f6d04841a33451.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/231-535793c4ab2c7aa7.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/403-189a06c843205ee1.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/503-ebb66c3a24b31f8f.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/590-678a09bba63ca08b.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/962-00aeea85624173bf.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/(onboarding)/create-your-store/page-f7ab4b8b5b1615fb.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/(onboarding)/enter-basic-info/page-066e337bec1759a0.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/(onboarding)/welcome-phone-no/page-3ec0b1da525d6e51.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/(products)/create-a-product/page-753f7850aba3dc36.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/(products)/product-preview/page-84b9dcab837de69c.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-46a1037b3bb5f049.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/layout-ae6db099ec05b7b3.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/not-found-bcdd838bb47d9c58.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/app/page-fa761540005f884c.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/fd9d1056-35534068ac75990a.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/framework-f66176bb897dc684.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/main-app-b86dd719a5edaeac.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/main-de0a46ac88d9adc5.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-c96f2ceddf9ef63f.js",
          revision: "WeND_uz6N3kR8s-YAMEpk",
        },
        {
          url: "/_next/static/css/c971f42a09c11ffb.css",
          revision: "c971f42a09c11ffb",
        },
        {
          url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
          revision: "78e6fc13ea317b55ab0bd6dc4849c110",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.p.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/arrow_left.svg",
          revision: "81a722a7fbecad7849920dc74161c9b2",
        },
        {
          url: "/check_circle.svg",
          revision: "3929938779341578e1bbc2929e5ded72",
        },
        { url: "/close.svg", revision: "d3525414250167dd357164f247fbcd5d" },
        {
          url: "/deafultAvatar.png",
          revision: "1b49f88bff0f6de4a1618b360bbbe113",
        },
        {
          url: "/down_arrow.svg",
          revision: "e23f9468ee71e4e0929daba60b957831",
        },
        { url: "/img-192.png", revision: "c810460b6a9561315050fb0d795a6a54" },
        { url: "/img-384.png", revision: "5efc2dd17cf2e7cdcaec682ceec9ae15" },
        { url: "/img-512.png", revision: "6242577ba94f6dda0a3032fd37ea5456" },
        { url: "/manifest.json", revision: "02cdda336b5dd61caa00826c8869181d" },
        {
          url: "/more_horiz.svg",
          revision: "2d6726395d100ccb75dc058bc4297088",
        },
        { url: "/more_vert.svg", revision: "b02a38544828697487a51b171ff81113" },
        { url: "/picture1.png", revision: "c410329bd67fea77ea42c8cbafafb6ea" },
        { url: "/snap.svg", revision: "989d3af49ac817fb888520b7cd9683d3" },
        { url: "/social1.svg", revision: "5a4a3204d8e83426cb30d8429ea18398" },
        { url: "/social2.svg", revision: "bf07e5ba82161b380fd5cab6c68445a2" },
        { url: "/social3.svg", revision: "f43b13ef6ef5e26c041008b3b0efb9a3" },
        { url: "/tick.svg", revision: "a6bc5a798a3daf56a6391e47aafecff0" },
        {
          url: "/welcome_img.svg",
          revision: "9ee2a7412add9bc0ca68b95b4819b05f",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});
