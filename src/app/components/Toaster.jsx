"use client";
import React, { useState, useEffect } from "react";
import * as Toast from "@radix-ui/react-toast";
import clsx from "clsx";

const Toaster = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); //

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root open={open} onOpenChange={setOpen} duration={15000} className={clsx("justify-between p-4 gap-3 text-center border-solid border-2  flex min-w-min h-14 data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut bg-white border-black text-black")}>
        <Toast.Description className="flex justify-center items-center text-sm">
          <p>Click the link to see project</p>
        </Toast.Description>
        <Toast.Action asChild altText="Close">
          <button className="text-sm" onClick={() => setOpen(false)}>
            X
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

export default Toaster;
