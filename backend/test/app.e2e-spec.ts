import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';
import { PhysicalPersonInterface } from 'src/core/domain/interface/physical-person-interface';
import { getConnection } from 'typeorm';
import { AppModule } from 'src/app.module';

describe('CreatePhysicalPerson E2E Test', () => {
  let app: INestApplication;

  const personData: PhysicalPersonInterface = {
    cpf: '12345678901',
    email: 'test@example.com',
    password: 'test123',
    name: 'test',
    bornDate: new Date(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await getConnection().close();
    await app.close();
  });

  it('/physical-person (POST) should create a physical person successfully', async () => {
    return request(app.getHttpServer())
      .post('/physical-person')
      .send(personData)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject({
          cpf: personData.cpf,
          email: personData.email,
          name: personData.name,
          password: expect.any(String),
        });
      });
  });

  it('/physical-person (POST) should return error if person already exists', async () => {
    await request(app.getHttpServer())
      .post('/physical-person')
      .send(personData)
      .expect(201);

    return request(app.getHttpServer())
      .post('/physical-person')
      .send(personData)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toEqual('Physical person already exists');
      });
  });

  it('/physical-person (POST) should return error if email already exists', async () => {
    const secondPerson = {
      cpf: '98765432100',
      email: 'test1@example.com',
      password: 'test123',
      name: 'Second Test',
      bornDate: new Date(),
    };

    await request(app.getHttpServer())
      .post('/physical-person')
      .send(personData)
      .expect(201);

    return request(app.getHttpServer())
      .post('/physical-person')
      .send(secondPerson)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toEqual('Email already exists');
      });
  });
});
