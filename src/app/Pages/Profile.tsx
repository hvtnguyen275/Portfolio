import styles from '../page.module.css'
import {
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Hidden,
} from '@mui/material'
import ProfileSideBar from '../Components/ProfileSideBar'
import ProfileInfo from '../Components/ProfileInfo'
import { useRef } from 'react'
import Example from '../Components/ComponentToPrint'
import Footer from '../Components/Footer'

export default function Profile() {
  return (
    <>
      <Hidden smDown>
        <Container maxWidth="md">
          <Card className={styles.profileCard}>
            <Example />
          </Card>
        </Container>
      </Hidden>
      <Hidden smUp>
        <Example />
      </Hidden>

      {/* <div>
        <Container maxWidth="md">
          <Card className={styles.profileCard}>
            <Example />
          </Card>
        </Container>
      </div> */}
      <div>
        <Footer />
      </div>
    </>
  )
}
