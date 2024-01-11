import axios from "axios"

export const getPostsRequest = async () =>
  await axios.get(
    `${process.env.API_BASE_URL_V2}/courses/1/categories/351/exercises/3388`
  )

// enviar desarrollo del usuario y resultado esperado a la apipup*
export const createPostRequest = async (post) => {
  // console.log("createPostRequest")
  // console.log(post)
  const resp = await axios.post(`${process.env.BASEPUP}/api/posts`, {
    content: post.content,
    expected_result: post.expected_result,
    // fun: post.fun,
  })
  // console.log("resp 18", resp)
  return resp.data
}
