import { Switch, Route } from 'react-router-dom'

import Home from './screens/Home'
import Services from './screens/Services'
import Login from './screens/Login'
import UserPage from './screens/UserPage'
import Cart from './screens/Cart'
import Contact from './screens/Contact'
import ServiceForm from './components/ServiceForm'
import ServiceScreen from './screens/ServiceScreen'
import Register from './screens/Register'
import UpdatePassword from './screens/UpdatePassword'
import Users from './screens/Users'
import Shipping from './screens/Shipping'
import PaymentMethod from './screens/PaymentMethod'
import PlaceOrder from './screens/PlaceOrder'
import Stress from './screens/Stress'
import Fitness from './screens/Fitness'
import Fertility from './screens/Fertility'
import NotesCalendar from './screens/NotesCalendar'

const Routes = () => (
  <Switch>
    <main>
      <Route path='/' component={Home} exact />
      <Route path='/services' component={Services} exact />
      <Route path='/service/:id' component={ServiceScreen} />
      <Route path='/login' component={Login} />
      <Route path='/user' component={UserPage} />
      <Route path='/stress' component={Stress} />
      <Route path='/fitness' component={Fitness} />
      <Route path='/fertility' component={Fertility} />
      <Route path='/notescalendar' component={NotesCalendar} />
      <Route path='/shoppingcart' component={Cart} />
      <Route path='/shipping' component={Shipping} />
      <Route path='/paymentmethod' component={PaymentMethod} />
      <Route path='/placeorder' component={PlaceOrder} />
      <Route path='/contact' component={Contact} />
      <Route path='/admin/users' component={Users} />
      <Route path='/admin/service' component={ServiceForm} />
      <Route path='/register' component={Register} />
      <Route path='/password/recover' component={UpdatePassword} />
      <Route
        path='/password/reset'
        render={({ match }) => (
          <UpdatePassword
            //@ts-ignore
            userId={match.params.userId}
            //@ts-ignore pull token off params
            token={match.params.token}
          />
        )}
      />
    </main>
  </Switch>
)

export default Routes
