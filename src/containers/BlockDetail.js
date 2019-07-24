import { connect } from 'react-redux';

import { getBlockInfo } from 'redux/actions';
import BlockDetail from 'screens/BlockDetail';

const mapStateToProps = (state, { match }) => ({
  block: state.block,
  transactions: state.transactions,
  blockId: match.params.blockId,
});

const mapDispatchToProps = dispatch => ({
  getBlockInfo: blockId => dispatch(getBlockInfo(blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockDetail);