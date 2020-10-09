import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import auth from 'store/auth';

export default () => {
  const name = useSelector(state => state.auth.name);
  const dispatch = useDispatch();

  const setAuth = (id, name) =>
    dispatch(auth.actions.setAuth({ id, name }));

  return (
    <>
      <h1>Page 1</h1>
      <p>
        Logged in as user named {name}
        <br />
        <button
          type="button"
          onClick={() => setAuth(0, 'Guest')}
        >
          Set Guest Login
        </button>
        <button
          type="button"
          onClick={() => setAuth(1, 'Admin')}
        >
          Set Admin Login
        </button>
      </p>
    </>
  );
};