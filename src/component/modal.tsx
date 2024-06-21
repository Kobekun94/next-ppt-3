import React, { useState } from 'react';
import style from './iconButton.module.scss';
import classNames from 'classnames/bind';
import { dataTheme, DataTheme } from './data';
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

  const [activeDiv, setActiveDiv] = useState<string | null>(null);
  const handleClick = (id: string) => {
    setActiveDiv(id);
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
              content="Add new Theme"
            />
            <div className={cx('theme-modal-add-btn')}></div>
            <IconButton
              className={cx('btn-close')}
              icon={<IoClose className={cx('iconNonMg')} />}
              content="Close"
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
            {dataTheme.map((div: DataTheme) => (
              <CardTheme
                key={div.id}
                data={div}
                onClick={handleClick}
                isActive={activeDiv === div.id}
                borThemeCor={{ background: div.borThemeCor.background }}
                titleStyle={{
                  fontFamily: div.titleStyle.fontFamily,
                  color: div.titleStyle.color,
                  fontWeight: div.titleStyle.fontWeight,
                  fontSize: div.titleStyle.fontSize,
                }}
                bodyStyle={{
                  fontFamily: div.bodyStyle.fontFamily,
                  color: div.bodyStyle.color,
                  fontSize: div.bodyStyle.fontSize,
                }}
                linkStyle={{
                  fontFamily: div.linkStyle.fontFamily,
                  color: div.linkStyle.color,
                  fontStyle: div.linkStyle.fontStyle,
                  fontSize: div.linkStyle.fontSize,
                  textDecoration: div.linkStyle.textDecoration,
                  fontWeight: div.linkStyle.fontWeight,
                }}
                imgUrl={div.imgUrl}
                themeName={div.themeName}
              />
            ))}
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
