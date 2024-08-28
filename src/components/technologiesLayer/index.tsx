import Image from 'next/image'
import React, { useState } from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'

import IconJavaScript from '../../assets/svgs/javascript.svg'
import IconTypeScript from '../../assets/svgs/typescript.svg'
import IconHTML from '../../assets/svgs/html.svg'
import IconCSS from '../../assets/svgs/css.svg'
import IconSCSS from '../../assets/svgs/scss.svg'
import IconReact from '../../assets/svgs/react.svg'
import IconNext from '../../assets/svgs/next.svg'
import IconNode from '../../assets/svgs/node.svg'
import IconRedux from '../../assets/svgs/redux.svg'
import IconRedis from '../../assets/svgs/redis.svg'
import IconTailwind from '../../assets/svgs/tailwind.svg'
import IconDjango from '../../assets/svgs/django.svg'
import IconGraphQL from '../../assets/svgs/graphql.svg'
import IconPrisma from '../../assets/svgs/prisma.svg'
import IconPostgreSQL from '../../assets/svgs/postgresql.svg'
import IconGCP from '../../assets/svgs/google_cloud.svg'
import IconSequelize from '../../assets/svgs/sequelizejs.svg'
import IconMySQL from '../../assets/svgs/mysql.svg'
import IconDocker from '../../assets/svgs/docker.svg'

interface Technology {
  id: number
  logo: string
  name: string
  text?: string
}

interface TechnologiesListProps {
  selected: number
  setSelected: (id: number) => void
}

const TECHNOLOGIES: Array<Technology> = [
  {
    id: 0,
    name: 'JavaScript',
    logo: IconJavaScript,
    text: 'JavaScript',
  },
  {
    id: 1,
    name: 'TypeScript',
    logo: IconTypeScript,
    text: 'TypeScript',
  },
  {
    id: 2,
    name: 'HTML',
    logo: IconHTML,
    text: 'HTML',
  },
  {
    id: 3,
    name: 'CSS',
    logo: IconCSS,
    text: 'CSS',
  },
  {
    id: 4,
    name: 'SCSS',
    logo: IconSCSS,
    text: 'SCSS',
  },
  {
    id: 5,
    name: 'React',
    logo: IconReact,
    text: 'React',
  },
  {
    id: 6,
    name: 'Next',
    logo: IconNext,
    text: 'Next',
  },
  {
    id: 7,
    name: 'Node',
    logo: IconNode,
    text: 'Node',
  },
  {
    id: 8,
    name: 'Redux',
    logo: IconRedux,
    text: 'Redux',
  },
  {
    id: 9,
    name: 'GraphQl',
    logo: IconGraphQL,
    text: 'GraphQl',
  },
  {
    id: 10,
    name: 'Prisma',
    logo: IconPrisma,
    text: 'Prisma',
  },
  {
    id: 11,
    name: 'Redis',
    logo: IconRedis,
    text: 'Redis',
  },
  {
    id: 12,
    name: 'PostgreSQL',
    logo: IconPostgreSQL,
    text: 'PostgreSQL',
  },
  {
    id: 13,
    name: 'MySQL',
    logo: IconMySQL,
    text: 'MySQL',
  },
  {
    id: 14,
    name: 'Sequelize',
    logo: IconSequelize,
    text: 'Sequelize',
  },
  {
    id: 15,
    name: 'Tailwind',
    logo: IconTailwind,
    text: 'Tailwind',
  },
  {
    id: 16,
    name: 'Google Cloud Platform',
    logo: IconGCP,
    text: 'Google Cloud Platform',
  },
  {
    id: 17,
    name: 'Docker',
    logo: IconDocker,
    text: 'Docker',
  },

  {
    id: 18,
    name: 'Django',
    logo: IconDjango,
    text: 'Django',
  },
]

const TechnologiesList: React.FC<TechnologiesListProps> =
  React.memo(({ selected, setSelected }) => {
    return (
      <div className={styles.icons}>
        {TECHNOLOGIES.map(item => (
          <div
            key={item.id}
            className={cx(styles.icon, {
              [styles.selected]:
                item.id === selected,
            })}
            onClick={() => setSelected(item.id)}
          >
            <Image
              src={item.logo}
              alt={item.name}
              width="40"
              height="40"
            />
          </div>
        ))}
      </div>
    )
  })

TechnologiesList.displayName = 'TechnologiesList'

const TechnologiesLayer: React.FC = () => {
  const [selected, setSelected] = useState(
    !!TECHNOLOGIES.length ? TECHNOLOGIES[0].id : 0
  )
  return (
    <div className={styles.technologiesLayer}>
      <TechnologiesList
        selected={selected}
        setSelected={id => setSelected(id)}
      />
      <div>{TECHNOLOGIES[selected].text}</div>
    </div>
  )
}

export default TechnologiesLayer
