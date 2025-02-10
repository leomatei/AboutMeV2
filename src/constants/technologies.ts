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
  text: `<p>
      <span>
        Over 4 years of experience with
        JavaScript, used on almost every project.
      </span>
      <span>
        I have experience with both vanilla
        JavaScript(<a href='#project_lgbt_blog'>See this project</a>) and modern frameworks like
        React, Angular and Vue.
      </span>
    </p>`,
}

export const TypeScript: Technology = {
  id: 1,
  name: 'TypeScript',
  logo: IconTypeScript,
  text: '1 year of experience with TypeScript, used for Nest.js.',
}

export const HTML: Technology = {
  id: 2,
  name: 'HTML',
  logo: IconHTML,
  text: '4 years of experience with HTML. Used on almost every project.',
}

export const CSS: Technology = {
  id: 3,
  name: 'CSS',
  logo: IconCSS,
  text: `<div>
  <span4 years of experience with CSS. </span>
  <span>Used global CSS and inline CSS on SquareSpace(<a href='#project_lgbt_blog'>See this project</a>).</span>
  <p>Used CSS injector on Drupal7(<a href='#project_la_parks'>See this project</a>).</p>
  </div>
  `,
}

export const SCSS: Technology = {
  id: 4,
  name: 'SCSS',
  logo: IconSCSS,
  text: '4 years of experience with SCSS. Used on almost every project.',
}

export const React: Technology = {
  id: 5,
  name: 'React',
  logo: IconReact,
  text: `<p>
  <span>Over 3 years of experience with React, used on various projects.</span>
  <span>Used various hooks such as useReducer, useRef, and created custom hooks. Optimize performance with React.memo, useMemo, and useCallback.</span>
  </p>`,
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
  text: `<p>
  <span>Over 3 years of experience with Node.js.</span>
  <span>Used various approaches suck as: express.js apps, Nest.js apps, RESTAPIs, GraphQL, middlewares, Swagger for API Docs, JWT, session stored tokens, login using google OAuth2, Cron jobs.</span>
  </p>`,
}

export const Redux: Technology = {
  id: 8,
  name: 'Redux',
  logo: IconRedux,
  text: `<p>
      <span>Used Redux for state management on various projects.</span>
      <span>Used reducers, slicers and Redux Toolkit Query for API caching.</span>
      <span>Used Redux Thunk for async actions.</span>
      <span>Used Redux Devtools for debugging.</span>
    </p>`,
}

export const GraphQL: Technology = {
  id: 9,
  name: 'GraphQL',
  logo: IconGraphQL,
  text: 'Over 2 years working with GraphQL with Appolo Client and Server.',
}

export const Prisma: Technology = {
  id: 10,
  name: 'Prisma',
  logo: IconPrisma,
  text: 'Over 2 years working with Prisma ORM.',
}

export const Redis: Technology = {
  id: 11,
  name: 'Redis',
  logo: IconRedis,
  text: 'Used Redis for caching and storing data from costly operations.',
}

export const PostgreSQL: Technology = {
  id: 12,
  name: 'PostgreSQL',
  logo: IconPostgreSQL,
  text: 'Over 2 years working with PostgreSQL, which offers better support for complex queries and transactions for concurrent requests.',
}

export const MySQL: Technology = {
  id: 13,
  name: 'MySQL',
  logo: IconMySQL,
  text: 'Over 3 years of experience using MySQL, utilized in various projects.',
}

export const Sequelize: Technology = {
  id: 14,
  name: 'Sequelize',
  logo: IconSequelize,
  text: 'Over 2 years working with Sequelize ORM, used for managing PostgreSQL table structures and migrations.',
}

export const Tailwind: Technology = {
  id: 15,
  name: 'Tailwind',
  logo: IconTailwind,
  text: 'Used Tailwind CSS for styling components efficiently.',
}

export const GoogleCloudPlatform: Technology = {
  id: 16,
  name: 'Google Cloud Platform',
  logo: IconGCP,
  text: 'Experience with Google Cloud Platform for reading and writing files stored in cloud.',
}

export const Docker: Technology = {
  id: 17,
  name: 'Docker',
  logo: IconDocker,
  text: 'Used docker for running multiple containers',
}

export const Django: Technology = {
  id: 18,
  name: 'Django',
  logo: IconDjango,
  text: '1 year of using Django framework, including command line actions, RESTAPI server and using libraries such as SimpleJWT',
}

export const PHP: Technology = {
  id: 19,
  name: 'PHP',
  logo: IconPHP,
  text: 'Over 1 year of experience with PHP 7 and 8',
}

export const Drupal: Technology = {
  id: 20,
  name: 'Drupal',
  logo: IconDrupal,
  text: 'Over 1 year of experience with Drupal 8 and Drupal 10, creating pages using Twig templates.',
}

export const Nest: Technology = {
  id: 21,
  name: 'NestJS',
  logo: IconNest,
  text: 'Over 1 year of experience using NestJS.',
}

export const Angular: Technology = {
  id: 22,
  name: 'Angular',
  logo: IconAngular,
  text: 'Used Angular for Personal Projects.',
}

export const GoogleMapReact: Technology = {
  id: 23,
  name: 'GoogleMapReact',
  logo: IconNPM,
  text: 'Used GoogleMapReact for displaying maps and highlight locations.',
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
  text: 'Used Python for simple projects, LinkedIn Scrapper(link) and machine learning experiemts with pandas and numpy',
}

export const SquareSpace: Technology = {
  id: 26,
  name: 'SquareSpace',
  logo: IconSquareSpace,
  text: 'Wortked with SquareSpace to create a static blog.',
}

export const Zwibbler = {
  id: 27,
  name: 'Zwibbler',
  logo: IconNPM,
  text: 'Create a Paint web app using Zwibbler library.',
}

export const OpenAI = {
  id: 28,
  name: 'OpenAI',
  logo: IconOpenAI,
  text: 'Using APIs from OpenAI to generate text.',
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
