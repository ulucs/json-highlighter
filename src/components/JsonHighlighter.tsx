import { useSearch } from "../hooks/useSearch";
import { JSONObject } from "../types/JSONObject";
import { Link } from "./Link";
import { JsonDisplay } from "./JsonDisplay";

const pick = (obj: JSONObject, key: string): JSONObject | undefined => {
  const nestedKeys = key.match(/(\.[a-zA-Z_]+|\[[0-9]+\])/g) ?? [];

  return nestedKeys.reduce<JSONObject | undefined>((obj, key) => {
    if (typeof obj !== "object") {
      return undefined;
    }

    if (obj === null) {
      return undefined;
    } else if (Array.isArray(obj)) {
      if (key.match(/^\[[0-9]+\]$/)) {
        return obj[Number(key.substring(1, key.length - 1))];
      } else {
        return null;
      }
    } else {
      if (key.match(/^\.[a-zA-Z_]+$/)) {
        return obj[key.slice(1)];
      } else {
        return null;
      }
    }
  }, obj);
};

const collectKeys = (keys: (string | number)[]): string =>
  keys
    .map((key) => (typeof key === "number" ? `[${key}]` : `.${key}`))
    .join("");

export const JsonHighlighter: React.FC<{
  json: string;
}> = (props) => {
  const jsonVal = JSON.parse(props.json);
  const { chosenKey: [key] = [] } = useSearch();

  return (
    <>
      <h2>Selected Key</h2>
      <pre>{key ? "res" + key : "None"}</pre>
      <h2>Selected Key's Value</h2>
      <pre>{key ? JSON.stringify(pick(jsonVal, key), null, 2) : "None"}</pre>

      <h2>Full JSON</h2>
      <pre>
        <JsonDisplay
          object={jsonVal}
          keyLink={(path, key) => (
            <Link
              href={`?chosenKey=${encodeURIComponent(
                collectKeys([...path, key])
              )}`}
            >
              <b>{JSON.stringify(key)}</b>
            </Link>
          )}
        />
      </pre>
    </>
  );
};
