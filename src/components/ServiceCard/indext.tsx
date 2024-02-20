import Image from 'next/image'
import styles from './card.module.css'
interface Props {
  iconSrc: string
  title: string
  description: string
}
export default function ServiceCard (props: Props) {
  return (
    <div className={styles.Container}>
      <Image src={props.iconSrc} alt={'Icon'} width={60} height={60} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
