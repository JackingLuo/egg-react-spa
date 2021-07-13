module.exports = app => {
  return class AdminController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login.js', {});
    }

    async render(ctx) {
      const list = ctx.service.article.getList();
      if (ctx.query.mode === 'ssr') {
        //使用localhost::7001/?mode=ssr 测试
        await ctx.render('admin.js', {
          url: ctx.url,
          list,
        });
      } else {
        await ctx.renderClient('admin.js', {
          url: ctx.url,
          list: list,
        });
      }
    }
  };
};
