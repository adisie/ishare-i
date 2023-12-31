import { useState } from "react"
import {useDispatch} from 'react-redux'

// icons
import { MdCancelPresentation } from "react-icons/md"

// actions
import {groupsNaviator} from '../groupsSlice'

import groupProfile from '../../../assets/images/defaults/profiles/group-profile-avater-2.jpg'

const CreateNewGroup = () => {
    // states
    const [name,setName] = useState('')
    const [isPrivate,setIsPrivate] = useState(true)
    const [profile,setProfile] = useState(null)

    const [image,setImage] = useState('')

    // hooks
    const dispatch = useDispatch()

    // functions
    const profileInputChange = e => {
        console.log('SOMETHING')
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
        setProfile(file)
    }

    // cancel selection
    const cancelProfileSelection = () => {
        setImage('')
    }

    // name change 
    const nameChange = e => {
        setName(e.target.value)
    }

    const isPrivateChange = e => {
        if(e.target.value === 'private'){
            setIsPrivate(true)
        }else {
            setIsPrivate(false)
        }
    }

    // submit handler
    const submitHandler = () => {
        console.log({name,isPrivate,profile})
    }

    // cancel group creation
    const cancelGroupCreation = () => {
        setImage('')
        setProfile(null)
        setName('')
        setIsPrivate(true)
        dispatch(groupsNaviator('ACTIVE'))
    }

  return (
    <div className='new-group-form-container'>
        <section>
            <span>new group</span>
            <div className="input-control">
                <div className="input-container">
                    <div>
                        <label htmlFor="name">name: </label>
                        <input type="text" name="name" id="name" value={name} onChange={nameChange}/>
                    </div>
                    <div className="error">group name exist</div>
                </div>
                
            </div>
            <div className="input-control">
                <label htmlFor="type">type: </label>
                <select name="type" id="type" onChange={isPrivateChange}>
                    <option value="private">private</option>
                    <option value="public">public</option>
                </select>
            </div>
            <div className="input-control group-profile">
                <label htmlFor="profile">profile(opt): </label>
                <input type="file" name="profile" id="profile" hidden accept="image/*" onChange={profileInputChange}/>
                <div className="profile-label-con">
                    <label htmlFor="profile" className="profile-label">
                        <img src={image ? image : groupProfile} alt="group profile" />
                    </label>
                    {
                        image 
                        ?
                        <button onClick={cancelProfileSelection}><MdCancelPresentation /></button>
                        :
                        <></>
                    }
                </div>
            </div>
            <div className="btn-container">
                <button onClick={submitHandler}>create</button>
                {
                    name
                    ?
                    <button className="cancel-btn" onClick={cancelGroupCreation}>cancel</button>
                    :
                    <></>
                }
            </div>
        </section>
    </div>
  )
}

export default CreateNewGroup