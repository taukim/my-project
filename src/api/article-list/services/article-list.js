'use strict';

/**
 * article-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-list.article-list');
