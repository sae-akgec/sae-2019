export default {
    secretOrPrivateKey: process.env.JWT_SECRET||'some-secret-key',
    signOptions: {
      expiresIn: process.env.JWT_EXPIRES || 3600,
    },
  };