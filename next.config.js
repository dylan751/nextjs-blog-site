const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "muoi07052001",
        mongodb_password: "Khongbiet2001.",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-site",
      },
    };
  }

  return {
    env: {
      mongodb_username: "muoi07052001",
      mongodb_password: "Khongbiet2001.",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-site",
    },
  };
};
