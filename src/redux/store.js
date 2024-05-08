import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/post';
import { usersReducer } from './slices/users'
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        auth: authReducer
    }
})

export default store;