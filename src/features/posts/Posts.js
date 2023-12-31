

import PostsHeader from "./PostsHeader"
import PostsContent from "./PostsContent"

const Posts = () => {
  return (
    <div className="flex-grow flex flex-col">
        <PostsHeader />
        <PostsContent />
    </div>
  )
}

export default Posts