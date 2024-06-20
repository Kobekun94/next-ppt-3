import style from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return <div className={cx('header')}>{children}</div>;
}
