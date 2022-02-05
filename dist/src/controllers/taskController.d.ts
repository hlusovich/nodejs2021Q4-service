import { DeleteResult } from 'typeorm';
export declare class TaskModelController {
    static unsubcribeBoard(boardId: string): Promise<DeleteResult>;
}
