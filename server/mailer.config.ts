module.exports = {
    transport: {
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      auth: {
          user: 'rishabh2401jain@gmail.com',
          pass: 'hetansh@123'
      }
    },
    defaults: {
      forceEmbeddedImages: true,
      from:'"nest-modules" <modules@nestjs.com>',
    },
    templateDir: './src/common/email-templates'
  }