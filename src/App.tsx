import Footer from "./home/footer";
import Header from "./home/header";
import { Router } from "./router/router";
import { ThemeProvider } from "./theme/themeContext";

//TODO: add dark mode
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
        <Header />
        <Router />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
