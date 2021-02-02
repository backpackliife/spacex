module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js",
      swDest: "service-worker.js"
    },
    manifestOptions: {
      name: "Xspace",
      start_url: "/index.html",
      display: "standalone",
      background_color: "#2C3136",
      theme_color: "#2C3136",
      orientation: "portrait-primary",
      icons: [
        {
          src: "./img/icons/icon98.png",
          type: "image/png",
          sizes: "98x98",
        },
        {
          src: "./img/icons/icon192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "./img/icons/icon512.png",
          type: "image/png",
          sizes: "512x512",
        },
      ],
    },
  },
};
