import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'

const app = feathers()
const restClient = rest('http://localhost:3030')

const options = {
  path: '/authentication',
  entity: 'user',
  service: 'users',
  storage: window.localStorage
}

app.configure(restClient.fetch(window.fetch))
app.configure(auth(options))

export default app
