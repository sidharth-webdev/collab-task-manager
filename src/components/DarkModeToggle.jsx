export default function DarkModeToggle() {
  return (
    <button
      onClick={() => document.documentElement.classList.toggle("dark")}
      className="border px-3 py-1 rounded"
    >
      🌙
    </button>
  );
}
