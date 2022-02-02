
export interface ITask {
    title: string;
    order: number;
    userId: string;
    boardId: string;
    columnId: string;
    description: string;
    id:string;
}

export class TaskDto{

    title: string;

    order: number;

    userId: string;

    boardId: string;

    columnId: string;

    description: string;

}
