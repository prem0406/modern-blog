import { BrowserRouter, Routes, Route } from "react-router";
import { BlogTemplate } from "../blogTemplate";
import BlogDetail from "../pages/blogDetail/blogDetail";
import Answers from "../pages/answers/answers";
import About from "../pages/about/about";
import Header from "../home/header";
import Footer from "../home/footer";
import QuestionForm from "../pages/questionForm/questionForm";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BlogTemplate />} />
        <Route path="/blog" element={<BlogDetail />} />
        <Route path="/question/:id" element={<Answers />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<QuestionForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
