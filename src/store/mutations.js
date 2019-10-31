const mutations = {
  isShow(state, flag) {
    state.isShow = flag
  },
  getObj(state,obj){
    state.userObj = obj
  },
  addCart(state, product) {
    // 1.查看是否添加过
    let oldProduct = state.cartList.find(item => item.id === product.id)

    // 2.+1或者新添加
    if (oldProduct) {
      oldProduct.count += 1
    } else {
      product.count = 1
      state.cartList.push(product)
    }
  }
}

export default mutations
