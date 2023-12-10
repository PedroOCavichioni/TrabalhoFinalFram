import React from 'react';
import Styles from '../styles/Home.module.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';
function Times({ times }) {
    return (
        <div>

            <div className={Styles.title2}>
                <h1> FutLoucos </h1>
            </div>

            <Navbar />

            <div className={Styles.conteudo2}>
                {times.map((time, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <div key={time.id}> <p> {time.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <Footer />

        </div>
    )




}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const times = await repo;
    return {
        props: { times }
    }
})


export default Times;