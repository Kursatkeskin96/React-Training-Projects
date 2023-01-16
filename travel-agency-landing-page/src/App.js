import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Cards from './components/Cards';
import Headings from './components/Headings';
import London from './images/london.jpg'
import Barcelona from './images/barcelona.jpg'
import Capadocia from './images/capadocia.jpg'
import Customersh from './components/Customersh';
import Customers from './components/Customers';
import Randomgirl1 from './images/randomgirl1.jpg'
import Randomgirl2 from './images/randomgirl2.jpg'
import Randomman from './images/randomman.jpg'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Headings />
      <div className='card-container d-flex justify-content-evenly mt-2'>
      <Cards 
      title = "London"
      text = "A vibrant and cosmopolitan city, London is famous for its iconic landmarks such as Buckingham Palace, Big Ben and the London Eye."
      image =  {London}/>
      <Cards 
      title = "Barcelona"
      text = "A vibrant and colorful city, Barcelona is home to the famous works of architect Antoni Gaudi, such as the Sagrada Familia. "
      image = {Barcelona}
      />
      <Cards 
      title = "Cappadocia"
      text = "Explore the mystical landscape of Cappadocia, where erosion has sculpted unique fairy chimneys, cave dwellings and underground cities."
      image = {Capadocia}
      />
            </div>
      <Customersh />
      <div className='card-container d-flex justify-content-evenly mt-2'>
      <Customers 
      image = {Randomgirl1}
      name = "Sarah Johnson"
      comment = "I had the time of my life on my trip with your agency! Every detail was thoughtfully planned and executed perfectly." />
      <Customers 
      image = {Randomman}
      name = "Michael Smith"
      comment = "I've been on many vacations, but this one was by far the best thanks to your agency's top-notch service." />
      <Customers 
      image = {Randomgirl2}
      name = "Emily Davies"
      comment = "I was hesitant to book a trip with a new agency, but I'm so glad I did! Your team exceeded all of my expectations." />
    </div>
    <Footer />
    <hr className='container mt-3'></hr>
    <Footer2 />
    </div>
  );
}

export default App;
