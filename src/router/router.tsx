import { BrowserRouter, Routes, Route } from "react-router";
import { BlogTemplate } from "../blogTemplate";
import BlogDetail from "../pages/blogDetail/blogDetail";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogTemplate />} />
        <Route path="/blog" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
