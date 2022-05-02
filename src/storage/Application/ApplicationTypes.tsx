export type ModuleType = "CARDS"|"DRAW"|"PAIN"
export type ApplicationStateType = "LOADING" | "LOGIN" | "READY" | "OFFLINE"
export interface Application {
    state:ApplicationStateType;
    selectedModule:ModuleType;
    previousModule:ModuleType;
}