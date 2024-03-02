'use client'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Component() {
  const { data: session } = useSession()
  if (session?.user) {
    return (
        
      <div className=" xl:flex gap-4 mt-5 xl:gap-0 xl:mt-0 ">
        Signed in as {session.user.email} <br />
        <button className="mt-4 xl:mt-0 flex xl:ml-3 xl:gap-0 gap-3"  onClick={() => signOut()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg> SignOut
</button>
      </div>
    )
  }
  return (
    <>

      <button className="mt-4 xl:mt-0 flex xl:gap-0 gap-3 " onClick={() => signIn()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>
SignIn

</button>
    </>
  )
}