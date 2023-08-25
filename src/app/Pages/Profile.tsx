import styles from '../page.module.css'
import { Box, Container, Card, Hidden } from '@mui/material'
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
      <div>
        <Footer />
      </div>
    </>
  )
}
