import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import Link from 'next/link'
const Layout = ({children}) => {
    return (
        <>
        <head>
        <title>StopAnxiety</title> 
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Mohave:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet"></link>
        </head>
        <div className={styles.Container}>
            <main className={styles.Main}>
            <h1 className={styles.header} ><Link href="/">StopAnxiety</Link></h1>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
