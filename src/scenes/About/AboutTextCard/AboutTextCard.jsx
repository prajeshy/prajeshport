import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Prajesh Yeotikar </span>
        from <span className={s.purple}> India.</span>
        <br />
        Skilled Ethical Hacker and Penetration Tester.
        <br /> Persuing Bachelor in Computer Science from
        <br />
        Manipal University, Jaipur.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Hacking
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "When solving problems, dig at the roots instead of just hackng at the leaves"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
