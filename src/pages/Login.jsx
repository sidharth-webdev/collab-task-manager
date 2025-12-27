import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 shadow w-80">
        <h2 className="text-xl mb-4">Login</h2>

        <button
          onClick={() => login("manager@mail.com", "manager")}
          className="w-full bg-blue-500 text-white p-2 mb-2"
        >
          Login as Manager
        </button>

        <button
          onClick={() => login("user@mail.com", "user")}
          className="w-full bg-green-500 text-white p-2"
        >
          Login as User
        </button>
      </div>
    </div>
  );
}