import { keyframes } from 'styled-components'

export const MoveDown = keyframes`
   0%{
    opacity: 0;
    transform: translateY(-100px);
  }

   75%{
    opacity: 0.5;
   }

   100%{
    opacity: 1;
    transform: translateY(0px);
   }
`

export const MoveRight = keyframes`
   0%{
    opacity: 0;
    transform: translateX(-80px);

  }

   75%{
    opacity: 0.5;

   }

   100%{
    opacity: 1;
    transform: translateX(0px);
   }
`

export const MoveUp = keyframes`
 0%{
    opacity: 0;
    transform: translateY(100px);
 }

 75%{
  opacity: 0.5;
 }

 100%{
  opacity: 1;
  transform: translateY(0px);

 }
`

export const GoogleButtonAnimations = keyframes`

 0%{
  opacity:  0;
  transform: translateX(-90px);
 }

 75%{
  opacity: 0.4;

 }

 100%{
  opacity: 1;
  transform: translateY(0px);
 }
`
