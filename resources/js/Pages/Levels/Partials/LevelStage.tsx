import { StageProps } from "@/types";

export default function LevelStage({ stages }: StageProps) {
    
    const stringifyStage = (stageNumber: number): string => {
        let stage = stageNumber.toString();

        return stage.substring(0, stage.length - 1) + " - " + stage.charAt(stage.length - 1);
    }

    return (
        <ol className="flex">
            {stages.map ( stage => 
                <li key={stage.id} className="relative -top-1 text-xs p-0.5 bg-slate-400 border-2 border-t-0 border-transparent rounded ml-2">
                    <p className="hover:cursor-default">{stringifyStage(stage.stage_number)}</p>
                </li>
            )}
        </ol>
    );
}