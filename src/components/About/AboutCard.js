import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {  
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi There 👋,   I am  <span className="purple">Miki Shibabaw </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />I am a software engineer.
            <br />
            <br />
            My hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> Photoshop
            </li>
            
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "I regret what I didn't do more than what I did."{' '}
          </p>
          <footer className="blockquote-footer">Loret Tsegaye Gebremedhin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
