import { configureStore } from '@reduxjs/toolkit';

import usehomeslice from './usehomeslice';


export default configureStore({
  reducer: {
    home: usehomeslice,
  }
})