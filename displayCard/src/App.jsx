import { useEffect, useState, useRef } from 'react';
import Card from "./component/Card.jsx";
import { helper } from '../helper/utilitis.js';

function App() {
  const [cards, setCards] = useState([]);
  const titleRefs = useRef([]);
  const cardRefs = useRef([]);

  const fetchData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let text = await data.json();
    helper.display(text, setCards, cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRef = () => {
    titleRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.color = 'red';
      }
    });

    cardRefs.current.forEach((ref) => {
      if (ref?.txtScale) {
        ref.txtScale();
      }
    });
  };

  return (
    <>
      <button onClick={handleRef}>Change All Titles to Red</button>
      <div className="container">
        {cards.map((item, index) => (
          <Card
            key={item.id}
            card={item}
            h1ref={(el) => titleRefs.current[index] = el}
            ref={(el) => cardRefs.current[index] = el}
          />
        ))}
      </div>
    </>
  );
}

export default App;
