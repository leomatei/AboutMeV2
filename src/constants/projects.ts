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
  displayName: string
  techStack: Array<Technology>
  shortDescription: string
  longDescription: string
}

export const WORK_PROJECTS: Array<Project> = [
  {
    id: 0,
    name: 'la_parks',
    displayName: 'LA Parks',
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
    name: 'agora',
    displayName:
      'Video meetings for elderly people',
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
    name: 'ed_tech',
    displayName: 'School management System',
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
    name: 'windfall',
    displayName: 'Scraper for LinkedIn',
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
    name: 'lgbt_blog',
    displayName: 'LGBT blog',
    techStack: [
      JavaScript,
      CSS,
      Zwibbler,
      SquareSpace,
    ],
    shortDescription: 'LGBT blog',
    longDescription: 'LGBT blog',
  },
]
export const HACKATHON_PROJECT = {
  id: 5,
  name: 'hackathon',
  displayName: 'Dear Diary',
  techStack: [React, Node, OpenAI],
  shortDescription: 'Dear Diary',
  longDescription: 'Dear Diary',
}

export const PERSONAL_PROJECTS = []

// maybe add HID
