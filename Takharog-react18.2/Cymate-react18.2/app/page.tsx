////////////// original ///////////////////////

// "use client";

// import { useAuth } from "./contexts/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function RootPage() {
//   const { isAuthenticated, isLoading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoading && isAuthenticated) {
//       router.replace("/dashboard");
//     }
//   }, [isAuthenticated, isLoading, router]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//       </div>
//     );
//   }

//   // This will be handled by RouteGuard - unauthenticated users will be redirected to login
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
//     </div>
//   );
// }

//////////////////// bolt /////////////////////////////////

// 'use client';
// import './globals.css'
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import {
//   Shield,
//   Users,
//   Code,
//   Zap,
//   Lock,
//   Globe,
//   ChevronDown,
//   ChevronRight,
//   Play,
//   Star,
//   CheckCircle,
//   Menu,
//   X
// } from 'lucide-react';

// export default function HomePage() {
//   const [openFaq, setOpenFaq] = useState<number | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleFaq = (index: number) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const features = [
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Advanced Threat Detection",
//       description: "Real-time monitoring and AI-powered threat identification to keep your systems secure from emerging cyber threats."
//     },
//     {
//       icon: <Code className="h-8 w-8" />,
//       title: "Developer-Friendly Tools",
//       description: "Integrated development environment with security-first coding practices and automated vulnerability scanning."
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Collaborative Security",
//       description: "Team-based security management with role-based access controls and collaborative incident response."
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "Rapid Response",
//       description: "Automated response systems that react to threats in milliseconds, minimizing potential damage."
//     },
//     {
//       icon: <Lock className="h-8 w-8" />,
//       title: "Zero-Trust Architecture",
//       description: "Built on zero-trust principles, ensuring every access request is verified and authenticated."
//     },
//     {
//       icon: <Globe className="h-8 w-8" />,
//       title: "Global Intelligence",
//       description: "Leverage worldwide threat intelligence networks to stay ahead of cybercriminals."
//     }
//   ];

//   const toolkitItems = [
//     {
//       title: "Vulnerability Scanner",
//       description: "This tool is like the platform's security officer, working hard to find vulnerabilities in web applications, networks, and systems. It helps you identify potential security risks that hackers might use to penetrate your defenses, keeping you one step ahead."
//     },
//     {
//       title: "Threat Intelligence Dashboard",
//       description: "The Threat Intelligence tool is your personal cyber crystal ball. It provides real-time information about emerging threats, attack patterns, and provides intelligence on potential bad actors trying to compromise your systems."
//     },
//     {
//       title: "Incident Response Automation",
//       description: "This category's leading and intelligence-based approach to incident response helps organizations respond to security incidents swiftly and effectively. It's like a security first-aid kit, ready to spring into action when things go wrong."
//     },
//     {
//       title: "Security Training Modules",
//       description: "Whether you're onboarding for isolation, hardening your current security knowledge, or teaching your team about the latest threats, our training modules offer comprehensive learning paths."
//     }
//   ];

//   const faqs = [
//     {
//       question: "How can I start using CyMate's Toolkit for cybersecurity tasks?",
//       answer: "Getting started with CyMate is simple. Sign up for an account, choose your plan, and you'll have immediate access to our comprehensive toolkit. Our onboarding process will guide you through the initial setup and configuration."
//     },
//     {
//       question: "How can I collaborate with other developers or cybersecurity experts on CyMate?",
//       answer: "CyMate offers built-in collaboration features including shared workspaces, real-time communication tools, team management, and collaborative incident response capabilities. You can invite team members and assign roles based on their expertise."
//     },
//     {
//       question: "Can I earn money through CyMate? If yes, how?",
//       answer: "Yes! CyMate offers multiple monetization opportunities including bug bounty programs, security consulting opportunities, threat intelligence sharing rewards, and our partner program for security professionals."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Header */}
//       <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm fixed w-full top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//                 <Shield className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold">CyMate</span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">About & Team</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Info</a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact & Support</a>
//             </nav>

//             <div className="flex items-center space-x-4">
//               <Button variant="outline" className="hidden md:inline-flex border-gray-700 text-white hover:bg-gray-800">
//                 Login
//               </Button>

//               {/* Mobile menu button */}
//               <button
//                 className="md:hidden"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {mobileMenuOpen && (
//             <div className="md:hidden border-t border-gray-800 py-4">
//               <nav className="flex flex-col space-y-4">
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">About & Team</a>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">Info</a>
//                 <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact & Support</a>
//                 <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 w-fit">
//                   Login
//                 </Button>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative pt-24 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-pink-900/50"></div>
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
//               Step into the New Era of<br />
//               <span className="text-purple-400">Cybersecurity & Developer</span><br />
//               Innovation
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Empower your digital transformation with cutting-edge cybersecurity tools,
//               collaborative development environments, and AI-powered threat intelligence.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
//                 Get Started
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg">
//                 <Play className="mr-2 h-5 w-5" />
//                 Watch Demo
//               </Button>
//             </div>
//           </div>

//           {/* Dashboard Preview */}
//           <div className="mt-16 relative">
//             <div className="relative mx-auto max-w-5xl">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
//               <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700 p-4">
//                 <div className="flex items-center space-x-2 mb-4">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//                 <div className="bg-black rounded-lg p-6">
//                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                     <div className="lg:col-span-2">
//                       <h3 className="text-lg font-semibold mb-4 text-purple-400">Security Dashboard</h3>
//                       <div className="space-y-3">
//                         <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
//                           <div className="flex items-center space-x-3">
//                             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                             <span className="text-sm">System Status: Secure</span>
//                           </div>
//                           <CheckCircle className="h-4 w-4 text-green-500" />
//                         </div>
//                         <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
//                           <div className="flex items-center space-x-3">
//                             <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                             <span className="text-sm">3 Vulnerabilities Found</span>
//                           </div>
//                           <span className="text-xs text-yellow-500">Review</span>
//                         </div>
//                         <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
//                           <div className="flex items-center space-x-3">
//                             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                             <span className="text-sm">Last Scan: 2 mins ago</span>
//                           </div>
//                           <span className="text-xs text-blue-500">Active</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold mb-4 text-pink-400">Threat Map</h3>
//                       <div className="bg-gray-800 rounded-lg p-4 h-32 flex items-center justify-center">
//                         <Globe className="h-12 w-12 text-purple-400" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-900/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Features
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               All-in-one platform for automated cybersecurity, collaborative
//               community building and development innovation
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300 group hover:scale-105">
//                 <CardContent className="p-6">
//                   <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
//                   <p className="text-gray-400 leading-relaxed">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Toolkit Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-white">Toolkit</h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Comprehensive security tools designed for modern cybersecurity challenges
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {toolkitItems.map((item, index) => (
//               <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-semibold mb-4 text-purple-400">{item.title}</h3>
//                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
//                   <Button variant="ghost" className="mt-4 text-purple-400 hover:text-purple-300 p-0">
//                     Learn More
//                     <ChevronRight className="ml-1 h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Innovation Cards */}
//       <section className="py-20 bg-gray-900/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-0 text-white">
//               <CardContent className="p-8 text-center">
//                 <Zap className="h-12 w-12 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold mb-2">INNOVATION IN</h3>
//                 <h3 className="text-2xl font-bold">EVERY CLICK</h3>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-pink-600 to-purple-600 border-0 text-white">
//               <CardContent className="p-8 text-center">
//                 <Shield className="h-12 w-12 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold mb-2">SECURE.</h3>
//                 <h3 className="text-2xl font-bold mb-2">INNOVATE.</h3>
//                 <h3 className="text-2xl font-bold">COLLABORATE</h3>
//                 <h3 className="text-2xl font-bold">ALL IN ONE</h3>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white">
//               <CardContent className="p-8 text-center">
//                 <Users className="h-12 w-12 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold mb-2">WHERE</h3>
//                 <h3 className="text-2xl font-bold mb-2">SECURITY</h3>
//                 <h3 className="text-2xl font-bold">MEETS</h3>
//                 <h3 className="text-2xl font-bold">CREATIVITY</h3>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-white">How it works</h2>
//             <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
//               CyMate combines cutting-edge cybersecurity with collaborative development tools. Our platform integrates
//               threat detection, vulnerability assessment, and team collaboration in one seamless experience. From
//               real-time monitoring to automated incident response, CyMate empowers security teams and developers
//               to work together more effectively than ever before.
//             </p>
//           </div>

//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
//             <div className="relative bg-gray-900/80 rounded-2xl p-8 border border-gray-700">
//               <div className="flex flex-col lg:flex-row items-center gap-8">
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold mb-4 text-purple-400">Integrated Workflow</h3>
//                   <p className="text-gray-300 mb-6">
//                     Experience seamless integration between security monitoring, threat analysis,
//                     and collaborative development. Our platform brings together all the tools you
//                     need in one unified workspace.
//                   </p>
//                   <ul className="space-y-3">
//                     <li className="flex items-center space-x-3">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span className="text-gray-300">Real-time threat monitoring</span>
//                     </li>
//                     <li className="flex items-center space-x-3">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span className="text-gray-300">Automated vulnerability scanning</span>
//                     </li>
//                     <li className="flex items-center space-x-3">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span className="text-gray-300">Team collaboration tools</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="flex-1">
//                   <div className="bg-black rounded-lg p-6 border border-gray-700">
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-400">Security Score</span>
//                         <span className="text-2xl font-bold text-green-500">98%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '98%'}}></div>
//                       </div>
//                       <div className="grid grid-cols-2 gap-4 pt-4">
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-blue-400">24/7</div>
//                           <div className="text-xs text-gray-400">Monitoring</div>
//                         </div>
//                         <div className="text-center">
//                           <div className="text-2xl font-bold text-purple-400">AI</div>
//                           <div className="text-xs text-gray-400">Powered</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-gray-900/50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 text-white">We've got the answers</h2>
//             <p className="text-xl text-gray-400">
//               Everything you need to know about CyMate
//             </p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <Card key={index} className="bg-gray-800/50 border-gray-700">
//                 <CardContent className="p-0">
//                   <button
//                     className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/80 transition-colors"
//                     onClick={() => toggleFaq(index)}
//                   >
//                     <span className="font-semibold text-white pr-4">{faq.question}</span>
//                     <ChevronDown
//                       className={`h-5 w-5 text-purple-400 transition-transform ${
//                         openFaq === index ? 'transform rotate-180' : ''
//                       }`}
//                     />
//                   </button>
//                   {openFaq === index && (
//                     <div className="px-6 pb-6">
//                       <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-gray-400 mb-6">Everything you need, all in one place power up your journey!</p>
//             <div className="bg-black rounded-2xl p-8 border border-gray-700">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-red-600 rounded-lg mx-auto mb-3"></div>
//                   <div className="text-sm text-gray-400">Security</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3"></div>
//                   <div className="text-sm text-gray-400">Analytics</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-3"></div>
//                   <div className="text-sm text-gray-400">Monitoring</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3"></div>
//                   <div className="text-sm text-gray-400">AI Tools</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-lg text-gray-300 mb-6">Develop with your favourite tools</p>
//             <Button
//               className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
//             >
//               Learn the features
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black border-t border-gray-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
//                   <Shield className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold">CyMate</span>
//               </div>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Empowering the future of cybersecurity through innovation, collaboration, and cutting-edge technology.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-white mb-4">Contact</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Resources</li>
//                 <li>About</li>
//                 <li>Services</li>
//                 <li>Social Media</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold text-white mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
//                   <span className="text-xs">Tw</span>
//                 </div>
//                 <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
//                   <span className="text-xs">Li</span>
//                 </div>
//                 <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
//                   <span className="text-xs">Gh</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 CyMate. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

///////////////// github copilot ///////////////////////////////////
// Next.js page for Cy-Mate Landing Page, using Tailwind CSS and TypeScript
// All images are referenced as in the original, update paths if you move assets to /public
"use client";

import "./globals.css";
import React, { useEffect, useRef } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

const typedStrings = ["Questions", "Blogs", "Streaks", "News", "Events"];

function useTyped(ref: React.RefObject<HTMLHeadingElement>, strings: string[]) {
  useEffect(() => {
    if (!ref.current) return;
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;
    const type = () => {
      if (!ref.current) return;
      const current = strings[i % strings.length];
      if (isDeleting) {
        ref.current.textContent = current.substring(0, j--);
        if (j < 0) {
          isDeleting = false;
          i++;
          timeout = setTimeout(type, 500);
        } else {
          timeout = setTimeout(type, 50);
        }
      } else {
        ref.current.textContent = current.substring(0, j++);
        if (j > current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1000);
        } else {
          timeout = setTimeout(type, 100);
        }
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, [ref, strings]);
}

const Page: React.FC = () => {
  const typedRef = useRef<HTMLHeadingElement>(null);
  useTyped(typedRef, typedStrings);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <nav className="flex items-center justify-between px-8 py-2 sticky top-0 z-50 bg-black">
        <a href="#" className="flex items-center">
          <img
            src="/Logo.svg"
            alt="CyMate Logo"
            className="w-40 h-20 relative"
          />
        </a>
        {/* <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#" className="hover:tracking-wider transition">
                Feature{" "}
                <span>
                  <img
                    src="/Landing_Imgs/Vector.svg"
                    className="inline w-3 h-3"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:tracking-wider transition">
                Resources{" "}
                <span>
                  <img
                    src="/Landing_Imgs/Vector.svg"
                    className="inline w-3 h-3"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:tracking-wider transition">
                Support{" "}
                <span>
                  <img
                    src="/Landing_Imgs/Vector.svg"
                    className="inline w-3 h-3"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:tracking-wider transition">
                Enterprise{" "}
                <span>
                  <img
                    src="/Landing_Imgs/Vector.svg"
                    className="inline w-3 h-3"
                  />
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:tracking-wider transition">
                Streaks and News
              </a>
            </li>
            <li>
              <a href="#" className="hover:tracking-wider transition">
                About Us
              </a>
            </li>
          </ul>
        </div> */}
        <div className="flex space-x-4">
            <Link href="/login" passHref legacyBehavior>
              <a className="bg-[#3d3c3c] text-white w-24 h-10 rounded-full flex items-center justify-center">
                Login
              </a>
            </Link>
            <Link href="/register" passHref legacyBehavior>
              <a className="bg-white text-black w-24 h-10 rounded-full flex items-center justify-center">
                Sign Up
              </a>
            </Link>
        </div>
      </nav>
      <div className="bg-gradient-to-br from-black via-[#040404] to-[#531c9a] relative">
        {/* Navbar */}

        {/* Main Home */}
        <main className="container mx-auto px-4">
          <section
            className="flex flex-col items-center justify-center mt-16"
            id="home"
          >
            <header>
              <p className="text-[#ae70ff] text-2xl font-semibold text-center max-w-md">
                Develop & Defend Together
              </p>
            </header>
            <article>
              <h1 className="text-center text-4xl md:text-4xl font-extrabold max-w-3xl mb-6 mt-6">
                Step Into The New Era Of Cybersecurity & Developer Innovation
              </h1>
            </article>
            <div className="action w-full flex justify-center">
              <div className="flex bg-[#3d3c3c] rounded-2xl p-2 min-w-[400px] mt-2">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="flex-1 bg-[#3d3c3c] text-white rounded-2xl px-4 py-2 outline-none"
                />
                <button className="bg-white text-black font-bold rounded-2xl px-4 py-2 ml-2 hover:bg-violet-600 transition duration-300 flex items-center">
                  Get notified
                  <span className="ml-2">
                    <img
                      src="/Landing_Imgs/Send .svg"
                      alt="Send"
                      className="w-5 h-5"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="home-img mt-8 w-full flex justify-center">
              <img
                src="/Landing_Imgs/Dashboard1.png"
                alt="Dashboard"
                className="max-w-4xl w-full "
              />
            </div>
          </section>
        </main>
      </div>

      {/* Features Section */}
      <section className="features relative py-16" id="features">
        <div className="container mx-auto px-4">
          <div className="features-head flex flex-col items-center pb-4">
            <h2 className="text-[#ae70ff] text-5xl font-semibold mb-8">
              Features
            </h2>
            <p className="text-center text-2xl font-extrabold mb-8 max-w-5xl">
              All-in-one platform for automated cybersecurity, collaborative
              community building and development inspiration
            </p>
          </div>
          <div className="features-content">
            {/* Row 1 */}
            <div className="flex flex-col justify-center items-center md:flex-row gap-8 mb-8">
              {/* Card 1 */}
              <div className="features-card glass-effect flex flex-col justify-between p-6 rounded-2xl w-full md:w-[640px] h-[400px] relative bg-white/10 border border-white/20 backdrop-blur">
                <div className="top-card">
                  <h3 className="bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent text-2xl font-extrabold mb-20">
                    Welcome to the Hub of Innovation and Community
                  </h3>
                  <p className="text-lg font-semibold mb-4">
                    How about exploring something new today?
                  </p>
                  <h2
                    ref={typedRef}
                    className="multiple-text border-2 border-white text-2xl font-semibold p-4 mt-8 w-80 h-20 whitespace-nowrap overflow-hidden bg-transparent"
                  />
                </div>
                <div className="bottom-card absolute  bottom-0 right-3">
                  <div>
                    <img
                      src="/Landing_Imgs/Phone(Features).png"
                      alt="Phone Features"
                      className="w-48"
                    />
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="features-card-1 glass-effect flex flex-row justify-around rounded-2xl w-full md:w-[640px] h-[400px] bg-white/10 border border-white/20 backdrop-blur">
                <div className="left-card flex flex-col gap-2 w-[215px] justify-center">
                  <img
                    src="/Landing_Imgs/streaks.png"
                    alt="Streaks"
                    className="w-full"
                  />
                </div>
                <div className="right-card flex flex-col py-6 justify-center">
                  <h3 className="bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent text-3xl font-extrabold mt-4 mb-4 text-left">
                    Streaks
                  </h3>
                  <p className="text-left text-md font-semibold mt-2 max-w-xs">
                    Streaks bring the most important updates in cybersecurity,
                    technology, and community highlights directly to the
                    forefront of the CyMate platform. Whether it's breaking news
                    about global vulnerabilities, industry advancements, or
                    outstanding contributions from our users, Streaks ensure you
                    never miss what matters most.
                  </p>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col gap-8 mb-8">
              <div className="features-card-2 glass-effect flex flex-row items-center justify-center p-6 rounded-3xl w-full max-h-[311px] bg-white/10 border border-white/20 backdrop-blur">
                <div className="image mr-8">
                  <img
                    src="/Landing_Imgs/Users(Features).svg"
                    alt="Users Features"
                    className="w-32"
                  />
                </div>
                <div className="text flex-1">
                  <h3 className="bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent text-2xl font-extrabold mb-2">
                    Profile Card
                  </h3>
                  <p className="text-lg font-semibold mb-2">
                    A quick glimpse into the mind behind the screen! Instantly
                    view a user’s full name, username, job title, status, and
                    contact details—all in one sleek hover card. Whether you're
                    searching for experts or just connecting, the right info is
                    always at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col gap-8 mb-8">
              <div className="features-card-3 glass-effect flex flex-row items-center justify-center px-6 rounded-3xl w-full max-h-[311px] bg-white/10 border border-white/20 backdrop-blur">
                <div className="text flex-1">
                  <h3 className="bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent text-2xl font-extrabold mb-2">
                    Inspiration meets integration
                  </h3>
                  <p className="text-lg font-semibold mb-2">
                    Unlock endless possibilities with our Inspiration Hub, where
                    developer insights and real-world projects fuel creativity.
                    Ready to take it further? Integrate your tools seamlessly,
                    empowering the entire community to enhance their workflows
                    with your innovations
                  </p>
                </div>
                <div className="image ml-8 max-w-56">
                  <img
                    src="/Landing_Imgs/Laptop(Features).png"
                    alt="Laptop Features"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            {/* Row 4 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="features-card-4 glass-effect flex flex-col items-center justify-between p-6 rounded-2xl w-full md:w-1/2 bg-white/10 border border-white/20 backdrop-blur">
                <div className="text">
                  <h3 className="bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent text-2xl font-extrabold mb-2">
                    Inspiration Station
                  </h3>
                  <p className="text-md font-semibold">
                    Need a spark to fuel your next big project? Inspiration
                    Station has you covered. This is where developers,
                    companies, and seasoned pros open up the vault, sharing not
                    only their success stories but also the blueprints behind
                    them. Discover workflows, architectural insights, design
                    strategies, and real-world project structures that have made
                    a difference in their industries. Each entry is packed with
                    lessons learned, creative approaches, and workflow secrets
                    you won’t find anywhere else. Whether you’re tackling a
                    complex network infrastructure, designing a system
                    architecture, or just need a bit of creative fuel to
                    kickstart your ideas, Inspiration Station is here to power
                    you up. Avoid rookie mistakes by learning from the best, get
                    a behind-the-scenes look at projects that have moved the
                    needle, and watch your ideas take shape with guidance from
                    those who’ve been there. With Inspiration Station, your
                    ideas have no boundaries—just possibilities waiting to
                    unfold.
                  </p>
                </div>
                <div className="image p-4 h-[25%] w-full flex items-center justify-center bg-fuchsia-600 rounded-2xl">
                  <img
                    src="/Landing_Imgs/Logo2.svg"
                    alt="Logo2"
                    className="w-44"
                  />
                </div>
              </div>
              <div className="features-card-4 glass-effect flex flex-col p-6 rounded-2xl w-full md:w-1/2 bg-white/10 border border-white/20 backdrop-blur">
                <div className="text flex-1 mb-4">
                  <h3 className="bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent text-2xl font-extrabold mb-2">
                    Tool House Unlocked
                  </h3>
                  <p className="text-lg font-semibold">
                    With Tool House Unlocked, CyMate lets developers, companies,
                    and experts bring their tools to our platform, expanding
                    possibilities for everyone. Developers can upload their
                    tools, provide a quick functionality report, and submit it
                    for approval. Our team checks each tool to make sure it's
                    secure, free from malware, and working as advertised. After
                    approval, the tool stays on the developer's server, with
                    CyMate acting as the bridge for users to discover and use
                    it. Developers decide if their tools are free, have a
                    limited free trial, or are paid. For paid tools, users can
                    make secure transactions right on CyMate, allowing
                    developers to monetize their innovations while contributing
                    to a collaborative, ever-expanding community toolbox.
                  </p>
                </div>
                <div className="tools-container glass-effect-3 flex flex-wrap gap-4 p-4 bg-white/10 border border-white/20 rounded-2xl justify-evenly">
                  <div className="tools-card glass-effect-3 flex gap-2 p-2 rounded-xl bg-white/10 border border-white/20">
                    <img
                      src="/Landing_Imgs/github.svg"
                      alt="GitHub"
                      className="w-8"
                    />
                    <img
                      src="/Landing_Imgs/gitlab.svg"
                      alt="GitLab"
                      className="w-8"
                    />
                  </div>
                  <div className="tools-card glass-effect-3 flex gap-2 p-2 rounded-xl bg-white/10 border border-white/20">
                    <img
                      src="/Landing_Imgs/adobe-creative-cloud.svg"
                      alt="Adobe"
                      className="w-8"
                    />
                    <img
                      src="/Landing_Imgs/figma.svg"
                      alt="Figma"
                      className="w-8"
                    />
                  </div>
                  <div className="tools-card glass-effect-3 flex gap-2 p-2 rounded-xl bg-white/10 border border-white/20">
                    <img
                      src="/Landing_Imgs/google-drive.svg"
                      alt="Google Drive"
                      className="w-8"
                    />
                    <img
                      src="/Landing_Imgs/gmail.svg"
                      alt="Gmail"
                      className="w-8"
                    />
                  </div>
                  <div className="tools-card glass-effect-3 flex gap-2 p-2 rounded-xl bg-white/10 border border-white/20">
                    <img
                      src="/Landing_Imgs/Amazon.svg"
                      alt="Amazon"
                      className="w-8"
                    />
                    <img
                      src="/Landing_Imgs/Reddit.svg"
                      alt="Reddit"
                      className="w-8"
                    />
                  </div>
                  <div className="btn-container w-20 mt-2">
                    <img
                      src="/Landing_Imgs/Plus-Icon.svg"
                      alt="Plus"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <h2 className="text-5xl font-bold text-center text-white">Toolkit</h2>
      <section className="categories py-16" id="categories">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="category-card glass-effect-2 flex flex-col p-6 rounded-2xl w-full md:w-1/2 bg-[#181818] border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent">
                Web Vulnerability Examiner
              </h3>
              <p className="mb-4 h-[60%]">
                This tool is like the platform’s security radar, sniffing out
                weaknesses in web apps—from access control issues to
                cryptographic slip-ups. It scans for common vulnerabilities to
                ensure that your web environment stays secure, protecting
                against common threats
              </p>
              <button className="flex items-center gap-2 text-lg font-bold hover:underline transition justify-end">
                Explore{" "}
                <span className="arrow-container">
                  <img
                    src="/Landing_Imgs/Explore Arrow.svg"
                    alt="Explore"
                    className="w-5 h-5"
                  />
                </span>
              </button>
            </div>
            <div className="category-card glass-effect-2 flex flex-col p-6 rounded-2xl w-full md:w-1/2 bg-[#181818] border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent">
                Risk & Threat Intelligence
              </h3>
              <p className="mb-4 h-[60%]">
                The Risk & Threat Intelligence is your go-to solution for diving
                deep into security issues without the hassle of endless web
                searches or dealing with fragmented information. Whether it's
                DDoS attack, misconfiguration, or any other critical security
                problem, simply input your issue, and the platform takes over.
              </p>
              <button className="flex items-center gap-2 text-lg font-bold hover:underline transition justify-end">
                Explore{" "}
                <span className="arrow-container">
                  <img
                    src="/Landing_Imgs/Explore Arrow.svg"
                    alt="Explore"
                    className="w-5 h-5"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="category-card glass-effect-2 flex flex-col p-6 rounded-2xl w-full md:w-1/2 bg-[#181818] border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent">
                Network Scanning & Checking
              </h3>
              <p className="mb-4 h-[60%]">
                This category keeps your network clean and organized, with tools
                to find active hosts, detect open ports, and assess network
                vulnerabilities. It’s like a deep dive into your network’s
                health, ensuring everything’s running smoothly and securely,
                from host to host.
              </p>
              <button className="flex items-center gap-2 text-lg font-bold hover:underline transition justify-end">
                Explore{" "}
                <span className="arrow-container">
                  <img
                    src="/Landing_Imgs/Explore Arrow.svg"
                    alt="Explore"
                    className="w-5 h-5"
                  />
                </span>
              </button>
            </div>
            <div className="category-card glass-effect-2 flex flex-col p-6 rounded-2xl w-full md:w-1/2 bg-[#181818] border border-white/20 backdrop-blur">
              <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-[#9a46fc] to-[#931774] bg-clip-text text-transparent ">
                Malware Detection
              </h3>
              <p className="mb-4 h-[60%]">
                Whether you're checking for trojans, ransomware, or hidden
                exploits, CyMate gives you the tools to detect, understand, and
                mitigate risks—before they become a problem.
              </p>
              <button className="flex items-center gap-2 text-lg font-bold hover:underline transition justify-end">
                Explore{" "}
                <span className="arrow-container">
                  <img
                    src="/Landing_Imgs/Explore Arrow.svg"
                    alt="Explore"
                    className="w-5 h-5"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spicy Section */}
      {/* <div className="spicy-section py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-side max-w-xl flex flex-col gap-8">
              <div className="spicy-functions bg-[#6a6a6a26] text-center rounded-[45px] mb-5 p-8">
                <h4 className="text-2xl font-semibold bg-gradient-to-r from-[#cccccc] to-[#666666] bg-clip-text text-transparent pt-2">The Power Behind Your Tools</h4>
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#9747ff] via-[#9747ff] to-[#cb00a3] bg-clip-text text-transparent">Spicy Functions</h2>
                <p className="text-white text-lg text-left p-4 font-semibold">These built-in functions are the ultimate enablers, transforming CyMate’s Toolkit into a seamless, efficient, and proactive cybersecurity powerhouse. By automating repetitive tasks, integrating tools into one cohesive system, and allowing parallel operations with overlays, the platform maximizes productivity. Monitoring ensures nothing slips through the cracks, while analysis, reporting, and alerting keep you informed and prepared every step of the way. Together, these features form the backbone of a dynamic, user-centric platform that simplifies complex operations and enhances your cybersecurity workflow.</p>
                <div className="keywords mt-4">
                  <div className="first-row flex justify-evenly items-center gap-2">
                    <span className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm">Automation</span>
                    <span className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm">Integration</span>
                    <span className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm">Monitoring</span>
                  </div>
                  <div className="second-row flex justify-evenly items-center gap-2 mt-4">
                    <span className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm">Analysis</span>
                    <span className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm">Reporting</span>
                    <span className="bg-white text-black font-bold px-4 py-2 rounded-xl text-sm">Alerting</span>
                  </div>
                </div>
              </div>
              <div className="risk-fuel bg-[#6a6a6a26] text-center rounded-[45px] p-8">
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#9747ff] via-[#9747ff] to-[#cb00a3] bg-clip-text text-transparent pt-2">Risk Fuel</h3>
                <h4 className="text-2xl font-semibold bg-gradient-to-r from-[#cccccc] to-[#666666] bg-clip-text text-transparent pt-2">Secure Smarter, Act Faster</h4>
                <p className="text-white text-base text-left p-4 font-semibold">CyMate’s threat hunting and risk tracking system is your vigilant partner in cybersecurity. It goes beyond mere observation, offering proactive detection and continuous monitoring of potential vulnerabilities. Seamlessly integrated with the toolkit, it scans for breaches, unusual activity, and data leaks across open sources, safeguarding critical assets like emails, credit cards, and sensitive information. This feature ensures tools and resources run error-free while identifying and mitigating threats in real time. If a risk or anomaly is detected, it raises immediate alerts, delivers actionable advice, and even recommends trusted organizations or platforms to neutralize the issue. Empowered with real-time insights and guidance, CyMate keeps both individuals and organizations resilient, ensuring your workflow and assets remain secure and efficient.</p>
              </div>
            </div>
            <div className="video-side max-w-xl flex items-center justify-center">
              <img src="/Assests/Images/Video-dump.png" alt="Video" className="rounded-[45px] max-w-[646px]" />
            </div>
          </div>
        </div>
      </div> */}

      {/* How it works, FAQs, Everything you need */}
      <div className="grad-wrap bg-gradient-to-b from-black to-[#9747ff]">
        <div className="how-it-works-section pb-4 relative">
          <div className="container mx-auto px-4">
            <div className="content glass max-w-full relative p-5 overflow-hidden rounded-2xl border border-white/20 shadow-lg">
              <h3 className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#9747ff] via-[#9747ff] to-[#cb00a3] bg-clip-text text-transparent pt-2">
                How it works
              </h3>
              <p className="text-l font-bold text-center text-white py-8 px-12">
                CyMate is more than just a platform; it’s your complete
                ecosystem for cybersecurity and software development. At its
                core lies the Toolkit, a powerhouse of features like automation,
                integration, and risk tracking. These built-in functions work
                seamlessly with tools for web vulnerability scanning, malware
                detection, network analysis, and more—helping users execute
                complex tasks with efficiency and precision. But CyMate isn’t
                only about tools; it’s about collaboration. Through the
                Community Feed, developers and cybersecurity enthusiasts can
                engage in discussions, share blogs, answer questions, and tackle
                real-world challenges. The integrated Effort Score system
                rewards active participation, making engagement a rewarding
                experience both professionally and socially. CyMate also
                inspires innovation through its Innovation Space, where users
                can discover resources, explore best practices, and integrate
                new tools directly into their workflows. This fosters a culture
                of creativity and growth, where ideas turn into impactful
                solutions. What sets CyMate apart is its focus on empowering
                developers financially. From Task-Based Earnings, where users
                solve cybersecurity challenges for rewards, to Tool Integration,
                which lets developers monetize their creations, the platform
                transforms expertise into tangible income. Whether you’re
                contributing to the community or showcasing your skills through
                a personalized portfolio, CyMate ensures your work gets the
                recognition—and compensation—it deserves. With its robust risk
                and threat tracking system, CyMate doesn’t just keep your tools
                running smoothly—it actively protects them. Real-time
                monitoring, actionable insights, and recommendations for trusted
                solutions make it a trusted ally in securing your assets and
                workflows. CyMate redefines collaboration, security, and
                innovation, providing an all-in-one hub where developers can
                thrive, organizations can excel, and cybersecurity becomes a
                collective mission.
              </p>
              <div className="how-it-works-img flex justify-center items-center">
                <img
                  src="/Landing_Imgs/how-it-works.png"
                  alt="How it works"
                  className="w-[500px] max-w-2xl rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="faqs-section pt-8 pb-8 text-center">
          <div className="container mx-auto px-4">
            <div className="content">
              <h5 className="text-white font-semibold text-2xl pt-8">FAQs</h5>
              <h2 className="text-5xl font-semibold text-white pb-4">
                We've got the answers
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-8 space-y-4 w-full"
              >
                <AccordionItem
                  value="what-is-cymate"
                  className="accordion-item glass rounded-2xl p-4"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline">
                    How can I start using CyMate’s Toolkit for cybersecurity
                    tasks?
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-white text-base text-left">
                    Getting started with CyMate’s Toolkit is simple! Once you’ve
                    signed up, navigate to the Toolkit section where you’ll find
                    features like Web Vulnerability Scanner, Network Scanning,
                    Malware Detection, and Risk & Threat Intelligence . Just
                    select the tool you want to use, provide the required input
                    (like a website URL or a file), and let CyMate’s automation
                    handle the rest. The results will be processed and delivered
                    directly to you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="how-to-earn"
                  className="accordion-item glass rounded-2xl p-4"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline">
                    How can I collaborate with other developers or cybersecurity
                    experts on CyMate?
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-white text-base text-left">
                    CyMate’s Community Feed is your hub for collaboration. You
                    can share posts, ask questions, write blogs, or even respond
                    to tasks published by other users.Engaging with the
                    community not only helps you grow but also boosts your
                    Effort Score making your contributions visible and valuable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="is-secure"
                  className="accordion-item glass rounded-2xl p-4"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline">
                    What development resources are available in CyMate’s
                    Inspiration?
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 text-white text-base text-left">
                    CyMate offers curated templates, real-world simulations, and
                    practical examples to help developers and engineers apply
                    cybersecurity concepts, accelerate learning, and build
                    innovative solutions efficiently.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="everything-u-need-section pt-8 pb-8 text-center">
          <div className="container mx-auto px-4">
            <div className="content">
              <h2 className="text-white text-4xl font-extrabold">
                Everything you need, all in one place power up your journey!
              </h2>
              <div className="everything-img flex justify-center items-center py-8">
                <img
                  src="/Landing_Imgs/everything.PNG"
                  alt="Everything you need"
                  className="w-full max-w-2xl rounded-3xl"
                />
              </div>
              <div className="lanuch flex items-center justify-evenly pb-8">
                <h3 className="text-white text-3xl font-extrabold">
                  Develop with your favourite tools
                </h3>
                <Link href="/login" passHref legacyBehavior>
                  <a className="text-black text-xl font-semibold bg-white rounded-full px-10 py-3 shadow-lg hover:bg-gray-200 transition flex items-center">
                    Launch the Adventure{" "}
                    <i className="fa-regular fa-circle-right ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-section bg-black px-8 py-4 flex justify-between items-center">
        <div className="cymate-logo w-36">
          <img src="/Logo.svg" alt="CyMate Logo" className="max-w-full" />
        </div>
        <div className="links">
          <ul className="flex text-white list-none m-0 p-0 space-x-8 text-lg font-semibold cursor-pointer">
            <li>Contact</li>
            <li>Resources</li>
            <li>About</li>
            <li>Services</li>
            <li>Social Media</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
