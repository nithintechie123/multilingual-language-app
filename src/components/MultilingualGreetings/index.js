import {Component} from 'react'

import TabItem from '../TabItem'

import {
  AppContainer,
  Heading,
  TabsContainer,
  ImageElement,
} from '../../styledComponents'

class MultilingualGreetings extends Component {
  state = {
    activeImageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    activeAltText: 'english',
    activeTabId: '',
  }

  clickedTabButton = id => {
    const {languageGreetingsList} = this.props
    const activeImageList = languageGreetingsList.find(
      eachItem => eachItem.id === id,
    )
    const newImageUrl = activeImageList.imageUrl
    const altText = activeImageList.imageAltText
    this.setState({
      activeImageUrl: newImageUrl,
      activeAltText: altText,
      activeTabId: activeImageList.id,
    })
  }

  renderTabItem = () => {
    const {languageGreetingsList} = this.props
    const {activeTabId} = this.state

    return (
      <TabsContainer>
        {languageGreetingsList.map(eachTabItem => (
          <TabItem
            key={eachTabItem.id}
            eachTabDetails={eachTabItem}
            clickedTabButton={this.clickedTabButton}
            isActive={eachTabItem.id === activeTabId}
          />
        ))}
      </TabsContainer>
    )
  }

  render() {
    const {activeImageUrl, activeAltText} = this.state
    console.log(activeAltText)
    console.log(activeImageUrl)
    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
        {this.renderTabItem()}
        <ImageElement src={activeImageUrl} alt={activeAltText} />
      </AppContainer>
    )
  }
}

export default MultilingualGreetings
