// import React from 'react';
import styled,{useTheme} from 'styled-components/native'

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

const getVariant =(pos,size,theme)=>{
    const sizeIndex = sizeVariants[size];
    const property=positionVariants[pos]
    const value = theme.space[sizeIndex]
    return`${property}:${value}`
}

// const SpacerView =styled.View`
// ${({variant})=>variant}
// `;

// export const Spacer=({position,size,children})=>{
//     const theme = useTheme()
//     const variant = getVariant(position,size,theme)
//     return <SpacerView variant={variant}>{children}</SpacerView>
// }

/*There was another fix for the problem above, which was using
 the same code as in the previous video but changing the name 
 of the prop "position" to something else.  I used "side", 
 which cleared the issue.  I'm curious if anybody has insight 
 about why this worked, and why it only causes an issue on 
 Android.  I suspect it's because the prop name matched the
  CSS property called 'position', but I'd think that would 
  have affected both platforms if it was true (could be wrong 
    about that).

Does this mean that its a good practice to stay away 
from CSS property names when choosing my prop names?
*/
export const Spacer =styled.View`
${({pos,size,theme})=>getVariant(pos,size,theme)}
`;      

Spacer.defaultProps={
    pos:'top',
    size:"small"
}