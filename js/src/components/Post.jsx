import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from '../assets/css/Post.module.css'

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
        event.target.setCustomValidity('');

        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid (){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentTextareaEmpty = newCommentText.length == 0;

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
                            // Não tem problema se a key repete, o important é ela não repetir dentro do contexto desse componente
                            // Ou seja, se outro componente tem um paragrafo com essa mesma key, não tem importância
                            // O importante é não ter outro paragrafo dentro desse componente com a mesma key
                            return <p key={ line.content }>{ line.content }</p>
                        }else{
                            return <p key={ line.content }><a href="">{ line.content }</a></p>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentTextareaEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                key={ comment }
                                content={ comment }
                                onDeleteComment = { deleteComment }
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}