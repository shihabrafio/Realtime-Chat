import { PrettyChatWindow } from 'react-chat-engine-pretty';

export const ChatsPage = (props) => {
  return (
    <div className='background'>
      <PrettyChatWindow 
        projectId="b735fdc3-f333-4f9a-ad8e-75a564bf3e59"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
      />
    </div>
  )
}
