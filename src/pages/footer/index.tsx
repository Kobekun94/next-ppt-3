import style from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={cx('footer')}>footer</h1>;
};

export default Footer;
