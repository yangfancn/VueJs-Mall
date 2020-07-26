import Axios from 'axios'

// export function request(config, success, error) {
//   const instance = Axios.create({
//   baseURL: 'http://laravel.com/api',
//     timeout: 5000,
//   })

//   instance(config)
//     .then(result => {
//       success(result)
//     })
//     .catch(err => {
//       error(err)
//     })
// }

export function request(config) {
  const instance = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //拦截器 全局 Axios.interceptors

  //请求拦截
  instance.interceptors.request.use(
    config => {
      // console.log(config)

      return config
    },
    error => {
      // console.log(error)

      return error
    }
  )

  //响应拦截
  instance.interceptors.response.use(
    result => {
      // console.log(result)

      return result.data
    },
    error => {
      // console.log(error)

      return error
    }
  )

  return instance(config)
}
