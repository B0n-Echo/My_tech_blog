import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=backend" className={`${styles.category} ${styles.style}`}>
          <Image 
          src="/style.png"
          alt=""
          width={32}
          height={32}
          />
          Backend
          </Link> 
          <Link href="/blog?cat=frontend" className={`${styles.category} ${styles.fashion}`}>
          <Image 
          src="/fashion.png"
          alt=""
          width={32}
          height={32}
          />
          Frontend
          </Link> 
          <Link href="/blog?cat=node" className={`${styles.category} ${styles.coding}`}>
          <Image 
          src="/coding.png"
          alt=""
          width={32}
          height={32}
          />
          Node JS
          </Link> 
          <Link href="/blog?cat=js" className={`${styles.category} ${styles.travel}`}>
          <Image 
          src="/travel.png"
          alt=""
          width={32}
          height={32}
          />
          Javascript
          </Link> 
          <Link href="/blog?cat=design" className={`${styles.category} ${styles.culture}`}>
          <Image 
          src="/culture.png"
          alt=""
          width={32}
          height={32}
          />
          System Design
          </Link> 
          <Link href="/blog?cat=architecture" className={`${styles.category} ${styles.food}`}>
          <Image 
          src="/food.png"
          alt=""
          width={32}
          height={32}
          />
          Architecture
          </Link> 
      </div>
    </div>
  )
}

export default CategoryList
