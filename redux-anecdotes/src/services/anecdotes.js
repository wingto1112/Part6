import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}
const newVote = async (vote) => {
  const obj = { ...vote, votes: vote.votes + 1 }
  const res = await axios.put(`${baseUrl}/${vote.id}`, obj)
  return res.data
}

export default { getAll, createNew, newVote }