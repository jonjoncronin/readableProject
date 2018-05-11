const restURL = "http://localhost:3001";

// Generate a unique token for accessing data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

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
export const getAllPosts = () => {
  let fetchPromise = fetch(`${restURL}/posts`, { headers })
    .then(res => res.json());
  return fetchPromise;
}
/**
 * Call RESTful API to backend server to retrieve posts for a specific category.
 * @param  {String} category
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
export const getPostsForCategory = category =>
  fetch(`${restURL}/${category}/posts`, { headers }).then(res => res.json());

/**
 * Call RESTful API to backend server to retrieve a specific post.
 * @param  {String} postID uuid of the post
 * @return {Object} a post object in the form of
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
export const getPost = postID =>
  fetch(`${restURL}/posts/${postID}`, { headers }).then(res => res.json());

/**
 * Call RESTful API to backend server to retrieve all comments for a specific
 * post.
 * @param  {String} postID uuid of parent post
 * @return {Array}  an array of comment objects in the form of
 * { author,
 *   body,
 *   deleted,
 *   id,
 *   parentDeleted,
 *   parentId,
 *   timestamp,
 *   voteScore
 * }
 */
export const getCommentsForPost = postID => {
  return fetch(`${restURL}/posts/${postID}/comments`, { headers }).then(res =>
    res.json()
  );
}
/**
 * Call RESTful API to backend server to retrieve a specific comment
 * @param  {String} commentID uuid of the comment
 * @return {Object} a comment object in the form of
 * { author,
 *   body,
 *   deleted,
 *   id,
 *   parentDeleted,
 *   parentId,
 *   timestamp,
 *   voteScore
 * }
 */
export const getComment = commentID =>
  fetch(`${restURL}/comments/${commentID}`, { headers }).then(res =>
    res.json()
  );

/**
 * Call RESTful API to add a post to the backend server DB
 * @param {String} title
 * @param {String} body
 * @param {String} author
 * @param {String} category
 * @return {Promise} - a Promise object indicating the result of the async
 *                     operation being made.
 */
export const addPost = newPost => {
  let fetchPromise = fetch(`${restURL}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  }).then(res => res.json());
  return fetchPromise;
};

/**
 * Call RESTful API to add a comment for a specific post to the backend server
 * DB.
 * @param {[type]} body
 * @param {[type]} author
 * @param {[type]} parentId uuid of the parent post
 */
export const addCommentToPost = newComment => {
  let fetchPromise = fetch(`${restURL}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newComment)
  }).then(res => res.json());
  return fetchPromise;
};

/**
 * Call RESTful API to add a vote for a specific post to the backend server DB.
 * @param  {String} postID uuid of the post to vote on
 * @param  {String} voteOption "upVote" or "downVote"
 * @return {object} the jsonified object of the fetch response. In this case
 * the post object for the post being voted on
 */
export const voteOnPost = (postID, voteOption) => {
  let fetchPromise = fetch(`${restURL}/posts/${postID}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: voteOption })
  }).then(res => res.json());
  return fetchPromise;
};

/**
 * Call RESTful API to add a vote for a specific comment to the backend server
 * DB.
 * @param  {String} commentID uuid of the comment to vote on
 * @param  {String} voteOption "upVote" or "downVote"
 * @return {object} the jsonified object of the fetch response. In this case
 * the comment object for the comment being voted on
 */
export const voteOnComment = (commentID, voteOption) => {
  let fetchPromise = fetch(`${restURL}/comments/${commentID}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option: voteOption })
  }).then(res => res.json());
  return fetchPromise;
};

/**
 * Call RESTful API to edit an existing post to the backend server DB
 * @param  {String} postID uuid of the post
 * @param  {String} title
 * @param  {String} body
 * @return {object} the jsonified object of the fetch response. In this case
 * the post object for the post being editted
 */
export const editPost = (postID, title, body) => {
  let fetchPromise = fetch(`${restURL}/posts/${postID}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ postID, title, body })
  }).then(res => res.json());
  return fetchPromise;
};

/**
 * Call RESTful API to edit an existing comment to the backend server DB
 * @param  {String} commentID uuid of the comment
 * @param  {String} body
 * @return {Object} the jsonified object of the fetch response. In this case
 * the comment object for the comment being editted
 */
export const editComment = (commentID, body) => {
  let timestamp = Date.now();
  fetch(`${restURL}/comments/${commentID}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ commentID, timestamp, body })
  }).then(res => res.json());
};

/**
 * Call RESTful API to delete an existing post on the backend server DB.
 * NOTE - the post.deleted field is set on the object but not actually removed
 *        from memory. Additionally each child comment to this post is also
 *        "deleted" but the comment.deleted field being set.
 * @param  {String} postID uuid of the post to be deleted
 * @return {Object} the jsonified object of the fetch response. In this case
 * the post object for the post being "deleted"
 */
export const deletePost = postID => {
  let fetchPromise = fetch(`${restURL}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
  return fetchPromise;
};

/**
 * Call RESTful API to delete an existing comment on the backend server DB.
 * NOTE - the comment.deleted field is set on the object but not actually
 *        removed from memory.
 * @param  {String} commentID uuid of the comment to be deleted
 * @return {Object} the jsonified object of the fetch response. In this case
 * the comment object for the comment being "deleted"
 */
export const deleteComment = commentID => {
  let fetchPromise = fetch(`${restURL}/comments/${commentID}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
  return fetchPromise;
};
