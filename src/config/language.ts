export type Locale = "en" | "ru";

export interface Language {
  value: Locale;
  label: string;
  flag: string;
  nativeName?: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    value: "en",
    label: "English",
    flag: "🇺🇸",
    nativeName: "English",
  },
  {
    value: "ru",
    label: "Russian",
    flag: "🇷🇺",
    nativeName: "Russian",
  },
  // {
  //   value: "fr",
  //   label: "Français",
  //   flag: "🇫🇷",
  //   nativeName: "Français"
  // },
];

export const getLanguageByLocale = (locale: Locale): Language | undefined => {
  return SUPPORTED_LANGUAGES.find(lang => lang.value === locale);
};

export const getLanguageLabel = (locale: Locale): string => {
  return getLanguageByLocale(locale)?.label || locale;
};

export const getLanguageFlag = (locale: Locale): string => {
  return getLanguageByLocale(locale)?.flag || "🌐";
};

export const isValidLocale = (locale: string): locale is Locale => {
  return SUPPORTED_LANGUAGES.some(lang => lang.value === locale);
};
