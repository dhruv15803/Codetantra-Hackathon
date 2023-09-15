import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';

function App() {

  let companyName = 'ScholarshipDekho';

  return (
    <>
    <Navbar companyName={companyName}/>
    <Body companyName={companyName}/>
    </>
  );
}

export default App;
