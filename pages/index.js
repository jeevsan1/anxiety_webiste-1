import Head from 'next/head'
import Styles from '../styles/Layout.module.css'
import Link from 'next/link'
import 'animate.css';
import Image from 'next/image'
export default function Home() {
  return (
    <>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
    </head>
    <div>
      <div className={Styles.welcome}>  <h1 className="animate__bounce animate__animated"><Link href="#learn">Learn More </Link></h1></div>
      
      <div className={Styles.learn_more} id="learn">
      <div className={Styles.grid_container}>
      <div className={Styles.box1}>
      <Link href="/what_is_anxiety"><Image src="/icon(1).png" height="500vh" width="500vh"alt="What is Anxiety"></Image>
        </Link><br />What is Anxiety?
      </div>
      <div className={Styles.box2}>
      <Link href="/anxiety_disorder"><Image src="/icone(2).png" height="500vh" width="500vh"alt="Anxiety Disorders"></Image>
        </Link> <br />Anxiety Disorders
       
      </div>
      <div className={Styles.box3}>
      <Link href="/symptoms_anxiety_disorder"><Image src="/icon(4).png"height="500vh" width="500vh" alt="Anxiety Disorders"></Image>
        </Link> <br />Symptoms of Anxiety Disorder
       
      </div>
      <div className={Styles.box4}>
      <Link href="/anxiety_treatment"><Image src="/icon(5).png"height="500vh" width="500vh" alt="Anxiety Disorders"></Image>
        </Link> <br />Treatment
       
      </div>

      </div>
      </div>   
      <div className={Styles.truth}>
        <h1><Link href = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2940247/#:~:text=Results,%25%20CI%3A%201.40–2.08)" target="_blank" rel="noopener noreferrer">Anxiety Kills: 70% of Suicide cases are related to an Anxiety Disorder</Link> </h1>
      </div>
      <div>
        <h1><Link className={Styles.otherButton}href="/help_lines">Links to other resources and sources of reference</Link></h1>
      </div>
      <div className={Styles.Gform}>
        <h1 className={Styles.Gform_text}>StopAnxiety is a school project of mine. If you have time please fill out the form below for the project. Thank You :)</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGrFX2qFAwITECWrzXIMmZTPbaj7E7Rtza6sDNxpBAdADi8A/viewform?embedded=true" width="640" height="1116" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe
        ></div>
        </div>

    </>
  )
}
