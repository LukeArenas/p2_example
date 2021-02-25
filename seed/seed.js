const faker = require('faker')
const db = require('../db')
const { User, Todo } = require('../models')
const main = async () => {
  try {
    const usersArr = [...Array(30)].map((_, i) => ({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email()
    }))

    await User.insertMany(usersArr)

    const users = await User.find()
    const todos = [...Array(100)].map((_, i) => ({
      todo: faker.lorem.sentence(),
      user_id: users[Math.floor(Math.random() * users.length)]._id
    }))
    await Todo.insertMany(todos)
  } catch (error) {
    console.log(error)
  } finally {
    db.close()
  }
}

main()
