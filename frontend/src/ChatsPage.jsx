import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export const ChatsPage = (props) => {
  return (
    <div className='background'>
      <PrettyChatWindow 
        projectId={import.meta.env.project_id}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
      />
    </div>
  )
}
