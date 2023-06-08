'use strict';

/**
 * therapeutic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::therapeutic.therapeutic');
