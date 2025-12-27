import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TaskManager from "./pages/TaskManager";
import Navbar from "./components/Navbar";

export default function App() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <>
      <Navbar />
      <Dashboard />
      <TaskManager />
    </>
  );
}
