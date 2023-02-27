import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/examplePage.module.css"
import Link from "next/link"


export default function Example(){
    const router = useRouter()
    const input = router.query.next
    return(
        <div className={styles.example}>
            <Link href={"/"} className={styles.link}>
              <img className={styles.linkImage} src="../arrow-forward-outline.svg" alt="home" />
            </Link>
            <h1 className={styles.title}>Página sobre {router.query.next}</h1>
        </div>
        
    )
}