import React, { useContext } from 'react';
import { counterContext, objectContext } from '../context/context';
import Component1 from './Component1';

function Cards() {
  const counter = useContext(counterContext);
  const object = useContext(objectContext);

  function handleClick() {
    counter.setCount(prevCount => prevCount + 1);
    object.setObject(prevObject => ({ ...prevObject, x: 2 }));
  }

  return (
    <div>
      <h2>Cards Component</h2>
      <button onClick={handleClick}>Increment Count and Update Object</button>
      <div>
        <Component1 />
      </div>
    </div>
  );
}

export default Cards;