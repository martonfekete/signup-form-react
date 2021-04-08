import SignUp from './components/SignUp';
import './App.css';
import { createUser, getUsers } from './api/users';
import { useState } from 'react';
import { USERS_API_RESULTS } from './constants/api';
import ApiStatusDisplay from './components/ApiStatusDisplay';

function App() {
  const [postStatus, setPostStatus] = useState('');
  const [getStatus, setGetStatus] = useState('');

  async function handleOnSubmit(values) {
    setGetStatus(USERS_API_RESULTS.postInPorgress);
    const postResponse = await createUser(values)
      .then((response) => {
        setPostStatus(USERS_API_RESULTS.postSuccess);
        return response;
      })
      .catch(() => setPostStatus(USERS_API_RESULTS.postFailed));
    if (postResponse?.status === 200) {
      const users = await getUsersWithDelay();
      console.log(users);
    }
  }

  async function getUsersWithDelay(delayInMs = 4000) {
    setGetStatus(`Waiting ${delayInMs / 1000} seconds`);
    setTimeout(() => {
      setGetStatus(USERS_API_RESULTS.getInProgress);
      return getUsers()
        .then(() => setGetStatus(USERS_API_RESULTS.getSuccess))
        .catch(() => setGetStatus(USERS_API_RESULTS.getFailed));
    }, delayInMs);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-1">Welcome to the website!</h1>
        <h3 className="display-6 mb-5">Sign up to get started by providing the details below</h3>
      </div>
      <SignUp onSubmit={handleOnSubmit} />
      {!!postStatus &&
        (<ApiStatusDisplay
          success={postStatus === USERS_API_RESULTS.postSuccess}
          failed={postStatus === USERS_API_RESULTS.postFailed}
          other={postStatus === USERS_API_RESULTS.postInPorgress}
          message={postStatus} />)}
      {!!getStatus &&
        (<ApiStatusDisplay
          success={getStatus === USERS_API_RESULTS.getSuccess}
          failed={getStatus === USERS_API_RESULTS.getFailed}
          other={getStatus === USERS_API_RESULTS.getInProgress}
          message={getStatus} />)}
    </div>
  );
}

export default App;
