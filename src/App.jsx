import { Header } from "./components/Header.jsx"
import { Sidebar } from "./components/Sidebar.jsx"
import { Post } from "./components/Post.jsx"

import styles from './assets/css/App.module.css'

import './assets/css/global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Aline Maretti"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam! Delectus excepturi illo, pariatur possimus, dignissimos ex voluptate exercitationem voluptatum modi, nam amet nulla dolorum facere dolorem nesciunt? Ad, saepe!"
          />
          <Post 
            author="Vinicius Charleaux"
            content="Novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}