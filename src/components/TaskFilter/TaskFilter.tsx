import type { Task, TaskFilterProps } from "../../types";
import type { TaskStatus } from "../../types";

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {

    const filterStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const filteredStatus = event.target.value;
        if (filteredStatus === 'all') {
            onFilterChange({});
        } else {
            onFilterChange({ status: filteredStatus as TaskStatus })
        }
    }


    const filterPriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const filteredPriority = event.target.value;
        if (filteredPriority === 'all') {
            onFilterChange({});
        } else {
            onFilterChange({ priority: filteredPriority as 'low' | 'medium' | 'high' })
        }
    }

    return (
        <div style={{display:'flex', padding: '5px', gap: '5px'}}>
            <div>
                <label htmlFor="select-status">Status</label>
                <select name="select-status" onChange={filterStatus}>
                    <option value='all'>All</option>
                    <option value='pending'>Pending</option>
                    <option value='in-progress'>In progress</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
            <div>
                <label htmlFor="select-priority">Priority</label>
                <select name="select-priority" onChange={filterPriority}>
                    <option value='all'>All</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
            </div>
        </div>
    )
}