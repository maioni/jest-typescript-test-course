// upperCase.ts

export class StringUtils {
  public upperCase(word: string) {
    return word.toUpperCase();
  }

  public lowerCase(word: string) {
    return word.toLowerCase();
  }
}

export function upperCase(word: string) {
  return word.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[],
  length: number;
  extraInfo: Object | undefined
}

export function getStringInfo(arg: string): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {}
  }
}