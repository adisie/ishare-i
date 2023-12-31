
const PostsContent = () => {
  return (
    <div className="flex-grow bg-gray-200 relative">
        <p>
            posts content
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores facilis ducimus nemo, dolor dicta magni assumenda facere optio ab, laborum eveniet distinctio.
        </p>
        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-[.55] z-10 sm:hidden" id="posts-drop-shadow"></div>
    </div>
  )
}

export default PostsContent