import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Dialog from '../components'

const mapStateToProps = (state: any) => state.dialog
const selector = createSelector([mapStateToProps], (dialogState) => ({
    ...dialogState,
}))

const Warp: any = connect(selector)(Dialog)

export default Warp
