import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "../contexts/AuthContext"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
