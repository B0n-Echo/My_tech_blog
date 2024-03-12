import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi Fellow Developers</b> Discover new stories and ideas here
      </h1>
      <div className={styles.post}>
        <div className={styles.imgConatiner}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ut
            ipsa aliquid accusamus sed debitis sint amet voluptatum officiis,
            neque similique magnam qui! Eum amet doloremque tempora, enim nobis
            sapiente!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
