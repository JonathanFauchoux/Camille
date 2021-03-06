const createCookie = (name, value, days) => {
  const date = new Date()
  let expires
  if (days) {
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = `; expires= ${date.toGMTString()}`
  } else {
    expires = ''
  }
  document.cookie = `${name}=${value}${expires};path=/`
}

export default createCookie
