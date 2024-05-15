import Counter from "@/components/compteur";
import { Inter } from "next/font/google";
import TodoList from "@/components/to-do";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <h1>Compteur</h1>
    <div className="compteur">
      <Counter />
    </div>
    <div className="listeToDo">
      <TodoList />
    </div>
    </>
  );
}