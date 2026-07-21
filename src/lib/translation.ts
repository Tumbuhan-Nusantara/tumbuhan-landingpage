export function getTranslation(
  locale: string,
  indonesia?: string | null,
  english?: string | null,
) {
  if (locale === "id") {
  return indonesia || english || "";

  }

    return english || indonesia || "";

}