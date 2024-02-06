import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./screen/MainLayout";
import HomeScreen from "./screen/HomeScreen";
import Category from "./screen/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path="category" element={<Category />} />
            <Route path="news" element={<Category />} />
            <Route path="ads" element={<Category />} />
            <Route path="uploads" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
