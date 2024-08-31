import {
  Technology,
  PHP,
  Drupal,
  Nest,
  TypeScript,
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
      Nest,
      TypeScript,
      'Google Map React',
    ],
    text: '',
  },
]
