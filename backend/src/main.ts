import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UnauthorizedException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Retrieve some .env configs
  const config = app.get(ConfigService);
  const corsWhitelist = config.get<string>('cors.whitelist').split(',');
  const apiGlobalPrefix = config.get<string>('api.prefix');
  const port = config.get<number>('api.port');

  // Setting swagger documentation
  const documentationConfig = new DocumentBuilder()
    .setTitle('e-BSC API')
    .setDescription('Documentação oficial da api do glassdoor 2')
    .setVersion('0.0.1')
    .addBearerAuth()
    .addServer(`http://localhost:${port}`)
    .build();

  const document = SwaggerModule.createDocument(app, documentationConfig);
  SwaggerModule.setup(`${apiGlobalPrefix}/docs`, app, document);

  // Setting cors
  app.enableCors({
    origin: (origin, callback) => {
      const isUserUnderAnAllowedOrigin =
        !origin ||
        corsWhitelist.includes('*') ||
        corsWhitelist.indexOf(origin) !== -1;

      if (isUserUnderAnAllowedOrigin) {
        callback(null, true);
      } else {
        callback(new UnauthorizedException(`ORIGIN ${origin} blocked by CORS`));
      }
    },
  });

  await app.listen(port);
}
bootstrap();
