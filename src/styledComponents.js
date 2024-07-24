import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
`

export const TabsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 0px;
`

export const EachTabItem = styled.li``

export const TabButton = styled.button`
  border-radius: 16px;
  border: 1px solid #db1c48;
  background-color: ${props => (props.outline ? '#db1c48' : '#ffffff')};
  color: ${props => (props.outline ? '#ffffff' : '#db1c48')};
  font-family: 'Roboto';
  font-weight: 500;
  padding: 5px;
  cursor: pointer;
  width: 75px;
`

export const ImageElement = styled.img`
  width: 250px;
  margin-top: 20px;
`
