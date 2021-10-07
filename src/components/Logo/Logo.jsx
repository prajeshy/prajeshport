import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
      <img src={'/hacker-3.png'} width = '50px' heigt ='50px'/>
      </Link>
    </div>
  );
};

export default Logo;
