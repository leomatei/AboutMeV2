import { ProjectComponent } from '../projectComponent'
import { PROJECTS } from '@/constants/projects'
import styles from './styles.module.scss'

export default function ProjectsList() {
  return (
    <section className={styles.projects_list}>
      {/* <h2>Projects</h2> */}
      <div>
        <h3>Work Projects</h3>
        <div>
          {PROJECTS.map(project => (
            <ProjectComponent
              key={project.id}
              {...project}
            />
          ))}
        </div>
        {/* <h3>Personal Projects</h3> */}
      </div>
    </section>
  )
}
