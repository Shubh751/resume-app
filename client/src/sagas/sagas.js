import { takeLatest,all,call} from 'redux-saga/effects';
import { student_sign_Up } from '../api/api';

function* studentSignUp(action)
{
    const url="/student/signup";
    const data=action.data;
    yield call(student_sign_Up,url,data);
}

export default function* rootSaga()
{
    console.log("in root saga")
    yield all(
    [
        yield takeLatest('STUDENT_SIGNUP',studentSignUp)
    ])
}