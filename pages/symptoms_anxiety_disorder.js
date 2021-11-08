import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import Style from '../styles/Layout.module.css'
import 'animate.css';
const symptoms_anxiety_disorder = () => {
    return (
        <>
        <head></head>
        <div>
        <div className={Style.anxiety_disorder}>
            <h1> Here are a list of symptoms that are split into Physical, Psychological, and Behavioral:</h1>
            <h1> <ul>
                <li>Psychological: Exessive worrying, Irritability, Impatience, Feeling on edge, fatigue, vivid dreams </li>
                <li>Physical - Heart Pounding, Flushing, hortness of breath, Dizziness, Sweating, Headache, Dry Mouth</li>              
                <li>Behavioral - Avoidance of situations, Distress in Social Situations</li>              
                </ul></h1>
        <Image src="/img(4).jpg" height="1080vh"width="2056vh"alt="Anxiety"></Image>
        </div>
        <div className={Style.Link}>
                <Link href="/" className="animate__animated animate__bounce">Click to go home</Link>
        </div>
        </div>
        </>
    )
}

export default symptoms_anxiety_disorder
