import type { TaskItemProps } from "../../types";
import React, { useState } from "react";
import type { TaskStatus } from "../../types";

//export type TaskStatus = 'pending' | 'in-progress' | 'completed';
// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }

// export interface TaskItemProps {
//   task: Task;
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }

//list item that displays a task object, notifies parent that select menu was changed or delete button clicked
//it passes changed task's id and new status and the id of the task to delete
export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

const handleStatusChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const updatedStatus = event.target.value;
    onStatusChange(task.id, updatedStatus as TaskStatus);
}

const deleteTask = () => {
    onDelete(task.id);
}

    return (
        <main style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <div>
                    <span style={{
                        color:
                            task.priority === 'low' ? 'green' :
                                task.priority === 'medium' ? 'orange' : 'red'
                    }}>
                        Priority: {task.priority}</span>
                    <span>Due date: {task.dueDate}</span>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent:'flex-end',height:'fit-content'}}>
                <select value={task.status} onChange={handleStatusChange}>
                    <option value='pending'>Pending</option>
                    <option value='in-progress'>In progress</option>
                    <option value='completed'>Completed</option>
                </select>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </main>
    )
}