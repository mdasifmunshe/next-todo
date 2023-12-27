import { publicProcedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'
import { Prisma } from '@prisma/client'
import { prisma } from '../prisma'
import { z } from 'zod'

const defaultTodoSelect = {
  id: true,
  title: true,
  description: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.TodoSelect

export const todoRouter = router({
  getAll: publicProcedure.query(async () => {
    const todo = await prisma.todo.findMany({
      select: defaultTodoSelect,
    })

    if (!todo) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No todo`,
      })
    }

    return todo
  }),
})
