import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface INotif {
  severity: any;
  message: string;
  isOpen: boolean;
}

const initialState: INotif = {
  severity: '',
  message: '',
  isOpen: false,
};

export const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    addNotication: (state, action: PayloadAction<INotif>) => {
      state.severity = action.payload.severity;
      state.message = action.payload.message;
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { addNotication } = notifSlice.actions;
export default notifSlice.reducer;
