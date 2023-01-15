import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Cards from './components/Cards';
import Headings from './components/Headings';
import London from './components/london.jpg'
import Barcelona from './components/barcelona.jpg'
import Capadocia from './components/capadocia.jpg'
import Customersh from './components/Customersh';
import Customers from './components/Customers';
import Randomgirl1 from './components/randomgirl1.jpg'
import Randomgirl2 from './components/randomgirl2.jpg'
import Randomman from './components/randomman.jpg'
import Footer from './components/Footer'

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
      title = "Capadocia"
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
    </div>
  );
}

export default App;
