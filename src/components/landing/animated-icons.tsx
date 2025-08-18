
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ThumbsUp, Star, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [
  { icon: Heart, color: 'text-red-500' },
  { icon: ThumbsUp, color: 'text-blue-500' },
  { icon: Star, color: 'text-yellow-500' },
  { icon: Twitter, color: 'text-sky-500' },
  { icon: Instagram, color: 'text-pink-500' },
  { icon: MessageCircle, color: 'text-green-500' },
];

const AnimatedIcon = ({ iconData }: { iconData: typeof icons[0] }) => {
  const [style, setStyle] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setStyle({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      });
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  
  const duration = Math.random() * 5 + 5;
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  const rotate = Math.random() * 360;

  const IconComponent = iconData.icon;

  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0, scale: 0.8, opacity: 0.5 }}
      animate={{
        x,
        y,
        rotate,
        scale: 1,
        opacity: 1
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={cn("absolute")}
      style={style}
    >
      <IconComponent className={cn("w-8 h-8", iconData.color)} />
    </motion.div>
  );
};


export default function AnimatedIcons() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
            {icons.map((icon, index) => (
                <AnimatedIcon key={index} iconData={icon} />
            ))}
        </div>
    </div>
  );
}
