import {FC, memo} from 'react';

const ContactForm: FC = memo(() => {
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form
      action="https://formsubmit.co/mattaparthisivateja@gmail.com"
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      method="POST">

      {/* Hidden FormSubmit Settings */}

      <input type="hidden" name="_captcha" value="false" />

      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Contact"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      <input
        type="hidden"
        name="_next"
        value="https://portfolio-8wrm.vercel.app"
      />

      {/* Name */}

      <input
        className={inputClasses}
        name="name"
        placeholder="Name"
        required
        type="text"
      />

      {/* Email */}

      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        placeholder="Email"
        required
        type="email"
      />

      {/* Message */}

      <textarea
        className={inputClasses}
        maxLength={500}
        name="message"
        placeholder="Message"
        required
        rows={6}
      />

      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>

    </form>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;