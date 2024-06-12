export const formatText = (text: string): FormatTextResult[] => {
  if (text.includes('*link')) {
    const linkPattern = /(.*?)\*link=(.*?)\*(.*?)\*\/link\*(.*)/;
    const linkedText = text.match(linkPattern);

    if (!linkedText) {
      return [{ type: 'text', value: text }];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, startText, url, value, endText] = linkedText;

    return [
      ...formatText(startText),
      {
        type: 'link',
        url,
        value,
      },
      ...formatText(endText),
    ];
  }

  if (text.includes('*nowrap')) {
    const nowrapPattern = /(.*?)\*nowrap\*(.*?)\*\/nowrap\*(.*)/;

    const nowrapResult = text.match(nowrapPattern);
    if (!nowrapResult) {
      return [{ type: 'text', value: text }];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, startText, value, endText] = nowrapResult;
    return [
      ...formatText(startText),
      { type: 'nowrap', value },
      ...formatText(endText),
    ];
  }

  if (text.includes('*bold')) {
    const nowrapPattern = /(.*?)\*bold\*(.*?)\*\/bold\*(.*)/;

    const nowrapResult = text.match(nowrapPattern);
    if (!nowrapResult) {
      return [{ type: 'text', value: text }];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, startText, value, endText] = nowrapResult;
    return [
      ...formatText(startText),
      { type: 'bold', value },
      ...formatText(endText),
    ];
  }

  return [{ type: 'text', value: text }];
};

export type FormatTextResult =
  | LinkResult
  | StringResult
  | NowrapResult
  | BoldResult;

type LinkResult = {
  type: 'link';
  url: string;
  value: string;
};

type StringResult = {
  type: 'text';
  value: string;
};

type NowrapResult = {
  type: 'nowrap';
  value: string;
};

type BoldResult = {
  type: 'bold';
  value: string;
};
