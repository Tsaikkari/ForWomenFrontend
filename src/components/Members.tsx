const Members = ({ member, index, role }: any) => {
  return (
    <div className='members'>
      {role === 'member' && index === 1 && (
        <>
          <p className='role'>
            <strong>Members</strong>
          </p>
          <li className='member'>{member}</li>
        </>
      )}

      {role === 'member' && index !== 1 && <li className='member'>{member}</li>}
    </div>
  )
}

export default Members
