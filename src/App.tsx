import Footer from "./home/footer";
import Header from "./home/header";
import { Router } from "./router/router";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
