const supportedLanguages = [
  { id: "lv", title: "LV", isDefault: true },
  { id: "ru", title: "RU" },
  // Add as many languages as you need to support
]
export default {
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
}