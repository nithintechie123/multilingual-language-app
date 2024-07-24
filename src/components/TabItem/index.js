import {EachTabItem, TabButton} from '../../styledComponents'

const TabItem = props => {
  const {eachTabDetails, clickedTabButton, isActive} = props

  const {buttonText, id} = eachTabDetails

  const onClickTabButton = () => {
    clickedTabButton(id)
  }

  return (
    <EachTabItem>
      <TabButton type="button" onClick={onClickTabButton} outline={isActive}>
        {buttonText}
      </TabButton>
    </EachTabItem>
  )
}

export default TabItem
