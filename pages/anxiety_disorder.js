import Head from 'next/head'
import Link from 'next/link'
import Style from "../styles/Layout.module.css"
import Image from 'next/image'
const anxiety_disorder = () => {
    return (
        <div>
           <>
        <div className={Style.anxiety_disorder}>
            <h1> Here are a list of disorders that cause some form of unnatural Anxiety:</h1>
            <h1> <ul>
                <li>Generalized Anxiety Disorder (GAD)- This disorder is characterized by chronic anxiety, exxagerated worry and tension, even when there is little or nothing to provoke it. </li>
                <li>Obsessive-Compulsive Disorder (OCD)- This disorder is characterized by recurrent, unwanted thoughts and the people who have it try to do rituals to get rid of these thoughts but its only temporary </li>
                <li>Panic Disorder -This disorder is characterized by unexpected and repeated episodes of intense fear accompanied by physical symptoms that may include chest pain, heart palpitations, shortness of breath, dizziness, or abdominal distress.</li>
                <li>Post-traumatic Stress Disorder (PTSD)- This  disorder that can develop after exposure to a terrifying event or ordeal in which grave physical harm occurred or was threatened. Traumatic events that may trigger PTSD include violent personal assaults, natural or human-caused disasters, accidents, or military combat.</li>   
                <li>Social Phobia/Anxiety Disorder - This  disorder characterized by overwhelming anxiety and excessive self-consciousness in everyday social situations. Social phobia can be limited to only one type of situation - such as a fear of speaking in formal or informal situations, or eating or drinking in front of others - or, in its most severe form, may be so broad that a person experiences symptoms almost anytime they are around other people.</li>              
                </ul></h1>
        <Image src="/img(3).jpg" height="1120vh" width="1120vh"alt="Anxiety" />
        </div>
        <div className={Style.Link}>
                <Link href="/">Click to go home </Link>
        </div>
        </>  
        </div>
    )
}

export default anxiety_disorder
