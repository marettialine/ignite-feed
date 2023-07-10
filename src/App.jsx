import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from "./components/Post.jsx"

import styles from './assets/css/App.module.css'

import './assets/css/global.css'

// Informações necessárias
// author: { avatar_url: '', name: '', role: ''}
// publishedAt: date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marettialine.png',
      name:'Aline Maretti',
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2023-07-06 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/viniciuscharleaux.png',
      name: "Vinicius Carneiro Charleaux",
      role: "FullStack Web Developer and Data Science Student",
    },
    content: [
      { type: 'paragraph', content: 'Eaeee rapazeada 👋' },
      { type: 'paragraph', content: 'To pensando em começar um projeto novo. Ideias? 🤔' },
      { type: 'link', content: '👉 Meu GitHub: https://github.com/ViniciusCharleaux' },
      { type: 'link', content: '#novoprojeto' }
    ],
    publishedAt: new Date('2023-07-09 20:00:00')
  }
];

// Iteração: criar estrutura de repetição (percorrer o array e para cada posição, fazer alguma coisa)

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            /* Método forEach percorre o array, mas ele não tem um retorno, por isso não podemos usar ele */
            posts.map(post =>{
              return (
                <Post 
                  author = { post.author }
                  content = { post.content }
                  publishedAt = { post.publishedAt }
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}