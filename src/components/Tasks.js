import Task from './Task'

export default function Tasks({ tasks, toggle }) {
    return (
        <div className="tasks">
            <h2>Tasks:</h2>
            {tasks.map(task => (
                <Task key={task.id} task={task} toggle={toggle} />
            ))}
        </div>
    )
}
