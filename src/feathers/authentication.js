import app from '../feathers'

const authenticate = async () => {
  try {
    const JWT = await app.passport.getJWT()
    if (!JWT) return {}

    const response = await app.authenticate({ strategy: 'jwt' })
    const payload = await app.passport.verifyJWT(response.accessToken)
    const user = await app.service('users').get(payload.userId)

    app.set('user', user)
    return user
  } catch (e) {
    return {}
  }
}

const login = async () => {
  try {
    const user = await authenticate()
    if (!user._id) {
      window.localStorage.setItem('redirect', window.location.pathname)
      window.location.replace('http://localhost:3030/auth/google')
    }
  } catch (e) {
    console.log(`Error authenticating ${e}`)
  }
}

const logout = async () => {
  try {
    await app.logout()
    await app.set('user', null)
    window.localStorage.setItem('redirect', '/')
  } catch (e) {
    console.log(`Error logging out ${e}`)
  }
}

export { authenticate, login, logout }
