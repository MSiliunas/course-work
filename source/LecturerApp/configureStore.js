import { createStore } from 'redux'
import app from './src/store/reducers'

export default function configureStore() {
    return createStore(app)
}