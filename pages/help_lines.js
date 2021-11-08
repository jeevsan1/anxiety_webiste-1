import Head from 'next/head'
import Style from "../styles/Layout.module.css"
import Link from 'next/link'

const help_lines = () => {
return(
    <>
    <head>
        <title>Anxiety- Help List </title>
    </head>
    <div> 
        <h1>List of help lines and resources for Anxiety(links)</h1>
        <ul className="ul">
        <li><Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2940247/">The Relationship Between Anxiety Disorders and Suicide Attempts</Link></li>
        <li><Link href="https://medlineplus.gov/anxiety.html">Anxiety: Medline Plus</Link></li>
        <li><Link href="https://adaa.org/tips">Tips to Manage Anxiety and Stress</Link></li>
        <li><Link href="https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961">Anxiety Disorders - Mayo Clinic</Link></li>
        <li><Link href="https://www.hhs.gov/answers/mental-health-and-substance-abuse/what-are-the-five-major-types-of-anxiety-disorders/index.html">Five Major types of anxiety disorders</Link></li>
        </ul>
    </div>
    <div className={Style.Link}>
            <Link href="/">Click to go home</Link>
    </div>
    </>
)
}

export default help_lines