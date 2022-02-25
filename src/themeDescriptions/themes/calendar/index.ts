import {Property} from 'csstype';

import {ThemeCalendarDescription} from '@/interfaces/themes/calendar';
import {ThemeCalendarDarkDescription} from '@/interfaces/themes/calendarDark';
import {fontWeight} from '@/themeDescriptions/common/fontSizes';

import {darkTheme, lightTheme} from '../../base/paradigm';
import {fontSizes, helpers} from '../../common';

const {x2, x4, x5} = helpers;

export const fontFamily: Property.FontFamily =
	'MailSans, Helvetica, Arial, sans-serif';

const fontSize2 = {
	...fontSizes.fontSize2,
	fontFamily,
};

const fontSize3 = {
	...fontSizes.fontSize3,
	fontFamily,
};

const fontSize4 = {
	...fontSizes.fontSize4,
	fontFamily,
};

const fontSize5 = {
	...fontSizes.fontSize5,
	fontFamily,
};

const fontSize6 = {
	...fontSizes.fontSize6,
	fontFamily,
};

const fontFootnote = {
	...fontSize2,
	lineHeight: '18px',
};

const fontCaption1 = {
	fontSize: 12,
	lineHeight: '16px',
	fontWeight,
	fontFamily,
};

const fontCaption2 = {
	fontSize: 11,
	lineHeight: '14px',
	fontWeight,
	fontFamily,
};

const fontCaption3 = {
	fontSize: 9,
	lineHeight: '12px',
	fontWeight,
	fontFamily,
};

export const calendarTheme: ThemeCalendarDescription = {
	...lightTheme,

	themeName: 'calendar',
	themeNameBase: 'calendar',

	colors: {
		...lightTheme.colors,
		colorTextSecondary: '#93969B',
		colorBackgroundSecondary: '#EBECEF',
		colorIconSecondary: '#B6B8BE',

		// для кнопок, которые голубые в светлой теме и серые в темной
		calendarColorBackgroundAccentTintThemedAlpha: {
			normal: 'rgb(227, 238, 253, 1)',
			hover: 'rgba(218, 228, 243, 1)',
			active: 'rgba(227, 238, 253, 1)',
		},
	},

	fontFamilyBase: fontFamily,
	fontFamilyAccent: fontFamily,

	fontTitle1: {
		regular: {
			...fontSize6,
			fontWeight: 500,
		},
		compact: {
			...fontSize6,
			lineHeight: '28px',
			fontWeight: 500,
		},
	},
	fontTitle2: {
		regular: {
			...fontSize5,
			lineHeight: '24px',
			fontWeight: 500,
		},
		compact: {
			...fontSize5,
			lineHeight: '24px',
			fontWeight: 500,
		},
	},
	fontTitle3: {
		regular: {
			...fontSize4,
			fontWeight: 500,
		},
		compact: {
			...fontSize4,
			fontWeight: 500,
		},
	},
	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: '20px',
			fontWeight: 500,
			fontFamily,
		},
		compact: {
			...fontSize3,
			fontWeight: 500,
		},
	},
	fontText: {
		regular: {
			fontSize: 16,
			lineHeight: '20px',
			fontWeight,
			fontFamily,
		},
		compact: fontSize3,
	},
	fontParagraph: {
		regular: fontSize3,
		compact: fontSize3,
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: '18px',
			fontWeight,
			fontFamily,
		},
		compact: {
			...fontSize2,
			lineHeight: '18px',
			fontWeight: 500,
		},
	},
	fontFootnote: {
		regular: fontFootnote,
		compact: fontFootnote,
	},
	fontFootnoteCaps: {
		regular: {
			...fontFootnote,
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontFootnote,
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: fontCaption1,
		compact: {
			...fontCaption1,
			lineHeight: '14px',
		},
	},
	fontCaption1Caps: {
		regular: {
			...fontCaption1,
			letterSpacing: '0.26px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontCaption1,
			lineHeight: '14px',
			letterSpacing: '0.26px',
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: fontCaption2,
		compact: fontCaption2,
	},
	fontCaption2Caps: {
		regular: {
			...fontCaption2,
			letterSpacing: '0.22px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontCaption2,
			letterSpacing: '0.22px',
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: fontCaption3,
		compact: fontCaption3,
	},
	fontCaption3Caps: {
		regular: {
			...fontCaption3,
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontCaption3,
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
	},

	calendarFontTextEvent: {
		regular: fontSize4,
		compact: {
			...fontSize2,
			lineHeight: '18px',
			fontWeight: 500,
		},
	},
	calendarFontTextEventSmall: {
		regular: fontSize3,
		compact: {
			fontSize: 12,
			lineHeight: '12px',
			fontWeight: 400,
			fontFamily,
		},
	},

	sizeButtonPaddingHorizontal: {
		compact: x4,
		regular: x5,
	},
	sizeBasePadding: {
		regular: x5,
	},

	sizeAvatarXL: {
		compact: 120,
		regular: 160,
	},

	sizeFieldHorizontalPadding: {
		regular: x2,
	},

	sizeBorderRadius: {
		compact: 8,
		regular: 8,
	},
};

export const calendarDarkTheme: ThemeCalendarDarkDescription = {
	...calendarTheme,
	themeName: 'calendarDark',
	colorsScheme: 'dark',
	colors: {
		...calendarTheme.colors,
		...darkTheme.colors,
		colorTextPrimary: '#E7E8EA',
		colorTextSecondary: '#8C8E94',
		colorIconPrimary: '#B4B4B4',
		colorIconSecondary: '#5F5F5F',

		calendarColorBackgroundAccentTintThemedAlpha: {
			normal: 'rgba(255, 255, 255, 0.12)',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.12)',
		},
	},
};
