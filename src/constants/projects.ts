import {
  Technology,
  PHP,
  Drupal,
  Nest,
  TypeScript,
  React,
  Node,
  SCSS,
  GraphQL,
  Docker,
  Redux,
  MySQL,
  Sequelize,
  PostgreSQL,
  Redis,
  Prisma,
  Django,
  GoogleCloudPlatform,
  JavaScript,
  CSS,
} from '@/constants/technologies'

interface Project {
  id: number
  name: string
  techStack: Array<Technology | string>
  text: string
}

export const PROJECTS: Array<Project> = [
  {
    id: 0,
    name: 'LA Parks',
    techStack: [
      PHP,
      Drupal,
      TypeScript,
      React,
      SCSS,
      Nest,
      Docker,
      'Google Map React',
      'MariaDB',
      'DocumentDB',
    ],
    text: '',
  },
  {
    id: 1,
    name: 'Video meetings for elderly people',
    techStack: [
      React,
      Node,
      SCSS,
      GraphQL,
      Redux,
      MySQL,
      Prisma,
    ],
    text: '',
  },
  {
    id: 2,
    name: 'School management System',
    techStack: [
      React,
      Node,
      Sequelize,
      PostgreSQL,
      Redux,
      Redis,
    ],
    text: '',
  },
  {
    id: 3,
    name: 'Scraper for LinkedIn',
    techStack: [
      'Python',
      Django,
      GoogleCloudPlatform,
    ],
    text: '',
  },
  {
    id: 4,
    name: 'LGBT blog',
    techStack: [
      JavaScript,
      CSS,
      'Zwibler',
      'SquareSpace',
    ],
    text: '',
  },
  {
    id: 5,
    name: 'Dear Diary',
    techStack: ['React,AI,node'],
    text: '',
  },
]

// maybe add HID
