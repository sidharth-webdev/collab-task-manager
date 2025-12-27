import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  const handleSignup = (e) => {
    e.preventDefault();

    // Get existing users or create empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    // Save new user
    const newUser = { email, role };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Auto login after signup
    login(email, role);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Role */}
        <select
          className="w-full mb-4 p-2 border rounded dark:bg-gray-700"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="manager">Manager</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>

        <p className="text-sm mt-3 text-center text-gray-500">
          Already have an account?  
          <span className="text-blue-500 cursor-pointer ml-1">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
