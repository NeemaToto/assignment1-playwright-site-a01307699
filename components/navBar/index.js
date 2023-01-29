import styles from '@/styles/Home.module.css'

export default function NavBar({
}){
    return(
        <div className={styles.navBar}>
            <button><img src="/icons/menu-icon.png"></img></button>
            <button><img src="/icons/graduation-hat.png"></img></button>
        </div>
    )
}

