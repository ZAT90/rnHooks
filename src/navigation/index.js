import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ViewNotes from '../screens/ViewNotes'
import AddNotes from '../screens/AddNotes'
import TestModal from '../screens/TestModal'

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes
    },
    AddNotes: {
      screen: AddNotes
    },
    TestModal: {
      screen: TestModal
    }
  },
  {
    initialRouteName: 'ViewNotes',
    headerMode: 'none',
    mode : 'modal'
  }
)

export default createAppContainer(StackNavigator)