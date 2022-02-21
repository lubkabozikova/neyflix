import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ContentUnauth from "./components/ContentUnauth/ContentUnauth";
import LoginForm from "./components/LoginForm/LoginForm";
import ContentAuth from "./components/ContentAuth/ContentAuth";
import Detail from "./components/Detail/Detail";
import AccessDenied from "./components/AccessDenied/AccessDenied";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<ContentUnauth />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-in/:email" element={<LoginForm />} />
          <Route path="denied" element={<AccessDenied />} />

          <Route path="/movies" element={<ContentAuth />} />
          <Route path="/movies/:movieId" element={<Detail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
