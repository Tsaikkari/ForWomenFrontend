const Members = ({ member, index, role }: any) => {
  return (
    <div className='members'>
      {role === 'member' && index === 2 && (
        <>
          <p className='role'>
            <strong>Läheiset</strong>
          </p>
          <li className='member'>{member}</li>
        </>
      )}

      {role === 'member' && index !== 2 && <li className='member'>{member}</li>}
    </div>
  )
}

export default Members