export type JSONObject =
  | string
  | number
  | null
  | boolean
  | JSONObject[]
  | { [key: string]: JSONObject };
