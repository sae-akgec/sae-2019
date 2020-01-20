"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const app_module_1 = require("./app.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const customer_module_1 = require("./customer/customer.module");
const blog_module_1 = require("./blog/blog.module");
const customer_module_2 = require("./contact/customer.module");
const regsiter_module_1 = require("./register/regsiter.module");
const registration_module_1 = require("./registration/registration.module");
const workshops_module_1 = require("./workshops/workshops.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(helmet());
    app.use("/api/auth/", rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    app.use("/api/customers/", rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Shopdot Api')
        .setDescription('The Shopdot Api docs')
        .addBearerAuth('Authorization', 'header')
        .setVersion('1.0')
        .build();
    const catDocument = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [auth_module_1.AuthModule, user_module_1.UserModule, customer_module_1.CustomerModule, blog_module_1.BlogModule,
            customer_module_2.ContactModule, regsiter_module_1.RegisterModule, registration_module_1.RegistrationModule, workshops_module_1.WorkshopsModule],
    });
    swagger_1.SwaggerModule.setup('api/docs', app, catDocument);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map