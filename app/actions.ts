'use server';
export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState, formData);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (formData.get('password') !== '12345') {
    return {
      errors: ['Wrong password'],
    };
  }
}
