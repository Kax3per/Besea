import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const LoaderScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [showCookiePopup, setShowCookiePopup] = useState(false)

  // inicjalizacja particles
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  // sprawdzenie cookie przy ładowaniu
  useEffect(() => {
    const visited = document.cookie.includes("visited=true")
    if (visited) {
      setIsFirstVisit(false)
      startLoading()
    } else {
      setIsFirstVisit(true)
      setShowCookiePopup(true)
    }
  }, [])

  const startLoading = () => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 80)
  }

  const handleCookieChoice = (accepted) => {
    setShowCookiePopup(false)
    if (accepted) document.cookie = "visited=true; max-age=31536000; path=/"
    startLoading()
  }

  if (showCookiePopup) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center"
        >
          <div className="text-5xl mb-4">🍪</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            We value your privacy
          </h2>
          <p className="text-gray-600 mb-6">
            We use cookies to improve your experience. Do you accept?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleCookieChoice(true)}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition"
            >
              Accept
            </button>
            <button
              onClick={() => handleCookieChoice(false)}
              className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-xl shadow hover:bg-gray-300 transition"
            >
              Decline
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 flex flex-col justify-between items-center z-50 overflow-hidden">
      {/* Particles parallax background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          detectRetina: true,
          fpsLimit: 120,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 3 } },
            size: { value: { min: 1, max: 10 }, animation: { enable: true, speed: 20 } },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", outModes: "out" }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 60, smooth: 10 } },
              onClick: { enable: true, mode: "push" },
              resize: { enable: true }
            },
            modes: {
              grab: { distance: 400, links: { opacity: 1 } },
              push: { quantity: 4 }
            }
          }
        }}
      />

      {/* Treść loadera */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center flex-grow text-center px-6 z-10"
      >
        {isFirstVisit ? (
          <>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
              🌱 Welcome to Besea!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              We’re glad you’re here. Explore our sustainable vision and solutions.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
              🌍 News
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Did you know? Honey never spoils and can last thousands of years.
            </p>
          </>
        )}
      </motion.div>

      {/* Loader/procent */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full flex justify-center mb-12 z-10"
      >
        {progress < 100 ? (
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90 drop-shadow-xl">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#10b981"
                strokeWidth="10"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56 - (progress / 100) * (2 * Math.PI * 56)}
                className="transition-all duration-200"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-extrabold text-gray-700 text-2xl drop-shadow">
              {progress}%
            </div>
          </div>
        ) : (
          <motion.button
            onClick={onFinish}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative h-[80px] w-64 overflow-hidden border border-[#00A84F] bg-white px-3 shadow-2xl transition-all 
                       before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#00A84F] 
                       before:transition-all before:duration-500 hover:before:w-full"
          >
            <span className="relative z-10 text-[#00A84F] group-hover:text-white font-semibold text-[30px]">
              Go To Besea
            </span>
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

export default LoaderScreen
