import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Check, ChevronRight, Shield, Star, Users, Zap, BarChart3, FileCheck, Globe, Play, Download, ArrowRight, CheckCircle, Lock, Users2, Award, Building2, Calendar, Mail, Phone, MapPin, Linkedin, Twitter, TrendingUp, Activity, Target, Thermometer, CloudRain, TreePine, Factory, AlertTriangle, MapIcon, BarChart, Eye, ChevronLeft } from 'lucide-react'
import logoFull from 'figma:asset/adef7142b8602333dbb5e388da3f76a6b94e4f2a.png'
import logoIcon from 'figma:asset/df965d0eadaa7181b59d95650dfbe5b7ee017154.png'
import riskQuadrantScreenshot from 'figma:asset/3717cf0d800d116e1adbc0f264ab74688619f6fd.png'
import riskManagementScreenshot from 'figma:asset/cf4d25eaa5a8e5602beea70fd309004a1b18bf16.png'
import emissionsTrajectoryScreenshot from 'figma:asset/7beab67dbebd0066489ee729f1891e27111a8300.png'

export default function App() {
  const [activeTab, setActiveTab] = useState('measure')
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [animatedValues, setAnimatedValues] = useState({
    scope1: 0,
    scope2: 0,
    scope3: 0
  })

  const headlines = [
    { 
      text: "GHG Protocol-Aligned Accounting", 
      subtitle: "Scope 1, 2 & 3 Emissions Tracking",
      icon: Factory,
      color: "text-blue-600"
    },
    { 
      text: "Climate Scenario Analysis", 
      subtitle: "& Decarbonisation Projections",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    { 
      text: "Physical Climate Risk Analysis", 
      subtitle: "Site-Based Risk Assessment",
      icon: CloudRain,
      color: "text-emerald-600"
    },
    { 
      text: "Transition Risk Management", 
      subtitle: "AI-Powered Expert Analysis",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    { 
      text: "MDB-Ready Climate Reporting", 
      subtitle: "Automated Loan & Bond Applications",
      icon: FileCheck,
      color: "text-red-600"
    }
  ]

  // Reordered screenshots as requested
  const screenshots = [
    {
      id: 0,
      image: emissionsTrajectoryScreenshot,
      title: "Emissions Trajectory Analysis",
      description: "Advanced scenario modeling showing different decarbonisation pathways with SBTi targets, business-as-usual projections, and custom reduction scenarios.",
      icon: TrendingUp,
      badge: "Projections",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-500"
    },
    {
      id: 1,
      image: riskManagementScreenshot,
      title: "Physical Risk Mapping",
      description: "Interactive geographical risk assessment combining site locations with climate scenario data to identify physical risks and adaptation requirements.",
      icon: CloudRain,
      badge: "Site Analysis",
      color: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      image: riskQuadrantScreenshot,
      title: "Climate Risk Quadrant",
      description: "Visual risk assessment matrix showing probability vs. impact analysis across multiple climate risk factors including wildfire, flooding, and extreme weather events.",
      icon: AlertTriangle,
      badge: "Risk Analysis",
      color: "from-red-50 to-orange-50",
      iconColor: "text-red-500"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animateValues = () => {
      const scope1Target = 2847
      const scope2Target = 1623
      const scope3Target = 18592
      
      let scope1Current = 0
      let scope2Current = 0
      let scope3Current = 0
      
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps
      
      const increment = setInterval(() => {
        scope1Current = Math.min(scope1Current + scope1Target / steps, scope1Target)
        scope2Current = Math.min(scope2Current + scope2Target / steps, scope2Target)
        scope3Current = Math.min(scope3Current + scope3Target / steps, scope3Target)
        
        setAnimatedValues({
          scope1: Math.round(scope1Current),
          scope2: Math.round(scope2Current),
          scope3: Math.round(scope3Current)
        })
        
        if (scope1Current >= scope1Target && scope2Current >= scope2Target && scope3Current >= scope3Target) {
          clearInterval(increment)
        }
      }, stepTime)
      
      return () => clearInterval(increment)
    }
    
    const timer = setTimeout(animateValues, 500)
    return () => clearTimeout(timer)
  }, [])

  const nextScreenshot = () => {
    setActiveScreenshot((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setActiveScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoFull} alt="Cascadis" className="h-24" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-500 transition-colors">Features</a>
              <a href="#security" className="text-gray-600 hover:text-blue-500 transition-colors">Security</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex text-gray-600 border-gray-300 hover:text-blue-500 hover:border-blue-300">
                <Play className="w-4 h-4 mr-2" />
                Product Tour
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-blue-50 text-blue-500 border-blue-200 mb-6">
                  <Thermometer className="w-4 h-4 mr-2" />
                  AI-Powered Climate Reporting Platform
                </Badge>
              </motion.div>
              
              <div className="mb-8 h-32 flex items-center">
                <motion.div
                  key={currentHeadline}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50`}>
                    {React.createElement(headlines[currentHeadline].icon, {
                      className: `w-8 h-8 ${headlines[currentHeadline].color}`
                    })}
                  </div>
                  <div>
                    <h1 className="text-3xl lg:text-4xl text-gray-900 mb-2">
                      {headlines[currentHeadline].text}
                    </h1>
                    <h2 className="text-2xl lg:text-3xl text-gray-600">
                      {headlines[currentHeadline].subtitle}
                    </h2>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl text-gray-600 mb-8">
                  Comprehensive climate reporting from GHG accounting to risk analysis. Built specifically for MDB loan applications, green bond issuance, and annual climate disclosures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105 transition-all duration-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
                <Button size="lg" variant="outline" className="text-gray-600 border-gray-300 hover:text-blue-500 hover:border-blue-300 transform hover:scale-105 transition-all duration-200">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Product Tour
                </Button>
                <Button size="lg" variant="outline" className="text-emerald-600 border-emerald-300 hover:text-emerald-700 hover:border-emerald-400 transform hover:scale-105 transition-all duration-200">
                  <Download className="w-5 h-5 mr-2" />
                  Climate Reporting Guide
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-2xl text-blue-600 mb-2"
                  >
                    AI-First
                  </motion.div>
                  <div className="text-sm text-gray-600">Platform Design</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-2xl text-emerald-600 mb-2"
                  >
                    2025
                  </motion.div>
                  <div className="text-sm text-gray-600">Latest Launch</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-2xl text-purple-600 mb-2"
                  >
                    5 min
                  </motion.div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-6 text-sm text-gray-500"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  Setup in 5 minutes
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <Card className="bg-white border-gray-200 shadow-xl rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="text-gray-900 flex items-center">
                    <Factory className="w-5 h-5 mr-2 text-blue-500" />
                    Climate Dashboard Preview
                  </CardTitle>
                  <CardDescription className="text-gray-600">Real-time GHG emissions tracking</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">Scope 1 Emissions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "45%" }}
                              transition={{ duration: 2, delay: 1.2 }}
                              className="h-full bg-red-500"
                            ></motion.div>
                          </div>
                          <Badge className="bg-red-500 text-white">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.5 }}
                            >
                              {animatedValues.scope1.toLocaleString()} tCO₂e
                            </motion.span>
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">Scope 2 Emissions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "25%" }}
                              transition={{ duration: 2, delay: 1.4 }}
                              className="h-full bg-orange-500"
                            ></motion.div>
                          </div>
                          <Badge className="bg-orange-500 text-white">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.7 }}
                            >
                              {animatedValues.scope2.toLocaleString()} tCO₂e
                            </motion.span>
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">Scope 3 Emissions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 2, delay: 1.6 }}
                              className="h-full bg-purple-500"
                            ></motion.div>
                          </div>
                          <Badge className="bg-purple-500 text-white">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.9 }}
                            >
                              {animatedValues.scope3.toLocaleString()} tCO₂e
                            </motion.span>
                          </Badge>
                        </div>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-green-100 rounded-xl border-2 border-emerald-200"
                      >
                        <div className="flex items-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <CheckCircle className="w-5 h-5 mr-3 text-emerald-500" />
                          </motion.div>
                          <span className="text-gray-700">MDB Report Status</span>
                        </div>
                        <Badge className="bg-emerald-500 text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Ready for Submission
                        </Badge>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    className="mt-6 pt-4 border-t border-gray-100"
                  >
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Last updated: Now</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>Live data</span>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Target className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Climate Reporting Workflow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">
              Measure. Analyse. Mitigate.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive climate reporting workflow covers the full spectrum from GHG accounting to risk analysis, 
              enabling complete MDB loan applications and green bond documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-gray-900">1. GHG Accounting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">GHG Protocol-aligned Scope 1, 2, 3 tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Automated emissions calculations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real-time carbon footprint monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Financial decarbonisation planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudRain className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-gray-900">2. Climate Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Physical risk assessment by site location</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Transition risk analysis with AI</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Climate scenario projections</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Adaptation action plan management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-xl">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900">3. MDB Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">AI-generated MDB loan applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Green bond documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Annual monitoring reports</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Climate disclosure automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Screenshots Section - Full Size Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">
              See Cascadis in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real screenshots from our platform showcasing comprehensive climate analysis, 
              emissions tracking, and risk assessment capabilities.
            </p>
          </div>

          {/* Full Size Screenshot Display */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Screenshot Display */}
            <div className="relative h-[500px] lg:h-[600px] mb-8">
              {screenshots.map((screenshot, index) => {
                const isActive = index === activeScreenshot
                const offset = (index - activeScreenshot) * 40
                const zIndex = screenshots.length - Math.abs(index - activeScreenshot)
                const scale = isActive ? 1 : 0.9 - Math.abs(index - activeScreenshot) * 0.1
                const opacity = isActive ? 1 : 0.4

                return (
                  <motion.div
                    key={screenshot.id}
                    initial={false}
                    animate={{
                      x: offset,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    className={`absolute inset-0 cursor-pointer ${!isActive ? 'pointer-events-none' : ''}`}
                    onClick={() => setActiveScreenshot(index)}
                  >
                    <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 group hover:shadow-3xl transition-all duration-300">
                      {/* Full Size Image */}
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      
                      {/* Overlay Badge */}
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-white/95 text-gray-700 backdrop-blur-sm border-0 shadow-lg">
                          {React.createElement(screenshot.icon === TrendingUp ? TrendingUp : screenshot.icon === CloudRain ? MapIcon : BarChart, {
                            className: "w-4 h-4 mr-2"
                          })}
                          {screenshot.badge}
                        </Badge>
                      </div>
                      
                      {/* Subtle gradient overlay for better text readability on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="outline"
                size="lg"
                onClick={prevScreenshot}
                className="flex items-center space-x-2 text-gray-600 border-gray-300 hover:text-blue-500 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-3">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeScreenshot 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={nextScreenshot}
                className="flex items-center space-x-2 text-gray-600 border-gray-300 hover:text-blue-500 hover:border-blue-300 bg-white/80 backdrop-blur-sm"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Active Screenshot Description - Below Images */}
            <motion.div
              key={activeScreenshot}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${screenshots[activeScreenshot].color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {React.createElement(screenshots[activeScreenshot].icon, {
                    className: `w-8 h-8 ${screenshots[activeScreenshot].iconColor}`
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-gray-900 mb-3">
                    {screenshots[activeScreenshot].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {screenshots[activeScreenshot].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-xl text-gray-900 mb-4">
                Experience the Full Platform
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                See how these powerful analytics and visualization tools work together to create comprehensive climate reports that meet MDB standards and support your green finance applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Eye className="w-5 h-5 mr-2" />
                  Schedule Platform Demo
                </Button>
                <Button size="lg" variant="outline" className="text-gray-600 border-gray-300 hover:text-blue-500 hover:border-blue-300">
                  <Play className="w-5 h-5 mr-2" />
                  Interactive Product Tour
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">
              Complete Climate Reporting Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From GHG accounting to climate risk analysis, everything you need for comprehensive 
              climate reporting that meets MDB standards and green bond requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-gray-900">GHG Protocol Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Full compliance with GHG Protocol standards for Scope 1, 2, and 3 emissions accounting with automated calculations and real-time tracking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-gray-900">Scenario Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Advanced climate scenario modeling and decarbonisation projections to support strategic planning and financial decision-making.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <CloudRain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900">Physical Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Site-specific physical climate risk analysis based on geographical positioning with automated adaptation planning recommendations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-gray-900">Transition Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI-powered transition risk assessment combining expert opinions with market intelligence for comprehensive climate risk management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-gray-900">Action Plan Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Integrated decarbonisation and adaptation action plan management with financial tracking and progress monitoring.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900">MDB Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI-generated MDB loan applications, green bond reports, and annual monitoring documentation with full audit trails.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Cascadis and climate reporting.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 rounded-xl px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-500">
                How does your GHG accounting align with the GHG Protocol?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our platform is fully aligned with GHG Protocol standards for Scope 1, 2, and 3 emissions tracking. We automatically calculate emissions using approved methodologies and emission factors, ensuring your carbon footprint data meets international standards required by MDBs and green bond frameworks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 rounded-xl px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-500">
                What types of climate risks can you analyse for our sites?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We conduct comprehensive physical climate risk assessments based on your site locations, analyzing risks from extreme weather events, sea level rise, temperature changes, and precipitation patterns. Our AI combines this with transition risk analysis covering policy changes, market shifts, and technology disruptions to provide complete climate risk profiles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 rounded-xl px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-500">
                Can the platform help with our MDB loan application?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, our AI generates comprehensive climate documentation for MDB loan applications, including climate risk assessments, decarbonisation action plans, and scenario analysis. We ensure all reports meet specific MDB requirements for climate finance, significantly reducing preparation time and improving application quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 rounded-xl px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-500">
                How do you manage decarbonisation action plans financially?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our platform integrates financial planning with decarbonisation goals, tracking investment requirements, cost-benefit analysis, and ROI projections for climate actions. We help you prioritise initiatives based on emission reduction potential and financial impact, ensuring your transition strategy is both effective and economically viable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 rounded-xl px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-500">
                What data sources do you integrate for climate reporting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We integrate with leading data sources including energy management systems, utility providers, ERP systems, supply chain platforms, and IoT sensors. Our AI can process energy bills, fuel receipts, travel data, and supply chain information to automatically calculate your complete carbon footprint across all scopes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 rounded-xl px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-500">
                How often are climate projections and scenarios updated?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our climate projections are updated regularly using the latest climate models and scientific data. Scenario analysis incorporates real-time policy changes, carbon pricing updates, and market developments. This ensures your climate risk assessments and transition plans remain current and actionable for strategic decision-making.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-4">
              Security & Compliance First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise-grade security from day one. Your climate data is protected with industry-standard 
              security measures and compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-gray-900 mb-2">SOC 2 Ready</h3>
              <p className="text-gray-600">Security framework built for compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">AES-256 encryption for all data</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Full privacy regulation compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-gray-900 mb-2">High Availability</h3>
              <p className="text-gray-600">Reliable infrastructure & backups</p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Security Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Multi-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Role-based access controls</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Audit logs and activity monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Regular security assessments</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Automated data backups</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Compliance & Standards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">ISO 27001 security framework</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">GDPR & CCPA data protection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">SOC 2 Type II pathway</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Industry security standards</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-500 mr-3" />
                    <span className="text-gray-600">Penetration testing program</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">
            Ready to Transform Your Climate Reporting?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Join innovative companies already building comprehensive climate reports with Cascadis for MDB loans and green bond applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-500 hover:bg-blue-50">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Demo Today
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/60 bg-white/10 hover:bg-white/20">
              <Play className="w-5 h-5 mr-2" />
              Watch 5-Minute Demo
            </Button>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            14-day free trial • No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <img src={logoIcon} alt="Cascadis" className="h-8 mr-3" />
                <span className="text-xl">Cascadis</span>
              </div>
              <p className="text-gray-400 mb-6">
                AI-powered climate reporting platform for MDB loans and green bond issuers.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Climate Reporting Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GHG Protocol Handbook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MDB Climate Requirements</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Climate Risk Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 Cascadis. All rights reserved.</p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  London, UK
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@cascadis.io
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +44 (7526) 797-605
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}