import { nanoid } from 'nanoid';
import { Context } from '../App';
import { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { CHANGE, CREATE, UPDATE } from '../store/reducer';
import { inpDivs, fnx, lnx, pnx, eax } from '../store/validation';

const Form = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);

  const handleChange = (params) => (e) =>
    dispatch({
      type: CHANGE,
      payload: { ...state.inputs, [params]: e.target.value },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fn, ln, pn, ea } = state.inputs;
    const inp = { fn: fnx(fn), ln: lnx(ln), pn: pnx(pn), ea: eax(ea) };
    if (!inp.fn) return toast.warn('Invalid first name!');
    if (!inp.ln) return toast.warn('Invalid last name!');
    if (!inp.pn) return toast.warn('Invalid phone number!');
    if (!inp.ea) return toast.warn('Invalid email address');
    if (state.editID) {
      dispatch({ type: UPDATE, payload: inp });
    } else {
      dispatch({ type: CREATE, payload: { ...inp, id: nanoid() } });
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        {inpDivs.map((i) => (
          <div key={i.id}>
            <label htmlFor={i.id}>{i.label}</label>
            <input
              value={eval(`state.inputs.${i.id}`)}
              onChange={handleChange(i.id)}
              id={i.id}
              type='text'
              spellCheck='false'
            />
          </div>
        ))}
        <div>
          {state.editID ? (
            <button type='submit'>Edit</button>
          ) : (
            <button type='submit'>Submit</button>
          )}
        </div>
      </section>
      <Link to='/' className='link form'>
        <span>&times;</span>
      </Link>
      <ToastContainer autoClose={3000} position='top-center' />
    </form>
  );
};

export default Form;
