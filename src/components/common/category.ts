interface CategoryType {
  [key: string]: {
    label: string;
    key: string;
  };
}

export const categories: CategoryType = {
  all: {
    label: "all",
    key: "40001",
  },
  art: {
    label: "art",
    key: "40002",
  },
  character: {
    label: "character",
    key: "40003",
  },
  music: {
    label: "music",
    key: "40004",
  },
  etc: {
    label: "etc",
    key: "40005",
  },
};
