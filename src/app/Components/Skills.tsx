import { ReactElement } from 'react'
import styles from '../page.module.css'

function SkillInfo(skillTitle: string, skillValue: string) {
  return { skillTitle, skillValue }
}

const skills = [
  SkillInfo('Communication & Presentation', '75%'),
  SkillInfo('Content Research & Development', '80%'),
  SkillInfo('Critical Thinking', '85%'),
  SkillInfo('Detail Orientation', '90%'),
  SkillInfo('Media Analysis', '65%'),
  SkillInfo('Microsoft Office', '90%'),
  SkillInfo('Teamwork', '75%'),
  SkillInfo('Javascript/HTML/CSS', '60%'),
  SkillInfo('ReactJS', '55%'),
  SkillInfo('Typescript', '40%'),
]

export default function SkillBar(): ReactElement {
  return (
    <>
      {skills.map((info) => (
        <>
          <p key={info.skillTitle} className={styles.sideBarInfo}>
            {info.skillTitle}
          </p>
          <div className={styles.skillBar}>
            <div
              className={styles.skillBarData}
              style={{ width: `${info.skillValue}` }}
            >
              {info.skillValue}
            </div>
          </div>
        </>
      ))}
    </>
  )
}
