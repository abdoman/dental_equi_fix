import { useState, useCallback, useRef } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myekyrpa';

interface UseFormspreeOptions {
  formType?: string;
}

export function useFormspree({ formType }: UseFormspreeOptions = {}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const submit = useCallback(
    async (formData: FormData) => {
      setStatus('submitting');
      setErrorMessage('');

      if (formType) {
        formData.append('_subject', `New ${formType} submission — XraySensorFix.com`);
      }

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          setStatus('success');
          if (resetTimer.current) clearTimeout(resetTimer.current);
          resetTimer.current = setTimeout(() => setStatus('idle'), 8000);
        } else {
          const data = await response.json().catch(() => null);
          setErrorMessage(data?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
          setStatus('error');
        }
      } catch {
        setErrorMessage('Network error. Please check your connection and try again.');
        setStatus('error');
      }
    },
    [formType],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setErrorMessage('');
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  return { status, errorMessage, submit, reset };
}
