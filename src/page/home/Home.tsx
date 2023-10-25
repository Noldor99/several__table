import css from './Home.module.sass'

const Home = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>Hello Backendless</p>
      <img src="https://zasmeshi.ru/data/demotivator/medium/15012-kazhdaya-groza-potok-nenuzhnoj-informacii.jpg" alt="Simple" />
    </div>
  )
}

export default Home
