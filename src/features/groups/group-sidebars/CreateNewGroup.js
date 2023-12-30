
const CreateNewGroup = () => {
  return (
    <ul>
        <li>
        <div className='group-name-profile'>
            <img src={defaultGroupProfile} alt=" group profile" style={{width: '24px',height: '24px'}}/>
            <span>group</span>
        </div>
        <div className='group-auth-btn'>
            <button>leave</button>
        </div>
        </li>
        <li>
        <div className='group-name-profile'>
            <img src={defaultGroupProfile} alt=" group profile" style={{width: '24px',height: '24px'}}/>
            <span>Create New Group</span>
        </div>
        <div className='group-auth-btn'>
            <button>leave</button>
        </div>
        </li>
    </ul>
  )
}

export default CreateNewGroup