import Head from "next/head"
import Links from "next/link"
import Style from '../styles/Layout.module.css'
import Image from "next/dist/client/image"
const what_is_anxiety = () => {
    return (
        <>
        <div className={Style.what_is_anxiety}>
            <h1 >Anxiety is a feeling of fear, dread, and uneasiness. It might cause you to sweat, feel restless and tense, and have a rapid heartbeat.</h1>
            <h1> It can be a normal reaction to stress. For example, you might feel anxious when faced with a difficult problem at work, before taking a test, or before making an important decision. It can help you to cope. The anxiety may give you a boost of energy or help you focus. But for people with anxiety disorders, the fear is not temporary and can be overwhelming.</h1>
        <Image src="/img(2).jpg" height="1080vh"width="2056vh"alt="Anxiety"></Image>
        </div>
        <div className={Style.Link}>
                <Links href="/">Click to go home</Links>
        </div>
        </>
     )
}

export default what_is_anxiety
