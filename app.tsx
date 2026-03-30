import { TrainingCounter } from "./components/TrainingCounter";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <TrainingCounter />
    </div>
  );
}