import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="An image showing profile"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm EunSu</h1>
      <p>I blog about web development - especially frontend frameworks</p>
    </section>
  );
}
