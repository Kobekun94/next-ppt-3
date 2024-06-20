import React from 'react';
import { IconButton, IconBreadcrum, RenameTitle, TextButton, BtnWtDropdown, UserImg } from '@/component/iconButton';
import { VscSymbolColor } from 'react-icons/vsc';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaChevronDown, FaRegComment } from 'react-icons/fa6';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BsStars, BsThreeDots } from 'react-icons/bs';
import { MdOutlineAnalytics } from 'react-icons/md';

import style from './index.module.scss';
import classNames from 'classnames/bind';
import HeaderLayout from './layout';
import * as handle from '@/services/handleHeader';

const cx = classNames.bind(style);
interface Prop {
  children: React.ReactNode;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<Prop> = ({ children, setShowModal }) => {
  return (
    <HeaderLayout>
      <div className={cx('header-1')}>
        <div className={cx('breadcrumb')}>
          <TextButton
            className={cx('textButton')}
            onClick={handle.handleClick}
            label=""
            icon={<AiOutlineHome className={cx('iconTextSubBtn')} />}
            labelTooltip=""
          />
          <IconBreadcrum label="" />
          <RenameTitle className={cx('renameInput')} placeholder="Đổi tên tiêu đề!" labelTooltip="tooltip-rename" />
        </div>
        <div className={cx('feature-stack')}>
          <TextButton
            className={cx('textButton')}
            onClick={() => {
              setShowModal && setShowModal(true);
            }}
            label="Theme"
            icon={<VscSymbolColor className={cx('iconTextBtn')} />}
            labelTooltip="Edit Theme"
          />
          <TextButton
            className={cx('textButton')}
            onClick={handle.handleClickShare}
            label="Share"
            icon={<IoShareSocialOutline className={cx('iconTextBtn')} />}
            labelTooltip="This slice is viewable by anyone with the link"
          />
          <BtnWtDropdown
            onClick={handle.handleClickPresent}
            label="Present"
            icon={<FaPlay className={cx('iconTextBtn')} />}
            subOnClick={handle.handleClickPresent}
            subIcon={<FaChevronDown className={cx('iconTextSubBtn')} />}
            labelTooltip="Start Presenting"
          />
          <TextButton
            className={cx('textButton')}
            onClick={handle.handleClickMess}
            label="0"
            icon={<FaRegComment className={cx('iconTextBtn')} />}
            labelTooltip="Comment"
          />
          <IconButton
            className={cx('buttonIcon')}
            onClick={handle.handleClickAI}
            icon={<BsStars className={cx('iconTextSubBtnStar')} />}
            labelTooltip="Edit with AI"
          />
          <IconButton
            className={cx('buttonIcon')}
            onClick={handle.handleClickAnalytic}
            icon={<MdOutlineAnalytics className={cx('iconTextSubBtn')} />}
            labelTooltip="View Analytics"
          />
          <IconButton
            className={cx('buttonIcon')}
            onClick={handle.handleClickFc}
            icon={<BsThreeDots className={cx('iconTextSubBtn')} />}
            labelTooltip="More"
          />
          <UserImg onClick={handle.handleClickUS} imgUrl="/img/1.jpg" />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
