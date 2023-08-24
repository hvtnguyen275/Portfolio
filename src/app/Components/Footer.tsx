/* eslint-disable react/no-unescaped-entities */
'use client'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Grid,
} from '@mui/material'
import {
  SmartphoneOutlined,
  LinkedIn,
  EmailOutlined,
  FacebookOutlined,
} from '@mui/icons-material'
import styles from '../page.module.css'

export default function Footer() {
  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar disableGutters>
          <Container maxWidth="lg">
            <Grid container justifyContent="space-between">
              <Grid item>
                <p className={styles.footerTitle}>Nguyen Huynh&apos;s Page</p>
              </Grid>
              <Grid item>
                <Box>
                  <IconButton href="mailto:hvtnguyen275@gmail.com">
                    <EmailOutlined />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/in/nguyenhuynhvt/"
                    target="_blank"
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href="https://www.facebook.com/thaonguyen.huynh.96742/"
                    target="_blank"
                  >
                    <FacebookOutlined />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}
