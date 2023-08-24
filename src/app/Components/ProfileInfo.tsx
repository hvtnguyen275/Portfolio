import {
  CardContent,
  Container,
  Grid,
  SvgIconProps,
  Divider,
  Hidden,
} from '@mui/material'
import styles from '../page.module.css'

function Activity(
  title: string,
  time: string,
  position?: string,
  content?: string
) {
  return { title, time, position, content }
}

const activities = [
  Activity(
    'Vietnamese Sound Lab - Acoustic Night',
    'Oct 2019 - Feb 2023',
    'Performer - Pianist | Event Dỉrector',
    'Participate in event and performance organizing.'
  ),
  Activity(
    'Analytics and Math Center',
    'Oct 2022 - Feb 2023',
    'Mathematics English Tutor',
    'Help students improve their analytics and math skills.'
  ),
  Activity(
    'APU Teaching Assistance Team',
    'Oct 2021 - Feb 2023',
    'Teaching Assistance (TA) - Statistics',
    'Assist Professor and students during lectures'
  ),
  Activity(
    'Sang Soft',
    'March 2022 - Nov 2022',
    'Front-end Developer Intern',
    'Adjust UI according to design'
  ),
]

const honors = [
  Activity(
    'PAL Inoue Scholarship',
    'Apr 2022 - March 2023',
    'Scholarship Recipient'
  ),
  Activity(
    'Oita Prefecture Scholarship',
    'Apr 2020 - Mar 2022',
    'Scholarship Recipient'
  ),
  Activity(
    'Monbukagakusho Honors Scholarship (JASSO)',
    'Sept 2019 - Mar 2020',
    'Scholarship Recipient'
  ),
]

export default function ProfileInfo() {
  return (
    <>
      {/* <Hidden mdDown>
        <CardContent>
          <Container>
            <h1 className={styles.profileName}>Huynh Vu Thao Nguyen</h1>
            <Divider />
          </Container>
        </CardContent>
        <CardContent>
          <Container>
            <ProfileData />
          </Container>
        </CardContent>
      </Hidden>
      <Hidden mdUp> */}
      <CardContent>
        <h2 className={styles.profileName}>Huynh Vu Thao Nguyen</h2>
        <Divider />
        <div>
          <h3 className={styles.profileTitle}>Personal Profile</h3>
          <p className={styles.profileText}>
            A hard-working fresh graduate from Ritsumeikan Asia Pacific
            University, Japan. I am an enthusiastic, open-minded and flexible
            team-player possessing excellent analytics and detail-oriented
            skills. Proficiency in different languages interpretation.
            Experienced in working and team management in both Vietnamese and
            international environment with different cultures and working
            styles.
          </p>
        </div>

        <div>
          <h3 className={styles.profileTitle}>Educational History</h3>
          <div>
            <h4 className={styles.profileSubTitle}>
              Ritsumeikan Asia Pacific University
            </h4>
            <p className={styles.profileText}>
              Bachelor of Accounting and Finance Major
            </p>
          </div>
        </div>

        <div>
          <h3 className={styles.profileTitle}>Activities</h3>
          {activities.map((info) => (
            <div key={info.title}>
              <Grid container justifyContent="space-between">
                <Grid item md={7} xs={12}>
                  <h4 className={styles.profileSubTitle}>{info.title}</h4>
                </Grid>
                <Grid item md={5}>
                  <p className={styles.profileTimeStamp}>{info.time}</p>
                </Grid>
              </Grid>
              <p className={styles.profileBody}>{info.position} </p>
              <li className={styles.profileText} style={{ color: ' #848484' }}>
                {info.content}{' '}
              </li>
            </div>
          ))}
        </div>
        <div>
          <h3 className={styles.profileTitle}>Honors and Awards</h3>
          {honors.map((info) => (
            <div key={info.title}>
              <Grid container justifyContent="space-between">
                <Grid item md={7} xs={12}>
                  <h4 className={styles.profileSubTitle}>{info.title}</h4>
                </Grid>
                <Grid item md={5}>
                  <p className={styles.profileTimeStamp}>{info.time}</p>
                </Grid>
              </Grid>
              {info.position ? (
                <p className={styles.profileBody}>{info.position} </p>
              ) : (
                ''
              )}
              {info.content ? (
                <li className={styles.profileText}>{info.content} </li>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
        {/* <ProfileData /> */}
      </CardContent>
      {/* </Hidden> */}
    </>
  )
}
