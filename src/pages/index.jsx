import styles from '@/styles/Home.module.css'
import portugues from "@/text/portugues"
import ingles from "@/text/ingles"
import { use, useEffect, useState } from 'react'
import Level from "@/components/level"
import List from "@/components/ReactExample"
import NextExample from "@/components/NextExample"
import Link from 'next/link'


export default function Home(props) {
  const [language, setLanguage] = useState(props.portuguesText)

  
  const changeLanguage = e => setLanguage(e.target.value == "inglesText" ? props.inglesText : props.portuguesText)

  return (
    <>
    <section className={styles.destaque}>
      <img className={styles.lines} src="lines.svg" alt="lines" />
      <div className={styles.container}>
      <select className={styles.select} onChange={changeLanguage}>
            <option value="portuguesText">Português</option>
            <option value="inglesText">Inglês</option>
      </select>
      <div className={styles.text}>
        <h1 className={styles.title1}>{language.h1}</h1>
        <p className={styles.destaqueP} >{language.destaqueP}</p>
      </div>
      </div>
    </section>
    <section className={styles.levelLine}>
      <div className={styles.levelLineBox}>
        {language.line1}
        <img className={styles.star} src="star.svg" alt="" />
        <img className={styles.star} src="star.svg" alt="" />
        <img className={styles.star} src="star.svg" alt="" />
      </div>
      <div className={styles.levelLineBox}>
        | 
        {language.line2}
        <img className={styles.star} src="star.svg" alt="" />
        <img className={styles.star} src="star.svg" alt="" />
        <img className={styles.star} src="star.svg" alt="" />
        <img className={styles.star} src="star.svg" alt="" />
        <img className={styles.star} src="star.svg" alt="" />
      </div>
    </section>
    <section className={styles.reason}>
      <div className={styles.container}>
        <h2 className={styles.reasonTitle}>{language.reasonTitle}</h2>
        <p className={styles.reasonText}>{language.reasonText}</p>
      </div>
    </section>
    <section className={styles.technologies}>
      <div className={styles.container}>
        <h2 className={styles.technologiesTitle}>{language.technologiesTitle}</h2>
        <div className={styles.technologiesCard}>
          <div className={styles.technologiesText}>
            <h3>HTML, CSS e javaScript</h3>
            <Level number={4}></Level>
            <p>{language.technologies1}</p>
          </div>
        </div>
        <div className={styles.technologiesCard}>
          <div className={styles.technologiesText}>
            <h3>React</h3>
            <Level number={2}></Level>
            <p>{language.react1}</p>
            <p>{language.react2}</p>
          </div>
          <div className="technologiesExample">
            <List title={language.reactExample} placeholder={language.reactPlaceholder}></List>
          </div>
        </div>
        <div className={styles.technologiesCard}>
          <div className={styles.technologiesText}>
            <h3>Next</h3>
            <Level number={2}></Level>
            <p>{language.next1}</p>
            <p>{language.next2}</p>
          </div>
          <div className="technologiesExample">
            <NextExample title={language.nextExample} placeholder={language.nextPlaceholder}></NextExample>
          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}

export function getStaticProps(){
  const portuguesText = portugues()
  const inglesText = ingles()

  return {
    props:{
      inglesText,
      portuguesText
    }
  }
}
