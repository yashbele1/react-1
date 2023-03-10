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
export const reducer = (state, action) => {
  if (action.type === LO_STO) {
    const get = localStorage.getItem('users');
    const users = get ? JSON.parse(get) : [];
    return { ...state, users };
  }
  if (action.type === INIT) {
    return {
      ...state,
      editID: null,
      inp: { fn: '', ln: '', pn: '', ea: '' },
    };
  }
  if (action.type === CHANGE) {
    return { ...state, inp: action.payload };
  }
  if (action.type === CREATE) {
    const users = [...state.users, action.payload];
    localStorage.setItem('users', JSON.stringify(users));
    return {
      ...state,
      users,
      inp: { fn: '', ln: '', pn: '', ea: '' },
    };
  }
  if (action.type === EDIT) {
    return { ...state, inp: action.payload, editID: action.payload.id };
  }
  if (action.type === UPDATE) {
    const { fn, ln, pn, ea } = action.payload;
    const users = state.users.map((i) =>
      i.id === state.editID ? { ...i, fn, ln, pn, ea } : i
    );
    localStorage.setItem('users', JSON.stringify(users));
    return {
      ...state,
      users,
      editID: null,
      inp: { fn: '', ln: '', pn: '', ea: '' },
    };
  }
  if (action.type === DELETE) {
    const users = state.users.filter((i) => i.id !== action.payload);
    localStorage.setItem('users', JSON.stringify(users));
    return { ...state, users };
  }
};
