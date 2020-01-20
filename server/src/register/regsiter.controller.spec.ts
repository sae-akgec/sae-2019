import { Test, TestingModule } from '@nestjs/testing';
import { RegisterController } from './regsiter.controller';

describe('Register Controller', () => {
  let controller: RegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterController],
    }).compile();

    controller = module.get<RegisterController>(RegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
