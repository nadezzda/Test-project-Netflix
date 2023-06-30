import React, { useState } from "react";
import Image from "next/image";
import styles from "./personal-cabinet.module.css"

const PersonalCabinet = () => {
    const [activeTab, setActiveTab] = useState("moviesToWatch");

    const user = {
        name: "Stepan Bendera",
        photo: "https://regmedia.co.uk/2009/10/16/hp_shrek2.jpg?x=1200&y=794",
        moviesWatched: 10,
        moviesToWatch: 5,
        seriesToWatch: 3,
        totalWatchTime: 120
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.main}>
            <Image
            src="/icons/logo.svg"
            alt="logo"
            width={32}
            height={25}
            className={styles.logo}
        />
            <div className={styles.personData}>
                <div className={styles.userInfo}>
                <h2 className={styles.userName}>{user.name}</h2>
                <img className={styles.userPhoto} src={user.photo} alt="user-photo" />
                </div>
                <div className={styles.userDesc}>
                    <p>
                        <span className={styles.label}>Movies Watched:</span>
                        <span className={styles.number}>{user.moviesWatched}</span>
                    </p>
                    <p>
                        <span className={styles.label}>Movies To Watch:</span>
                        <span className={styles.number}>{user.moviesToWatch}</span>
                    </p>
                    <p>
                        <span className={styles.label}>Series To Watch:</span>
                        <span className={styles.number}>{user.seriesToWatch}</span>
                    </p>
                    <p>
                        <span className={styles.label}>Total Watch Time:</span>
                        <span className={styles.number}>{user.totalWatchTime} hours</span>
                    </p>
                </div>

            </div>

            <div>
                <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.button} ${
                            activeTab === "moviesToWatch" ? styles.activeButton : ""
                        }`}
                        onClick={() => handleTabChange("moviesToWatch")}
                    >
                        Movies To Watch
                    </button>
                    <button
                        className={`${styles.button} ${
                            activeTab === "watchedMovies" ? styles.activeButton : ""
                        }`}
                        onClick={() => handleTabChange("watchedMovies")}
                    >
                        Watched Movies
                    </button>
                    <button
                        className={`${styles.button} ${
                            activeTab === "seriesToWatch" ? styles.activeButton : ""
                        }`}
                        onClick={() => handleTabChange("seriesToWatch")}
                    >
                        Series To Watch
                    </button>
                </div>
                {activeTab === "moviesToWatch" && (
                    <div>
                        <h3>Movies To Watch</h3>
                    </div>
                )}
                {activeTab === "watchedMovies" && (
                    <div>
                        <h3>Watched Movies</h3>
                    </div>
                )}
                {activeTab === "seriesToWatch" && (
                    <div>
                        <h3>Series To Watch</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalCabinet;
