import { CustomTable } from "../../components";
import { nodes, Tag } from "@markdoc/markdoc";

const config = {
  nodes: {
    table: {
      ...nodes.table,
      render: CustomTable, // your custom component goes here
    },
  },
};

export const customtable = {
  render: CustomTable,
  children: ["inline"],
  transform(node, config) {
    const children = node.transformChildren(config);

    return new Tag(children);
  },
};
