import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { userSlice } from "./user/user.slice"
import { cartSlice } from "./cart/cart.slice"

const persistConfig = {
    key: 'amazon',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    user: userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: GetDefaultMiddleware => 
        GetDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const  persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>