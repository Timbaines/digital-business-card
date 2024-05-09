import profileImg from "../assets/tim-baines-avatar.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Header()
    {
      return (
          <>
          <div>
              <img src={profileImg} className="profile-img" alt="Tim Baines Bio Image"/>
              <h1 className="bio-name">Tim W. Baines</h1>
              <p className="bio-role">Frontend Developer</p>
              <a className="bio-website" href="https://scrimba.com/">scrimba.com</a>
          </div>
              <div className="container-btn">
                  <button><a className="btn-email" href="#"><FontAwesomeIcon icon={faEnvelope} /></a>Email
                  </button>
                  <button><a className="btn-linkedin" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>LinkedIn
                  </button>
              </div>
          </>
      )
    }

export default Header