import httpClient from "utils/httpClient"

export const login = (username, password) =>
    httpClient.post("/session", { username, password })
        .then(({ data }) => data)