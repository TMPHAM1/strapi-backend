
module.exports = {
    // ...
    'shopify-fields': {
      enabled: true,
      config: {
        apiVersion: '2022-07', // Or one of Shopify's supported API versions
        accessToken: process.env.SHOPIFY_API_SECRET, // The environment variable containing your private app's access token
        shopName: process.env.HOST_NAME, // The environment variable containing your myshopify.com domain
      },
    },
    'attendance-plugin': {
      enabled: true,
      resolve: '../node_modules/strapi-plugin-attendance/',
    }
  };