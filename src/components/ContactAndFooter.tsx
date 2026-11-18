import {useState, type FormEvent} from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Send,
} from 'lucide-react';
import {portfolioData} from '../data/portfolioData';
import ThemeToggle, {type ThemeMode} from './ThemeToggle';

interface ContactAndFooterProps {
  theme: ThemeMode;
  onThemeChange: (nextTheme: ThemeMode) => void;
}

export default function ContactAndFooter({
  theme,
  onThemeChange,
}: ContactAndFooterProps) {
  const {contact, identity} = portfolioData;
  const [copied, setCopied] = useState(false);
  const [activeLinkNotice, setActiveLinkNotice] = useState<string | null>(null);

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.emailPlaceholder);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSocialClick = (id: string, url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveLinkNotice((prev) => (prev === id ? null : id));
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !messageText.trim()) {
      setFormFeedback('Please fill in your name, email, and message before continuing.');
      return;
    }

    if (!contact.isEmailPlaceholder && contact.emailPlaceholder.includes('@')) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName.trim()}`);
      const body = encodeURIComponent(
        `From: ${senderName.trim()} (${senderEmail.trim()})\n\n${messageText.trim()}`
      );
      window.location.href = `mailto:${contact.emailPlaceholder}?subject=${subject}&body=${body}`;
      setFormFeedback('Opening your default email client with your drafted message.');
      return;
    }

    setFormFeedback(
      'Draft prepared locally. Replace the email placeholder in src/data/portfolioData.ts to connect direct mailto delivery.'
    );
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
      <section
        id="contact"
        className="border-b border-zinc-200 bg-white py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#08080A] sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Contact Details & Editable Placeholders */}
            <div className="lg:col-span-6">
              <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
                Get in Touch
              </p>
              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
                style={{textWrap: 'balance'}}
              >
                {contact.heading}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA] sm:text-base">
                {contact.subheading}
              </p>

              {/* Email Copy Box */}
              <div className="mt-8 rounded-xl border border-zinc-200 bg-[#F8F9FB] p-5 dark:border-white/10 dark:bg-[#101114]">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-zinc-500 dark:text-[#A1A1AA]">
                      Email Placeholder
                    </p>
                    <p className="mt-1 truncate font-mono text-sm text-[#09090B] dark:text-[#F5F5F5]">
                      {contact.emailPlaceholder}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs font-medium text-[#09090B] transition-colors hover:border-[#315BFF] dark:border-white/15 dark:bg-[#050505] dark:text-[#F5F5F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#3F6212] dark:text-[#C6FF3A]" />
                        <span className="font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A]">
                          Copied
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-zinc-500 dark:text-[#A1A1AA]" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Editable Social / Profile Links */}
              <div className="mt-6 divide-y divide-zinc-200 border-t border-b border-zinc-200 dark:divide-white/10 dark:border-white/10">
                {contact.links.map((link) => (
                  <div key={link.id} className="py-3.5">
                    <button
                      type="button"
                      onClick={() => handleSocialClick(link.id, link.url)}
                      className="flex w-full items-center justify-between gap-4 rounded-sm py-1 text-left transition-colors hover:text-[#2449D8] dark:hover:text-[#315BFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
                    >
                      <div>
                        <span className="text-sm font-medium text-[#09090B] dark:text-[#F5F5F5]">
                          {link.label}
                        </span>
                        <span className="ml-3 font-mono text-xs text-zinc-500 dark:text-[#A1A1AA]">
                          {link.url || link.handlePlaceholder}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 dark:text-[#A1A1AA]" />
                    </button>

                    {activeLinkNotice === link.id && (
                      <p className="mt-2 font-mono text-[11px] font-medium text-[#3F6212] dark:text-[#C6FF3A]">
                        Editable placeholder — add your real {link.label} URL in src/data/portfolioData.ts.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quick Contact Composer */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleSendMessage}
                className="rounded-xl border border-zinc-200 bg-[#F8F9FB] p-6 dark:border-white/10 dark:bg-[#101114] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-white/10">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#09090B] dark:text-[#F5F5F5]">
                      Send a Note
                    </h3>
                    <p className="mt-0.5 text-xs text-zinc-600 dark:text-[#A1A1AA]">
                      Compose a direct message or collaboration inquiry.
                    </p>
                  </div>
                  <Mail className="h-4 w-4 text-[#2449D8] dark:text-[#315BFF]" />
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-zinc-600 dark:text-[#A1A1AA]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Enter your name"
                      className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-[#09090B] placeholder:text-zinc-400 focus:border-[#315BFF] focus:outline-none dark:border-white/10 dark:bg-[#050505] dark:text-[#F5F5F5] dark:placeholder:text-[#A1A1AA]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-zinc-600 dark:text-[#A1A1AA]"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-[#09090B] placeholder:text-zinc-400 focus:border-[#315BFF] focus:outline-none dark:border-white/10 dark:bg-[#050505] dark:text-[#F5F5F5] dark:placeholder:text-[#A1A1AA]/50"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-xs text-zinc-600 dark:text-[#A1A1AA]"
                      >
                        Message
                      </label>
                      <span className="font-mono text-[11px] text-zinc-500 dark:text-[#A1A1AA] tabular-nums">
                        {messageText.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Share what you'd like to connect about..."
                      className="mt-1.5 w-full resize-none rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-[#09090B] placeholder:text-zinc-400 focus:border-[#315BFF] focus:outline-none dark:border-white/10 dark:bg-[#050505] dark:text-[#F5F5F5] dark:placeholder:text-[#A1A1AA]/50"
                    />
                  </div>

                  {formFeedback && (
                    <p className="rounded-lg border border-[#315BFF]/40 bg-[#315BFF]/10 px-3.5 py-2.5 text-xs text-[#09090B] dark:text-[#F5F5F5]">
                      {formFeedback}
                    </p>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#315BFF] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2449D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF] dark:focus-visible:ring-[#C6FF3A]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Contact Me</span>
                    </button>

                    {(senderName || senderEmail || messageText || formFeedback) && (
                      <button
                        type="button"
                        onClick={() => {
                          setSenderName('');
                          setSenderEmail('');
                          setMessageText('');
                          setFormFeedback(null);
                        }}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-xs font-medium text-zinc-600 transition-colors hover:border-[#315BFF] hover:text-[#09090B] dark:border-white/15 dark:bg-[#050505] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5] whitespace-nowrap shrink-0"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Minimal Footer with Theme Switcher & Back-to-Top */}
      <footer className="bg-[#F8F9FB] py-10 transition-colors duration-200 dark:bg-[#050505]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-sm font-semibold text-[#09090B] dark:text-[#F5F5F5]">
              {identity.name}
            </p>
            <p className="mt-1 text-xs text-zinc-600 dark:text-[#A1A1AA]">
              © {identity.copyrightYear} {identity.name}. Built with focus, curiosity, and modular craft.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-zinc-600 dark:text-[#A1A1AA]">
            <a
              href="#home"
              className="transition-colors hover:text-[#09090B] dark:hover:text-[#F5F5F5]"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-[#09090B] dark:hover:text-[#F5F5F5]"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-[#09090B] dark:hover:text-[#F5F5F5]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-[#09090B] dark:hover:text-[#F5F5F5]"
            >
              Projects
            </a>
            <a
              href="#journey"
              className="transition-colors hover:text-[#09090B] dark:hover:text-[#F5F5F5]"
            >
              Journey
            </a>

            <ThemeToggle theme={theme} onChange={onThemeChange} compact />

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-[#315BFF] hover:text-[#09090B] dark:border-white/10 dark:bg-[#101114] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315BFF]"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
