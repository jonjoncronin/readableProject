import uuidv1 from "uuid"
const restURL = "http://localhost:3001";

// Generate a unique token for accessing data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

/**
 * Call RESTful API to backend server to retrieve all categories
 * @return {Array} an array of category objects in the form of
 * { name, path }
 */
export const getAllCategories = () =>
  fetch(`${restURL}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

/**
 * Call RESTful API to backend server to retrieve all posts
 * @return {Array} an array of post objects in the form of
 * { author,
 *   body,
 *   category,
 *   commentCount,
 *   deleted,
 *   id,
 *   timestamp,
 *   title,
 *   voteScore
 * }
 */
export const getAllPosts = () =>
  fetch(`${restURL}/posts`, { headers })
    .then(res => res.json())

export const getPostsForCategory = category =>
  fetch(`${restURL}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts);

export const getPost = postID =>
  fetch(`${restURL}/posts/${postID}`, { headers })
    .then(res => res.json())
    .then(data => data.post);

export const getCommentsForPost = postID =>
  fetch(`${restURL}/posts/${postID}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.comments);

export const getComment = commentID =>
  fetch(`${restURL}/comments/${commentID}`, { headers })
    .then(res => res.json())
    .then(data => data.comments);

/**
 * Call RESTful API to add a post to the backend server DB
 * @param {String} title
 * @param {String} body
 * @param {String} author
 * @param {String} category
 */
export const addPost = (title, body, author, category) => {
  let id = uuidv1()
  let timestamp = Date.now()
  fetch(`${restURL}/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, timestamp, title, body, author, category })
    })
    .then(res => res.json())
}
