import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import tasksReducer from './slices/tasksSlice';
import usersReducer from './slices/usersSlice';
import { loadState, saveState } from '../utils/localStorage';
import throttle from 'lodash/throttle';

// Загрузка состояния из localStorage
const persistedState = loadState();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    users: usersReducer,
  },
  preloadedState: persistedState, // Инициализация хранилища с сохраненным состоянием
});

// Сохранение состояния в localStorage при изменении, ограниченное по времени для оптимизации
store.subscribe(throttle(() => {
  saveState({
    counter: store.getState().counter,
    tasks: store.getState().tasks,
    users: store.getState().users,
  });
}, 1000)); // Сохраняем состояние не чаще, чем раз в секунду

export default store;
