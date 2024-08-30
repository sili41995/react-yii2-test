import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from '@/redux/contacts/contactsSlice';
import authReducer from '@/redux/auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistedReducer,
});

export default rootReducer;
