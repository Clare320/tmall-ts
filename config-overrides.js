const { override, fixBabelImports, addLessLoader } = require('customize-cra')

// 配置用于按需加载组件代码和样式
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  })
)
