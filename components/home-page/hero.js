import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Zuong.jpg"
          alt="An image showing Zuong"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Zuong</h1>
      <p>
        I blog about my university life - especially how to get 4.0 CPA and
        scholarship
      </p>
    </section>
  );
}

export default Hero;
