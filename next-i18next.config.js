module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "br"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales/")
      : "/public/locales/",
  ns: ["home", "skills", "qualifications", "portfolio", "contact", "header"],
};
