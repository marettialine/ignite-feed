import styles from '../assets/css/Avatar.module.css'

// Desestruturação
// const user = { name: "Aline"}
// const { name } = user; // Quero arrancar o nome de dentro desse objeto

// Nesse caso a desestruturação é substituir o Avatar(props) por Avatar({hasBorder, src})

export function Avatar({ hasBorder = true, src}){
    // const hasBorder = props.hasBorder != false;
    // className={hasBorder ? styles.avatarWithBorder : styles.avatar}

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}