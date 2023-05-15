export const CHANGE_LANGUAGES = 'CHANGE_LANGUAGES';

export const ChangeLanguage = (Language) => {
  return {
    type: CHANGE_LANGUAGES,
    payload: Language
  };
};
