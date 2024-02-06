import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./screen/MainLayout";
import HomeScreen from "./screen/HomeScreen";
import Category from "./screen/Category";
import News from "./screen/News";
import Advertisment from "./screen/Advertisment";
import Uploads from "./screen/Uploads";
import CreateNews from "./screen/CreateNews";
import Home from "./screen/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Home/>} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path="category" element={<Category />} />
            <Route path="news" element={<News />} />
            <Route path="ads" element={<Advertisment />} />
            <Route path="uploads" element={<Uploads />} />
            <Route path="create" element={<CreateNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
