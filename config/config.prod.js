/**
 * 生产环境配置
 *
 * 最终生效的配置为 prod + default（前者覆盖后者）
 */

module.exports = () => {
  const exports = {};

  exports.cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0'
      // path: '/var/run/egg.sock',
    }
  };

  return exports;
};
