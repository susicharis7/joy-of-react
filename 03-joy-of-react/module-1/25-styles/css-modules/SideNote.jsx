import styles from './SideNote.module.css';

function SideNote({ title, children }) {
 return(
    <aside className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p>{children}</p>
    </aside>
 )   
}

export default SideNote;