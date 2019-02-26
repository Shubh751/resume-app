import { takeLatest,all,call,put} from 'redux-saga/effects';
import { 
	student_sign_Up,
	save_project_Data,
  project,
  edit_project_data,
  show_education_data,
  edit_education_data,
  add_education_data,
  save_explain_data,
  show_explain_data,
  edit_explain_data
} from '../api/api';


function* studentSignUp(action)
{
  const url="/student/signup";
  const data=action.data;
  yield call(student_sign_Up,url,data);
}

function* showProjectData(action){
	const data = yield call(project,action.student_id)
	yield put({type:'PROJECT_DATA',value:data})
}

function* saveProjectData(action){
  yield call(save_project_Data,action.data)
}

function* editProjectData(action){
  yield call(edit_project_data,action.project_id,action.data);
}

function* showEducationData(action){
  const data = yield call(show_education_data,action.student_id);
  yield put({type:'EDUCATION_DATA',value:data})
}

function* editEducationData(action){
  yield call( edit_education_data, action.education_id, action.data)
}

function* addEducationData(action){
  yield call( add_education_data, action.data)
}

function* saveExplainData(action){
  yield call( save_explain_data,action.data )
}

function* showExplainData(action){
  const data = yield call(show_explain_data,action.student_id);
  yield put({ type:'EXPLAIN_DATA', value:data })

}

function* editExplainData(action){
  yield call(edit_explain_data,action.explain,action.explain_id)
}

export default function* rootSaga()
{
  console.log("in root saga")
  yield all(
  [
    yield takeLatest('SHOW_PROJECT',showProjectData),
    yield takeLatest('EDIT_PROJECT',editProjectData),
    yield takeLatest('STUDENT_SIGNUP',studentSignUp),
    yield takeLatest('SAVE_PROJECT_DATA',saveProjectData),
    yield takeLatest('SHOW_EDUCATION_DATA',showEducationData),
    yield takeLatest('EDIT_EDUCATION_DATA',editEducationData),
    yield takeLatest('ADD_EDUCATION_DATA',addEducationData),
    yield takeLatest('SAVE_EXPLAIN_DATA',saveExplainData),
    yield takeLatest('SHOW_EXPLAIN_DATA',showExplainData),
    yield takeLatest('EDIT_EXPLAIN_DATA',editExplainData),
  ])
}