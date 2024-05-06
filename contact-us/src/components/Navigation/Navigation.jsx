import styles from "./Navigation.module.css"
const Navigation =()=>{
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="./Image/contact-info.png" alt="logo-image" width={50} height={50}/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navigation;