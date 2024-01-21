import { z } from 'zod'

export const promptFormSchema = z.object({
  prompt: z.string().min(1, 'Title is required').max(255),
})
