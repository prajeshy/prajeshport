import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming and I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are 
              <i>
                <b className={s.purple}>
                  {' '}
                  Web-App Security, Network Security, Information Security, Ethical Hacking, Vulnerability Testing,etc.
                </b>
              </i>
            </p>

            <p>
              A passionate and self-motivated cybersecurity enthusiast 🚀 currently exploring fields of  <br />I
              
              <i>
                <b className={s.purple}>Penetration Tesing</b>
              </i>{' '}
              including
              <br />
              <i>
                <b className={s.purple}>
                  Web-App Security, Network Security, Information Security, Vulnerability Testing
                </b>
              </i>{' '}
              and some other cool stuffs.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/prajeshy"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/prajesh_y"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/prajeshy"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/prajesh-yeotikar-a7830a1b8/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
