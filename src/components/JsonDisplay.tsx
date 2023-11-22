import { Fragment, ReactNode } from "react";
import { JSONObject } from "../types/JSONObject";

export const JsonDisplay: React.FC<{
  object: JSONObject;
  depth?: number;
  keyLink: (path: (string | number)[], key: string) => ReactNode;
  path?: (string | number)[];
}> = ({ object, keyLink, depth = 0, path = [] }) => {
  if (typeof object !== "object" || object === null) {
    return JSON.stringify(object);
  }

  if (Array.isArray(object)) {
    return (
      <>
        [
        {object.map((val, i) => (
          <Fragment key={i}>
            <JsonDisplay
              object={val}
              depth={depth + 2}
              path={[...path, i]}
              keyLink={keyLink}
            />
            {i !== object.length - 1 && ", "}
          </Fragment>
        ))}
        {"\n"}
        {" ".repeat(depth)}]
      </>
    );
  }

  const objEntries = Object.entries(object);
  return (
    <>
      {"\n"}
      {" ".repeat(depth)}
      {"{"}
      {objEntries.map(([key, val], i) => (
        <div key={key}>
          {" ".repeat(depth + 2)}
          {keyLink(path, key)}:{" "}
          <>
            <JsonDisplay
              object={val}
              depth={depth + 2}
              path={[...path, key]}
              keyLink={keyLink}
            />
            {i !== objEntries.length - 1 && ", "}
          </>
        </div>
      ))}
      {" ".repeat(depth)}
      {"}"}
    </>
  );
};
