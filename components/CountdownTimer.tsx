import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-11T20:00:00+05:30').getTime(); // 8:00 PM IST

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 leading-none"
        style={{ lineHeight: '0.85' }}
      >
        {formatNumber(value)}
      </motion.div>
      <div className="font-inter text-xs md:text-sm text-white/60 uppercase tracking-widest mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin self-start mt-2 leading-none">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin self-start mt-2 leading-none">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-white/40 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin self-start mt-2 leading-none">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}