import React from 'react'

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Posts Loading....</h2>
  }
  
  return (
    <div>
      {
        posts.map((post) => (
          <ul className="border">
            <li key={post.id} className="p-2">
              {post.title}
            </li>

          </ul>
        ))
      }
    </div>
  )
}

export default Posts