'use strict'

const { test, trait } = use('Test/Suite')('Posts')

const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
trait('Session/Client')

test('get list of posts', async ({ client }) => {
  const user = await User.create({ username: 'virk', email: 'virk@adonisjs.com', password: 'secret' })

  const response = await client
  .get('posts')
  .loginVia(user)
  .end()

  response.assertStatus(200)
})
