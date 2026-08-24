export const locales = [
  "en",
  "id",
] as const;

export type Locale =
  (typeof locales)[number];

export const defaultLocale: Locale =
  "en";

export const localeCookieName =
  "rizqi-locale";

export function hasLocale(
  value: unknown,
): value is Locale {
  return (
    typeof value === "string" &&
    locales.includes(
      value as Locale,
    )
  );
}