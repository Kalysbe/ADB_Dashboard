import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/post';
import { usersReducer } from './slices/users'
import { authReducer } from './slices/auth';
import { declarationsReducer } from './slices/declarations';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        auth: authReducer,
        declarations:declarationsReducer
    }
})

export default store;