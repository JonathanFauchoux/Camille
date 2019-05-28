import { fetchGetService } from '@helpers/api'

const mode = process.env.NODE_ENV

export default {
  getHomeContent () {
    const service = (mode === 'development') ? 'home.json' : 'home'
    return new Promise((resolve, reject) => {
      fetchGetService(service).then((response) => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
