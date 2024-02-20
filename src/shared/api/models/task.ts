export interface ITask extends ITaskData {
    id: number;
    completed: boolean;
}

export interface ITaskData {
    title: string;
}
