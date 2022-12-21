import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type IFailRequest = {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError) => void;
};

let isRefreshing = false;
let failedRequestsQueue: IFailRequest[] = [];

export function setupAPIClient() {
  let token = localStorage.getItem('@challange.auth.token');

  const api = axios.create({
    baseURL: process.env.VITE_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error?.response?.status === 401) {
        const originalConfig = error.config as AxiosRequestConfig;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .post('/login', {
              login: process.env.VITE_LOGIN,
              senha: process.env.VITE_PASSWORD,
            })
            .then((response) => {
              const token = response.data;

              localStorage.setItem('@challange.auth.token', token);

              api.defaults.headers['Authorization'] = `Bearer ${token}`;

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token),
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              if (originalConfig?.headers) {
                originalConfig.headers['Authorization'] = `Bearer ${token}`;
              }

              resolve(api(originalConfig));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }

      return Promise.reject(error);
    },
  );

  return api;
}
