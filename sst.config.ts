/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "gwdesigns-donna-violin",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: true },
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      domain: {
        name: "donnawolfviolin.com",
        dns: sst.cloudflare.dns({
          zone: "e1b0c5c873e318fce554e0bb40a68102",
        }),
      },
      
    });
  },
});
