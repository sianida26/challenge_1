module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'transparent': 'transparent',
      'dark-blue': {
        1: '#CFD4ED',
        2: '#AEB7E1',
        3: '#5E70C4',
        4: '#0D28A6',
        5: '#091B6F',
      },
      'lime': {
        1: '#DEF1DF',
        2: '#C9E7CA',
        3: '#92D094',
        4: '#5CB85F',
        5: '#3D7B3F',
      },
      'neutral': {
        1: '#000',
        2: '#D0D0D0',
        3: '#8A8A8A',
        4: '#3C3C3C',
        5: '#151515',
      },
      'alert-success': '#73CA5C',
      'alert-warning': '#F9CC00',
      'alert-danger': '#FA2C5A',
    },
    extend: {
      boxShadow: {
        'low': '0px 0px 4px rgba(0, 0, 0, 0.15)',
        'high': '0px 0px 10px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}