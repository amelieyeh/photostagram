// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',    // action name
    index                       // => ES6 => index: index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log("Dispatching!!!");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
