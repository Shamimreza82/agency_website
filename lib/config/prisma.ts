import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma?: PrismaClient }

// Database is optional. When DATABASE_URL is not set, `prisma` is undefined and
// the app still builds and runs. Any consumer must guard against undefined.
export const prisma: PrismaClient | undefined = (() => {
  if (!process.env.DATABASE_URL) {
    return undefined
  }
  try {
    return (
      globalForPrisma.prisma ??
      new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
      })
    )
  } catch {
    return undefined
  }
})()

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma
}
