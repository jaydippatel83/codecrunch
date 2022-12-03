import logo from './logo.svg';
import './App.css';
import Home from './component/pages/HomePage/Home';
import QuestionDetail from './component/pages/QuestionDetail/QuestionDetail';
import UserProfile from './component/pages/UserProfile/UserProfile';
import AskQuestion from './component/pages/AskQuestion/askQuestion'; 
import WorldCoin from './component/pages/WorldCoinLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/pages/Header';
import Footer from './component/pages/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
