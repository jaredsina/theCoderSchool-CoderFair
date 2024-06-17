import * as z from 'zod';

const createEnv = () => {
  const EnvSchema = z.object({
    API_URL: z.string(),
    ENABLE_API_MOCKING: z
      .string()
      .refine((s) => s === 'true' || s === 'false') // Checks if string is 'true' or 'false'
      .transform((s) => s === 'true') // Convert string to boolean
      .optional(), // Optional because it's only used in development
    APP_URL: z.string().optional().default('http://localhost:3000'),
    APP_MOCK_API_PORT: z.string().optional().default('8080'),
  });

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value;
    }
    return acc;
  }, {});

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided. The following variables are missing or invalid: ${Object.entries(
        parsedEnv.error.flatten().fieldErrors, // Get the invalid fields
      )
        .map(([k, v]) => `- ${k}: ${v}`) // Format the fields
        .join('\n')}`, // Join the fields with a newline
    );
  }

  return parsedEnv.data;
};

export const env = createEnv();
