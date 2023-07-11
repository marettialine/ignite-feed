// Interface que possui todas as propriedades que uma imagem pode ter
import { ImgHTMLAttributes } from 'react'

import styles from '../assets/css/Avatar.module.css'

// Desestruturação
// const user = { name: "Aline"}
// const { name } = user; // Quero arrancar o nome de dentro desse objeto

// Nesse caso a desestruturação é substituir o Avatar(props) por Avatar({hasBorder, src})

// "?" quer dizer que a propriedade não é obrigatória
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

// ...props: rest operator
export function Avatar({ hasBorder = true, ...props }: AvatarProps){
    // const hasBorder = props.hasBorder != false;
    // className = {hasBorder ? styles.avatarWithBorder : styles.avatar}

    return (
        <img
            className = { hasBorder ? styles.avatarWithBorder : styles.avatar }
            { 
                // Pega cada valor dentro de props e passa como propriedade para image
                ...props
            }
        />
    )
}