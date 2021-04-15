import React from 'react';
import {View } from 'react-native'
import styled from 'styled-components/native'

const sizeVariants={
    small:1,
    medium:2,
    large:3
}

const positionVariants={
  top:'marginTop',
  left:'marginLeft',
  right:'marginRight',
  bottom:'marginBottom'
}

const getVariant =(position,size,theme)=>{
    const sizeIndex = sizeVariants[size];
    const property=positionVariants[position]
    return`${property}:${theme.space[sizeIndex]}`
}

export const Spacer =styled.View`
${({position,size,theme})=>getVariant(position,size,theme)}
`;      

Spacer.defaultProps={
    position='top',
    size="small"
}