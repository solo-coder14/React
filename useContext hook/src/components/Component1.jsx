import React, { useContext } from 'react';
import { counterContext, objectContext } from '../context/context';

function Component1() {
  const counter = useContext(counterContext);
  const object = useContext(objectContext);

  return (
    <div>
      <div>Count from Component1: {counter.count}</div>
      <div>Object from Component1: {JSON.stringify(object.object)}</div>
      {/* Or to access specific property: */}
      <div>Name from object: {object.object.name}</div>
    </div>
  );
}

export default Component1;