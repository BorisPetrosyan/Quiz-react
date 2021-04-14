import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quizz-8d22f-default-rtdb.firebaseio.com/'
})