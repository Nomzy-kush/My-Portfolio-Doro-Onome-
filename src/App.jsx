import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";
import Blog from "./components/Blog";
import Article from "./components/canvas/Article";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Portfolio Route */}
        <Route
          path="/"
          element={
            <div className="relative z-0">
              <div>
                <Navbar />
                <Hero />
              </div>

              <div className="bg-about bg-cover bg-center bg-no-repeat">
                <About />
              </div>

              <Projects path="/projects" />

              <div
                className="bg-experience bg-cover bg-center bg-no-repeat 
                rounded-tl-[150px] rounded-br-[150px]"
              >
                <div
                  className="bg-experienceLight bg-cover bg-center 
                  bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
                >
                  <Experience />
                </div>
              </div>

              <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                <Tech />
              </div>

              <div className="relative z-0">
                <Contact />
              </div>
            </div>
          }
        />

        {/* Blog List Route */}
        <Route path="/blog" element={<Blog />} />

        {/* Single Blog Article Route */}
        <Route path="/blog/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
