import axios from 'axios';
import Server from './Server';

export async function SignUpform(data) {
  var config = {
    method: 'post',
    url: `${Server}/signUp/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}


export async function LoginForm(data) {
  var config = {
    method: 'post',
    url: `${Server}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function CheckUSer(data) {
  var config = {
    method: 'post',
    url: `${Server}/checkUser/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ChangePasswordAPi(data) {
  var config = {
    method: 'post',
    url: `${Server}/ChangePassword/`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GetProfile(id) {
  var config = {
    method: 'get',
    url: `${Server}/Profile/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
