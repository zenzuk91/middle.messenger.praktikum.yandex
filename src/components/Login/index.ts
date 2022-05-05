import { withStore } from '../../utils/Store';
import Login from './Login';

const withUser = withStore(() => ({ }));

export default withUser(Login as any);
