import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../assets/css/Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/marettialine.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Aline Maretti</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado à 1h</time>
                        </div>

                        <button title="Delete comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}