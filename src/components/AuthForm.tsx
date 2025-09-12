'use client';
import Image from "next/image"
import Link from "next/link"
import { userAgent } from "next/server"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { set, z } from "zod"
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
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { sign } from "crypto";


const AuthForm = ({type}: { type: string }) => {
  const [user, setUser] = useState (null);
  const [isloading, setisLoading] = useState(false);
  const formSchema = authFormSchema(type);

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    setisLoading(true)
    console.log(values)
    setisLoading(false)

  }

  return (
  <section className='authform'>
    <header className="flex flex-col gap-5 md:gap-8 mt-5">
       <Link href="/" className="cursor-pointer flex items-center gap-3 px-4 left-0">
                    <Image 
                        src="/icons/logo.svg"
                        width={40}
                        height={40}
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

        <div className="flex flex-col gap-1">
              {/* PlaidLink */}
            </div>

          ):(
            <>
                <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  {type==='sign-up' &&(
                    <>
                   <div className="flex gap-6"> 
                    <CustomInput
                 control={form.control} name='firstName' label='First Name' placeholder='Enter your first name'
                 />   
                 <CustomInput
                 control={form.control} name='lastName' label='Last Name' placeholder='Enter your first name'
                 /></div>
                 <CustomInput
                 control={form.control} name='address' label='Address' placeholder='Enter your specfic address'
                 />
                 <div className="flex gap-6"> 
                 <CustomInput
                 control={form.control} name='state' label='State' placeholder='Example: Addis Ababa'
                 />
                 <CustomInput
                 control={form.control} name='postalCode' label='postalCode' placeholder='Example:1234'
                 />
                 </div>
                 <div className="flex gap-6"> 
                 <CustomInput
                 control={form.control} name='dateOfBirth' label='Date pf birth' placeholder='YYYY-MM-DD'
                 />
                 <CustomInput
                 control={form.control} name='ssn' label='SSN' placeholder='Example:123'
                 />
                 </div>
                    </>
                  )}
                  <CustomInput
                 control={form.control} name='email' label='Email' placeholder='Enter your email'
                 />              
                  <CustomInput
                 control={form.control} name='password' label='password' placeholder='please Enter your password'
                 />
                 

            <div className="flex flex-col gap-4">
            <Button type="submit" className="form-btn" disabled={isloading}>
              {isloading ? (
              <>
              <Loader2 size={20}className="animate-spin mr-2"/>&nbsp;
              Loading...
              </>
            ):type==='sign-in' ?
            "sign In":"sign-up"
          } 
          </Button>
          </div>


          </form>
        </Form>
        <footer className="flex justify-center gap-3 mt-3">
          <p className="text-14 font-normal text-gray-600 pt-1">
            {type==='sign-in'?
          "Don't have an account?"
          :"Already have an account?"}            
          </p>
            <Link  className="text-blue-500 " href={type==='sign-in'?'/sign-up':'/sign-in'} >
              {type==='sign-in'?'Sign up':'Sign in'}  
            </Link>
        </footer>
      </>
        )}
    </section> 
  )
}
 

export default AuthForm