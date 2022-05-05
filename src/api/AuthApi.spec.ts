import sinon from 'sinon';
import { expect } from 'chai';
import { authApi, RegisterParameters } from './index';
import { LoginParameters } from './types';

describe('AuthApi', () => {
  let xhr: sinon.SinonFakeXMLHttpRequestStatic, requests: sinon.SinonFakeXMLHttpRequest[];
  (global.XMLHttpRequest as any) = sinon.useFakeXMLHttpRequest();

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];

    xhr.onCreate = (req) => {
      requests.push(req);
    };
  });

  afterEach(() => {
    xhr.restore()
  });

  it('Проверяем валидные данные в login', () => {
    const api = authApi;
    const data: LoginParameters = {
      login: "test",
      password: "qW1234",
    };

    api.login(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/signin`);
    expect(requests[0].method).to.eq("POST");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем валидные данные в register', () => {
    const api = authApi;
    const data: RegisterParameters = {
      first_name: "Test",
      second_name: "Test",
      login: "test",
      email: "test@gmail.com",
      password: "qW1234",
      phone: "12345678910",
    };

    api.register(data);

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/signup`);
    expect(requests[0].method).to.eq("POST");
    expect(requests[0].requestBody).to.eq(JSON.stringify(data));
  });

  it('Проверяем корректный logout', () => {
    const api = authApi;
    api.logout();

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/logout`);
    expect(requests[0].method).to.eq("POST");
  });
  it('Проверяем корректный getUserInfo', () => {
    const api = authApi;

    api.getUserInfo();

    expect(requests.length).to.eq(1);
    expect(requests[0].url).to.eq(`https://ya-praktikum.tech/api/v2/auth/user`);
    expect(requests[0].method).to.eq("GET");
  });
});
