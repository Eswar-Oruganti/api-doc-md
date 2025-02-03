import { CustomGrid as Grid } from "../../components";

export const customgrid = {
  render: Grid,
  children: ["paragraph", "tag", "list"],
  attributes: {
    columns: {
      type: Number,
    },
  },
};
