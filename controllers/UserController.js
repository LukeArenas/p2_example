const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    const user = new User({ ...req.body })
    user.save()
    res.send(user)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const GetUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = {
  CreateUser,
  GetUsers
}
