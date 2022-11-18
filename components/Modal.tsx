import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setIsOpen }: Props) {
  let firstInputRef = useRef(null);
  let labelClass = "font-thin text-sm";
  let inputClass =
    "focus:outline-none  border-b placeholder:font-thin font-extralight mb-1";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

  const handleOnSubmit = (e: any) => {
    document.querySelector("#submit")?.setAttribute("disabled", "disabled");
    e.preventDefault();
    if (name && email && message) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then(
          (result: any) => {
            Swal.fire({
              icon: "success",
              title: "Your message has been sent!",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
            Swal.fire({ icon: "error", title: "Oops...", text: error.text });
          }
        )
        .finally(() => {
          setIsOpen(false);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields",
        iconColor: "#e3bfd4",
        confirmButtonColor: "#e3bfd4",
      });
      setIsOpen(true);
      // activate button
      document.querySelector("#submit")?.removeAttribute("disabled");
    }
  };

  return (
    <div
      className={`relative z-50  animate-fade-in ${
        isOpen ? "block" : "hidden"
      } `}
      onClick={() => setIsOpen(false)}
    >
      <div className="fixed inset-0  bg-black/30" aria-hidden="true" />
      <div className="fixed  inset-0 z-[60]  overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center">
          <div
            className="max-w-sm rounded-3xl z-[60] bg-white p-4 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="select-none text-[1.7rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-pink-300 to-blue-600 text-center leading-11">
              Send me a message
            </div>
            <div className="select-none text-xs font-thin mb-5 text-center">
              I'll get back to you as soon as possible.
            </div>

            <form className="flex flex-col gap-1" onSubmit={handleOnSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello, I wanted to tell you that..."
                  className={inputClass}
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  id="submit"
                  type="submit"
                  className=" text-white select-none px-[14px] py-[6px] rounded-md transition-all duration-500 bg-gradient-to-tl to-[#9C89B8] via-[#F0A6CA] from-[#DEC0F1] bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
