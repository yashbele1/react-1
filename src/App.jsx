import Form from './components/Form';
import Layout from './components/Layout';
import { useReducer, createContext } from 'react';
import { reducer, initState } from './store/reducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export const Context = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/form' element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
