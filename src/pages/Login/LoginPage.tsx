import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Form } from '../../components/ui/Form';
import {
  FormItem,
  FormItemLabel,
  FormItemContent,
  FormItemError,
} from '../../components/ui/FormItems';

const loginSchema = z.object({
  email: z.string().email('Введите корректный email'),
  password: z.string().min(6, 'Минимум 6 символов'),
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const methods = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: LoginForm) => {
    // TODO: добавить логику авторизации через Firebase
    console.log(data);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 32 }}>
      <h2 style={{ marginBottom: 24 }}>Вход</h2>
      <Form methods={methods} onSubmit={onSubmit}>
        <FormItem asFieldset>
          <FormItemLabel htmlFor="email">Email</FormItemLabel>
          <FormItemContent>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register('email')}
              disabled={isSubmitting}
            />
          </FormItemContent>
          {errors.email && (
            <FormItemError>{errors.email.message}</FormItemError>
          )}
        </FormItem>
        <FormItem asFieldset>
          <FormItemLabel htmlFor="password">Пароль</FormItemLabel>
          <FormItemContent>
            <Input
              id="password"
              type="password"
              placeholder="Пароль"
              {...register('password')}
              disabled={isSubmitting}
            />
          </FormItemContent>
          {errors.password && (
            <FormItemError>{errors.password.message}</FormItemError>
          )}
        </FormItem>
        <Button
          type="submit"
          style={{ width: '100%', marginTop: 24 }}
          disabled={isSubmitting}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};
