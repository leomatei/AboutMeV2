import IconPHP from '@/assets/svgs/php.svg'
import IconCSS from '@/assets/svgs/css.svg'
import IconNPM from '@/assets/svgs/npm.svg'
import IconHTML from '@/assets/svgs/html.svg'
import IconSCSS from '@/assets/svgs/scss.svg'
import IconNext from '@/assets/svgs/next.svg'
import IconNode from '@/assets/svgs/node.svg'
import IconMySQL from '@/assets/svgs/mysql.svg'
import IconReact from '@/assets/svgs/react.svg'
import IconRedux from '@/assets/svgs/redux.svg'
import IconRedis from '@/assets/svgs/redis.svg'
import IconNest from '@/assets/svgs/nestjs.svg'
import IconDrupal from '@/assets/svgs/drupal.svg'
import IconPrisma from '@/assets/svgs/prisma.svg'
import IconDocker from '@/assets/svgs/docker.svg'
import IconOpenAI from '@/assets/svgs/openai.svg'
import IconDjango from '@/assets/svgs/django.svg'
import IconPython from '@/assets/svgs/python.svg'
import IconMariaDB from '@/assets/svgs/mariadb.svg'
import IconGraphQL from '@/assets/svgs/graphql.svg'
import IconAngular from '@/assets/svgs/angular.svg'
import IconGCP from '@/assets/svgs/google_cloud.svg'
import IconTailwind from '@/assets/svgs/tailwind.svg'
import IconJavaScript from '@/assets/svgs/javascript.svg'
import IconTypeScript from '@/assets/svgs/typescript.svg'
import IconPostgreSQL from '@/assets/svgs/postgresql.svg'
import IconSequelize from '@/assets/svgs/sequelizejs.svg'
import IconSquareSpace from '@/assets/svgs/squarespace.svg'

export interface Technology {
  id: number
  logo: string
  name: string
  text: string
}

export const JavaScript: Technology = {
  id: 0,
  name: 'JavaScript',
  logo: IconJavaScript,
  text: 'JavaScript',
}

export const TypeScript: Technology = {
  id: 1,
  name: 'TypeScript',
  logo: IconTypeScript,
  text: 'TypeScript',
}

export const HTML: Technology = {
  id: 2,
  name: 'HTML',
  logo: IconHTML,
  text: 'HTML',
}

export const CSS: Technology = {
  id: 3,
  name: 'CSS',
  logo: IconCSS,
  text: 'CSS',
}

export const SCSS: Technology = {
  id: 4,
  name: 'SCSS',
  logo: IconSCSS,
  text: 'SCSS',
}

export const React: Technology = {
  id: 5,
  name: 'React',
  logo: IconReact,
  text: 'React',
}

export const Next: Technology = {
  id: 6,
  name: 'Next',
  logo: IconNext,
  text: 'Next',
}

export const Node: Technology = {
  id: 7,
  name: 'Node',
  logo: IconNode,
  text: 'Node',
}

export const Redux: Technology = {
  id: 8,
  name: 'Redux',
  logo: IconRedux,
  text: 'Redux',
}

export const GraphQL: Technology = {
  id: 9,
  name: 'GraphQL',
  logo: IconGraphQL,
  text: 'GraphQL',
}

export const Prisma: Technology = {
  id: 10,
  name: 'Prisma',
  logo: IconPrisma,
  text: 'Prisma',
}

export const Redis: Technology = {
  id: 11,
  name: 'Redis',
  logo: IconRedis,
  text: 'Redis',
}

export const PostgreSQL: Technology = {
  id: 12,
  name: 'PostgreSQL',
  logo: IconPostgreSQL,
  text: 'PostgreSQL',
}

export const MySQL: Technology = {
  id: 13,
  name: 'MySQL',
  logo: IconMySQL,
  text: 'MySQL',
}

export const Sequelize: Technology = {
  id: 14,
  name: 'Sequelize',
  logo: IconSequelize,
  text: 'Sequelize',
}

export const Tailwind: Technology = {
  id: 15,
  name: 'Tailwind',
  logo: IconTailwind,
  text: 'Tailwind',
}

export const GoogleCloudPlatform: Technology = {
  id: 16,
  name: 'Google Cloud Platform',
  logo: IconGCP,
  text: 'Google Cloud Platform',
}

export const Docker: Technology = {
  id: 17,
  name: 'Docker',
  logo: IconDocker,
  text: 'Docker',
}

export const Django: Technology = {
  id: 18,
  name: 'Django',
  logo: IconDjango,
  text: 'Django',
}

export const PHP: Technology = {
  id: 19,
  name: 'PHP',
  logo: IconPHP,
  text: 'PHP',
}

export const Drupal: Technology = {
  id: 20,
  name: 'Drupal',
  logo: IconDrupal,
  text: 'Drupal',
}

export const Nest: Technology = {
  id: 21,
  name: 'NestJS',
  logo: IconNest,
  text: 'NestJS',
}

export const Angular: Technology = {
  id: 22,
  name: 'Angular',
  logo: IconAngular,
  text: 'Angular',
}

export const GoogleMapReact: Technology = {
  id: 23,
  name: 'GoogleMapReact',
  logo: IconNPM,
  text: 'GoogleMapReact',
}

export const MariaDB: Technology = {
  id: 24,
  name: 'MariaDB',
  logo: IconMariaDB,
  text: 'MariaDB',
}

export const Python: Technology = {
  id: 25,
  name: 'Python',
  logo: IconPython,
  text: 'Python',
}

export const SquareSpace: Technology = {
  id: 26,
  name: 'SquareSpace',
  logo: IconSquareSpace,
  text: 'SquareSpace',
}

export const Zwibbler = {
  id: 27,
  name: 'Zwibbler',
  logo: IconNPM,
  text: 'Zwibbler',
}

export const OpenAI = {
  id: 28,
  name: 'OpenAI',
  logo: IconOpenAI,
  text: 'OpenAI',
}

export const PROFESIONAL_TECHNOLOGIES: Array<Technology> =
  [
    JavaScript,
    TypeScript,
    HTML,
    CSS,
    SCSS,
    PHP,
    Drupal,
    React,
    Redux,
    GraphQL,
    Django,
    Node,
    Nest, // add express
    Sequelize,
    Prisma,
    Redis,
    PostgreSQL,
    MySQL,
    GoogleCloudPlatform,
    Docker,
  ]

export const OTHER_TECHNOLOGIES: Array<Technology> =
  [
    Next,
    Angular,
    Tailwind,
    GoogleMapReact,
    MariaDB,
  ]
