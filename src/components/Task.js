export default function Task({ task, toggle }) {
    return (
        <div className="task">
            <p>{task.text}</p>
            <input type="checkbox" checked={task.complete} onChange={() => toggle(task.id)} />
        </div>
    )
}
