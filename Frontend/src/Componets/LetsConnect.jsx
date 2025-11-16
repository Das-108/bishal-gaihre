import React from 'react'

const LetsConnect = () => {
  return (
    <section
  id="contact"
  class="py-24  from-accent/5 to-secondary/10 
         dark:from-accent-dark/5 dark:to-secondary-dark/10"
>
  <div class="max-w-2xl mx-auto px-8">
    <div class="text-center mb-12">
      <h2 class="font-heading text-4xl font-medium mb-4">Let's Connect</h2>
      <p class="text-xl text-gray-600 dark:text-gray-400">
        Ready to create something meaningful together?
      </p>
    </div>

    <form class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full px-6 py-4 bg-white dark:bg-gray-800 
                 border border-border-light dark:border-border-dark 
                 rounded-xl focus:outline-none focus:ring-2 
                 focus:ring-accent dark:focus:ring-accent-dark 
                 transition-all"
        />

        <input
          type="email"
          placeholder="Your Email"
          class="w-full px-6 py-4 bg-white dark:bg-gray-800 
                 border border-border-light dark:border-border-dark 
                 rounded-xl focus:outline-none focus:ring-2 
                 focus:ring-accent dark:focus:ring-accent-dark 
                 transition-all"
        />
      </div>

      <textarea
        rows="6"
        placeholder="Your Message"
        class="w-full px-6 py-4 bg-white dark:bg-gray-800 
               border border-border-light dark:border-border-dark 
               rounded-xl focus:outline-none focus:ring-2 
               focus:ring-accent dark:focus:ring-accent-dark 
               transition-all resize-none"
      ></textarea>

      <div class="text-center">
        <button
          type="submit"
          class="px-8 py-4 bg-accent dark:bg-accent-dark 
                 text-white dark:text-dark-bg rounded-xl 
                 hover:shadow-lg hover:glow transition-all"
        >
          Send Message
        </button>

        <p class="mt-4 text-gray-600 dark:text-gray-400">
          or reach me at
          <a
            href="mailto:hello@bishalgaihre.com"
            class="text-accent dark:text-accent-dark hover:underline"
          >
            hello@bishalgaihre.com
          </a>
        </p>
      </div>
    </form>
  </div>
</section>

  )
}

export default LetsConnect