import { configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './slices/post';
import { usersReducer } from './slices/users'
import { authReducer } from './slices/auth';
import { declarationsReducer } from './slices/declarations';
import { clientReducer } from './slices/client';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        auth: authReducer,
        declarations:declarationsReducer,
        client: clientReducer
    }
})

export default store;