import { Context } from '../App';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { LO_STO, DELETE, EDIT, INIT } from '../store/reducer';

const Table = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({ type: LO_STO });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((i, j) => (
            <tr
              key={i.id}
              style={{
                backgroundColor: j % 2 === 0 ? 'white' : '#b2dfff4f',
              }}
            >
              <td>{i.fn}</td>
              <td>{i.ln}</td>
              <td>{i.pn}</td>
              <td>{i.ea}</td>
              <td>
                <FaRegEdit
                  onClick={() => {
                    dispatch({ type: EDIT, payload: i });
                    navigate('/form');
                  }}
                  className='edit-icon'
                />
                <FaRegTrashAlt
                  onClick={() => dispatch({ type: DELETE, payload: i.id })}
                  className='delete-icon'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        onClick={() => dispatch({ type: INIT })}
        to='/form'
        className='link table'
      >
        <span>+</span>
      </Link>
    </>
  );
};

export default Table;
