import getConfig from './_getConfig'

export default (service, params) => {
  return getConfig().get(service, params).catch(error => {
    throw new Error(`Api Service GET ${service} Failed: ${error}`)
  })
}
