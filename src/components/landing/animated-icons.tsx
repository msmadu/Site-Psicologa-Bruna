
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, MessageCircleIcon, StarIcon, ThumbsUpIcon, TwitterIcon, InstagramIcon } from './custom-icons';
import { cn } from '@/lib/utils';

const icons = [
  { icon: HeartIcon, color: 'text-red-500' },
  { icon: ThumbsUpIcon, color: 'text-blue-500' },
  { icon: StarIcon, color: 'text-yellow-500' },
  { icon: TwitterIcon, color: 'text-sky-500' },
  { icon: InstagramIcon, color: 'text-pink-500' },
  { icon: MessageCircleIcon, color: 'text-green-500' },
];

const AnimatedIcon = ({ iconData, index }: { iconData: typeof icons[0], index: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, rotate: 0 });
  const [duration, setDuration] = useState(5);

  useEffect(() => {
    setPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      rotate: Math.random() * 360,
    });
    setDuration(Math.random() * 5 + 5); // Random duration between 5 and 10 seconds
  }, []);

  const IconComponent = iconData.icon;

  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0.5 }}
      animate={{
        x: position.x,
        y: position.y,
        rotate: position.rotate,
        scale: 1,
        opacity: 1
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={cn("absolute", `top-1/${index % 2 === 0 ? 2 : 3} left-1/${index % 3 === 0 ? 3 : 4}`)}
      style={{
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      }}
    >
      <IconComponent className={cn("w-8 h-8", iconData.color)} />
    </motion.div>
  );
};


export default function AnimatedIcons() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
            {icons.map((icon, index) => (
                <AnimatedIcon key={index} iconData={icon} index={index} />
            ))}
        </div>
    </div>
  );
}
