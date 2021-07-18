import Customer from './Customer'
import Members from './Members'

const MembersList = ({
  member,
  index,
  role,
}: any) => {
  return (
    <ul className='members-list'>
      {role === 'customer' && (
        <Customer
          member={member}
        />
      )}
      <Members member={member} index={index} role={role} />
    </ul>
  )
}

export default MembersList
