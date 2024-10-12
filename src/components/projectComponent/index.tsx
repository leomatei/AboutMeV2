import Image from 'next/image'
import MoreDetails from '@/assets/svgs/moredetails.svg'
import { Project } from '@/constants/projects'
import styles from './styles.module.scss'
export const ProjectComponent: React.FC<
  Project
> = ({
  id = 0,
  name = '',
  techStack = [],
  shortDescription = '',
  longDescription = '',
}) => {
  return (
    <div key={id} className={styles.project}>
      <div className={styles.project__header}>
        <p>{name}</p>
      </div>
      <p>{shortDescription}</p>
      <div className={styles.project__techStack}>
        {techStack.map(tech => (
          <div
            key={`project${id},tech${tech.id}`}
            className={
              styles.project__techStack__item
            }
          >
            <Image
              height={32}
              src={tech.logo}
              alt={tech.name}
            />
            <b>{tech.text}</b>
          </div>
        ))}
      </div>
      <p>
        <span>More details...</span>

        <Image
          src={MoreDetails}
          alt="more details"
        />
      </p>
      {/* short description then technologies then longdescription */}
    </div>
  )
}
