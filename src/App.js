import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ContentUnauth from "./components/ContentUnauth/ContentUnauth";
import LoginForm from "./components/LoginForm/LoginForm";
import Authenticate from "./components/Authenticate/Authenticate";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ContentUnauth />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-in/:email" element={<LoginForm />} />

          <Route path="/movies" element={<Authenticate />} />
          <Route path="/movies/:search/:page" element={<Authenticate />} />
          <Route path="/detail/:movieId" element={<Authenticate />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
