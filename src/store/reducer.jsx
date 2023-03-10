// INITIAL STATE // INITIAL STATE // INITIAL STATE
export const initState = {
  users: [],
  editID: null,
  inp: { fn: '', ln: '', pn: '', ea: '' },
};

// ACTIONS // ACTIONS // ACTIONS
export const INIT = 'INIT';
export const EDIT = 'EDIT';
export const CHANGE = 'CHANGE';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const LO_STO = 'LO_STO';

// REDUCER // REDUCER // REDUCER
export const reducer = (state, { type, payload }) => {
  if (type === LO_STO) {
    const get = localStorage.getItem('users');
    const users = get ? JSON.parse(get) : [];
    return { ...state, users };
  }
  if (type === INIT) {
    return {
      ...state,
      editID: null,
      inp: { fn: '', ln: '', pn: '', ea: '' },
    };
  }
  if (type === CHANGE) {
    return { ...state, inp: payload };
  }
  if (type === CREATE) {
    const users = [...state.users, payload];
    localStorage.setItem('users', JSON.stringify(users));
    return {
      ...state,
      users,
      inp: { fn: '', ln: '', pn: '', ea: '' },
    };
  }
  if (type === EDIT) {
    return { ...state, inp: payload, editID: payload.id };
  }
  if (type === UPDATE) {
    const users = state.users.map((i) =>
      i.id === state.editID ? (i = payload) : i
    );
    localStorage.setItem('users', JSON.stringify(users));
    return {
      ...state,
      users,
      editID: null,
      inp: { fn: '', ln: '', pn: '', ea: '' },
    };
  }
  if (type === DELETE) {
    const users = state.users.filter((i) => i.id !== payload);
    localStorage.setItem('users', JSON.stringify(users));
    return { ...state, users };
  }
};
