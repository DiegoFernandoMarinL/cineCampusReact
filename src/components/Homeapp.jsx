import React from 'react'
import styles from '../styles/Homeapp.module.css'

export const Homeapp = () => {
  return (
    <div className={styles.container__main}>
      <section className={styles.section__greeting}>
        <img src="" alt="" />
        <div className={styles.container__greeting}>
          <h5>Hi, Ferrucio Tuccine!  </h5>
          <p>Let’s watch movie together!</p>
        </div>
        <img src="" alt="" />
      </section>
      <section className={styles.section__search}>
        <img src="" alt="" />
        <input type="text" />
      </section>
      <section className={styles.section__movies}>
        <div className={styles.container__text}>
          <h4>Now playing</h4>
          <p>See all</p>
        </div>
        {/* componente movie */}
      </section>
      <section className={styles.section__coming_soon}>
        <div className={styles.container__text}>
          <h4>Coming soon</h4>
          <p>See all</p>
        </div>
        {/* componente movies proximamente */}
      </section>
    </div>
  )
}

export default Homeapp
