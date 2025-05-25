import './card.css';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Card = forwardRef(({ card, h1ref }, refFromApp) => {
  const spanRef = useRef(null);

  const txtScale = () => {
    if (spanRef.current) {
      spanRef.current.style.fontSize = '30px';
    }
  };

  // Expose txtScale to parent
  useImperativeHandle(refFromApp, () => ({
    txtScale,
  }));

  return (
    <div className="card">
      <h1 ref={h1ref}>{card.title}</h1>
      <p>{card.body}</p>
      <span ref={spanRef}>UserID: {card.userId}</span>
      <button onClick={txtScale}>Click</button>
    </div>
  );
});

export default Card;





// import React, { useRef } from 'react';
// import "./card.css";

// function Card({ card }) {
//   const h1Ref = useRef(null);

//   const handleColorChange = () => {
//     if (h1Ref.current) {
//       h1Ref.current.style.color = 'red';
//     }
//   };

//   return (
//     <div className='card'>
//       <h1 ref={h1Ref}>{card.title}</h1>
//       <p>{card.body}</p>
//       <span>UserID: {card.userId}</span>
//       <button onClick={handleColorChange}>Change Color</button>
//     </div>
//   );
// }

// export default Card;
