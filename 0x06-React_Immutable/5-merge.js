import { List, Map } from 'immutable';

export const concatElements = (page1, page2) => {
  const arr1 = List(page1);
  return arr1.concat(page2);
};

export const mergeElements = (page1, page2) => {
  const map1 = Map(page1);
  return map1.merge(page2);
};
