import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import GradientText from "@/components/ui/GradientText";
import { howItWorksSteps } from "@/data/howItWorks";
import { useScrollAnimation2 } from "@/hooks/useScrollAnimation2";
import AnimatedBackground from "../ui/animations/AnimatedBackground";

export default function HowItWorksSection() {
  const { ref, controls } = useScrollAnimation2();

  return (
    <section
      id="how-it-works"
      className="py-10 sm:py-16 relative bg-secondary-800/50"
    >
      <div className="absolute inset-0 z-[-1]">
        {/* Modern animated background with line paths, pulse lines, and data sync */}
        <AnimatedBackground
          primaryColor="#3b82f6"
          secondaryColor="#8b5cf6"
          accentColor="#06b6d4"
        />

        {/* Additional gradients for depth - using dimension.dev color scheme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#7B5FFA,transparent_70%)] opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-secondary-900 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: 30 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
            <div className="inline-block mb-6 rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            <div className="rounded-full px-4 bg-[#171638] py-1">
              <GradientText className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                How it works
              </GradientText>
            </div>
          </div>
          <p className="mt-1 font-sans  text-3xl font-bold text-gray-200 sm:text-4xl lg:text-5xl">
            Simple setup, <GradientText>powerful results</GradientText>
          </p>
          <p className="max-w-3xl mt-5 font-inter mb-10 mx-auto text-lg text-gray-300">
            Get your call center up and running in minutes, not days. Our
            streamlined process makes it easy to start making calls right away.
          </p>
        </motion.div>

        <div className="relative mt-10">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-10 mt-10 md:space-y-24">
            {howItWorksSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    {/* For even steps, image on right; for odd, image on left */}
                    <div
                      className={`mt-10 lg:mt-0 lg:col-span-5 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative mx-auto overflow-hidden rounded-lg shadow-lg">
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
                            {step.id === 1 && (
                              <svg
                                width="120"
                                height="120"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-70"
                              >
                                <path
                                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 7H11V13H17V11H13V7Z"
                                  fill="url(#paint0_linear)"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#7B5FFA" />
                                    <stop offset="1" stopColor="#9D5CFF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            )}
                            {step.id === 2 && (
                              <svg
                                width="120"
                                height="120"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-70"
                              >
                                <path
                                  d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10ZM16 13.43C16 12.62 15.52 11.9 14.8 11.58C13.4 11 10.6 11 9.2 11.58C8.48 11.9 8 12.62 8 13.43V14H16V13.43Z"
                                  fill="url(#paint0_linear)"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear"
                                    x1="2"
                                    y1="12"
                                    x2="22"
                                    y2="12"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#6366F1" />
                                    <stop offset="1" stopColor="#9D5CFF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            )}
                            {step.id === 3 && (
                              <svg
                                width="120"
                                height="120"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-70"
                              >
                                <path
                                  d="M20 6H10V4H20V6ZM20 10H10V8H20V10ZM20 14H10V12H20V14ZM4 8H8V4H4V8ZM4 14H8V10H4V14ZM4 20H8V16H4V20ZM10 20H20V18H10V20ZM10 16H20V16.08C19.39 16.03 18.77 16 18.13 16C15.8 16 14.29 16.19 12.9 16.56C12.75 16.6 12.6 16.65 12.46 16.7L10 16V16Z"
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
                                    <stop offset="1" stopColor="#6366F1" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            )}
                            {step.id === 4 && (
                              <svg
                                width="120"
                                height="120"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="opacity-70"
                              >
                                <path
                                  d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9.1 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5ZM19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19Z"
                                  fill="url(#paint0_linear)"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear"
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#6366F1" />
                                    <stop offset="1" stopColor="#9D5CFF" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            )}
                          </div>
                          <div
                            className={`absolute inset-0 bg-gradient-to-${
                              isEven ? "tl" : "tr"
                            } from-secondary-900/70 to-transparent`}
                          ></div>
                        </motion.div>
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-7 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative">
                        {/* Connection dot */}
                        <div
                          className={`hidden md:block absolute ${
                            isEven ? "left-0" : "right-0"
                          } top-1/2 transform ${
                            isEven ? "-translate-x-1/2" : "translate-x-1/2"
                          } -translate-y-1/2 ${
                            isEven ? "ml-[-12px]" : "mr-[-12px]"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full border-4 border-primary-500 bg-secondary-900 animate-pulse"></div>
                        </div>

                        <div
                          className={`${
                            isEven ? "ml-6 md:ml-12" : "mr-6 md:mr-12"
                          }`}
                        >
                          <div className="text-primary-500 font-bold text-gray-200 text-3xl mb-2">
                            Step {index + 1}
                          </div>

                          <h3 className="text-3xl font-sans font-bold text-gray-200">
                            {step.title}
                          </h3>

                          {/* Gradient Line */}
                          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-2 mb-4" />

                          <p className="mt-3 font-inter text-lg text-gray-300">
                            {step.description}
                          </p>

                          <ul className="mt-5 font-inter space-y-2">
                            {step.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                                <p className="ml-3 text-base text-gray-300">
                                  {feature}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
