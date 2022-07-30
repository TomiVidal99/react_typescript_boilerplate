// This is an example of a very common interceptor, that sets the authorization token and checks if theres a wrong response from the server.
// import {getBasicAuthorization } from '@/services';
// import {SnackbarUtilities} from '@/utilities';
// import {getValidtorErrorMessage} from '@/utilities/validation.utility';
// import axios from 'axios';
//
// export const PublicPrivateInterceptor = () => {
//   axios.interceptors.request.use( (request) => {
//     if (request.url?.includes('assets') || request.headers?.Authorization) {
//       return request;
//     }
//     const token = getBasicAuthorization();
//     const newHeaders = {
//       Authorization: token,
//       'Content-Type': 'application/json'
//     };
//
//     request.headers = newHeaders;
//     return request;
//   });
//   axios.interceptors.response.use(
//     (response) => {
//       window.location.href = '/reset-success';
//       return response;
//     },
//     function (error) {
//       if (error.response.data.error.code) SnackbarUtilities.error(getValidtorErrorMessage(error.response.data.error.code));
//     }
//   )
// };
