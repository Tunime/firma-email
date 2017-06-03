import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i')',
  '*': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Open Sans', sans-serif'
  },
  'a': {
    'textDecoration': 'none'
  },
  'contenedor': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignContent': 'center',
    'background': '#F2F2F2'
  },
  'contenedor_img img': {
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': 'white' }]
  },
  'contenedor_informacion': {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }]
  },
  'contenedor--palabras': {
    'fontWeight': '300',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }]
  },
  'contenedor--iconnos a img': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }]
  }
});
