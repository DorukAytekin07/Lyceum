import '../CSS/Home.css'

const Home = () => {
  return (
    <div className="home-page-div">
      <h1 className="title center">
        Hello Doruk Aytekin
      </h1>
      <div className='img-description'>
        <p className='text margin'>
          Welcome again to your virtual academy, sir. In here, as you know, you can learn many things from your uploaded books 
          or you can watch or read your daily experiments and daily reports, so with this, you cannot forget your past and 
          feelings. also with advantage of this you can learn from history Have a good time, sir.
        </p>
        <img className='img-container' src='../../public/icons/home-page-1.jpg' />
      </div>

    </div>
  )
}

export default Home
