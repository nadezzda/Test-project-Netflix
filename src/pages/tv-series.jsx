import React from "react";
import Image from "next/image";
import SingleFilmCard from "@/components/singleFilmCard/singleFilmCard";
import styles from "../components/singleFilmCard/singleFilmCard.module.css";

const TVSeries = () => {
    const tvShow = {
        name: 'The Rockies',
        year: 2015,
        type: 'TV Series',
        img: '/images/Rectangle2.png',
        rating: 'E'
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
        <input className={styles.input} placeholder="Search for TV series"/>
    </form>
    <div>
      <h1>TV-Series</h1>
      <div className={styles.content}>
        <SingleFilmCard name={tvShow.name} year={tvShow.year} type={tvShow.type} rating={tvShow.rating} img={tvShow.img}/>
        <SingleFilmCard name={tvShow.name} year={tvShow.year} type={tvShow.type} rating={tvShow.rating} img={tvShow.img} bookmarked={true}/>
        <SingleFilmCard name={tvShow.name} year={tvShow.year} type={tvShow.type} rating={tvShow.rating} img={tvShow.img} bookmarked={true}/>
        <SingleFilmCard name={tvShow.name} year={tvShow.year} type={tvShow.type} rating={tvShow.rating} img={tvShow.img}/>
        <SingleFilmCard name={tvShow.name} year={tvShow.year} type={tvShow.type} rating={tvShow.rating} img={tvShow.img} bookmarked={true}/>
      </div>
    </div>
</section>

  );
};

export default TVSeries;

export async function getStaticProps() {
  const user = false;
  if (user) {
    return {
      redirect: { destination: "/tv-series" },
      props: {},
    };
  }
  return {
    props: {},
  };
}
