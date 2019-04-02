import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import dashboard from './DashboardReducer';
import LoginReducer from './LoginReducer';
import ReportReducer from './ReportReducer';
import BulkRegistrtionReducer from './BulkRegistrtionReducer';
import EventReducer from './EventReducer';
import FavoriteEventReducer from './FavoriteEventReducer';
import SingleEventReduer from './events/SingleEventReducer';
import PostEventReducer from './events/PostEventReducer';
import RegistrationReducer from './RegistrationReducer';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';
import ConfigurationReducer from './ConfigurationReducer';
import BulkEventReducer from './BulkEventReducer';

export default combineReducers({
  data: dashboard,
  login: LoginReducer,
  reportReducer: ReportReducer,
  bulkRegistration: BulkRegistrtionReducer,
  event: EventReducer,
  favoriteEvent: FavoriteEventReducer,
  configuration: ConfigurationReducer,
  pendingTasks: pendingTasks,
  singleEvent: SingleEventReduer,
  registration: RegistrationReducer,
  bulkEvent: BulkEventReducer,
  postEvent: PostEventReducer,
  toastr: toastrReducer
});
