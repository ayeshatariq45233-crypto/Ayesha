import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Check,
  Copy,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Send,
  Share2,
} from 'lucide-react';

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'Custom Website (HTML / CSS / JS)',
  'WordPress & Elementor Website',
  'Luxury Brand Landing Page',
  'E-Commerce Storefront',
  'Responsive Redesign & Optimization',
];

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setMessage(
          `Hello Ayesha, I would like to discuss a website project inspired by "${customEvent.detail}".`
        );
        setSubmitted(false);
      }
    };
    window.addEventListener('prefill-project-inquiry', handlePrefill);
    return () =>
      window.removeEventListener('prefill-project-inquiry', handlePrefill);
  }, []);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!projectType) {
      nextErrors.projectType = 'Please select a project type.';
    }
    if (!message.trim() || message.trim().length < 12) {
      nextErrors.message =
        'Please share a few details about your vision (at least 12 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ayeshtariq45233@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = 'mailto:ayeshtariq45233@gmail.com';
    }
  };

  const mailtoFallback = `mailto:ayeshtariq45233@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${projectType}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\n${message}`
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#180909] via-[#300B10]/35 to-[#100707] py-24 lg:py-32"
    >
      {/* Subtle deep crimson lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#8B1828]/25 blur-[135px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 h-96 w-96 rounded-full bg-[#C62840]/18 blur-[135px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C62840]">
            13 · CONTACT
          </p>
          <h2
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5EDED] sm:text-4xl lg:text-[2.75rem]"
            style={{ textWrap: 'balance' }}
          >
            Let's Create Something{' '}
            <span className="text-gradient-crimson">Exceptional.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#B9A8AA]">
            Have a project, an idea, or a vision? Let's turn it into a
            beautiful digital experience.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Side: Dark Red Glossy Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C62840]/40 bg-[#4A1018] text-[#F5EDED]">
                    <Mail className="h-5 w-5 text-[#C62840]" />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-[#F5EDED]">
                      Email Ayesha
                    </p>
                    <p className="text-xs text-[#B9A8AA]">Direct Inbox</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#8B1828]/60 bg-[#100707]/85 px-3 py-1.5 text-xs font-medium text-[#F5EDED] transition-colors hover:border-[#C62840]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#C62840]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#B9A8AA]" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <a
                href="mailto:ayeshtariq45233@gmail.com"
                className="mt-4 block break-all text-sm font-medium text-[#F5EDED] hover:text-[#C62840]"
              >
                ayeshtariq45233@gmail.com
              </a>
            </div>

            <div className="luxury-gloss-card luxury-gloss-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C62840]/40 bg-[#4A1018] text-[#F5EDED]">
                  <Phone className="h-5 w-5 text-[#C62840]" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#F5EDED]">
                    Call Directly
                  </p>
                  <p className="text-xs text-[#B9A8AA]">Ayesha · Web Developer</p>
                </div>
              </div>
              <a
                href="tel:+923213745233"
                className="mt-4 block font-mono text-sm font-medium text-[#F5EDED] tabular-nums hover:text-[#C62840]"
              >
                +923213745233
              </a>
            </div>

            <div className="luxury-gloss-card rounded-2xl p-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C62840]/40 bg-[#4A1018] text-[#F5EDED]">
                  <Share2 className="h-5 w-5 text-[#C62840]" />
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#F5EDED]">
                    Connect
                  </p>
                  <p className="text-xs text-[#B9A8AA]">
                    Portfolio &amp; Social Channels
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {[
                  { name: 'GitHub', icon: Github },
                  { name: 'LinkedIn', icon: Linkedin },
                  { name: 'Portfolio', icon: Globe },
                ].map(({ name: socialName, icon: Icon }) => (
                  <a
                    key={socialName}
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopyEmail();
                    }}
                    aria-label={`${socialName} link`}
                    className="btn-luxury-outline inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium text-[#F5EDED]"
                  >
                    <Icon className="h-4 w-4 text-[#C62840]" />
                    <span>{socialName}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Glossy Crimson Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-gloss-card rounded-3xl p-7 sm:p-9 lg:col-span-7"
          >
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C62840]/50 bg-[#4A1018] text-[#F5EDED]">
                  <Check className="h-7 w-7 text-[#C62840]" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-[#F5EDED]">
                  Inquiry Ready to Send
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#B9A8AA]">
                  Thank you, <span className="text-[#F5EDED]">{name}</span>. Your
                  inquiry for{' '}
                  <span className="text-[#C62840]">{projectType}</span> has been
                  prepared. Send it via your email app or submit another note.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={mailtoFallback}
                    className="btn-luxury-crimson inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F5EDED]"
                  >
                    <Mail className="h-4 w-4" />
                    OPEN IN EMAIL APP
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="btn-luxury-outline min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wider text-[#F5EDED]"
                  >
                    NEW INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#F5EDED]"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your full name"
                      className="mt-2 min-h-[44px] w-full rounded-xl border border-[#8B1828]/50 bg-[#100707]/90 px-4 py-2.5 text-sm text-[#F5EDED] placeholder:text-[#B9A8AA]/45 focus:border-[#C62840] focus:outline-none focus:ring-2 focus:ring-[#C62840]/30"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs text-[#F5EDED]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[#F5EDED]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      className="mt-2 min-h-[44px] w-full rounded-xl border border-[#8B1828]/50 bg-[#100707]/90 px-4 py-2.5 text-sm text-[#F5EDED] placeholder:text-[#B9A8AA]/45 focus:border-[#C62840] focus:outline-none focus:ring-2 focus:ring-[#C62840]/30"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs text-[#F5EDED]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block text-sm font-medium text-[#F5EDED]"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="mt-2 min-h-[44px] w-full rounded-xl border border-[#8B1828]/50 bg-[#100707]/90 px-4 py-2.5 text-sm text-[#F5EDED] focus:border-[#C62840] focus:outline-none focus:ring-2 focus:ring-[#C62840]/30"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#180909]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#F5EDED]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message)
                        setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Share your goals, vision, or timeline..."
                    className="mt-2 w-full rounded-xl border border-[#8B1828]/50 bg-[#100707]/90 px-4 py-3 text-sm text-[#F5EDED] placeholder:text-[#B9A8AA]/45 focus:border-[#C62840] focus:outline-none focus:ring-2 focus:ring-[#C62840]/30"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs text-[#F5EDED]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-luxury-crimson inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5EDED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDED]"
                  >
                    SEND PROJECT INQUIRY
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
