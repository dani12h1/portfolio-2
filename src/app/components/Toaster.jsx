"use client";
import React, { useState, useEffect } from "react";
import * as Toast from "@radix-ui/react-toast";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

const Toaster = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      <Toast.Provider swipeDirection="right">
        {open && (
          <Toast.Root open={open} onOpenChange={setOpen} duration={5000} className={clsx("bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut")}>
            <Toast.Description className="flex justify-center items-center text-sm">
              <p>Click on the images to zoom</p>
            </Toast.Description>
            <Toast.Action asChild altText="Close">
              <button className="text-sm" onClick={() => setOpen(false)}>
                X
              </button>
            </Toast.Action>
          </Toast.Root>
        )}
        <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
    </AnimatePresence>
  );
};

export default Toaster;
