import Image from 'next/image'
import React, { useState } from 'react'
import cx from 'classnames'

import { TECHNOLOGIES } from '@/constants/technologies'

import styles from './styles.module.scss'

const TechnologiesList: React.FC = React.memo(
  () => {
    const [selected, setSelected] = useState(
      TECHNOLOGIES[0].id
    )
    return (
      <>
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
        <div>{TECHNOLOGIES[selected].text}</div>
      </>
    )
  }
)

TechnologiesList.displayName = 'TechnologiesList'

export default TechnologiesList
