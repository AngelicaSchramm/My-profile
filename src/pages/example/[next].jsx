import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/examplePage.module.css"
import Link from "next/link"


export default function Example(){
    const router = useRouter()
    const input = router.query.next
    const [result, setResult] = useState("Gerando texto ....");


    useEffect(() => {
      getResponse()
    }, [])

    async function getResponse() {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({ inputText: input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
    return(
        <div className={styles.example}>
            <Link href={"/"} className={styles.link}>
              <img className={styles.linkImage} src="../arrow-forward-outline.svg" alt="home" />
            </Link>
            <h1 className={styles.title}>Página sobre {router.query.next}</h1>
            <div  className={styles.text}>{result}</div>
        </div>
        
    )
}