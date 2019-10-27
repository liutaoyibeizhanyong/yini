module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,
      viewportHeight:667,
      unitPrecision:5,
      viewportUnit:'vw',
      selectorBlackList:['tab-bar-item'],//不需要转换的类
      minPixelValue:1,
      mediaQuery:false
    }
  }
}
