// 폰트 스타일 이름을 나타내는 객체
// @sasil-mobile, @sasil-web 에서 공통으로 사용된다.
export const TEXT_STYLE_NAME = {
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  button1B: 'button1B',
  button1R: 'button1R',
  button2B: 'button2B',
  button2R: 'button2R',
  button3: 'button3',
  caption: 'caption',
} as const;

export type TextStyleName =
  typeof TEXT_STYLE_NAME[keyof typeof TEXT_STYLE_NAME];

interface TextStyle {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

const LINE_HEIGHT_RATIO = 1.2;

// @sasil-web 에서 사용하는 폰트 스타일 객체
export const TEXT_STYLES_PC: Record<TextStyleName, TextStyle> = {
  [TEXT_STYLE_NAME.title]: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 36 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle1]: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 28 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle2B]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle2R]: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 22 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle3]: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body1B]: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body1R]: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body2B]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body2R]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body3]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button1B]: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button1R]: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button2B]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button2R]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button3]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.caption]: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
};

export interface TextStyleMobile {
  fontSize: number;
  fontWeight: '300' | '400' | '500' | '600' | '700';
  fontFamily: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
  lineHeight: number;
}

// @sasil-mobile에서 사용되는 폰트 스타일 객체
export const TEXT_STYLES_MOBILE: Record<TextStyleName, TextStyleMobile> = {
  [TEXT_STYLE_NAME.title]: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'bold',
    lineHeight: 30 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle1]: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'bold',
    lineHeight: 22 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle2B]: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'bold',
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle2R]: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 18 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.subtitle3]: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'semiBold',
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body1B]: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'semiBold',
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body1R]: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body2B]: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'semiBold',
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body2R]: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.body3]: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button1B]: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'semiBold',
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button1R]: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 16 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button2B]: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'semiBold',
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button2R]: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 14 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.button3]: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'regular',
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
  [TEXT_STYLE_NAME.caption]: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'light',
    lineHeight: 12 * LINE_HEIGHT_RATIO,
  },
};
