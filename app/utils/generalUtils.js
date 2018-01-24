import { head, tail } from "ramda"

export const stubFunction = () => {}

export const camelCase =
    ([...value]) => head(value).toLowerCase() + tail(value.join("").replace(/\s/g, ""))