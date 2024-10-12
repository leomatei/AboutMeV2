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
  GoogleMapReact,
  MariaDB,
  Python,
  SquareSpace,
  Zwibbler,
  OpenAI,
} from '@/constants/technologies'

export interface Project {
  id: number
  name: string
  techStack: Array<Technology>
  shortDescription: string
  longDescription: string
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
      GoogleMapReact,
      MariaDB,
    ],
    shortDescription: 'LA Parks',
    longDescription: 'LA Parks',
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
    shortDescription:
      'Video meetings for elderly people',
    longDescription:
      'Video meetings for elderly people',
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
    shortDescription: 'School management System',
    longDescription: 'School management System',
  },
  {
    id: 3,
    name: 'Scraper for LinkedIn',
    techStack: [
      Python,
      Django,
      GoogleCloudPlatform,
    ],
    shortDescription: 'Scraper for LinkedIn',
    longDescription: 'Scraper for LinkedIn',
  },
  {
    id: 4,
    name: 'LGBT blog',
    techStack: [
      JavaScript,
      CSS,
      Zwibbler,
      SquareSpace,
    ],
    shortDescription: 'LGBT blog',
    longDescription: 'LGBT blog',
  },
  {
    id: 5,
    name: 'Dear Diary',
    techStack: [React, Node, OpenAI],
    shortDescription: 'Dear Diary',
    longDescription: 'Dear Diary',
  },
]

// maybe add HID
