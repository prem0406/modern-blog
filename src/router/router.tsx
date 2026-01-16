import { BrowserRouter, Routes, Route } from "react-router";
import { BlogTemplate } from "../blogTemplate";
import BlogDetail from "../pages/blogDetail/blogDetail";
import Answers from "../pages/answers/answers";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogTemplate />} />
        <Route path="/blog" element={<BlogDetail />} />
        <Route path="/question/:id" element={<Answers />} />
      </Routes>
    </BrowserRouter>
  );
};
