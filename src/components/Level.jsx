import styles from '@/styles/level.module.css'


export default function Level(props){
    return(
        <div className={styles.level}>
            {Array.from({length: +props.number}, () => <div className={styles.increment}></div>)}
        </div>
    )
        
}