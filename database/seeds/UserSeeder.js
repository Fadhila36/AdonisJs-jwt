const Hash = use("Hash");
const User = use("App/Models/User");
("use strict");

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class UserSeeder {
  async run() {
    const user = new User();
    user.username = "usersatu";
    user.email = "u1@gmail.com";
    user.password = "123";
    await user.save();

    const user2 = new User();
    user2.username = "userdua";
    user2.email = "u2@gmail.com";
    user2.password = "123";
    await user2.save();
  }
}

module.exports = UserSeeder;
