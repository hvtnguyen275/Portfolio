'use client'

import { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import React from 'react'
import { Hidden, CardContent, Grid, IconButton, Container } from '@mui/material'
import { PrintOutlined } from '@mui/icons-material'
import ProfileSideBar from './ProfileSideBar'
import ProfileInfo from './ProfileInfo'
import styles from '../page.module.css'

export default function Example() {
  const componentRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <Hidden smDown>
        <ReactToPrint
          trigger={() => (
            <IconButton className={styles.printButton}>
              <PrintOutlined />
            </IconButton>
          )}
          content={() => componentRef.current}
        />
      </Hidden>
      <div ref={componentRef}>
        <Container style={{ margin: '20px 0' }}>
          <Grid container>
            <Grid item sm={4} xs={12}>
              <ProfileSideBar />
            </Grid>
            <Grid item sm={8} xs={12}>
              <ProfileInfo />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
