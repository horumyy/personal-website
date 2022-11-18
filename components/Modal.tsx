import { useRef, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import emailjs from "emailjs-com";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setIsOpen }: Props) {
  let firstInputRef = useRef(null);
  let labelClass = "font-thin text-sm";
  let inputClass =
    "focus:outline-none  border-b placeholder:font-thin font-extralight mb-1";

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result: any) => {
        alert("Message sent successfully");
      },
      (error: any) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        initialFocus={firstInputRef}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="max-w-sm rounded-3xl bg-white p-4">
                <Dialog.Title className="select-none text-[1.7rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600 text-center leading-11">
                  Send me a message
                </Dialog.Title>
                <Dialog.Description className="select-none text-xs font-thin mb-5 text-center">
                  I'll get back to you as soon as possible.
                </Dialog.Description>

                <form className="flex flex-col gap-1" onSubmit={handleOnSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="name"
                      placeholder="My name is..."
                      name="name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="duser@gmail.com"
                      name="email"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Hello, I wanted to tell you that..."
                      className={inputClass}
                    />
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <button
                      type="submit"
                      onClick={() => setIsOpen(false)}
                      className=" text-white select-none px-[14px] py-[6px] rounded-md transition-all duration-500 bg-gradient-to-tl to-[#9C89B8] via-[#F0A6CA] from-[#DEC0F1] bg-size-200 bg-pos-0 hover:bg-pos-100"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
