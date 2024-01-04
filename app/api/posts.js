import axios from "axios"

console.log("api")

/* export const getPostsRequest = async () =>
  await axios.get(`${process.env.BASEPUP}/api/posts`) */

export const getPostsRequest = async () =>
  await axios.get(
    `${process.env.API_BASE_URL_V2}/courses/1/categories/351/exercises/3388`
  )

export const createPostRequest = async (post) => {
  console.log("createPostRequest")
  console.log(post)
  const resp = await axios.post(`${process.env.BASEPUP}/api/posts`, {
    content: post.content,
    expected_result: post.expected_result,
    exercise_type: post.exercise_type,
    fun: post.fun,
    key: post.key,
  })
  console.log("resp 18", resp)
  return resp.data
}
