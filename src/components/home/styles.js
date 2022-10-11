

import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-block: 50px;
`;
export const Text = styled.div`
  h1 {
    font-size: 3rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: black;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: black;
  }

  @media (max-width: 768px) {
    p{
        font-size: 1.2rem;
        padding-inline:1rem;
    }
  }
`;
export const Timer = styled.div`
  min-width: 30%;
  min-height: 20rem;
  margin-top: 2rem;
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  background-color: #6203fc;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    width:90%;
  }
`;

export const Countdown = styled.div`
  h1 {
    font-size: 10rem;
    padding: 1rem;
    color: white;
    font-family: "Roboto", sans-serif;
  }
  @media (max-width: 768px) {
    h1{
        font-size: 5rem;
    }
  }
`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
  button {
    width: 12rem;
    height: 3rem;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    background-color: white;
    border: none;
    border-radius: 6px;
    color: black;
    cursor: pointer;
    margin-inline: 1rem;
  }

  @media (max-width: 768px) {
    button{
        width: 8rem;
    }
  }
`;

export const Tags = styled.div`
  width:24rem;
  height:3rem;
  background-color: white;
  margin-top:1rem;
  border-radius:20px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding:1rem;



  button{
    height: 2rem;
    width: 8rem;
    border-radius:inherit;
    border: none;
    text-transform: uppercase;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width:18em;
    button{
        width:6rem;
        font-size:0.7rem;
    }
  }
  .work{
    background-color: ${props => props.initialTime === 25*60 ? 'black' : 'unset'};
    color: ${props => props.initialTime === 25*60 ? 'white' : 'unset'};
  }
  .shortBreak{
    background-color: ${props => props.initialTime === 5*60 ? 'black' : 'unset'};
    color: ${props => props.initialTime === 5*60 ? 'white' : 'unset'};

  }
  .longBreak{
    background-color: ${props => props.initialTime === 15*60 ? 'black' : 'unset'};
    color: ${props => props.initialTime === 15*60 ? 'white' : 'unset'};
  }
`
