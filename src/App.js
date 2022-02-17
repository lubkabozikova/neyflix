import "./App.css";
import Layout from "./components/Layout/Layout";
import ContentUnauth from "./components/ContentUnauth/ContentUnauth";

function App() {
  return (
    <div className="App">
      <Layout>
        <ContentUnauth />
      </Layout>
    </div>
  );
}

export default App;
