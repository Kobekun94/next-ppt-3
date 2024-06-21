export interface DivBorThemeCor {
  background: string;
}
export interface DivTitleStyle {
  fontFamily: string;
  color: string;
  fontWeight: string;
  fontSize: string;
}
export interface DivBodyStyle {
  fontFamily: string;
  color: string;
  fontSize: string;
}
export interface DivLinkStyle {
  fontFamily: string;
  color: string;
  fontStyle: string;
  fontSize: string;
  textDecoration: string;
  fontWeight: string;
}

export interface DataTheme {
  id: string;
  borThemeCor: DivBorThemeCor;
  titleStyle: DivTitleStyle;
  bodyStyle: DivBodyStyle;
  linkStyle: DivLinkStyle;
  imgUrl: string;
  themeName: string;
}

export const dataTheme: DataTheme[] = [
  {
    id: '1',
    borThemeCor: {
      background: 'pink',
    },
    titleStyle: {
      fontFamily: 'sans-serif',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    bodyStyle: { fontFamily: 'sans-serif', color: 'black', fontSize: '14px' },
    linkStyle: {
      fontFamily: 'sans-serif',
      color: 'black',
      fontStyle: 'italic',
      fontSize: '14px',
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    imgUrl: '/img/pink-color-test.jpg',
    themeName: 'Nebulae',
  },
  {
    id: '2',
    borThemeCor: {
      background: 'blue',
    },
    titleStyle: {
      fontFamily: 'sans-serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    bodyStyle: { fontFamily: 'sans-serif', color: 'white', fontSize: '14px' },
    linkStyle: {
      fontFamily: 'sans-serif',
      color: 'white',
      fontStyle: 'italic',
      fontSize: '14px',
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    imgUrl: '/img/blue-green-gradient.png',
    themeName: 'Blue Steel',
  },
  {
    id: '3',
    borThemeCor: {
      background: 'rgb(144 15 167)',
    },
    titleStyle: {
      fontFamily: 'sans-serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    bodyStyle: { fontFamily: 'sans-serif', color: 'white', fontSize: '14px' },
    linkStyle: {
      fontFamily: 'sans-serif',
      color: 'white',
      fontStyle: 'italic',
      fontSize: '14px',
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    imgUrl: '/img/pink-purple-gradient.jpg',
    themeName: 'Pink Purple',
  },
  {
    id: '4',
    borThemeCor: {
      background: 'orange',
    },
    titleStyle: {
      fontFamily: 'sans-serif',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '24px',
    },
    bodyStyle: { fontFamily: 'sans-serif', color: 'black', fontSize: '14px' },
    linkStyle: {
      fontFamily: 'sans-serif',
      color: 'black',
      fontStyle: 'italic',
      fontSize: '14px',
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    imgUrl: '/img/red-orange-gradient.jpg',
    themeName: 'Red Orange',
  },
];
