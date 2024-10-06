import Image from 'next/image'
import React, { useState } from 'react'
import cx from 'classnames'

import { PROFESIONAL_TECHNOLOGIES } from '@/constants/technologies'

import styles from './styles.module.scss'

const TechnologiesList: React.FC = React.memo(
  () => {
    const [selected, setSelected] = useState(
      PROFESIONAL_TECHNOLOGIES[0],
    )
    return (
      <>
        <div className={styles.icons}>
          {PROFESIONAL_TECHNOLOGIES.map(item => (
            <div
              key={item.id}
              className={cx(styles.icon, {
                [styles.selected]:
                  item.id === selected.id,
              })}
              onClick={() => setSelected(item)}
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
        <div>{selected.text}</div>
      </>
    )
  },
)

TechnologiesList.displayName = 'TechnologiesList'

export default TechnologiesList
