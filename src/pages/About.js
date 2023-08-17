import { useEffect } from 'react';
import Road1 from '../images/Road1.mp4';
import classes from './About.module.css';
const About = () => {

    useEffect(() => {
        const video = document.getElementById('background-video');
        const overlay = document.getElementById('overlay');

        const handleVideoEnd = () => {
            overlay.style.backgroundColor = '#4E4D4A';
            console.log(overlay.style.backgroundColor);
            overlay.style.opacity = '1';
        };

        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

  return (
    <div className={classes.main}>
      <video id={"background-video"} className={classes.video} src={Road1} autoPlay muted></video>
      <div id={'overlay'} className={classes.overlay}></div>

      <section className={classes.textSection}>
        <h1>Racing Is In Our Blood</h1>
        <p>
        Welcome to Performance Racing Composites – Your Destination for Cutting-Edge Carbon Fiber Innovations

With a legacy dating back to 1970, Performance Racing Composites stands as a pioneer in the custom car parts industry. We are your ultimate source for top-tier carbon fiber body parts, spoilers, interiors, aftermarket exhausts, suspension systems, and brakes that redefine automotive performance and aesthetics.

Our journey began with a passion for pushing boundaries and revolutionizing the racing experience. Over the decades, we've harnessed this dedication to craft exceptional products that reflect our commitment to excellence. From amateur to professional racing circuits, our storied history is interwoven with triumphs and breakthroughs that have left an indelible mark on the automotive world.

At Performance Racing Composites, precision engineering is our hallmark. Our artisans meticulously mold carbon fiber into masterpieces that embody strength, agility, and style. Each creation is a testament to our ceaseless pursuit of perfection, setting new benchmarks in speed, handling, and design.

Join us in embracing the spirit of innovation and performance. Experience the culmination of decades of expertise and passion, as we continue to shape the future of automotive excellence, one carbon fiber component at a time. Discover the unparalleled world of Performance Racing Composites – where racing heritage meets cutting-edge technology.
        </p>
      </section>
    </div>
  );
}

export default About
