import Head from 'next/head';
import Styles from '../Styles/Home.module.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title> Projeto FutLoucos </title>
      
      </Head>
      <div className={Styles.titulo}>
      <h1> FutLoucos </h1>
      </div>
      <Navbar />

      <div className= {Styles.conteudo}>
        <h2>Sobre Nós:</h2>
        <p>Nessa página terá descrições de conteúdos relacionados à futebol como Brasões, jogadores e personagens de anime de futebol</p>
      </div>

      <Footer />
      <styles />
    </div>

  )
  }

 