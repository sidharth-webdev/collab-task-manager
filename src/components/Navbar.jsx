import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="flex justify-between p-4 border-b dark:bg-gray-800">
      <h1 className="font-bold">Task Manager</h1>
      <div className="flex gap-2">
        <span>{user.role}</span>
        <DarkModeToggle />
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
    </div>
  );
} 