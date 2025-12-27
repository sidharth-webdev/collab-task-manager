import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";

export default function TaskManager() {
  const { user } = useAuth();
  const { addTask } = useTasks();

  if (user.role !== "manager") return <p className="p-6">Access Denied</p>;

  return (
    <div className="p-6">
      <button
        onClick={() =>
          addTask({
            id: Date.now(),
            title: "New Task",
            assignedTo: "user@mail.com",
            status: "pending",
          })
        }
        className="bg-blue-500 text-white p-2"
      >
        Create Task
      </button>
    </div>
  );
}
