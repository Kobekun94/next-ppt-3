import React, { useState } from 'react';
import { FaChevronRight, FaCheck } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import { dataTheme, DataTheme } from './data';
import style from './iconButton.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import TippyContent from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PopupButton from './popupOfTheme';

const cx = classNames.bind(style);

interface IconButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  content?: string;
  className: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, className, content }) => {
  return (
    <TippyContent content={content} disabled={!content}>
      <button onClick={onClick} className={className}>
        {icon}
      </button>
    </TippyContent>
  );
};

interface TextButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  labelTooltip?: string;
  content?: string;
  className: string;
}

export const TextButton: React.FC<TextButtonProps> = ({ onClick, label, icon, className, content }) => {
  return (
    <TippyContent content={content} disabled={!content}>
      <button onClick={onClick} className={className}>
        {icon}
        <span>{label}</span>
      </button>
    </TippyContent>
  );
};

interface IconBreadcrumProps {
  label: string;
}

export const IconBreadcrum: React.FC<IconBreadcrumProps> = ({ label }) => {
  return (
    <button className={cx('buttonBreadcrum')}>
      <FaChevronRight className={cx('iconRight')} />
      {label}
    </button>
  );
};

interface RenameTitleProps {
  className?: string;
  labelTooltip?: string;
  placeholder?: string;
  content?: string;
}

export const RenameTitle: React.FC<RenameTitleProps> = ({ className, placeholder, content }) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <TippyContent content={content} disabled={!content}>
      <div>
        <input
          className={className} //{cx('renameInput')}
          type="text"
          placeholder={placeholder} //"Đổi tên tiêu đề!"
          value={value}
          onChange={handleChange}
        />
      </div>
    </TippyContent>
  );
};

interface BtnWtDropdownProps {
  onClick: () => void;
  subOnClick: () => void;
  label: string;
  icon: React.ReactNode;
  subIcon: React.ReactNode;
  content?: string;
}

export const BtnWtDropdown: React.FC<BtnWtDropdownProps> = ({ onClick, subOnClick, label, icon, subIcon, content }) => {
  return (
    <TippyContent content={content} disabled={!content}>
      <div className={cx('btnDropGroup')}>
        <button onClick={onClick} className={cx('btnWtDropdown')}>
          {icon}
          <span>{label}</span>
        </button>
        <button onClick={subOnClick} className={cx('btnSubWtDropdown')}>
          {subIcon}
        </button>
      </div>
    </TippyContent>
  );
};

interface UserImgProps {
  onClick: () => void;
  imgUrl?: string;
  content?: string;
}

export const UserImg: React.FC<UserImgProps> = ({ onClick, imgUrl, content }) => {
  return (
    <TippyContent content={content} disabled={!content}>
      <button onClick={onClick} className={cx('userImgBox')}>
        {imgUrl && <img src={imgUrl} className={cx('useImg')} />}
      </button>
    </TippyContent>
  );
};

interface CardThemeProps {
  key?: any;
  imgUrl?: string;
  themeName?: string;
  borThemeCor?: any;
  titleStyle?: any;
  bodyStyle?: any;
  linkStyle?: any;
  data: DataTheme;
  onClick: (id: string) => void;
  isActive: boolean;
}

export const CardTheme: React.FC<CardThemeProps> = ({
  key,
  imgUrl,
  themeName,
  borThemeCor,
  titleStyle,
  bodyStyle,
  linkStyle,
  onClick,
  data,
  isActive,
}) => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return (
    <div className={cx(isActive ? 'card-theme' : 'card-theme-na')}>
      <div className={cx('card-content')} onClick={() => onClick(data.id)}>
        <div className={cx('card-border')}>
          {imgUrl && <img src={imgUrl} className={cx('thumbImgBG')} />}
          <div className={cx('show-thumb')}>{imgUrl && <img src={imgUrl} className={cx('thumbImg')} />}</div>
          <div className={cx('content-thumb')} style={borThemeCor}>
            <div className={cx('title')} style={titleStyle}>
              Title
            </div>
            <div className={cx('content-box')}>
              <div className={cx('content-body')} style={bodyStyle}>
                Body &
              </div>
              <a className={cx('content-link')} style={linkStyle}>
                link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(isActive ? 'theme-name-area' : 'theme-name-area-na')}>
        <div className={cx(isActive ? 'theme-name-box' : 'theme-name-box-na')} onClick={() => onClick(data.id)}>
          <IconButton
            className={cx(isActive ? 'icon-a' : 'icon-na')}
            icon={<FaCheck className={cx(isActive ? 'iconAddMg' : 'iconAddMg-na')} />}
          />
          <div className={cx(isActive ? 'theme-name' : 'theme-name-na')}>{themeName}</div>
        </div>
        <div className={cx(isActive ? 'theme-space' : 'theme-space-na')} onClick={() => onClick(data.id)}></div>
        <Tippy
          render={() => {
            return <PopupButton />;
          }}
          visible={visible}
          interactive
          onClickOutside={hide}
          placement="bottom"
        >
          {/* <IconButton
              className={cx('theme-function')}
              icon={<BsThreeDots className={cx('iconAddMg')} />}
              onClick={() => (visible ? hide() : show())}
            /> */}
          <div onClick={visible ? hide : show}>***</div>
        </Tippy>
      </div>
    </div>
  );
};
//{/* <div onClick={visible ? hide : show}>hehe</div> */}
