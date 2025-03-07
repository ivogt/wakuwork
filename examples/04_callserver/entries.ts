import { defineEntries } from "wakuwork/server";

export default defineEntries(
  // getEntry
  async (id) => {
    switch (id) {
      case "App":
        return import("./src/App.js");
      default:
        return null;
    }
  },
  // getBuilder
  async () => {
    return {
      "/": {
        elements: [["App", { name: "Wakuwork" }]],
      },
    };
  }
);
