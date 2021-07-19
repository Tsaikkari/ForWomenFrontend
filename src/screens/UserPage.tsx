import { useSelector } from 'react-redux'

import SubNavBar from '../components/SubNavBar'
import Tab from '../components/Tab'
import Order from '../components/Order'
import UserForm from '../components/UserForm'
import MemberForm from '../components/MemberForm'
//import { AppState } from '../redux/types'

const UserPage = () => {
  //const user = useSelector((state: AppState) => state.user)
  //const { orders } = user
  //const paid = orders?.map((order: any) => order.isPaid)

  return (
    <div className='user-page'>
      <SubNavBar />
        <Tab
          orders={<Order />}
          userForm={<UserForm />}
          memberForm={<MemberForm />}
        />
    </div>
  )
}

export default UserPage
