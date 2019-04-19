// 引入axios包
import axios from 'axios'

// 配置基准路径：baseURL
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 获取一级分类数据,const是常量，提供使用，但不能修改
// 方法1：
// export const getFirstCategory = () => axios.get('/category/queryTopCategory')

// 方法2：
export const getFirstCategory = () => {
  return axios.get('/category/queryTopCategory')
    .then((result) => {
      //   console.log(result)
      if (result.status === 200) {
        return result.data
      }
    })
}
// 获取二级分类数据
export const getSecondCategory = (id) => axios.get('/category/querySecondCategory', {params: {id: id}})

// 搜索产品
export const getProductList = (pa) => axios.get('/product/queryProduct', {params: pa})
