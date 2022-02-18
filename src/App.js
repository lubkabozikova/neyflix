import "./App.css";
import Layout from "./components/Layout/Layout";
import ContentUnauth from "./components/ContentUnauth/ContentUnauth";
import LoginForm from "./components/LoginForm/LoginForm";
import MainPage from "./components/ContentAuth/MainPage";
import Detail from "./components/ContentAuth/Detai";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <ContentUnauth /> */}
        {/* <LoginForm /> */}
        <MainPage />
        {/* <Detail /> */}
      </Layout>
    </div>
  );
}

export default App;
