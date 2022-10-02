import React from 'react'
import './ProfileModal.css'
import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModal = ({modalOpened , setModalOpened}) => {
    const theme = useMantineTheme();
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened = {modalOpened}
            onClose={()=>setModalOpened(false)}
        >
            {/* Modal content */}
            <form className='infoForm' action="">
                <h3>Your infor</h3>
                <div>
                    <input type="text" 
                    className='infoInput'
                    name='firstname'
                    placeholder='First Name'
                    />
                    <input type="text" 
                    className='infoInput'
                    name='lastname'
                    placeholder='Last Name'
                    />
                </div>
                <div>
                    <input type="text" 
                    className='infoInput'
                    name='livesin'
                    placeholder='Lives In'
                    />
                    <input type="text" 
                    className='infoInput'
                    name='country'
                    placeholder='Country'
                    />
                </div>
                <div>
                    <input type="text" 
                    className='infoInput'
                    name='relationstatus'
                    placeholder='Relationship Status'
                    />
                </div>
                <div>
                    Profile Image
                    <input type="file" name='profileimg'/>
                    Cover Image
                    <input type="file" name='coverimg' />
                </div>
                <button className='button infoButton'>Update</button>
            </form>
        </Modal>
    )
}

export default ProfileModal
