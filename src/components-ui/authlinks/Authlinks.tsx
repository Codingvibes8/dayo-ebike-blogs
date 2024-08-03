
import React from 'react';
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";






const AuthLinks = () => {
    // const {isAuthenticated,getUser} = getKindeServerSession();
    // const isUserAuthenticated = await isAuthenticated();
    //
    //
    // const user = await getUser();
    //
    // console.log(user);
  return (

    <div className='flex flex-col items-center justify-center gap-4'>
        <button className={'px-4 py-1 rounded-xl bg-lime-500'}>
            <LoginLink>Sign in</LoginLink>
        </button>

      <RegisterLink>Sign up</RegisterLink>

      <LogoutLink>Log out</LogoutLink>
    </div>
  );
};

export default AuthLinks;
