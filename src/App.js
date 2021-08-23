import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import myimg from './img/sailboat.svg'
import PropTypes from 'prop-types'

function App() {
  const data={
    FullName:'Harrabi oussema',
    bio:'.....',
    profession:'free-lance'
  }
  return (
    <div className="App">
    <Profile data={data}>
      <img src={myimg} alt='img' />
    </Profile>
    </div>
  );
}

export default App;
