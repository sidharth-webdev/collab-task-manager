import { useTasks } from "../context/TaskContext";

export default function TaskCard({ task, role }) {
  const { updateTask, deleteTask } = useTasks();

  return (
    <div className="border p-3 rounded mb-2">
      <h3 className="font-bold">{task.title}</h3>
      <p>Status: {task.status}</p>

      {role === "manager" && (
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500"
        >
          Delete
        </button>
      )}

      <button
        onClick={() => updateTask(task.id, { status: "completed" })}
        className="ml-2 text-green-500"
      >
        Complete
      </button>
    </div>
  );
}
