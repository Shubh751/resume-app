import { takeLatest,all,call,put} from 'redux-saga/effects';
import { 
	student_sign_Up,
	project_Data,
  project,
  edit_project_data
} from '../api/api';


function* studentSignUp(action)
{
  const url="/student/signup";
  const data=action.data;
  yield call(student_sign_Up,url,data);
}

function* showProjectData(action){
	const data = yield call(project,action.id)
	console.log("data from database: ",data)
	yield put({type:'PROJECT_DATA',value:data})
}

function* saveProjectData(action){
  yield console.log("data....",action.data)
  yield call(project_Data,action.data)
}

function* editProjectData(action){
  yield console.log("project id",action.project_id,action.data);
  yield call(edit_project_data,action.project_id,action.data)
}

export default function* rootSaga()
{
  console.log("in root saga")
  yield all(
  [
    yield takeLatest('SHOW_PROJECT',showProjectData),
    yield takeLatest('EDIT_PROJECT',editProjectData),
    yield takeLatest('STUDENT_SIGNUP',studentSignUp),
    yield takeLatest('SAVE_PROJECT_DATA',saveProjectData)
  ])
}