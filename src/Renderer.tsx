import type { ComponentType, createElement, Fragment, ReactNode } from "react";
import React from "react";

type ReactShape = Readonly<{
  createElement: typeof createElement;
  Fragment: typeof Fragment;
}>;
type Component = ComponentType<unknown>;

// if (!isProduction) {
// 	let contentEditable = new ContentEditable();
// 	contentEditable.addEventListeners();
// // }
// const content = hydrate(data.articleContent.value, { components });

export default function Renderer(node, { components = {} } = {}) {
  function deepRender(value: any): any {
    if (value == null || typeof value !== "object") return value;

    if (Array.isArray(value)) return value.map((item) => deepRender(item));

    if (value.$$mdtype === "Tag") return render(value);

    if (typeof value !== "object") return value;

    const output: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) output[k] = deepRender(v);
    return output;
  }

  function render(node: any): ReactNode {
    if (Array.isArray(node))
      return React.createElement(React.Fragment, null, ...node.map(render));
    if (typeof node === "string") return node;
    if (node === null) return null;

    const {
      name,
      attributes: { class: className, ...attrs } = {} as any,
      children = [],
    } = node;

    if (className) attrs.className = className;

    return React.createElement(
      tagName(name, components),
      Object.keys(attrs).length == 0 ? null : deepRender(attrs),
      ...children.map(render)
    );
  }

  return render(node);
}

function tagName(
  name: string,
  components: Record<string, Component> | ((string: string) => Component)
): string | Component {
  return typeof name !== "string"
    ? "Fragment"
    : name[0] !== name[0].toUpperCase()
    ? name
    : components[name];
}
