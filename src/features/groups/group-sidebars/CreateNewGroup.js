
const CreateNewGroup = () => {
  return (
    <div>
        <form>
            <h3>New Group</h3>
            <div className="input-control">
                <input type="text" name="name" placeholder="group name" />
                <div className="error name"></div>
            </div>
            <div className="input-control">
                <label htmlFor="private"></label>
                <input type="checkbox" name="private" id="private" />
            </div>
            <div className="input-control">
                <input type="file" name="profile" id="profile" hidden accept="image/*" />
                <label htmlFor="profile">pic</label>
                <div className="error profile"></div>
            </div>
            <div className="btn-control">
                <button>create</button>
                <button>cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CreateNewGroup