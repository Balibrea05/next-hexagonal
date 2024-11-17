import { AuthInterface } from '@/auth/domain/interfaces/output/auth.interface';

export class MockAuthRepository {
  #data: AuthInterface[] = [
    {
      user: {
        id: 'id',
        email: 'test@test.com',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      token: 'token.mocked.jwt',
    },
    {
      user: {
        id: 'id2',
        email: 'test2@test.com',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      token: 'token.mocked.jwt',
    },
    {
      user: {
        id: 'id3',
        email: 'test3@test.com',
        password: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      token: 'token.mocked.jwt',
    },
  ];

  constructor() {
    this.initializeData();
  }

  initializeData() {
    sessionStorage.setItem('auth', JSON.stringify(this.#data));
  }
}
