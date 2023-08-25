'use client'
import { ReactElement } from 'react'
import {
  CardContent,
  Container,
  Grid,
  SvgIconProps,
  Hidden,
  Avatar,
} from '@mui/material'
import styles from '../page.module.css'
import {
  EmailOutlined,
  SmartphoneOutlined,
  LinkedIn,
  CakeOutlined,
} from '@mui/icons-material'
import Image from 'next/image'
import SkillBar from './Skills'

function GeneralInfo(
  generalIcon: ReactElement<SvgIconProps>,
  generalInfo: string
) {
  return { generalIcon, generalInfo }
}

const personalInfo = [
  GeneralInfo(<CakeOutlined />, 'May 27, 2001'),
  GeneralInfo(<EmailOutlined />, 'hvtnguyen275@gmail.com'),
  GeneralInfo(<SmartphoneOutlined />, '(+84) 70-804-8957'),
  GeneralInfo(<LinkedIn />, './in/nguyenhuynhvt'),
]

const SideBar = () => {
  return <></>
}

export default function ProfileSideBar() {
  return (
    <>
      <CardContent>
        <div className={styles.avatarProfile}>
          <Avatar
            // src="/Nguyen.png"
            // alt="Nguyen Huynh"
            sx={{ width: 200, height: 200 }}
          >
            <Image
              width={200}
              height={200}
              src="/Nguyen.png"
              alt={'Nguyen Huynh Profile Picture'}
              objectFit="cover"
            />
          </Avatar>
        </div>
        <h3 className={styles.sideBarTitle}>Personal Details</h3>

        {personalInfo.map((info) => (
          <Grid
            container
            key={info.generalInfo}
            className={styles.generalContact}
          >
            <Grid item xs={2}>
              <div className={styles.generalInlineInfo}>{info.generalIcon}</div>
            </Grid>
            <Grid item xs={10}>
              <p className={styles.sideBarInfo}>{info.generalInfo}</p>
            </Grid>
          </Grid>
        ))}
        <h3 className={styles.sideBarTitle}>Skills</h3>
        <SkillBar />
        <div style={{ height: '5px' }}></div>

        <h3 className={styles.sideBarTitle}>Languages</h3>
        <span className={styles.languageStyle}>#English</span>
        <span className={styles.languageStyle}>#Japanese</span>
        <span className={styles.languageStyle}>#Vietnamese</span>
      </CardContent>
    </>
  )
}
