
module.exports = {
  seo: {
  "title": "eMania equipamentos de Foto, Vídeos e Cinema",
  "description": "Compre os melhores Equipamentos de Fotografia, Vídeo e Cinema, Maiores Marcas Profissionais como Canon, Sony, FujiFilm, Zhiyun, Sennheiser, DJI e mais",
  "titleTemplate": "%s | eMania",
  "author": "eMania"
},

  // Theming
  theme: 'tema-emania',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "ioemania",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://ioemania.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/est%C3%BAdio%20fotogr%C3%A1fico",
    search: "/s?q=WorldView",
    pdp: "/suporte-2-em-1-smartphone-e-tablet-para-tripe-e-bastoes-selfie/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/suporte-2-em-1-smartphone-e-tablet-para-tripe-e-bastoes-selfie/p",
      collection: "/est%C3%BAdio%20fotogr%C3%A1fico",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/suporte-2-em-1-smartphone-e-tablet-para-tripe-e-bastoes-selfie/p",
      collection: "/est%C3%BAdio%20fotogr%C3%A1fico",
      collection_filtered: "/est%C3%BAdio%20fotogr%C3%A1fico/?category-1=est%C3%BAdio%20fotogr%C3%A1fico&brand=WorldView&facets=category-1%2Cbrand%27",
      search: "/s?q=WorldView",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://ioemania.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
