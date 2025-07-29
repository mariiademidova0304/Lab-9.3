import type { TaskStatus } from "../../types";
import type { Task } from "../../types";
import type { TaskListProps } from "../../types";


// export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }
 
// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

export default function TaskList({tasks, onStatusChange, onDelete} : TaskListProps){
    
}