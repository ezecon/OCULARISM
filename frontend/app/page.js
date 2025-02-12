"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Detection from "@/components/Detection";
import Doctors from "@/components/Doctors";
import HeroSection from "@/components/HeroSection";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ParticlesEffect from "@/components/ParticlesEffect";
import Advice from "@/components/Advice";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


function SectionComponent({ Component, id }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
      <section className="section-container">
          <div ref={ref}>
              <Component />
          </div>
      </section>
  )
}

export default function Home() {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })

  const components = [ HeroSection, Doctors, Detection, Advice]

  return (
      <div>
        <ParticlesEffect/>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid-flow"></div>

      {/* Enhanced Scanlines Effect */}
      <nav className="fixed w-full z-10 "><Navbar/></nav>
         <main className="">
            {components.map((Component, index) => (
                  <SectionComponent key={index} Component={Component} id={index + 1} />
              ))}
              <motion.div className="progress" style={{ scaleX }} />
              <StyleSheet />
         </main>
      </div>
  )
}

function StyleSheet() {
  return (
      <style>{`
       html {
          scroll-snap-type: y mandatory;
      }

      .section-container {
          height: 100vh;
          scroll-snap-align: start;
          position: relative;
      }


      .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background: goldenrod;
          bottom: 50px;
          transform: scaleX(0);
      }
  `}</style>
  )
} 
