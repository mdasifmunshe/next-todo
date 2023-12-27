import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/server/routers/_app'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
    onError({ error }) {
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        console.error('Something went wrong', error)
      }
    },
  })

export { handler as GET, handler as POST }
