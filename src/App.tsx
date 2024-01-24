import AdviceCard from "./components/AdviceCard";
import Skeleton from "./components/Skeleton";
import useGenerator from "./hooks/useGenerator";

function App() {
  const { isLoading } = useGenerator();
  return (
    <div className="bg-slate-800 h-screen flex justify-center items-center">
      {isLoading ? <Skeleton /> : <AdviceCard />}
    </div>
  );
}

export default App;
