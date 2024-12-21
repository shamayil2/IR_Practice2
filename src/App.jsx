import { useState } from 'react';
export default function App() {
  const [show, setShow] = useState(true);
  const questions = [
    {
      id: 1,
      question: 'Favorite Color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
    },
    {
      id: 2,
      question: 'Favorite Animal?',
      options: ['Dog', 'Cat', 'Bird', 'Fish'],
    },
    {
      id: 3,
      question: 'Favorite Food?',
      options: ['Pizza', 'Burger', 'Pasta', 'Salad'],
    },
  ];

  return (
    <>
      <h2>Polling App</h2>
      {show && (
        <div>
          {questions.map((question) => (
            <>
              <h3>{question.question}</h3>
              <ul>
                {question.options.map((option) => (
                  <li>
                    <input type="radio" />
                    {option}{' '}
                  </li>
                ))}
              </ul>
            </>
          ))}
          <button onClick={() => setShow(false)}>Submit</button>
        </div>
      )}
      {show === false && <h2>Thank You for Participating!</h2>}
    </>
  );
}
