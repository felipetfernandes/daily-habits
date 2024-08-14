import { log } from "console";
import Image from "next/image"

function Habit(habit: string, habitStreak: Record<string, boolean>) {
  const today = new Date();
  const dayWeek = today.getDay();
  const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const sortWeek = week.slice(dayWeek + 1).concat(week.slice(0, dayWeek + 1));
  const dates = Array.from({ length: week.length }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - index);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }).reverse();


  return (
      <div key={habit}>
          <div className="flex justify-between">
            <span>{habit}</span>
            <button>
                <Image src='/trash.svg' width={20} height={20} alt="delet button"/>  
            </button>
          </div>
          <div className="grid grid-cols-7 bg-neutral-800 p-2 gap-2 rounded-md">
          {sortWeek.map((day, index) => (
            <div key={day} className="flex flex-col items-center justify-between gap-3">
              <h1>{day}</h1>
              <div>
                {habitStreak[dates[index]] === undefined ?
                (<Image src='/ellipseMark.svg' width={14} height={14} alt="ellipse mark" />) :
                habitStreak[dates[index]] ?
                (<Image src='/checkMark.svg' width={20} height={20} alt="check mark" />) :
                (<Image src='/redMark.svg' width={20} height={20} alt="red mark" />)
                }
              </div>            
            </div>
              ))}
          </div>
      </div>
  )
}

export default Habit