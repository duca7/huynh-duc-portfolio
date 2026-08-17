'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import {
  contactSchema,
  type ContactFormValues,
} from '@/lib/validations/contact';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClasses =
    'w-full rounded-xl border-2 border-border-strong bg-background px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:shadow-brutal-sm';

  return (
    <section
      id='contact'
      className='border-t-2 border-border-strong py-24 sm:py-28'
    >
      <Container className='flex flex-col gap-12'>
        <Reveal>
          <SectionHeading
            eyebrow='Get In Touch'
            title="Let's build something great together."
            description='Have a project in mind or just want to say hi? My inbox is always open.'
          />
        </Reveal>

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-5'>
          <Reveal delay={0.05} className='lg:col-span-2'>
            <div className='flex flex-col gap-4'>
              <a
                href={`mailto:${siteConfig.email}`}
                className='flex items-center gap-3 rounded-xl border-2 border-border-strong bg-surface p-4 shadow-brutal-sm transition-transform hover:-translate-y-0.5'
              >
                <Mail size={18} className='text-accent-2' />
                <span className='text-sm font-semibold'>
                  {siteConfig.email}
                </span>
              </a>
              <div className='flex items-center gap-3 rounded-xl border-2 border-border-strong bg-surface p-4 shadow-brutal-sm'>
                <MapPin size={18} className='text-accent-2' />
                <span className='text-sm font-semibold'>
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className='lg:col-span-3'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className='flex flex-col gap-5 rounded-2xl border-2 border-border-strong bg-surface p-6 shadow-brutal sm:p-8'
            >
              <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                <div className='flex flex-col gap-1.5'>
                  <label htmlFor='name' className='text-sm font-bold'>
                    Name
                  </label>
                  <input
                    id='name'
                    className={inputClasses}
                    placeholder='Jane Doe'
                    aria-invalid={!!errors.name}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className='text-xs font-medium text-red-500'>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className='flex flex-col gap-1.5'>
                  <label htmlFor='email' className='text-sm font-bold'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    className={inputClasses}
                    placeholder='jane@example.com'
                    aria-invalid={!!errors.email}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className='text-xs font-medium text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='message' className='text-sm font-bold'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows={5}
                  className={cn(inputClasses, 'resize-none')}
                  placeholder='Tell me about your project...'
                  aria-invalid={!!errors.message}
                  {...register('message')}
                />
                {errors.message && (
                  <p className='text-xs font-medium text-red-500'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className='flex items-center gap-4'>
                <Button type='submit' disabled={isSubmitting} className='w-fit'>
                  {isSubmitting ? (
                    <Loader2 size={18} className='animate-spin' />
                  ) : (
                    <Send size={18} />
                  )}
                  Send Message
                </Button>

                {status === 'success' && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2'
                  >
                    <CheckCircle2 size={16} /> Message sent!
                  </motion.span>
                )}
                {status === 'error' && (
                  <span className='text-sm font-semibold text-red-500'>
                    Something went wrong. Try again.
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
