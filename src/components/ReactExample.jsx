import { useRef, useState } from "react"
import styles from "../styles/list.module.css"

export default function List(props){
    const [inputValue, setinputValue] = useState("")
    const [taskList, setTaskList] = useState([])

    const addTask = () => {
        inputValue ?  setTaskList([...taskList, inputValue]) : setTaskList(taskList)
        setinputValue("")
    }

    const deleteTask = (i) => {
        const newList = taskList.filter((value, index) => index != i)
        setTaskList(newList)
    }

    return(
        <div className={styles.list}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.input}>
                <input placeholder={props.placeholder} className={styles.inputText} type="text" value={inputValue} onChange={e => setinputValue(e.target.value)} />
                <button className={styles.button} onClick={addTask}>+</button>
            </div>
            <div className={styles.taskList}>
                {taskList.map((task, index) => {
                    return (
                    <div key={index} className={styles.task}>
                        <div className={styles.taskCard}>
                            {task}
                        </div> 
                        <button className={styles.button} onClick={() => deleteTask(index)}>
                            <img className={styles.deleteImage} src="trash-outline.svg" alt="" />
                        </button>
                    </div>)
                })}
            </div>
        </div>
    )
}