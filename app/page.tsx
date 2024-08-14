import Link from "next/link";
import Habit from "./Components/Habit";

export default function Home() {
  const habits = {
    'teste': {
      '2024-08-09': true,
      '2024-08-10': false,
      '2024-08-11': true,
    },
    'teste2': {
      '2024-08-09': true,
      '2024-08-10': false,
      '2024-08-11': true,
    }
  }

  return (
    <main className="text-white flex flex-col gap-12">
      {Object.keys(habits).length > 0 ? (
          Object.entries(habits)?.map(([habit, habitStreak]) => (Habit(habit, habitStreak)))
      ) : (
        <h1 className="mt-20 text-4xl font-light text-white font-display">Você não tem hábitos cadastrados</h1>
      )}
      <Link href='/novo-habito' className="text-center text-neutral-900 font-display font-regular text-2xl p-2 rounded-md botton-10 bg-[#45EDAD]">Novo Hábito</Link>
    </main>
  );
}
