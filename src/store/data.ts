import { atom } from "nanostores";
import { faker } from "@faker-js/faker";
import * as _ from "lodash";
import dayjs from "dayjs";
import React from "react";
//type

export interface DataType {
  key: React.Key;
  account: string;
  platform: string;
  accountType: string;
  storeName: string;
  creatTime: string;
  authorizationStatus: {
    status: boolean;
    time: string;
  };
}
// variable
export const _detailsHid = atom({}) as any;
export const _accountData = atom<DataType[]>([]);
export const _filterAccountData = atom<DataType[]>([]);
export const _isTableLoading = atom<boolean>(false);
// export const _postData = atom("2333") as any;
// function
// export function addPostData(key, value) {
//   _postData.set({ ..._postData.get(), [key]: value });
// }
export function getAccountData() {
  _accountData.set([]);
  for (let i = 0; i < 1000; i++) {
    let data: DataType = {
      key: i,
      account: _.random(1000000, 9000000),
      platform: _.random(0, 1) === 1 ? "美团" : "饿了么",
      accountType: _.random(0, 1) === 1 ? "连锁账号" : "一般账号",
      storeName: faker.company.bsNoun(),
      creatTime: `${dayjs(faker.datatype.datetime()).format(
        "YYYY-MM-DD A hh:mm:ss"
      )}`,
      authorizationStatus: {
        status: _.random(0, 1) === 1,
        time: `${dayjs(faker.datatype.datetime()).format(
          "YYYY-MM-DD A hh:mm:ss"
        )}`,
      },
    };
    _accountData.set([..._accountData.get(), data]);
  }
}
export function tableLoading() {
  _isTableLoading.set(true);
  getAccountData();
  setTimeout(() => {
    _isTableLoading.set(false);
  }, 1000);
}
