import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 500);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="loading-screen"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1B284F', // NTUST primary color
          }}
        >
          <div className="text-center">
            <motion.img 
              src="https://www.secretariat.ntust.edu.tw/var/file/63/1063/img/341961222.png"
              alt="國立台灣科技大學校徽"
              className="mb-4"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{ 
                width: '180px',
                height: 'auto',
              }}
            />
            
            <h2 className="text-white mb-4 fw-bold">{t('loading.welcome')}</h2>
            
            <div className="d-flex justify-content-center">
              <div className="progress" style={{ height: '12px', width: '350px', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <motion.div
                  className="progress-bar bg-warning"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                  }}
                ></motion.div>
              </div>
            </div>
            
            <div className="mt-3 text-white">{progress}%</div>
            
            <div className="mt-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="spinner-grow text-warning mx-1"
                style={{ width: '1rem', height: '1rem' }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.2,
                }}
                className="spinner-grow text-warning mx-1"
                style={{ width: '1rem', height: '1rem' }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.4,
                }}
                className="spinner-grow text-warning mx-1"
                style={{ width: '1rem', height: '1rem' }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}