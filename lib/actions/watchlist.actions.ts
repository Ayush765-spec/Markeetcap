'use server';

import { db } from "@/database/drizzle";
import { watchlist, user } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
  if (!email) return [];

  try {
    const u = await db.select({ id: user.id }).from(user).where(eq(user.email, email)).limit(1);

    if (!u || u.length === 0) return [];

    const userId = u[0].id;
    if (!userId) return [];

    const items = await db.select({ symbol: watchlist.symbol }).from(watchlist).where(eq(watchlist.userId, userId));
    return items.map((i) => i.symbol);
  } catch (err) {
    console.error('getWatchlistSymbolsByEmail error:', err);
    return [];
  }
}
