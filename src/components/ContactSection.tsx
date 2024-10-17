export default function ContactSection() {
    return (
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Contact Me</h2>
          <h3 className="text-2xl mb-8 text-center">Questions, Thoughts, Or Just Want To Say Hello?</h3>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Enter your email address" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Enter your subject" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Enter your message" rows={6} className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    )
  }