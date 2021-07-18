import { useSelector } from 'react-redux'

import MembersList from './MembersList'
import { AppState } from '../redux/types'

const Group = () => {
  const user = useSelector((state: AppState) => state.user)

  return (
    <div className='group'>
      {user &&
        user.group &&
        user.group.members &&
        user.group.members.length > 1 && (
          <h5 className='added-members'>Contacts</h5>
        )}
      {user &&
        user.group &&
        user.group.members &&
        user.group.members.length > 1 &&
        user.group.members.map((member: any, index) => (
          <MembersList
            key={member.id}
            member={member.firstName}
            role={member.role}
            index={index}
          />
        ))}
    </div>
  )
}

export default Group
