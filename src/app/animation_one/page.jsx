"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, panelVariants, codeString } from '@/assets/imports'
import "../css/index.css"
import { AnimatePresence, motion } from 'framer-motion'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { pojoaque } from 'react-syntax-highlighter/dist/esm/styles/hljs'


gsap.registerPlugin(InertiaPlugin)

// react-syntax-highlighter-themes

// darcula
// dracula
// gruvboxDark
// holiTheme
// pojoaque
// shadesOfPurple

// react-syntax-highlighter-themes

export default function InertiaPluginAnimation() {
  const [show_sandbox, setShowSandbox] = useState(false);
  const images = [
    { src: one, alt: 'one' },
    { src: two, alt: 'two' },
    { src: three, alt: 'three' },
    { src: four, alt: 'four' },
    { src: five, alt: 'five' },
    { src: six, alt: 'six' },
    { src: seven, alt: 'seven' },
    { src: eight, alt: 'eight' },
    { src: nine, alt: 'nine' },
    { src: ten, alt: 'ten' },
    { src: eleven, alt: 'eleven' },
    { src: twelve, alt: 'twelve' },
  ]

  const rootRef = useRef(null)
  let oldX = 0,
    oldY = 0,
    deltaX = 0,
    deltaY = 0

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const handleMouseMove = (e) => {
      deltaX = e.clientX - oldX
      deltaY = e.clientY - oldY
      oldX = e.clientX
      oldY = e.clientY
    }

    root.addEventListener("mousemove", handleMouseMove)

    const mediaEls = root.querySelectorAll(".media")

    mediaEls.forEach((el) => {
      const image = el.querySelector("img")
      const handleMouseEnter = () => {
        const tl = gsap.timeline({
          onComplete: () => tl.kill()
        })

        tl.timeScale(1.2)

        tl.to(image, {
          inertia: {
            x: { velocity: deltaX * 30, end: 0 },
            y: { velocity: deltaY * 30, end: 0 },
          },
        })

        tl.fromTo(
          image,
          { rotate: 0 },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<"

        )
      }

      el.addEventListener("mouseenter", handleMouseEnter)

      el._cleanup = () => el.removeEventListener("mouseenter", handleMouseEnter)

    })

    return () => {
      root.removeEventListener("mousemove", handleMouseMove)
      mediaEls.forEach((el) => el._cleanup && el._cleanup())
    }
  }, [])


  return (
    <div className="mwg_effect000" ref={rootRef}>
      <div className='medias'>
        {images.map((img, index) => (
          <div className="media" key={index}>
            <Image src={img.src} width={100} height={100} alt={`${img.alt}-image`} className='img' />
          </div>
        ))}
      </div>

      <div className="tutorial_button_inertia_plugin" onClick={() => setShowSandbox(true)}>
        <Image src={"/entrar.svg"} width={25} height={25} alt='enter-svg' style={{ transform: "rotateY(180deg)" }} />
        <p>View Tutorial</p>
      </div>

      {
        show_sandbox && (
          <AnimatePresence>
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="code_sandbox">
              <div className="x_button" onClick={() => setShowSandbox(false)}><Image src={"/cancel.svg"} width={15} height={15} alt='x-svg' /></div>
              <div className="sandbox">
                <div className="code_block">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel eius quod rem dignissimos, nulla voluptatibus iure dicta eligendi, atque illum? Cumque officia earum placeat.</p>
                  <div className="block">
                    <SyntaxHighlighter language='javascript' style={pojoaque} >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        )
      }
    </div>
  )
}
