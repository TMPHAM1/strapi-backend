module.exports = [

  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'frame-ancestors': null,
        },
      },
      frameguard: false,
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:8000', 'https://summercamp.tienmpham.com']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      includeUnparsed: true,
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
