const baseUrl = "http://localhost:3000";

export default function api(method, _, data) {
  return fetch(baseUrl, {
    method,
    headers: {
      "content-type": "application/json",
    },
    body: data && JSON.stringify(data),
  });
}
