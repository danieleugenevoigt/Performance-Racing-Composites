import Road1 from '../images/Road1.mp4';
import classes from './About.module.css';
const About = () => {
  return (
    <div className={classes.main}>
      <video className={classes.video} src={Road1} autoPlay muted></video>

      <section className={classes.textSection}>
        <h1>Racing Is In Our Blood</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          officiis autem officia, iusto pariatur minus nemo quia consequatur
          tempore minima dicta necessitatibus facere maxime molestias voluptatum
          laudantium. Architecto veniam quisquam quae blanditiis similique
          laborum ipsum. Repudiandae soluta nobis excepturi, officiis impedit,
          obcaecati, laudantium magnam dolores necessitatibus aliquid quam?
          Dicta, quod.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          officiis autem officia, iusto pariatur minus nemo quia consequatur
          tempore minima dicta necessitatibus facere maxime molestias voluptatum
          laudantium. Architecto veniam quisquam quae blanditiis similique
          laborum ipsum. Repudiandae soluta nobis excepturi, officiis impedit,
          obcaecati, laudantium magnam dolores necessitatibus aliquid quam?
          Dicta, quod.
        </p>
      </section>
    </div>
  );
}

export default About
