import Modal from '../components/Modal/Modal';
import classes from './News.module.css';

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <Modal className={classes.newsModal} title="Summer Sale!" content="Join our rewards program for even more savings."/>
    </div>
  )
}

export default News
