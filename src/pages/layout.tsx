import { Inter } from 'next/font/google';
import Header from './header';
import Footer from './footer';
import style from './index.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
const cx = classNames.bind(style);
const inter = Inter({ subsets: ['latin'] });
interface Prop {
  children: React.ReactNode;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
const RootLayout: React.FC<Prop> = ({ children, setShowModal }) => {
  return (
    <>
      <Header setShowModal={setShowModal}>{children}</Header>
      <main className={cx('main')}>{children}</main>
      <Footer>{children}</Footer>
    </>
  );
};

export default RootLayout;
