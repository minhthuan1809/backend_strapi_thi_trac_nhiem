/**
 * exam controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::exam.exam', ({strapi}) => ({
  // Create a new exam
  async create(ctx) {
    try {
      const { data } = ctx.request.body;
      const result = await strapi.entityService.create('api::exam.exam', {
        data: data
      });
      return { data: result };
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Find all exams
  async find(ctx) {
    try {
      const exams = await strapi.entityService.findMany('api::exam.exam', {
        ...ctx.query,
      });
      return { data: exams };
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Find one exam by ID
  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const exam = await strapi.entityService.findOne('api::exam.exam', id, {
        ...ctx.query,
      });
      return { data: exam };
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Update an exam
  async update(ctx) {
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;
      
      const result = await strapi.entityService.update('api::exam.exam', id, {
        data: data
      });
      return { data: result };
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  // Delete an exam
  async delete(ctx) {
    try {
      const { id } = ctx.params;
      const result = await strapi.entityService.delete('api::exam.exam', id);
      return { data: result };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));

