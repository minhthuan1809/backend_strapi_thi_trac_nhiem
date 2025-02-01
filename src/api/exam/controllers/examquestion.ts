/**
 * exam question controller
 */

export default {
  // Delete a specific question from an exam
  // DELETE /api/exams/:id/questions/:questionId
  async deleteQuestion(ctx) {
    try {
      const { id, questionId } = ctx.params;
      
      const exam: any = await strapi.entityService.findOne('api::exam.exam', id, {
        populate: ['question']
      });

      if (!exam) {
        return {
          ok: false,
          message: 'Exam not found'
        };
      }

      const updatedQuestions = exam.question?.filter(q => q.id !== parseInt(questionId)) || [];
      
      const result = await strapi.entityService.update('api::exam.exam', id, {
        data: {
          question: updatedQuestions
        }
      });

      return {
        ok: true,
        data: result,
        message: 'Question removed from exam successfully'
      };
    } catch (err) {
      return {
        ok: false,
        message: 'Error removing question: ' + err.message
      };
    }
  }
};
