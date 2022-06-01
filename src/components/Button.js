export default function Button({ text, classN, func }) {
    return <button onClick={() => func()} className={classN}>{text}</button>
}
