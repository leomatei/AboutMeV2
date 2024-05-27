import Image from 'next/image';

import styles from './technologieLayer.module.scss';

import IconJavaScript from '../../assets/svgs/javascript.svg';
import IconTypeScript from '../../assets/svgs/typescript.svg';
import IconHTML from '../../assets/svgs/html.svg';
import IconCSS from '../../assets/svgs/css.svg';
import IconSCSS from '../../assets/svgs/scss.svg';
import IconReact from '../../assets/svgs/react.svg';
import IconNext from '../../assets/svgs/next.svg';
import IconNode from '../../assets/svgs/node.svg';
import IconRedux from '../../assets/svgs/redux.svg';
import IconRedis from '../../assets/svgs/redis.svg';
import IconTailwind from '../../assets/svgs/tailwind.svg';
import IconDjango from '../../assets/svgs/django.svg';

const TECHNOLOGIES = [
  { id: 0, name: 'JavaScript', logo: IconJavaScript, text: '' },
  { id: 1, name: 'TypeScript', logo: IconTypeScript, text: '' },
  { id: 2, name: 'HTML', logo: IconHTML, text: '' },
  { id: 3, name: 'CSS', logo: IconCSS, text: '' },
  {
    id: 4,
    name: 'SCSS',
    logo: IconSCSS,
    text: '',
  },
  { id: 5, name: 'React', logo: IconReact, text: '' },
  { id: 6, name: 'Next', logo: IconNext, text: '' },
  { id: 7, name: 'Node', logo: IconNode, text: '' },
  { id: 8, name: 'Redux', logo: IconRedux, text: '' },
  { id: 9, name: 'Redis', logo: IconRedis, text: '' },
  { id: 10, name: 'Tailwind', logo: IconTailwind, text: '' },
  { id: 11, name: 'Django', logo: IconDjango, text: '' },
];

const TechnologiesLayer = () => {
  return (
    <div className={styles.technologiesLayer}>
      <div className={styles.icons}>
        {TECHNOLOGIES.map((item) => (
          <div key={item.id}>
            <Image src={item.logo} alt={item.name} width='40' height='40' />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default TechnologiesLayer;
