import React from "react";
import Image from "next/image";
import styles from "./singleFilmCard.module.css";


const SingleFilmCard = ({name, year, type, rating, img, bookmarked}) => {
    return (
        <div className={styles.card}>
            <Image
                src={img}
                alt="movie banner"
                width={280}
                height={174}
                className={styles.banner}
            />
            <div className={styles.bookmark}>
                {bookmarked ? (
                    <Image 
                    src="/icons/icon-bookmark-full.svg"
                    alt="bookmark"
                    width={15}
                    height={15}
                />
                ) : (
                    <Image 
                    src="/icons/icon-bookmark-empty.svg"
                    alt="bookmark"
                    width={15}
                    height={15}
                />
                )}
            </div>
            <p>{year} • 
            {type === "Movie" ? (
                <Image 
                    src="/icons/icon-nav-movies.svg"
                    alt="movies"
                    width={12}
                    height={12}
                />
            ) : (
                <Image 
                    src="/icons/icon-nav-tv-series.svg"
                    alt="other icon"
                    width={12}
                    height={12}
                />
            )}
                {type} • {rating}</p>
            <h4>{name}</h4>
        </div>
    );
}
export default SingleFilmCard;