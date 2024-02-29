import './App.css';
import Blog from './blog/Blog'
import Technology from './blog/pagesBlog/Technology'
import Design from './blog/pagesBlog/Design'
import Culture from './blog/pagesBlog/Culture'
import Health from './blog/pagesBlog/Health'
import Opinion from './blog/pagesBlog/Opinion'
import Politics from './blog/pagesBlog/Politics'
import Science from './blog/pagesBlog/Science'
import Style from './blog/pagesBlog/Style'
import Travel from './blog/pagesBlog/Travel'
import Business from './blog/pagesBlog/Business'


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route index element={<Blog/>}/>
        <Route path = "Technology" element={<Technology/>}/>
        <Route path = "Design" element={<Design/>}/>
        <Route path = "Culture" element={<Culture/>}/>
        <Route path = "Health" element={<Health/>}/>
        <Route path = "Opinion" element={<Opinion/>}/>
        <Route path = "Politics" element={<Politics/>}/>
        <Route path = "Science" element={<Science/>}/>
        <Route path = "Style" element={<Style/>}/>
        <Route path = "Travel" element={<Travel/>}/>
        <Route path = "Business" element={<Business/>}/>
        <Route path = "*" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
