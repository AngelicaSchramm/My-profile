import { useState } from "react"
import Link from "next/link"
import styles from "@/styles/nextExample.module.css"

export default function NextExample(props){
    const [input, setInput] = useState("");

    return(
        <div className={styles.example}>
            <h2 className={styles.title}>{props.title}</h2>
            <div className={styles.input}>
                <input placeholder={props.placeholder} type="text" className={styles.inputText} value={input} onChange={e => setInput(e.target.value)}/>
                <Link className={styles.button} href={`example/${input}`}>
                    <img className={styles.linkImage} src="arrow-forward-outline.svg" alt="" />
                </Link>
            </div>
            
        </div>
    )
}