'use strict'

const { test, trait } = use('Test/Suite')('Posts')

const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Session/Client')
trait('Auth/Client')

test('get list of posts', async ({ client }) => {

  const user = await User.find(1)

  const response = await client
  .get('posts')
  .loginVia(user)
  .end()



  response.assertStatus(200)

})
