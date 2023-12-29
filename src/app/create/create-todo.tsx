'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TodoValidator, TTodoValidator } from '@/lib/TodoValidator'
import { trpc } from '../_trpc/client'
// import useTextarea from '@/hooks/useTextarea'

const CreateTodo = () => {
  return (
    <Tabs defaultValue="post" className="w-full">
      <TabsList className="grid h-[51px] w-full grid-cols-2 p-0">
        <TabsTrigger
          value="post"
          className={`flex h-full w-full items-center justify-center border-b-2 border-r border-b-transparent border-r-[#ccc] data-[state=active]:border-b-2 data-[state=active]:border-b-[#0079D3] data-[state=active]:text-[#0079D3]`}
        >
          Post
        </TabsTrigger>
        <TabsTrigger
          value="url"
          className={`flex h-full w-full items-center justify-center border-b-2 border-b-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-[#0079D3] data-[state=active]:text-[#0079D3]`}
        >
          Url
        </TabsTrigger>
      </TabsList>
      <TabsContent value="post">
        <PostForm />
      </TabsContent>
      <TabsContent value="url">
        {/* <UrlForm /> */}
        <div>Url Form</div>
      </TabsContent>
    </Tabs>
  )
}

export default CreateTodo

const PostForm = () => {
  const [error, setError] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const router = useRouter()
  const getTodos = trpc.todo.getAll.useQuery()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTodoValidator>({
    resolver: zodResolver(TodoValidator),
  })

  const { mutate: addTodo } = trpc.todo.add.useMutation({
    onSuccess: () => {
      router.refresh()
      router.push('/')
    },

    onError: (err) => {
      if (err.data?.code === 'INTERNAL_SERVER_ERROR') {
        console.log('No todo was created')
      }
    },

    onSettled: () => {
      getTodos.refetch()
    },
  })

  const onSubmit = async ({ title, description }: TTodoValidator) => {
    try {
      addTodo({ title, description })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="rounded border-none">
          <CardContent className="space-y-2 pt-4">
            <div>
              <Textarea
                maxLength={300}
                rows={1}
                placeholder="Title"
                className="box-border block min-h-[39px] w-full resize-none overflow-hidden overflow-x-hidden break-words rounded pr-[68px] text-[#1c1c1c] focus-visible:border focus-visible:border-[#1A1A1B] focus-visible:ring-0 focus-visible:ring-offset-0"
                {...register('title')}
              />
            </div>
            <div className="space-y-1">
              <Textarea
                maxLength={3000}
                placeholder="Description (optional)"
                className="box-border block min-h-[122px] w-full overflow-hidden break-words rounded text-[#1c1c1c] focus-visible:border focus-visible:border-[#1A1A1B] focus-visible:ring-0 focus-visible:ring-offset-0"
                {...register('description')}
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              variant={'default'}
              className="h-8 rounded-full text-sm font-bold"
              disabled={isSubmitting}
              type="submit"
            >
              Todo
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  )
}
