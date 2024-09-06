import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomExceptionsFilter } from './infra/common/filters/http-exception.filter';
import { RequestTransformInterceptor } from './infra/common/interceptors/request-transformer.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new CustomExceptionsFilter(httpAdapter));

  app.useGlobalInterceptors(new RequestTransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
