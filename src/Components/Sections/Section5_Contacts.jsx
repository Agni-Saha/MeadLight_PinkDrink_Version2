import React, { useEffect } from 'react'
import SvgImport from '../SVG/SvgImport';
import rose from '../../Assets/illustrations/rose_00.png';
import hand_01 from '../../Assets/illustrations/hand_01.png';
import ln from '../../Assets/images/in.png';
import g from '../../Assets/images/Git.png';
import insta from "../../Assets/images/insta.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power2 } from 'gsap/all';

export default function Section5_Contacts() {
    let tl_info = gsap.timeline()
    function MoreInfo() {
        if (document.querySelector('.defaultInfo').style.display !== "none") {
            gsap.to('.plusInfo', { rotationZ: -135, duration: 0.5 })
            tl_info.to('.defaultInfo', { y: -40, opacity: 0, display: 'none', duration: 0.4 })
            tl_info.fromTo('.altInfo', { y: 40, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'block', duration: 0.4 })
        } else {
            gsap.to('.plusInfo', { rotationZ: 0, duration: 0.5 })
            tl_info.to('.altInfo', { y: -40, opacity: 0, display: 'none', duration: 0.4 })
            tl_info.fromTo('.defaultInfo', { y: 40, opacity: 0, display: 'none' }, { y: 0, opacity: 1, display: 'flex', duration: 0.4 })
        }
    }
    gsap.registerPlugin(ScrollTrigger)


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".Section5_Contacts",
            start: "+=4550"
        },
    })

    useEffect(() => {
        gsap.from('.roseS5',
            {
                scrollTrigger: {
                    trigger: ".Section5_Contacts",
                    start: "-=300"
                },
                opacity: 0,
                y: 20,
                duration: 0.6
            })

        gsap.from('.hand_01',
            {
                scrollTrigger: {
                    trigger: ".Section5_Contacts",
                    start: "-=300",
                },
                y: 40,
                opacity: 0,
                duration: 0.6
            })

        tl.from('.pBold__s5',
            {
                rotateX: -50,
                rotateY: -50,
                opacity: 0,
                x: 30,
                duration: 0.8
            })
        tl.from('.linePink_pBold_S5',
            {
                strokeDashoffset: 650,
                duration: 0.8,
                ease: Power2.easeIn
            }, '-=0.3')

        tl.from('.pHeader__s5',
            {
                y: 30,
                opacity: 0,
                duration: 0.5
            })

        tl.from('.pCaption__s5',
            {
                rotateX: -50,
                rotateY: -50,
                opacity: 0,
                x: 20,
                duration: 0.6,
                stagger: 1
            }, '-=0.3')
    })


    return (
        <div className="Section5_Contacts_Container">
            <div className="Section5_Contacts">
                <div>
                    <img id="Section5" className="roseS5" src={rose} alt="rose" />

                    <p className="pHeader__s5">NICE TO MEET YOU</p>
                    <div className="articles_S5">
                        <p className="pBold__s5">
                            Let’s get to know
                            <br />
                            <bdi className="bdiSec2">
                                <>each other<br /></>
                                <SvgImport
                                    svg={
                                        <svg viewBox="0 0 135 10" style={{ position: 'absolute', width: 175, bottom: -8, right: 0 }}>
                                            <path className="linePink_pBold_S5" fill="none" stroke="#ff91a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" vectorEffect="non-scaling-stroke" d="M3.1 4.5c42.5-5.4 86.3 6.1 128.9.9" style={{ strokeDashoffset: 0, strokeDasharray: 645.611 }}></path>
                                        </svg>}
                                />
                            </bdi>
                        </p>

                        <p className="pCaption__s5">
                            You can call, write or contact us on social media.<br />
                            We will be delighted to meet you!</p>
                        <img className="hand_01" src={hand_01} alt="hand_01" />

                    </div>
                </div>
                <div className="Info">
                    <button onClick={() => MoreInfo()} className="pureInfo">
                        <p className="plusInfo">+ </p>
                        INFO
                    </button>
                    <div className="defaultInfo">
                        <a href="https://agni-pfolio.vercel.app/" target="_blank" className="name" rel="noreferrer">
                            <p>NAME</p>
                            <p>AGNI SAHA</p>
                        </a>
                        <a href="mailto:agnisaha7799@gmail.com" target="_blank" className="email" rel="noreferrer">
                            <p>EMAIL</p>
                            <p>AGNISAHA7799@GMAIL.COM</p>
                        </a>
                        <a href="https://meadlight.com/en" target="_blank" className="email" rel="noreferrer">
                            <p>ORUGINAL WEBSITE</p>
                            <p>MEADLIGHT.COM/EN</p>
                        </a>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/agni-saha-46908920b/" target="_blank" rel="noreferrer">
                                <img src={ln} className="linkedin" alt="linkedin" />
                            </a>
                            <a href="https://github.com/Agni-Saha" target="_blank" rel="noreferrer">
                                <img src={g} className="git" alt="git" />
                            </a>
                            <a href="https://www.instagram.com/joe.the.average/" target="_blank" rel="noreferrer">
                                <img src={insta} className="insta" alt="insta" />
                            </a>  
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
