import Footer from "./home/footer";
import Header from "./home/header";
import { Router } from "./router/router";
import { useThemeContext } from "./theme/themeContext";

//TODO: add dark mode
function App() {
  const { isDarkMode } = useThemeContext();
  const bgColor = isDarkMode
    ? "min-h-screen bg-linear-to-br from-gray-800 via-gray-900 to-gray-950"
    : "min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50";
  return (
    <div className={bgColor}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
