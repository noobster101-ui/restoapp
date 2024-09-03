import { Metadata } from 'next';
import { User, Lock } from 'lucide-react';
import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page',
  icons: {
    icon: '/favicon.ico',
  },
};

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center loginBox">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full md:mr-8 loginCard">
            <div className="text-center mb-6">
              <Image width={50} height={20} src="/logo.png" alt="Logo" className="mx-auto img-fluid" />
              <br/>
              <h2 className="text-2xl font-bold">Login form</h2>
              <p className="text-gray-600 text-sm py-4">Lorem Ipsum has been the industrys standard dummy text ever since.</p>
            </div>
            <form className="formBox">
              <div className="mb-4">
                <Label htmlFor="username" className='mb-1 text-sm pl-1'>Username</Label>
                <Input id="username" type="text" placeholder="Enter username" icon={User} className='rounded-full' />
              </div>
              <div className="mb-4">
                <Label htmlFor="password" className='mb-1 text-sm pl-1'>Password</Label>
                <Input id="password" type="password" placeholder="Enter password" icon={Lock} className='rounded-full' />
              </div>
              <div className="my-2 text-left pl-1">
                <a href="#" className="text-theme-500 font-bold text-sm">Forgot password?</a>
              </div>
              <Button type="submit" className="w-full bg-theme-500 hover:bg-theme-600 rounded-full mb-3">Running order</Button>
            </form>
            <div className="my-5 text-center">
              <a href="#" className="text-gray-400 text-sm">End user agreement</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
