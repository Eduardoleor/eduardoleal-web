const isGithubActions = process.env.GITHUB_ACTIONS || false;

const githubConfig = () => {
  if (!isGithubActions) return {};
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  return {
    assetPrefix: `/${repo}/`,
    basePath: `/${repo}`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...githubConfig,
};

module.exports = nextConfig;
