import styled from 'styled-components'


export const ButtonToggle = styled.button`
  position: relative;
  width: 50px;
  height: 44px;
  cursor: pointer;
  display: inline-block;
  transition: all .5s;
  box-sizing: border-box;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    display: inline-block;
    transition: all .5s;
    box-sizing: border-box;
  }

  span:nth-of-type(1) {
    top: 0;
    animation: btn07-bar01 .75s forwards;
  }
  span:nth-of-type(2) {
    top: 20px;
    transition: all .25s .25s;
    opacity: 1;
  }
  span:nth-of-type(3) {
    bottom: 0;
    animation: btn07-bar03 .75s forwards;
  }

  @keyframes btn07-bar01 {
    0% {
      transform: translateY(20px) rotate(45deg);
    }
    50% {
      transform: translateY(20px) rotate(0);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
  @keyframes btn07-bar03 {
    0% {
      transform: translateY(-20px) rotate(-45deg);
    }
    50% {
      transform: translateY(-20px) rotate(0);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }

  .active span:nth-of-type(1) {
    animation: active-btn07-bar01 .75s forwards;
  }
  @keyframes active-btn07-bar01 {
    0% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(20px) rotate(0);
    }
    100% {
      transform: translateY(20px) rotate(45deg);
    }
  }
  .active span:nth-of-type(2) {
    opacity: 0;
  }
  .active span:nth-of-type(3) {
    animation: active-btn07-bar03 .75s forwards;
  }
  @keyframes active-btn07-bar03 {
    0% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-20px) rotate(0);
    }
    100% {
      transform: translateY(-20px) rotate(-45deg);
    }
  }
`