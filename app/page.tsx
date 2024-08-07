"use client";

import { useFormState } from "react-dom";

import FormButton from "../components/button";
import FormInput from "../components/input";
import { handleForm } from "./actions";

export default function Page() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <div className="flex text-xl gap-2">
          <svg className="size-8" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path>
          </svg>Log In
        </div>
      </div>
      <form action={action} className="flex flex-col gap-3 w-96">
        <FormInput name="email" type="email" placeholder="Email" required errors={state?.fieldErrors?.email} />
        <FormInput name="username" type="text" placeholder="Username" required errors={state?.fieldErrors?.username} />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors?.password}
        />
        <FormButton text="Log in" />
        {state?.success === true && (
          <div className="text-green-500">
            Login successful!
          </div>
        )}
      </form>
    </div>
  );
}