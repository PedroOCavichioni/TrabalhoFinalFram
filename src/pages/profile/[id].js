import Styles from '../../Styles/Futebol.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




function Profile({ time = {} }) {
    return (

        <div>
            <div className={Styles.titulo2}>
            <h1> FutLoucos </h1>
      </div>
            <Navbar />
            <div className={Styles.conteudo3}>

                <p className={Styles.palavra}>Nome:</p>
                <p>{time.nome}</p>
                <p className={Styles.palavra}>Usuario: </p>
                 <p>{time.usuario}</p>
                <p className={Styles.palavra}>Descrição: </p>
                <p>{time.descricao}</p>


            </div>
            <Footer />
        </div>
    )
}



export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const time = await repo[context.params.id];
    return {
        props: { time }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol')
    const repo = await res.json()
    const times = await repo;
    const paths = times.map((time, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
