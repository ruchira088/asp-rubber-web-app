import httpClient from "utils/httpClient"
import * as storage from "storage/localStorage"

const STORAGE_KEY = "session"

export const login = (username, password) =>
    httpClient.post("/session", { username, password })
        .then(({ data }) => storage.set(STORAGE_KEY, data))

export const getAuthenticatedUser = () => storage.get(STORAGE_KEY)