export { default as one } from "./one.svg";
export { default as two } from "./two.png";
export { default as three } from "./three.webp";
export { default as four } from "./four.jpg";
export { default as five } from "./five.png";
export { default as six } from "./six.jpg";
export { default as seven } from "./seven.png";
export { default as eight } from "./eight.svg";
export { default as nine } from "./nine.svg";
export { default as ten } from "./ten.svg";
export { default as eleven } from "./eleven.svg";
export { default as twelve } from "./twelve.svg";


export const panelVariants = {
    hidden: {
        opacity: 0,
        y: 30, // slides down when hidden
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    visible: {
        opacity: 1,
        y: 0, // back to position
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -30, // slides up when exiting
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};


export const codeString = `
"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, panelVariants } from '@/assets/imports'
import "../css/index.css"


gsap.registerPlugin(InertiaPlugin)

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
            <Image src={img.src} width={100} height={100} alt={'${'img.alt'}-image'} className='img' />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

`


export const scss_codestring = `
.mwg_effect000 {
    background: hsl(10, 3%, 8%);
    height: 100vh;
    position: relative;
    display: grid;
    place-items: center;

    .medias {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1vw;

        .img {
            width: 8vw;
            height: 8vw;
            object-fit: contain;
            border-radius: 4%;
            pointer-events: none;
            will-change: transform;
        }
    }

    .tutorial_button_inertia_plugin {
        position: absolute;
        bottom: 25px;
        right: 25px;
        padding: 10px 15px;
        width: 180px;
        height: 40px;
        background-color: yellowgreen;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 500;
        border: none;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        opacity: 0.8;
        transition: all .2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        transition: all .2s ease-in-out;

        &:hover {
            opacity: 1;
            transition: all .2s ease-in-out;
        }


        p {
            font-size: .8rem;
            margin-left: .5rem;
        }
    }

    .code_sandbox {
        position: absolute;
        top: 120px;
        left: 1.5rem;
        transform: translateY(-50%);
        padding: 2.5rem 1rem;
        backdrop-filter: blur(20px);
        width: 580px;
        height: 80vh;
        border-radius: 10px;
        background-color: hsla(0, 2%, 17%, 0.5);

        .x_button {
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;
            background-color: rgb(210, 210, 210);
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            width: 20px;
            height: 20px;

        }

        .sandbox {
            width: 100%;
            height: 100%;
            padding: 1rem 0;
            overflow: scroll;
            scrollbar-width: 0;

            .code_picker {
                display: flex;
                padding: 0 .5rem;
                width: fit-content;
                margin-bottom: 1rem;
                border-radius: 4px;
                overflow: hidden;
                div {
                    border: 1px solid rgb(50, 50, 50);
                    padding: .5rem 1rem;
                    cursor: pointer;
                    background-color: hsl(10, 3%, 8%);
                    color: white;
                    font-family: "Neutral Face";
                    font-size: .8rem;
                    opacity: 0.7;
                    &:hover {
                        opacity: 1;
                    }
                }
            }
            .code_block {
                p {
                    width: 100%;
                    color: white;
                    font-family: "Kumbh";
                    line-height: 1.5;
                    font-size: .95rem;
                    margin-bottom: 1rem;
                    padding: 0 .5rem;
                }

                .block {
                    border-radius: .5rem;
                    overflow: hidden;
                    width: 100%;
                    height: 60vh;
                    overflow-y: scroll;
                    box-sizing: border-box;
                }
                .block::-webkit-scrollbar {
                    display: none;
                }
            }
        }

        .sandbox::-webkit-scrollbar {
            display: none;
        }
    }
}

`