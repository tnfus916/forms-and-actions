'use server';

import { z } from 'zod';

const passwordRegex = new RegExp(/\d/);

const formSchema = z.object({
  username: z.string().min(5, 'Username must be at least 5 characters long.'),
  email: z
    .string()
    .toLowerCase()
    .email('Invalid email address')
    .regex(/@zod.com$/, 'Only @zod.com emails are allowed.'),
  password: z
    .string()
    .min(10, 'Password should be at least 10 characters long.')
    .regex(passwordRegex, 'Password should contain at least one number.'),
});

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return {
      success: false,
      fieldErrors: result.error.flatten().fieldErrors,
    };
  } else {
    console.log(result.data);
    return {
      success: true,
    };
  }
}
