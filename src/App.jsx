import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Components/Home";
import News from "./Pages/News";
import Monuments from "./Pages/Monuments";
import Artifacts from "./Pages/Artifacts";
import Museums from "./Pages/Museums";
import Library from "./Pages/Library";
import AboutUs from "./Pages/AboutUs";
import Layouts from "./Layouts/Layouts";
import NewsDetails from "./Details/NewsDetails";
import MonumentsDetails from "./Details/MonumentsDetails";
import ArtifactsDetails from "./Details/ArtifactsDetails";
import MuseumsDetails from "./Details/MuseumsDetails";
import ScrollToTop from "./Components/ScrollToTop";

axios.defaults.baseURL = "http://subdomain.eskitoshkent.uz/";

function App() {
  return (
    <div className="">
      <ScrollToTop />
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/monuments" element={<Monuments />} />
          <Route path="/artifacts" element={<Artifacts />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<AboutUs />} />

          {/* DETAILS */}

          <Route path="/newsDetail/:id" element={<NewsDetails />} />
          <Route path="/monumentsDetail/:id" element={<MonumentsDetails />} />
          <Route path="/artifactsDetail/:id" element={<ArtifactsDetails />} />
          <Route path="/museumsDetail/:id" element={<MuseumsDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
