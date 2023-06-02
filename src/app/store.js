import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { pedidoReducer, plansReducer } from '../reducer/reducers';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  pedidos: pedidoReducer,
  plans: plansReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };