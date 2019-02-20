import { takeLatest,all,call,put} from 'redux-saga/effects';
import { 
	student_sign_Up,
	projectData
} from '../api/api';

function* studentSignUp(action)
{
  const url="/student/signup";
  const data=action.data;
  yield call(student_sign_Up,url,data);
}

function* saveProjectData(action){
  yield console.log("data....",action.data)
  yield call(projectData,action.data)
  yield put('PROJECT_DATA',action.data)
}

export default function* rootSaga()
{
  console.log("in root saga")
  yield all(
  [
    yield takeLatest('STUDENT_SIGNUP',studentSignUp),
    yield takeLatest('SAVE_PROJECT_DATA',saveProjectData)
  ])
}