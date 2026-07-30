import { BrowserRouter, Routes, Route } from "react-router";
import { BlogTemplate } from "../blogTemplate";
import Answers from "../pages/answers/answers";
import About from "../pages/about/about";
import Header from "../home/header";
import Footer from "../home/footer";
import QuestionForm from "../pages/questionForm/questionForm";
import QuestionList from "../pages/interviewQuestions/questionList";
import ArticleDetail from "../pages/articleDetail/articleDetail";
import ProtectedRoute from "../components/ProtectedRoute";
import LoginPage from "../pages/login/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BlogTemplate />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/question/:id" element={<Answers />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/form" element={<QuestionForm />} />
        </Route>

        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
