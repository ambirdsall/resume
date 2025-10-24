import React from "react"
import {
  FaAt,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa"

// "\u00a0" is unicode codepoint for non-breaking space
const unbroken = text => text.replace(" ", "\u00a0")

const email = "ambirdsall@gmail.com"
const phone = new String("(802) 989-5647")
phone.plain = "802-989-5647"

export const ContactInfo = () => (
  <div className="contact-info">
    <a className="contact" href="https://ambirdsall.com">
      <FaGlobe />
      ambirdsall.com
    </a>
    <a className="contact" href={`mailto:${email}`}>
      <FaAt />
      {email}
    </a>
    <a className="contact" href={`tel:${phone.plain}`}>
      <FaPhone />
      {unbroken(phone)}
    </a>
    <a
      className="contact"
      href="https://en.wikipedia.org/wiki/Portland,_Oregon"
    >
      <FaMapMarkerAlt />
      Portland, OR
    </a>
    <a className="contact" href="https://github.com/ambirdsall">
      <FaGithub />
      ambirdsall
    </a>
    <a className="contact" href="https://linkedin.com/in/ambirdsall">
      <FaLinkedin />
      ambirdsall
    </a>
  </div>
)
