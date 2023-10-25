import css from './Home.module.sass'

const Home = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Hello Backendless</p>
      <img src="https://senior.ua/storage/article/content/f70b4dc5-118f-4e3e-869d-270065620a4a.jpeg" alt="Simple" />
    </div>
  )
}

export default Home
