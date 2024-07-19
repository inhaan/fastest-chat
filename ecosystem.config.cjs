module.exports = {
  apps: [
    {
      name: "app",
      script: "./server/prod/src/main.js",
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
