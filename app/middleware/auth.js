module.exports = () => {
  return async function(ctx, next) {
    console.log('自定义全局中间件的执行规律');
    await next();
  };
};
