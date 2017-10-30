'use strict'

const User = use('App/Models/User')

class LoginController {

  async login ({ auth, response }) {
	const user = await User.find(1)

	await auth.login(user)
	return response.redirect('/posts')
  }
}

module.exports = LoginController
