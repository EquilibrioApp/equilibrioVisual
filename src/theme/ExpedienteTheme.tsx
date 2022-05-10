import React from 'react';
import {StyleSheet} from 'react-native';

export const expedienteStyles = StyleSheet.create({
  textInputStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    height: 40,
    width: 50,
    borderWidth: 1,
    fontSize: 20,
    alignItems: 'center',
    borderBottomColor: '#0000E0',
    borderBottomWidth: 1,
  },
  textStyle: {
    top: 10,
    marginLeft: 10,
    height: 20,
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: '#000000',
  },
  box: {
    position: 'absolute',
    width: 330,
    height: 400,
    left: 25,
    top: 325,
    backgroundColor: '#F7F7F7',
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#F8F8F8',
    shadowOpacity: 1.0,
    borderRadius: 15,
  },
  image: {
    height: 20,
    width: 45,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  labelSubMenu: {
    fontFamily: 'Comfortaa',
    fontSize: 13,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 27,
    display: 'flex',
    justifyContent: 'center',
    color: '#Fff',
    top: 60,
  },
  label: {
    fontFamily: 'Comfortaa',
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 27,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    left: 10,
    top: 10,
  },
  cardPatiente: {
    position: 'absolute',
    width: 350,
    height: 180,
    left: 20,
    top: 25,
    backgroundColor: '#C4C4C4',
    borderRadius: 25,
  },
  buttonBlue: {
    alignItems: 'center',
    marginLeft: 5,
    width: 100,
    height: 120,
    backgroundColor: '#7F77FF',
    shadowColor: 'rgbs(0, 0, 0, 0.25)',
    borderRadius: 15,
  },
  buttonOrange: {
    alignItems: 'center',
    marginLeft: 5,
    width: 100,
    height: 120,
    backgroundColor: '#FFB846',
    shadowColor: 'rgbs(0, 0, 0, 0.25)',
    borderRadius: 15,
  },
  buttonRed: {
    alignItems: 'center',
    marginLeft: 5,
    width: 100,
    height: 120,
    backgroundColor: '#FE7D56',
    shadowColor: 'rgbs(0, 0, 0, 0.25)',
    borderRadius: 15,
  },
});