import {Component} from 'react'

import {AppContainer, Heading, TabsContainer} from '../../styledComponents'

class MultilingualGreetings extends Component {
  renderTabItem = () => {
    const {languageGreetingsList} = this.props

    return <TabsContainer></TabsContainer>
  }

  render() {
    return (
      <AppContainer>
        <Heading>Multilingual Greetings</Heading>
      </AppContainer>
    )
  }
}

export default MultilingualGreetings
