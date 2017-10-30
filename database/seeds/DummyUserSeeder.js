'use strict'

/*
|--------------------------------------------------------------------------
| DummyUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class DummyUserSeeder {
  async run () {
    const user = await Factory.model('App/Models/User').create()
    const post = await Factory.model('App/Models/Post').make()

    await user.posts().save(post)
  }
}

module.exports = DummyUserSeeder
