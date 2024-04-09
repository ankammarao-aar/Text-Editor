import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  padding: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubCard = styled.div`
  display: flex;
  background-color: #1b1c22;
`

export const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 32px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  color: #f8fafc;
  margin-bottom: 62px;
  margin-top: 36px;
`

export const Image = styled.img`
  height: 220px;
`

export const TextCard = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 12px;
  margin: 16px;
`

export const ButtonCard = styled.ul`
  border-bottom: 1px solid #334155;
  padding: 12px;
  display: flex;
  list-style-type: none;
  margin: 0px;
`

export const ListItem = styled.li``

export const BoldButton = styled.button`
  background-color: transparent;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
  border: none;
  cursor: pointer;
`
export const ItalicButton = styled.button`
  background-color: transparent;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
  border: none;
  cursor: pointer;
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
  border: none;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  font-family: 'Roboto';
  color: #cbd5e1;
  border: none;
  outline: none;
  padding: 14px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
