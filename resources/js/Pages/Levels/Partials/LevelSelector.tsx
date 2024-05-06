import { LevelsProps } from "../Levels";
import AddLevelForm from "./AddLevelForm";

export default function LevelSelector({ levels }: LevelsProps) {
    console.log(levels);
    return (
        <section className="mt-6 mx-5 px-4 py-3 bg-slate-100 rounded-md">
            <div className="mt-6 mb-4">
                <h2 className="text-2xl font-light text-slate-500">Levels</h2>
                    <ul>
                        {
                            levels?.map( level => <li key={level.id}>
                                    <div className="flex justify-between items-center p-3 bg-slate-500 text-white border-b-2 hover:cursor-pointer">
                                        <span className="text-2xl">Level {level.lesson_level}</span>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
            </div>
            <AddLevelForm />
        </section>
    );
}
