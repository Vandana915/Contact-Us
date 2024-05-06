import { useState } from "react";
import Button from "../Button/Button"
import styles from "./Contactsection.module.css"
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Contactsection = () => {
    const [name, setName] = useState("vini");
    const [email, setEmail] =useState("vii@gmail.com");
    const [text, setText] =useState("hello");
    const onSubmit = (event) =>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };
    return (
        <section className={styles.container}>
        {/* Left section */}
            <div className={styles.contactimage}>
                <img src="./Image/5138237.jpg" alt="image" width=" 100%" height="100%" />
            </div>
          
        {/* Right section */}
            <div className={styles.contactform}>
                <div className={styles.topbtn}>
                    <Button text="VIA SUPPORT CHAT" icon={<BiSolidMessageRounded fontSize={24} />}/>
                    <Button text="VIA CALL" icon={<IoIosCall fontSize={24}/>}/>
                </div>
                <Button  isOutline={true} text="VIA EMAIL FROM" icon={<MdOutlineEmail fontSize={24}/>}></Button>

                <form onSubmit={onSubmit}>
                    <div className={styles.formcontrol}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    </div>
                    <div className={styles.formcontrol}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                    </div>
                    <div className={styles.formcontrol}>
                    <label htmlFor="text">Text</label>
                    <textarea type="text" rows="8" />
                    </div>
                    <div style={{
                        display:"flex", 
                        justifyContent:"end",
                    }}>
                    <Button text="SUBMIT BUTTON" />
                    </div>
                    <div>{name + " " + email + " " + text}</div>
                </form>
            </div>   
        </section>
  )
}
export default Contactsection;