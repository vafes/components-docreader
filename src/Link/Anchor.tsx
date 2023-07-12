import * as React from "react";

const Anchor = ({
  children,
  style = { fontWeight: 300 },
  ...props
}: React.HTMLProps<HTMLAnchorElement> & { basePath?: string }) => {
  const isAnchor = props.href?.match(/^#/);
  const basePathLength = props?.basePath?.length ?? 0;
  if (
    !isAnchor &&
    props.href != null &&
    props.href.slice(basePathLength + 1, basePathLength + 4) != "api"
  ) {
    return (
      <a {...props} target="_blank" rel="noopener">
        {children}
        <span style={{ whiteSpace: "nowrap", padding: 0 }} data-mdignore={true}>
          &#65279;
        </span>
      </a>
    );
  }
  return <a {...props}>{children}</a>;
};

export default Anchor;
