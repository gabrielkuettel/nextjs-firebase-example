'use client'
import { Loader2 } from 'lucide-react'
import { signIn } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: 'Username must be at least 5 characters.',
    })
    .email('This is not a valid email.'),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'test@test.com',
      password: 'testing123',
    },
  })

  const { isSubmitting, isValidating, errors } = form.formState

  const router = useRouter()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { result, error } = await signIn(values.username, values.password)

    if (error) {
      console.log(error)
      form.setError('root', { message: 'Incorrect username or password.' })
      return
    }

    console.log(result)

    router.push('/dashboard')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" type="email" {...field} />
              </FormControl>
              <FormDescription>
                This is the email address associated with your account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormDescription>This is your password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {errors.root && <FormMessage>{errors.root.message}</FormMessage>}
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin">Please wait...</Loader2>}
          {isSubmitting ? 'Working...' : 'Log In'}
        </Button>
      </form>
    </Form>
  )
}
