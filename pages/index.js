import Counter from "@/components/compteur";
import { Inter } from "next/font/google";
import TodoList from "@/components/to-do";

const inter = Inter({ subsets: ["latin"] });

export default function compteur() {
  return (
    <>
    <h1>Compteur</h1>
    <div className="compteur">
      <Counter />
    </div>
    <div>
      <TodoList />
    </div>
    </>
  );
}