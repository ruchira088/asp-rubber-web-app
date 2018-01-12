
export const set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const get = key => {
    const value = localStorage.getItem(key)

    return value == null ? Promise.reject(null) : Promise.resolve(JSON.parse(value))
}