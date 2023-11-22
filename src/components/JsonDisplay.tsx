import { Fragment } from "react";
import { Link } from "./Link";
import { JSONObject } from "../types/JSONObject";

const collectKeys = (keys: (string | number)[]): string =>
  keys
    .map((key) => (typeof key === "number" ? `[${key}]` : `.${key}`))
    .join("");

export const JsonDisplay: React.FC<{
  object: JSONObject;
  depth?: number;
  path?: (string | number)[];
}> = ({ object, depth = 0, path = [] }) => {
  if (typeof object !== "object" || object === null) {
    return JSON.stringify(object);
  }

  if (Array.isArray(object)) {
    return (
      <>
        [
        {object.map((val, i) => (
          <Fragment key={i}>
            <JsonDisplay object={val} depth={depth + 2} path={[...path, i]} />
            {i !== object.length - 1 && ", "}
          </Fragment>
        ))}
        {"\n"}
        {" ".repeat((depth - 1) * 2)}]
      </>
    );
  }

  return (
    <>
      {"\n"}
      {" ".repeat(depth)}
      {"{"}
      {Object.entries(object).map(([key, val]) => (
        <div key={key}>
          {" ".repeat(depth + 2)}
          <Link
            href={`?chosenKey=${encodeURIComponent(
              collectKeys([...path, key])
            )}`}
          >
            <b>{JSON.stringify(key)}</b>
          </Link>
          :{" "}
          <>
            <JsonDisplay object={val} depth={depth + 2} path={[...path, key]} />
            {key !== Object.keys(object)[Object.keys(object).length - 1] &&
              ", "}
          </>
        </div>
      ))}
      {" ".repeat(depth)}
      {"}"}
    </>
  );
};
