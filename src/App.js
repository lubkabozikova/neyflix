import "./App.css";
import Layout from "./components/Layout/Layout";
import ContentUnauth from "./components/ContentUnauth/ContentUnauth";
import LoginForm from "./components/LoginForm/LofinForm";

function App() {
  return (
    <div className="App">
      <Layout>
        <ContentUnauth />
        {/* <LoginForm /> */}
      </Layout>
    </div>
  );
}

export default App;
