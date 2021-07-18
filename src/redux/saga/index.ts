import { all } from 'redux-saga/effects'
import userWatcher from './user'
import usersWatcher from './users'
import servicesWatcher from './services'
import resourcesWatcher from './resources'
import orderWatcher from './order'

export default function* rootSaga() {
    yield all([...userWatcher, ...usersWatcher, ...servicesWatcher, ...resourcesWatcher, ...orderWatcher ])
}