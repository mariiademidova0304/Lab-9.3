import type { TaskStatus } from "../../types";
import type { Task } from "../../types";
import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";
import { useState } from "react";


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

//made all the logic inside TaskList, but seeing I'm not using some props
//apparently this is a sign that outer component is going to be handling logic, will need to change this
//took the logic ot to App, now this component is just displaying tasks
export default function TaskList({tasks, onStatusChange, onDelete} : TaskListProps){
       
    const taskList = tasks.map((task) =>
        <li key={task.id}>
            <TaskItem task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
        </li>
    );

    return(
        <ul>
            {taskList}
        </ul>

    )
}