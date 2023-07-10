import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt'

import styles from '../assets/css/Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

// props: { author: "", content: ""}

export function Post({ author, publishedAt, content}){

    // Retorna string maluca (Sat Jul 09 2022 20:00:00 GMT-0300 (Horário Padrão de Brasília))
    // publishedAt.toString()

    // intl: formatação de datas
    /* const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt); */

    // npm i date-fns
    // de, às e h não podem ficar dentro da string de formatação, preciso 'escapar' essas strings, basta colocar aspas simples em volta delas
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={ author.avatarUrl } />
                    <div className={styles.authorInfo}>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
                    { publishedDateRelativeToNow }
                </time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph'){
                            return <p>{ line.content }</p>
                        }else{
                            return <p><a href="">{ line.content }</a></p>
                        }
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}