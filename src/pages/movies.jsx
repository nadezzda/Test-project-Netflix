import React from "react";
import Image from "next/image";
import SingleFilmCard from "@/components/singleFilmCard/singleFilmCard";
import styles from "../components/singleFilmCard/singleFilmCard.module.css";

const Movies = () => {
    const movie = {
        name: 'Relentless',
        year: 2017,
        type: 'Movie',
        img: '/images/Rectangle.png',
        rating: 'RG'
    }
    
  return (
    <section className={styles.section}>
    <form className={styles.form}>
        <button className={styles.button}>
          <Image
            src="/icons/icon-search.svg"
            alt="search"
            width={32}
            height={32}
          />
        </button>
        <input className={styles.input} placeholder="Search for movies"/>
    </form>
    <div>
      <h1>Movies</h1>
      <div className={styles.content}>
        <SingleFilmCard name={movie.name} year={movie.year} type={movie.type} rating={movie.rating} img={movie.img} bookmarked={true}/>
        <SingleFilmCard name={movie.name} year={movie.year} type={movie.type} rating={movie.rating} img={movie.img}/>
        <SingleFilmCard name={movie.name} year={movie.year} type={movie.type} rating={movie.rating} img={movie.img} bookmarked={true}/>
        <SingleFilmCard name={movie.name} year={movie.year} type={movie.type} rating={movie.rating} img={movie.img} bookmarked={true}/>
      </div>
    </div>
</section>

  );
};

export default Movies;

export async function getStaticProps() {
  const user = false;
  if (user) {
    return {
      redirect: { destination: "/movies" },
      props: {},
    };
  }
  return {
    props: {},
  };
}
