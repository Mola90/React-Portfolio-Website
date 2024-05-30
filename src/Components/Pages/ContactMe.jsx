import { useState } from 'react';


function ContactMe (){

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'email') {
          setEmail(value);
        } else if (name === 'fullName') {
          setFullName(value);
        } else if (name === 'message') {
          setMessage(value);
        } else if (name === 'subject') {
          setSubject(value);
        }
      };

 

    function formSubmit(e){
        e.preventDefault();
        setEmail(" ");
        setFullName(" ");
        setMessage(" ");
        setSubject(" ");
        alert(`Form submitted`);

    }


    return(
<div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={formSubmit}>
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="name"
          value={fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          value={email}
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="subject"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Subject
        </label>
        <input
          value={subject}
          onChange={handleInputChange}
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          value={message}
          onChange={handleInputChange}
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
);
}

export default ContactMe;