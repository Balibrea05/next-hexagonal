import { injectable } from 'tsyringe';

@injectable()
export class MockClient {
  get<T>(storageKey: string, id?: string): T {
    const data = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    return id ? data[id] : data;
  }

  post<T>(storageKey: string, value: T): T {
    const data = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    data[value.id] = value;
    sessionStorage.setItem(storageKey, JSON.stringify(data));

    return { data: { ...data, status: 200 } };
  }

  patch<T>(storageKey: string, id: string, value: T): T {
    const data = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    if (data[id]) {
      data[id] = { ...data[id], ...value };
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    }
  }

  delete<T>(storageKey: string, id: string): T {
    const data = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    if (data[id]) {
      delete data[id]; //
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    }
  }
}
