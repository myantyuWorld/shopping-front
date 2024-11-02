import createClient, { type Middleware } from "openapi-fetch";
import * as v1Schema from "./v1.schema";

/**
 * @see {@link https://openapi-ts.pages.dev/openapi-fetch}
 */
// TODO : env化したい
const baseUrl: string = "http://localhost:5173/";

// TODO : Firebase Authenticationのアクセストークンを利用して、認証したい
// const authMiddleware: Middleware = {
//   onRequest: async (req) => {
//     const accessToken = localStorage.getItem("token");
//     if (accessToken) {
//       req.headers.set("Authorization", `Bearer ${accessToken}`);
//     }

//     return req;
//   }
// };

export const csrfToken = () => {
  const meta = document.querySelector("meta[name=csrf-token]");
  return meta && (meta as HTMLMetaElement).content;
};

const fetchRequestCsrfTokenMiddleware: Middleware = {
  onRequest({ request }) {
    const csrfTokenValue = csrfToken();
    if (csrfTokenValue) request.headers.set("X-CSRF-Token", csrfTokenValue);
    return request;
  },
};
const instance = createClient<v1Schema.paths>({ baseUrl });
instance.use(fetchRequestCsrfTokenMiddleware);

// instance.use(authMiddleware);

export const client = {
  GET: instance.GET,
  POST: instance.POST,
  PUT: instance.PUT,
  DELETE: instance.DELETE
} as const;
