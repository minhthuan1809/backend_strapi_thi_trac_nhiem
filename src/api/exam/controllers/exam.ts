/**
 * exam controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::exam.exam', ({strapi}) => ({
  // Create a new exam
  // POST /api/exams
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
  // GET /api/exams
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
  // GET /api/exams/:id
  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const exam = await strapi.entityService.findOne('api::exam.exam', id, {
        ...ctx.query,
        populate: ['question']
      });

      // Check if exam exists
      console.log(exam);
      if (!exam) {
        return {
            ok: false,
            message: 'Exam not found'
        };
      }

      return { 
        ok: true,
        data: exam,
        meta: {
          status: 'success'
        }
      };
    } catch (err) {
      return ctx.badRequest('Error finding exam: ' + err.message);
    }
  },

  // Update an exam
  // PUT /api/exams/:id
  async update(ctx) {
    try {
      const { id } = ctx.params;
      const requestData = ctx.request.body;
      
      // Extract data from array if needed
      const data = Array.isArray(requestData.data) ? requestData.data[0] : requestData.data;
      

      // Validate data
      if (!data || typeof data !== 'object') {
        return {
          ok: false,
          message: 'Invalid data format'
        };
      }

      const result = await strapi.entityService.update('api::exam.exam', id, {
        data: data
      });

      if (!result) {
        return {
          ok: false,
          message: 'Could not update exam'
        };
      }

      return {
        ok: true,
        data: result,
        meta: {
          status: 'success'
        }
      };
    } catch (err) {
      return {
        ok: false,
        message: 'Error updating exam: ' + err.message
      };
    }
  },

  // Delete an exam
  // DELETE /api/exams/:id
  async delete(ctx) {
    try {
      const { id } = ctx.params;
     
        // Delete entire exam if no questionId
        const result = await strapi.entityService.delete('api::exam.exam', id);
        return {
          ok: true,
          data: result,
          message: 'Exam deleted successfully'
        };
      }

     catch (err) {
      return {
        ok: false,
        message: err.message
      };
    
  }},

 





}));
