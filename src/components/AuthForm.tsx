'use client';
import Image from "next/image"
import Link from "next/link"
import { userAgent } from "next/server"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const AuthForm = ({type}: { type: string }) => {
  const [user, setUser] = useState (null);

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
  <section className='authform'>
    <header className="flex flex-col gap-5 md:gap-8">
       <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
                    <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                      
                    /> 
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Horizon</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36
          font-semibold tet-gray-900">
        {user 
         ?'Link Account'
         : type==='sign-in'
         ?'Sign In'
         :'Sign up'
         }
         <p className="text-16 font-normal text-gray-600">
          {user
          
          ?'Link your bank account to get started'
          : 'Please enter your details to continue'
}

         </p>
          </h1>
          </div>
          </header>
          {user?(

        <div className="flex flex-col gap-4">
              {/* PlaidLink */}
            </div>

          ):(
            <>
                <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="form-item">
                  <FormLabel className="form-label">
                    Email
                    </FormLabel>
                    <div className="flex w-full">
                      <FormControl>
                        <Input
                        placeholder="Enter your email"
                          className="input-class"
                          {...field}

                        />
                      </FormControl>
                      <FormMessage className="form-message mt-2" />
                    </div>


                </div>

               )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </>
        )}
    </section> 
  )
}
 

export default AuthForm