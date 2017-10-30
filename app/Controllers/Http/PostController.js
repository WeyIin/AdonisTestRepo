'use strict'

const User = use('App/Models/User')

class PostController {

  async index({ auth, view }) {
 // get an user object of a currently logged in user

    const user = await auth.getUser()

    const posts = await user.posts().fetch()

    return posts
  }
}

module.exports = PostController
