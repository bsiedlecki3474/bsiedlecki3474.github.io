import axios from 'axios'

const getUsers = async () =>
  await axios.get('https://jsonplaceholder.typicode.com/users')

export {
  getUsers
}