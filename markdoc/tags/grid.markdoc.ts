import { Grid } from "../../components";

export const grid = {
  render: Grid,
  children: ["paragraph", "tag", "list"],
  attributes: {
    columns: {
      type: Number,
    },
  },
};
