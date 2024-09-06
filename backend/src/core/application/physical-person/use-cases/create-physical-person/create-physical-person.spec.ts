import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';
import { Bcrypt } from 'src/core/domain/criptography/bcrypt';
import { CreatePhysicalPersonService } from './create-physical-person';
import { PhysicalPersonInterface } from 'src/core/domain/interface/physical-person-interface';

describe('CreatePhysicalPersonService', () => {
  let service: CreatePhysicalPersonService;
  let physicalPersonRepository: PhysicalPersonRepository;
  let harsher: Bcrypt;

  const inputData: PhysicalPersonInterface = {
    cpf: '12345678901',
    email: 'test@example.com',
    password: 'test123',
    name: 'test',
    bornDate: new Date(),
  };

  beforeEach(() => {
    physicalPersonRepository = {
      findByCpf: jest.fn(),
      findByEmail: jest.fn(),
      create: jest.fn(),
    } as unknown as PhysicalPersonRepository;

    harsher = {
      hash: jest.fn(),
    } as unknown as Bcrypt;

    service = new CreatePhysicalPersonService(
      physicalPersonRepository,
      harsher,
    );
  });

  it('should create a physical person when cpf and email do not exist', async () => {
    (physicalPersonRepository.findByCpf as jest.Mock).mockResolvedValue(null);
    (physicalPersonRepository.findByEmail as jest.Mock).mockResolvedValue(null);

    (harsher.hash as jest.Mock).mockResolvedValue('hashed_password');

    const createdPerson = { ...inputData, password: 'hashed_password' };
    (physicalPersonRepository.create as jest.Mock).mockResolvedValue(
      createdPerson,
    );

    const result = await service.execute(inputData);
    expect(physicalPersonRepository.findByCpf).toHaveBeenCalledWith(
      inputData.cpf,
    );
    expect(physicalPersonRepository.findByEmail).toHaveBeenCalledWith(
      inputData.email,
    );
    expect(harsher.hash).toHaveBeenCalledWith(inputData.password);
    expect(physicalPersonRepository.create).toHaveBeenCalledWith({
      ...inputData,
      password: 'hashed_password',
    });
    expect(result).toEqual(createdPerson);
  });

  it('should throw an error if the physical person with the same cpf already exists', async () => {
    (physicalPersonRepository.findByCpf as jest.Mock).mockResolvedValue({
      cpf: '12345678901',
    });

    await expect(service.execute(inputData)).rejects.toThrowError(
      'Physical person already exists',
    );
    expect(physicalPersonRepository.findByCpf).toHaveBeenCalledWith(
      inputData.cpf,
    );
  });

  it('should throw an error if the email already exists', async () => {
    (physicalPersonRepository.findByCpf as jest.Mock).mockResolvedValue(null);
    (physicalPersonRepository.findByEmail as jest.Mock).mockResolvedValue({
      email: 'test@example.com',
    });

    await expect(service.execute(inputData)).rejects.toThrowError(
      'Email already exists',
    );
    expect(physicalPersonRepository.findByCpf).toHaveBeenCalledWith(
      inputData.cpf,
    );
    expect(physicalPersonRepository.findByEmail).toHaveBeenCalledWith(
      inputData.email,
    );
  });
});
