'use client';

import 'reflect-metadata';
import { useEffect } from 'react';
import { MockAuthRepository } from '@/auth/infraestructure/mock-auth.repository';

export default function ClientLayoutComponent(): null {
  useEffect(() => {
    new MockAuthRepository();
  }, []);

  return null;
}
