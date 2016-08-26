import { applyMiddleware } from 'redux';
import BenchesMiddleware from './benches_middlware';

const RootMiddleware = applyMiddleware(
  BenchesMiddleware
);

export default RootMiddleware;
