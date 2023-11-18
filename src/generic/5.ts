/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Tkey, Tvalue> {
  key: Tkey;
  value: Tvalue;
}

// const pair1: KeyValuePair<string, string> = { key: "name", value: "Kristi" };
// const pair2: KeyValuePair<number, boolean> = { key: 44, value: false };

export {};
