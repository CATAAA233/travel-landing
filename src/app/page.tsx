import ServiceCard from '@/components/ServiceCard'
import styles from './page.module.css'
import Image from 'next/image'
import { DarkLayer } from '@/components'
export default function Home () {
  return (
    <main className={styles.main}>
      <div className={styles.Coverpage}>
        <DarkLayer/>
        <Image className={styles.CoverImage} src={'/images/coverpage.webp'} alt={'Coverpage Image'} fill />
        <h1>Find Yourself Outside.</h1>
        <p>Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.</p>
        <button className={styles.Button}>Discover</button>
      </div>
      <section className={styles.ServicesCards__Section}>
        <div className={styles.ServicesCards__List}>
          <ServiceCard iconSrc={'/icons/campfire.svg'} title={'Camping & Day Use'} description={'Return to your favorite spot or discover a new one that&aposs right for you'} />
          <ServiceCard iconSrc={'/icons/tickets.svg'} title={'Tours & Tickets'} description={'Reserve tours and tickets to participate in events'} />
          <ServiceCard iconSrc={'/icons/permit.svg'} title={'Permits'} description={'Obtain permits of access to high-demand locations'} />
          <ServiceCard iconSrc={'/icons/fishing.svg'} title={'Recreation Activities'} description={'Return to your favorite spot or discover a new one that&aposs right for you'} />
        </div>
      </section>
      <section style={{height:400}}></section>
    </main>
  )
}
