/**
 * This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 * Feel free to commit/edit it as you need.
 */
/* eslint-disable */
/* tslint:disable */
import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";

faker.seed(1);

const baseURL = "";
const MAX_ARRAY_LENGTH = 20;

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
};

export const handlers = [
  http.get(`${baseURL}/me`, async () => {
    const resultArray = [
      [await getGetMe200Response(), { status: 200 }],
      [await getGetMe500Response(), { status: 500 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/signup`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/normal/login`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/line/login`, async () => {
    const resultArray = [[undefined, { status: 200 }]];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/line/callback`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/categories`, async () => {
    const resultArray = [
      [await getGetCategories200Response(), { status: 200 }],
      [await getGetCategories500Response(), { status: 500 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/categories`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.put(`${baseURL}/categories/:categoryId`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 404 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.delete(`${baseURL}/categories/:categoryId`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 404 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/todo`, async () => {
    const resultArray = [
      [await getGetTodo200Response(), { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/todo`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/todo/:todoId`, async () => {
    const resultArray = [
      [await getGetTodoTodoId200Response(), { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 404 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.put(`${baseURL}/todo/:todoId`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 404 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.delete(`${baseURL}/todo/:todoId`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 404 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/shopping/item/:ownerId`, async () => {
    const resultArray = [
      [await getGetShoppingItemOwnerId200Response(), { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/shopping/item/:ownerId`, async () => {
    const resultArray = [
      [undefined, { status: 200 }],
      [undefined, { status: 401 }],
      [undefined, { status: 5 }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
];

export function getGetMe200Response() {
  return {
    id: faker.number.int(),
    user_name: faker.person.fullName(),
    email: faker.internet.email(),
    authority: faker.helpers.arrayElement(["COMMON", "ADMIN"]),
  };
}

export function getGetMe500Response() {
  return {
    code: "エラーカテゴリ/エラータイプ",
  };
}

export function getGetCategories200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
  }));
}

export function getGetCategories500Response() {
  return {
    code: "エラーカテゴリ/エラータイプ",
  };
}

export function getGetTodo200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    category: {
      id: faker.number.int(),
      name: faker.person.fullName(),
    },
    dueDate: "1990-01-01",
    done: faker.datatype.boolean(),
  }));
}

export function getGetTodoTodoId200Response() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    category: {
      id: faker.number.int(),
      name: faker.person.fullName(),
    },
    dueDate: "1990-01-01",
    done: faker.datatype.boolean(),
  };
}

export function getGetShoppingItemOwnerId200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: faker.number.int(),
    owner_id: faker.number.int(),
    name: faker.person.fullName(),
    category: "food",
    picked: faker.datatype.boolean(),
  }));
}
