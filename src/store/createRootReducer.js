import { connectRouter } from 'connected-react-router';
import auth from 'store/auth';

export default (history) => ({
  auth: auth.reducer,
  router: connectRouter(history),
});