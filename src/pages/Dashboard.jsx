import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const { user } = useAuth();
  const { tasks } = useTasks();

  const myTasks = tasks.filter(t => t.assignedTo === user.email);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">My Tasks</h2>
      {myTasks.map(task => (
        <TaskCard key={task.id} task={task} role={user.role} />
      ))}
    </div>
  );
}
