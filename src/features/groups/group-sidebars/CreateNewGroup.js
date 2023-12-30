
const CreateNewGroup = () => {
  return (
    <div className='new-group-form-container'>
        <section>
            <span>new group</span>
            <div className="input-control">
                <div className="input-container">
                    <div>
                        <label htmlFor="name">name: </label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="error">group name exist</div>
                </div>
                
            </div>
            <div className="input-control">
                <label htmlFor="type">type: </label>
                <select name="type" id="type">
                    <option value="private">private</option>
                    <option value="public">public</option>
                </select>
            </div>
            <div className="input-control">
                <label htmlFor="profile">profile(optional): </label>
                <div>
                    <img src="" alt="" />
                    <button>I</button>
                </div>
            </div>
            <div className="btn-container">
                <button>create</button>
                <button>cancel</button>
            </div>
        </section>
    </div>
  )
}

export default CreateNewGroup