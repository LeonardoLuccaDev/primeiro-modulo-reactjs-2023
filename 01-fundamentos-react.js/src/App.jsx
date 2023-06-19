import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

import './global.css';

import styles from './app.module.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LeonardoLuccaDev.png",
      name: "Leonardo Lucca",
      role: "Desenvolvedor"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa."
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return,"
      },
      {
        type: "paragraph",
        content: "evento da Rocketseat.O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Desenvolvedor"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa."
      },
      {
        type: "paragraph",
        content: "É um projeto que fiz no NLW Return,"
      },
      {
        type: "paragraph",
        content: "evento da Rocketseat.O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
