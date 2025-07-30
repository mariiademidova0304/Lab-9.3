import { useState } from 'react'
import './App.css'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskList from './components/TaskList/TaskList'
import type { Task } from './types'
import type { TaskStatus } from './types'

function App() {
    let tasksList: Task[] = [
        {
            id: 'idHomework',
            title: 'Homework',
            description: 'Lab 9.3 and SBA 9',
            status: 'in-progress',
            priority: 'high',
            dueDate: '7/30/2025',
        },
        {
            id: 'idLaundry',
            title: 'Laundry',
            description: 'Wash work clothes for Sat shift',
            status: 'pending',
            priority: 'medium',
            dueDate: '8/1/2025',
        },
        {
            id: 'idFruits',
            title: 'Buy fruits',
            description: 'Need mangos, pineapple and oranges/peaches',
            status: 'completed',
            priority: 'low',
            dueDate: '7/29/2025',
        }
    ]

    const [displayingTasks, setDisplayingTasks] = useState<Task[]>(tasksList);

    //
    const changeTaskStatus = (taskId: string, newStatus: TaskStatus) => {
        setDisplayingTasks(prevDisplayingTasks =>
            prevDisplayingTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        )
    }

    const deleteTask = (taskId: string) => {
        setDisplayingTasks(prevDisplayingTasks =>
            prevDisplayingTasks.filter(task => task.id !== taskId)
        )
    }

    const filterTasks = (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';}) => {
            if(filters.status){
            setDisplayingTasks(tasksList.filter(task => task.status === filters.status))
            } else if (filters.priority) {
                setDisplayingTasks(tasksList.filter(task => task.priority === filters.priority))
            }else{
                setDisplayingTasks(tasksList)
            }
        }

    return (
        <>
            <TaskFilter
                onFilterChange={filterTasks} />
            <TaskList
                tasks={displayingTasks}
                onStatusChange={changeTaskStatus}
                onDelete={deleteTask} />
        </>

    )

}

export default App
