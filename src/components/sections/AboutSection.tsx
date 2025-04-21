import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import { useScrollAnimation2 } from "@/hooks/useScrollAnimation2";

const values = [
  {
    title: "Innovation",
    description:
      "We're constantly pushing the boundaries of what's possible with cloud calling technology.",
  },
  {
    title: "Reliability",
    description:
      "Our platform is built for 99.99% uptime, ensuring your business communications never stop.",
  },
  {
    title: "Customer-Centric",
    description:
      "Everything we do is focused on helping our customers succeed.",
  },
];

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation2();

  return (
    <section
      id="about"
      className="py-10 sm:py-16 relative bg-[radial-gradient(ellipse_at_top,_#1e1d4b_0%,_#000_100%)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6 rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            <div className="rounded-full px-4 bg-[#1e1d4b] py-1">
              <GradientText className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                About Us
              </GradientText>
            </div>
          </div>

          <p className="mt-1 text-3xl font-sans font-extrabold text-white sm:text-4xl lg:text-5xl">
            Why choose <GradientText>Alura</GradientText>
          </p>
          <p className="max-w-3xl mt-5 mx-auto font-inter text-lg text-gray-300">
            We're on a mission to transform how businesses connect with their
            customers through cloud-based calling solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center"
        >
          <div>
            <div className="prose prose-lg text-gray-300 max-w-none font-inter">
              <p>
                Founded in 2021, Alura Calling System set out to solve the
                common frustrations businesses face with traditional call center
                solutions: complex setups, expensive hardware, and inflexible
                systems.
              </p>
              <p className="mt-4">
                Our cloud-based platform integrates with leading technologies
                like Twilio and VAPI to provide enterprise-grade calling
                capabilities to businesses of all sizes. By focusing on user
                experience and cutting-edge technology, we've created a system
                that's both powerful and easy to use.
              </p>
              <p className="mt-4">
                What sets us apart is our commitment to continuous innovation
                and customer success. Our team of experts work closely with
                customers to ensure they get the most out of our platform.
              </p>

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl font-bold text-white mt-8"
              >
                Our values
              </motion.h3>
              <ul className="mt-4 space-y-3">
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <p className="ml-3 text-base text-gray-300">
                      <strong className="text-white">{value.title}:</strong>{" "}
                      {value.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto shadow-xl rounded-lg overflow-hidden">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full aspect-video bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-70"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13ZM18 18H6V17.01C6.2 16.29 9.3 15 12 15C14.7 15 17.8 16.29 18 17V18Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="4"
                        y1="12"
                        x2="20"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7B5FFA" />
                        <stop offset="1" stopColor="#9D5CFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tl from-secondary-900/80 to-transparent"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              </motion.div>
              <motion.div
                className="absolute -bottom-10 -left-10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-40 h-40 bg-gradient-to-bl from-primary-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
