
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <div className="glass rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-background border border-border"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-background border border-border"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-lg bg-background border border-border"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light dark:hover:bg-accent-dark text-white py-3 px-6 rounded-lg transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
