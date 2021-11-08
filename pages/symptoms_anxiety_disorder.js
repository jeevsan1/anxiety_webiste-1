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
            <h1> Here are a list of symptoms that are caused by Anxienty Symptoms:</h1>
            <h1> <ul>
                <li>Generalized Anxiety Disorder (GAD)- Persistent and excessive anxiety and worry about activities or events- even if they are routine or insignificant. This often leads to other disorders and depression </li>
                <li>Obsessive-Compulsive Disorder (OCD)- Recurrent, unwanted thoughts and the people who have it try to do rituals to get rid of these thoughts but its only temporary </li>
                <li>Panic Disorder- Repeated episodes of sudden feelings of intense anxiety and fear or terror that reach a peak within minutes panic attacks). You may have feelings of impending doom, shortness of breath, chest pain, or a rapid, fluttering or pounding heart heart palpitations. These panic attacks may lead to worrying about them happening again or avoiding situations in which theyve occurred.</li>              
                <li>Social Phobia/Anxiety Disorder- High levels of anxiety, fear and avoidance of social situations due to feelings of embarrassment, self-consciousness and concern about being judged or viewed negatively by others.</li>              
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
