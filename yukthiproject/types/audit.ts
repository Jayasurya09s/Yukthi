import { z } from 'zod';
import { auditSchema } from '@/lib/validations/audit-schema';

export type AuditInput = z.infer<typeof auditSchema>;
