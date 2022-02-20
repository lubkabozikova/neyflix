import "./App.css";
import Layout from "./components/Layout/Layout";
import ContentUnauth from "./components/ContentUnauth/ContentUnauth";
import LoginForm from "./components/LoginForm/LoginForm";
import ContentAuth from "./components/ContentAuth/ContentAuth";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <ContentUnauth /> */}
        {/* <LoginForm /> */}
        {/* <ContentAuth /> */}
        <Detail />
      </Layout>
    </div>
  );
}

export default App;
