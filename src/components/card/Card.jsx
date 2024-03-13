import React from 'react'
import styles from './card.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>BACKEND</span>
        </div>
        <Link href={`/posts`}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          esse, delectus non pariatur, consectetur, exercitationem perferendis
          neque unde facilis necessitatibus commodi aliquam ipsa rerum
          cupiditate quis. Eos vitae quia ut.
        </p>
        <Link href={`/posts`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card
