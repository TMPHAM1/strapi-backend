'use strict';

/**
 * attendance-record service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attendance-record.attendance-record');
