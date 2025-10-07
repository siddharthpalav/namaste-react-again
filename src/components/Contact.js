import { useEffect } from "react";

const Contact = () => {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Namaste React OP from Contact Component");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("UseEffect returned");
  //   };
  // }, []);

  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form>
        <input
          type='text'
          className='border border-black p-2 m-2'
          placeholder='name'
        />
        <input
          type='text'
          className='border border-black p-2 m-2'
          placeholder='message'
        />
        <button className='border border-black p-2 m-2 rounded-xl'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
