export type ModuleType = "CARDS"|"CARDS_TTS"|"DRAW"|"PAIN"

export interface Application { 
    selectedModule:ModuleType;
    previousModule:ModuleType;
}