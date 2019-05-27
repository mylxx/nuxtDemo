const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    { src: "swiper/dist/css/swiper.css" },
    {src: '~assets/css/index.scss', lang: 'scss'},
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    { src: "~plugins/axios.js", ssr: true },
    { src: "~/plugins/vue-swiper.js", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios", "@nuxtjs/proxy"
  ],
  axios: {
    retry: { retries: 3 },
    //开发模式下开启debug
    debug: process.env._ENV == "production" ? false : true,
    //设置不同环境的请求地址
    baseURL:
      process.env._ENV == "production"
        ? ""
        : "http://localhost:3000/api",
    withCredentials: true,
  },
  proxy: {
    //开启代理
    "/api/": {
      target: "http://192.168.19.58:8200",
      pathRewrite: { "^/api/": "" }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    cache: true
  }
}
