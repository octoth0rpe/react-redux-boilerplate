import * as React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const id = useSelector(state => state.auth.id);
  return (
    <>
      <h1>Page 2</h1>
      <p>
        Logged in as user with id {id}
      </p>
    </>
  );
};