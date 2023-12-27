import { publicProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => 'GET All Todos'),
})
