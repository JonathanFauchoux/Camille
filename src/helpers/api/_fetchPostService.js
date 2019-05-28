import getConfig from './_getConfig'

export default (service, params) => {
  return getConfig().post(service, params).catch(error => {
    throw new Error(`Api Service POST ${service} Failed: ${error}`)
  })
}
