import Image from 'next/image'
import styles from './styles.module.scss'
import ProfilePic from '@/assets/hero-img.jpg'

const InfoLayer = () => {
  return (
    <div className={styles.infoLayer}>
      <div className={styles.text}>
        <p>
          Versatile FullStack Developer,
          enthusiastic about expanding my skill
          set with new technologies and taking on
          diverse challenges within IT industry.
        </p>
      </div>
      <div className={styles.fadeImageContainer}>
        <div
          className={styles.gradientOverlay}
        ></div>
        <Image
          className={styles.imageWithFade}
          src={ProfilePic}
          alt="image of me"
          height={933}
          width={686}
          quality={100}
        />
      </div>
    </div>
  )
}
export default InfoLayer
