/** @type {import('next').NextConfig} */
import CopyWebpackPlugin from 'copy-webpack-plugin';

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["@blogs/trpc", "@blogs/prisma"],
  images: {
    domains: [
      "images.pexels.com"
    ]
  },
  webpack: (config, { webpack, buildId }) => {
    // config.plugins.push(
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: "../../packages/app-store/**/static/**",
    //         to({ context, absoluteFilename }) {
    //           // Adds compatibility for windows path
    //           if (os.platform() === "win32") {
    //             const absoluteFilenameWin = absoluteFilename.replaceAll("\\", "/");
    //             const contextWin = context.replaceAll("\\", "/");
    //             const appName = /app-store\/(.*)\/static/.exec(absoluteFilenameWin);
    //             return Promise.resolve(`${contextWin}/public/app-store/${appName[1]}/[name][ext]`);
    //           }
    //           const appName = /app-store\/(.*)\/static/.exec(absoluteFilename);
    //           return Promise.resolve(`${context}/public/app-store/${appName[1]}/[name][ext]`);
    //         },
    //       },
    //     ],
    //   })
    // );

    config.plugins.push(new webpack.DefinePlugin({ "process.env.BUILD_ID": JSON.stringify(buildId) }));

    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false,
      // ignore module resolve errors caused by the server component bundler
      "pg-native": false,
      "superagent-proxy": false,
    };

    /**
     * TODO: Find more possible barrels for this project.
     *  @see https://github.com/vercel/next.js/issues/12557#issuecomment-1196931845
     **/
    config.module.rules.push({
      test: [/lib\/.*.tsx?/i],
      sideEffects: false,
    });

    return config;
  }
};

export default nextConfig;
