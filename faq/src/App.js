import { useState } from 'react'
import './App.css';

function App () {

  const [selected, setSelected] = useState (null)
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className = "wrapper">
      <div className = "body">
        {data.map((item, i) => (
          <div className = "item" key={i}>
            <div className = "title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className = {selected === i ? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: 'What types of travel does your agency offer?',
    answer: 'Our agency offers a wide range of travel options including luxury cruises, all-inclusive resorts, guided tours, and custom travel packages.',
  },
  {
    question: 'How do I make a reservation with your agency?',
    answer: 'To make a reservation with our agency, you can either give us a call at 555-555-5555 or fill out our online reservation form on our website. A representative will then be in contact with you to confirm your booking and assist with any additional needs or questions.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy varies depending on the type of travel booked. Please refer to the specific terms and conditions of your booking or contact us for more information. In general, cancellations made more than 30 days prior to departure will be refunded in full, while cancellations made within 30 days of departure may be subject to a cancellation fee.',
  },
  {
    question: 'Are flights included in the package prices?',
    answer: "This depends on the package you choose. Some of our packages include flights as part of the total price, while others may not. It's best to check the details of the package or contact us for more information.",
  },
  {
    question: 'Do you offer travel insurance?',
    answer: 'Yes, we do offer travel insurance as an add-on option for all of our packages. Our travel insurance covers trip cancellation, medical expenses, and other unexpected events. Contact us for more information and to purchase insurance for your trip.',
  },
]

export default App;