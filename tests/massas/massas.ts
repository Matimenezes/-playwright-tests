import {fakerPT_BR as faker } from '@faker-js/faker';


export function criarMassa() {
  return {
    whatsapp: faker.phone.number(),
    CPF: faker.string.numeric(11),
    nomeCompleto: faker.person.fullName(),
    email: faker.internet.email(),
    numeroDeEndereco:faker.location.buildingNumber()
  };
}
export const users = faker.helpers.multiple(criarMassa, {
  count: 5,
});