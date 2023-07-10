import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt'
import { useState } from 'react'

import styles from '../assets/css/Post.module.css'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post({ author, publishedAt, content}){

    // Com o estado o React não precisa ficar observando a mudança em todas as variáveis da aplicaçõa (pouco performático)
    // Ele é avisado quando alguma informação é alterada
    const [comments, setComments] = useState([
        'Post muito bacana hein!!'
    ], )

    const [newCommentText, setNewCommentText] = useState('');

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

    // Quando a função é desparada mediante interação do usuário (clique no botão), usa handle na frente (padrão do Diego)
    /*  Programação Imperativa
        function handleCreateNewComment(){
            event.preventDefault();

            // event.target: retorna o formulário, pois o evento de submit está dentro do formulário (elemento que está recebendo aquele evento)

            const newCommentText = event.target.comment.value;

            // ... (spread operator): lê valor da variável e copia os valores que já existem na variável comments
            setComments([...comments, newCommentText]);

            event.target.comment.value = '';
        }
    */

    function handleCreateNewComment(){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={
                        // Toda vez que o newCommentText mudar, a textarea vai refletir essa alteração
                        newCommentText
                    }
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment content={ comment }/>    
                    })
                }
            </div>
        </article>
    )
}