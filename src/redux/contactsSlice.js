import { createSlice, nanoid } from '@reduxjs/toolkit';

let contactsInitialState = [];

if (localStorage.getItem('contacts')) {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  contactsInitialState = [...savedContacts];
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      //   state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
