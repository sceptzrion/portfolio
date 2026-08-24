import { cookies } from "next/headers";

import {
  defaultLocale,
  hasLocale,
  localeCookieName,
  type Locale,
} from "@/i18n/config";

export async function getLocale(): Promise<Locale> {
  const cookieStore =
    await cookies();

  const storedLocale =
    cookieStore.get(
      localeCookieName,
    )?.value;

  return hasLocale(storedLocale)
    ? storedLocale
    : defaultLocale;
}