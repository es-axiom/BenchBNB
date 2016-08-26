import { connect } from 'redux';

const mapStateToProps = state => ({
  benches: state.benches
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
