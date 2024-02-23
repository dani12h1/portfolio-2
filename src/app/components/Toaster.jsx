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
          <Toast.Root open={open} onOpenChange={setOpen} duration={5000} className={clsx("justify-between p-4 gap-3 border-solid border-2  flex min-w-min h-14  bg-white border-black text-black")}>
            <Toast.Description className="flex justify-center items-center text-sm">
              <p>Click on the images to enlarge</p>
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
