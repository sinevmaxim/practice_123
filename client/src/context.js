import { createContext } from 'react';
import Store from './store/store.js';

export const store = new Store();

export const Context = createContext({ store });