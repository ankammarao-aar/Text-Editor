import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  SubCard,
  ImageCard,
  Heading,
  Image,
  TextCard,
  ButtonCard,
  ListItem,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <MainContainer>
        <SubCard>
          <ImageCard>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageCard>

          <TextCard>
            <ButtonCard>
              <ListItem>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  onClick={this.onClickBold}
                  bold={bold}
                >
                  <VscBold size={22} />
                </BoldButton>
              </ListItem>

              <ListItem>
                <ItalicButton
                  type="button"
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italic={italic}
                >
                  <GoItalic size={22} />
                </ItalicButton>
              </ListItem>

              <ListItem>
                <UnderlineButton
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  underline={underline}
                >
                  <AiOutlineUnderline size={22} />
                </UnderlineButton>
              </ListItem>
            </ButtonCard>
            <TextArea
              rows="24"
              cols="40"
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </TextCard>
        </SubCard>
      </MainContainer>
    )
  }
}

export default TextEditor
