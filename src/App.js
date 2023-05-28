import './App.css';
import ProfilePhoto from './components/Profile/ProfilePhoto';
import FullName from './components/Profile/FullName';
import Address from './components/Profile/Adress';

function App() {
  return (
    <div className="App">
      <div>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
    </div>
  );
}

export default App;
