import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscripton">
        <p className="footer-subscription-heading">
          join the adventure newsletter to receive our best vaction deals
        </p>
        <p className="footer-subscription-text">
          you can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name='email' placeholder='your Email'className='footer-input' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="foooter-links-items">
            <h2>ABOUT US</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to='/' className='social-logo'>
              TRVL <i className='fab fa-typo3'></i>
            </Link>
          </div>
          <small className='website-rights'>TRVL 2023</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
                   to='/'
                   target='-blank'
                   aria-label='Facebook'>
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link className="social-icon-link instagram"
                   to='/'
                   target='-blank'
                   aria-label='Instagram'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer