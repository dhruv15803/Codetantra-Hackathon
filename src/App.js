import './App.css';
import Body from './Components/Body';
import CountryScholarships from './Components/CountryScholarships';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import UserPreference from './Components/UserPreference';
import AppliedScholarships from './Components/AppliedScholarships';

function App() {

  let companyName = 'ScholarshipDekho';

  return (
    <>
    <BrowserRouter>
    <Navbar companyName={companyName}/>
    <Routes>
      <Route exact path='/' element={<Body companyName={companyName}/>}/>
      <Route exact path='/uk' element={<CountryScholarships country='united-kingdom'/>}/>
      <Route exact path='/us' element={<CountryScholarships country='united-states'/>}/>
      <Route exact path='/Canada' element={<CountryScholarships country='canada'/>}/>
      <Route exact path='/userPreferences' element={<UserPreference/>}/>
      <Route exact path='/Applied' element={<AppliedScholarships/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
