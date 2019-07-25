import { getTransactions } from 'redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../TransactionsList';

describe('TransactionsList Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      transactions: {},
    };

    const props = {
      match: {
        params: {
          blockId: 2267,
        },
      },
    };

    const expected = {
      transactions: state.transactions,
      blockId: props.match.params.blockId,
    };

    expect(mapStateToProps(state, props)).toEqual(expected);
  });

  it('returns getTransactions to dispatch action', () => {
    const props = mapDispatchToProps(() => {});
    expect(props.getTransactions).toBeDefined();
  });
});