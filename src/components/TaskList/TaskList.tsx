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
//will have to take those to the app component, I think, as well as state
export default function TaskList({tasks, onStatusChange, onDelete} : TaskListProps){
    // const [displayingTasks, setDisplayingTasks] = useState<Task[]>(tasks)

    // const changeTaskStatus = (taskId: string, newStatus: TaskStatus) => {
    //     setDisplayingTasks(prevDisplayingTasks =>
    //         prevDisplayingTasks.map(task =>
    //             task.id === taskId ? {...task, status: newStatus} : task
    //         )
    //     )
    // }

    // const deleteTask = (taskId: string) => {
    //     setDisplayingTasks(prevDisplayingTasks => 
    //         prevDisplayingTasks.filter(task => task.id !== taskId)
    //     )
    // }
    
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