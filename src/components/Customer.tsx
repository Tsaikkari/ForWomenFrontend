const Customer = ({ member }: any) => {
  return (
    <>
      <p className='role'>
        <strong>Customer</strong>
      </p>

      <li className='membership'>{member}</li>
    </>
  )
}

export default Customer
