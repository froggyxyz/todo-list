export interface ITask extends ITaskData {
    id: number;
}

export interface ITaskData {
    title: string;
    completed: boolean;
}
