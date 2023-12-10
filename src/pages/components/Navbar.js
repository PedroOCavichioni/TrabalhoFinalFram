import Styles from '../../styles/Components.module.css'
export default function Navbar() {
    return (
        <div>
            <ul className={Styles.navbar}>
                <li>
                    <a href='/'> Home </a>
                </li>
                <li>
                    <a href='/times'> Times </a>
                </li>
            </ul>
        </div>

    )
}
