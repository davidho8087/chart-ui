'use client'
import Spinner from '@/components/global/spinner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { router } from 'next/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const promptFormSchema = z.object({
  prompt: z.string().min(2, {
    message: 'Prompt is required',
  }),
  type: z.string().min(2, {
    message: 'Please select a type',
  }),
})

function CreateChart() {
  const router = useRouter()
  const [isSubmitting, setSubmitting] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof promptFormSchema>>({
    resolver: zodResolver(promptFormSchema),
    defaultValues: {
      prompt: '',
      type: '',
    },
  })

  const onSubmit = form.handleSubmit(
    async (data: z.infer<typeof promptFormSchema>) => {
      try {
        setSubmitting(true)
        console.log(data)
        await axios.post('http://localhost:7001/api/smartLayout/create', {
          data,
        })

        setSubmitting(false)
        router.refresh()
      } catch (error) {
        setSubmitting(false)
        console.error(error)
      }
    }
  )

  return (
    <div>
      <Form {...form}>
        <form onSubmit={onSubmit} className='space-y-8'>
          <FormField
            control={form.control}
            name='prompt'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='What do you want?' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='type'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a Type' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='bar'>Bar Chart</SelectItem>
                    <SelectItem value='line'>Line Chart</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : 'Smash it!'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateChart
