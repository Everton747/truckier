import { createStore } from 'redux';
import driversData from './drivers.json';


const stateStorage = localStorage.getItem('truckier_drivers');
const INITIAL_STATE = stateStorage ? JSON.parse(stateStorage) : driversData;

function drivers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_DRIVER':
      state = { ...state, data: [...state.data, action.driver] };
      localStorage.setItem('truckier_drivers', JSON.stringify(state));
      return state;
    case 'UPDATE_DRIVER':
      state.data = state.data.map(driver => driver.cpf === action.driver.cpf ? action.driver : driver);
      localStorage.setItem('truckier_drivers', JSON.stringify(state));
      return state;
    case 'TOGGLE_DRIVER':
      state.data =
      state.data.map(driver => driver.cpf === action.driver.cpf ? { ...driver, isEnable: !driver.isEnable } : driver);
      localStorage.setItem('truckier_drivers', JSON.stringify(state));
      return state;
    default:
      return state;
  }
}

const store = createStore(drivers);

export default store;
