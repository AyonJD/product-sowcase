'use client'

import React from 'react'
import styles from './style.module.scss'
import { useEffect, useState } from 'react'
import Nav from './nav'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <div className="container mx-auto">
      <div className={styles.header}>
        <div className={styles.logo}>
          {/* <img src="/logo.svg" alt="logo" /> */}
          <h1 className='text-2xl font-bold text-white'>Logo</h1>
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive)
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  )
}
