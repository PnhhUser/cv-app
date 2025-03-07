import { ParamsKey } from "../constants/enum";

const isValidParams = (title: string | undefined): boolean => {
  return title !== undefined && Object.keys(ParamsKey).includes(title);
};

const getTitle = (pathName: string): string => {
  return isValidParams(pathName)
    ? ParamsKey[pathName as keyof typeof ParamsKey]
    : "Mục tiêu nghề nghiệp";
};

export const utils = {
  isValidParams,
  getTitle,
};
