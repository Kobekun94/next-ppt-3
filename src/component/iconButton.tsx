import React, { useState } from 'react';
import { FaChevronRight, FaCheck } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import style from './iconButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
interface IconButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  labelTooltip?: string;
  className: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, labelTooltip, className }) => {
  return (
    <>
      <button onClick={onClick} className={className} data-tooltip-id={labelTooltip}>
        {icon}
      </button>
      <ReactTooltip
        id={labelTooltip}
        place="bottom-end"
        content={labelTooltip}
        style={{ color: '#fff', fontWeight: 500 }}
      />
    </>
  );
};

interface TextButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  labelTooltip?: string;
  className: string;
}

export const TextButton: React.FC<TextButtonProps> = ({ onClick, label, icon, labelTooltip, className }) => {
  return (
    <>
      <button onClick={onClick} className={className} data-tooltip-id={labelTooltip}>
        {icon}
        <span>{label}</span>
      </button>
      <ReactTooltip
        id={labelTooltip}
        place="bottom"
        content={labelTooltip}
        style={{ color: '#fff', fontWeight: 500 }}
      />
    </>
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
}

export const RenameTitle: React.FC<RenameTitleProps> = ({ className, labelTooltip, placeholder }) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <input
          className={className} //{cx('renameInput')}
          data-tooltip-id={labelTooltip} //"tooltip-rename"
          type="text"
          placeholder={placeholder} //"Đổi tên tiêu đề!"
          value={value}
          onChange={handleChange}
        />
      </div>
      <ReactTooltip
        id={labelTooltip}
        place="bottom"
        content={labelTooltip}
        style={{ color: '#fff', fontWeight: 500 }}
      />
    </>
  );
};

interface BtnWtDropdownProps {
  onClick: () => void;
  subOnClick: () => void;
  label: string;
  icon: React.ReactNode;
  subIcon: React.ReactNode;
  labelTooltip: string;
}

export const BtnWtDropdown: React.FC<BtnWtDropdownProps> = ({
  onClick,
  subOnClick,
  label,
  icon,
  subIcon,
  labelTooltip,
}) => {
  return (
    <div className={cx('btnDropGroup')}>
      <button onClick={onClick} className={cx('btnWtDropdown')} data-tooltip-id={labelTooltip}>
        {icon}
        <span>{label}</span>
      </button>
      <button onClick={subOnClick} className={cx('btnSubWtDropdown')}>
        {subIcon}
      </button>
      <ReactTooltip
        id={labelTooltip}
        place="bottom"
        content={labelTooltip}
        style={{ color: '#fff', fontWeight: 500 }}
      />
    </div>
  );
};

interface UserImgProps {
  onClick: () => void;
  imgUrl?: string;
}

export const UserImg: React.FC<UserImgProps> = ({ onClick, imgUrl }) => {
  return (
    <>
      <button onClick={onClick} className={cx('userImgBox')} data-tooltip-id="tooltip-profile">
        {imgUrl && <img src={imgUrl} className={cx('useImg')} />}
      </button>
      <ReactTooltip
        id="tooltip-profile"
        place="bottom-end"
        content="Profile Menu"
        style={{ color: '#fff', fontWeight: 500 }}
      />
    </>
  );
};

interface CardThemeProps {
  imgUrl: string;
  themeName: string;
  borThemeCor?: any;
  titleStyle?: any;
  bodyStyle?: any;
  linkStyle?: any;
}

export const CardTheme: React.FC<CardThemeProps> = ({
  imgUrl,
  themeName,
  borThemeCor,
  titleStyle,
  bodyStyle,
  linkStyle,
}) => {
  const [isThemeActive, setIsThemeActive] = useState(true);
  const toggleActive = () => {
    setIsThemeActive(!isThemeActive);
  };
  return (
    <div className={cx(isThemeActive ? 'card-theme' : 'card-theme-na')} onClick={toggleActive}>
      <div className={cx('card-content')}>
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
      <div className={cx(isThemeActive ? 'theme-name-area' : 'theme-name-area-na')}>
        <div className={cx(isThemeActive ? 'theme-name-box' : 'theme-name-box-na')}>
          <IconButton
            className={cx(isThemeActive ? 'icon-a' : 'icon-na')}
            icon={<FaCheck className={cx(isThemeActive ? 'iconAddMg' : 'iconAddMg-na')} />}
          />
          <div className={cx(isThemeActive ? 'theme-name' : 'theme-name-na')}>{themeName}</div>
        </div>
        <div className={cx(isThemeActive ? 'theme-space' : 'theme-space-na')}></div>
        <IconButton
          className={cx(isThemeActive ? 'theme-function' : 'theme-function-na')}
          icon={<BsThreeDots className={cx('iconAddMg')} />}
        />
      </div>
    </div>
  );
};
