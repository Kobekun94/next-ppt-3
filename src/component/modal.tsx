import React, { useState } from 'react';
import style from './iconButton.module.scss';
import classNames from 'classnames/bind';
import { IoClose, IoSearch } from 'react-icons/io5';
import { FaPlus, FaAngleLeft } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';
import { FaRegImage } from 'react-icons/fa';
import { CardTheme, IconButton, RenameTitle, TextButton } from './iconButton';

const cx = classNames.bind(style);

interface ThemeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ isVisible, onClose }) => {
  const [showSearchElement, setShowSearchElement] = useState(true);

  const toggleElements = () => {
    setShowSearchElement(!showSearchElement);
  };

  if (!isVisible) return null;
  return (
    <div className={cx('theme-modal')}>
      <div className={cx('item-modal')}>
        <div className={cx('head-theme-modal')}>
          <div className={cx('head-theme-modal-function')}>
            <div className={cx('theme-modal-title')}>Theme</div>
            <div className={cx('theme-modal-space')}></div>
            <TextButton
              className={cx('btn-add-theme')}
              onClick={() => onClose()}
              label="New Theme"
              icon={<FaPlus className={cx('iconAddMg')} />}
              labelTooltip="Add new Theme"
            />
            <div className={cx('theme-modal-add-btn')}></div>
            <IconButton
              className={cx('btn-close')}
              icon={<IoClose className={cx('iconNonMg')} />}
              labelTooltip="Close"
              onClick={() => onClose()}
            />
          </div>
          {showSearchElement ? (
            <div className={cx('filter-modal')}>
              <div className={cx('filter-theme')}>
                <TextButton className={cx('btn-filter-theme')} onClick={() => {}} label="Dark" />
                <TextButton className={cx('btn-filter-theme')} onClick={() => {}} label="Light" />
                <TextButton className={cx('btn-filter-theme')} onClick={() => {}} label="Professional" />
                <TextButton className={cx('btn-filter-theme')} onClick={() => {}} label="Colorful" />
              </div>
              <IconButton
                className={cx('btn-seach-theme')}
                icon={<IoSearch className={cx('iconNonMg')} />}
                onClick={toggleElements}
              />
            </div>
          ) : (
            <div className={cx('search-modal')}>
              <IconButton
                className={cx('btn-seach-theme')}
                icon={<FaAngleLeft className={cx('iconNonMg')} />}
                onClick={toggleElements}
              />
              <RenameTitle
                className={cx('input-search-theme')}
                placeholder="Tìm kiếm bởi từ khóa, tên tác giả, tiêu đề, etc..."
              />
            </div>
          )}
        </div>

        <div className={cx('body-theme-modal')}>
          <div className={cx('customize-card')}>
            <p className={cx('title')}>Tạo slice của bạn, chỉ trong vài giây!</p>
            <p className={cx('meta')}>Sáng tạo một custom theme — chỉ bằng việc thêm màu sắc, font chữ và logo.</p>
            <TextButton
              className={cx('btn-customize-theme')}
              icon={<BsStars className={cx('iconAddMg')} />}
              onClick={() => {}}
              label="Customize"
            />
          </div>

          <div className={cx('lib-theme')}>
            <CardTheme
              borThemeCor={{ background: 'pink' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/pink-color-test.jpg"
              themeName="Nebulae"
            />

            <CardTheme
              borThemeCor={{ background: 'blue' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'white', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'white', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'white',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/blue-green-gradient.png"
              themeName="Blue Steel"
            />

            <CardTheme
              borThemeCor={{ background: 'rgb(144 15 167)' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'white', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'white', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'white',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/pink-purple-gradient.jpg"
              themeName="Pink Purple"
            />

            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
            <CardTheme
              borThemeCor={{ background: 'orange' }}
              titleStyle={{ fontFamily: 'sans-serif', color: 'black', fontWeight: 'bold', fontSize: '24px' }}
              bodyStyle={{ fontFamily: 'sans-serif', color: 'black', fontSize: '14px' }}
              linkStyle={{
                fontFamily: 'sans-serif',
                color: 'black',
                fontStyle: 'italic',
                fontSize: '14px',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
              imgUrl="/img/red-orange-gradient.jpg"
              themeName="Red Orange"
            />
          </div>
          <div className={cx('edit-bg-card')}>
            <p className={cx('title')}>Bạn đang tìm kiếm việc chỉ thay đổi nền của trang?</p>
            <div className={cx('btn-box')}>
              <TextButton
                className={cx('btn-customize-theme')}
                icon={<FaRegImage className={cx('iconAddMg')} />}
                onClick={() => {}}
                label="Edit background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
