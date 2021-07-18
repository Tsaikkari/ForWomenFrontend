import RegisterCustomerForm from '../components/RegisterCustomerForm'
import FormContainer from '../components/FormContainer'
import StepsHeader from '../components/StepsHeader'

const Register = () => {
  return (
    <>
    <StepsHeader step1 step2 user={1} payment={1} account={1}/>
    <FormContainer>
      <RegisterCustomerForm />
    </FormContainer>
    </>
  )
}

export default Register
