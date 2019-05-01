module.exports = {
  plugins: [
    [
      'import',
      [
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
        {
          libraryName: 'components',
          camel2DashComponentName: false,
          customName: name => `../${name}`,
          style: true
        }
      ]
    ]
  ]
}
