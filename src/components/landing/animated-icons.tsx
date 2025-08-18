'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11 } from './custom-icons';


const icons = [
 { icon: Icon1 },
 { icon: Icon2 },
 { icon: Icon3 },
 { icon: Icon4 },
 { icon: Icon5 },
 { icon: Icon6 },
 { icon: Icon7 },
 { icon: Icon8 },
 { icon: Icon9 },
 { icon: Icon10 },
 { icon: Icon11 },
];

const AnimatedIcon = ({ iconData }: { iconData: {icon: React.ElementType} }) => {
  const [style, setStyle] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // This ensures this code runs only on the client
      setStyle({
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
      });
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  
  const duration = Math.random() * 10 + 10; // Faster animation
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
      className={cn("absolute")} // Keep this to allow absolute positioning
      style={style}
    >
      <IconComponent className={cn("w-12 h-12")} />
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
