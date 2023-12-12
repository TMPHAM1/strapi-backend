'use strict';

/**
 * household service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::household.household');
