module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIA2TYZE7JA25EG2MAB'),
        secretAccessKey: env('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'),
        region: env('ap-south-1'),
        params: {
          Bucket: env('my-strapi-project-images11'),
        },
      },
    },
  });