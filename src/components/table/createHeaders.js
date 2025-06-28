import { createRef } from "react";

export const createHeaders = (headers) => {
  return headers.map((item) => {
    return { ...item, ref: createRef() };
  });
};
