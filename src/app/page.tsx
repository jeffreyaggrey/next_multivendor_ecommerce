import ThemeToggle from '@/components/shared/theme-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='p-5'>
      <div className='w-100 gap-x-5 flex justify-end'>
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className='font-bold text-blue-500 font-barlow'>
        Welcome to the Course
      </h1>
    </div>
  );
}
