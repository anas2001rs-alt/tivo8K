import IPTVLink from "./components/IPTVLink";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tivo8K
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a
                href="https://tivo8k.co/"
                target="_blank"
                rel="dofollow"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get IPTV
              </a>
            </div>
            <div className="md:hidden">
              <a
                href="https://tivo8k.co/"
                target="_blank"
                rel="dofollow"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-300">Trusted by 50,000+ Customers Worldwide</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Premium{" "}
              <IPTVLink className="text-blue-400 hover:text-blue-300 no-underline decoration-0">IPTV</IPTVLink>{" "}
              Service for
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Unlimited Entertainment
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the best <IPTVLink>IPTV</IPTVLink> service with 20,000+ live channels, 80,000+ movies & series in 4K/8K quality. 
              Our <IPTVLink>IPTV</IPTVLink> solution delivers buffer-free streaming on all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tivo8k.co/"
                target="_blank"
                rel="dofollow"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                Start Your IPTV Trial
              </a>
              <a
                href="#pricing"
                className="border border-gray-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">20,000+</div>
                <div className="text-sm text-gray-500">Live Channels</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">80,000+</div>
                <div className="text-sm text-gray-500">Movies & Series</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">4K/8K</div>
                <div className="text-sm text-gray-500">Ultra HD Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <IPTVLink>IPTV</IPTVLink> Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our comprehensive <IPTVLink>IPTV</IPTVLink> solutions designed to deliver premium entertainment to your home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Live TV Channels</h3>
              <p className="text-gray-400">
                Access 20,000+ live <IPTVLink>IPTV</IPTVLink> channels from around the world including sports, news, entertainment, and more in HD, FHD, 4K & 8K quality.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Movies & Series VOD</h3>
              <p className="text-gray-400">
                Our <IPTVLink>IPTV</IPTVLink> library includes 80,000+ movies and TV series updated daily. Watch the latest releases and all-time classics on demand.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
              <p className="text-gray-400">
                Our <IPTVLink>IPTV</IPTVLink> service covers 150+ countries with channels in every language. Enjoy local and international content wherever you are.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Device Support</h3>
              <p className="text-gray-400">
                Use our <IPTVLink>IPTV</IPTVLink> on Smart TV, Android, iOS, Firestick, MAG, PC, and more. One subscription works on all your devices simultaneously.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Anti-Freeze Technology</h3>
              <p className="text-gray-400">
                Our advanced <IPTVLink>IPTV</IPTVLink> servers use anti-freeze technology ensuring 99.9% uptime with zero buffering for a seamless viewing experience.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">EPG & Catch-Up</h3>
              <p className="text-gray-400">
                Full Electronic Program Guide with our <IPTVLink>IPTV</IPTVLink> service. Never miss your favorite shows with 7-day catch-up and recording features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Our <IPTVLink>IPTV</IPTVLink>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We provide the most reliable <IPTVLink>IPTV</IPTVLink> service with premium features that set us apart from the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📺</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">4K & 8K Ultra HD Quality</h3>
                <p className="text-gray-400">
                  Our <IPTVLink>IPTV</IPTVLink> streams deliver crystal-clear picture quality in 4K and 8K resolution for the ultimate viewing experience.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Zero Buffering</h3>
                <p className="text-gray-400">
                  Thanks to our premium <IPTVLink>IPTV</IPTVLink> servers located worldwide, you'll enjoy seamless streaming without any buffering or lag.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">24/7 Customer Support</h3>
                <p className="text-gray-400">
                  Our dedicated <IPTVLink>IPTV</IPTVLink> support team is available around the clock to help you with setup, troubleshooting, and any questions.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Instant Activation</h3>
                <p className="text-gray-400">
                  Get your <IPTVLink>IPTV</IPTVLink> subscription activated within minutes of purchase. No waiting, no hassle — start watching immediately.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">150+ Countries Covered</h3>
                <p className="text-gray-400">
                  Our <IPTVLink>IPTV</IPTVLink> service provides channels from over 150 countries including USA, UK, Canada, Europe, Asia, Africa, and Latin America.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Money-Back Guarantee</h3>
                <p className="text-gray-400">
                  Try our <IPTVLink>IPTV</IPTVLink> service risk-free with our satisfaction guarantee. If you're not happy, we'll refund your money — no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <IPTVLink>IPTV</IPTVLink> Subscription Plans
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect <IPTVLink>IPTV</IPTVLink> plan that fits your needs. All plans include full access to channels, VOD, and premium features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400 mb-2">1 Month</h3>
                <div className="text-4xl font-bold mb-1">$14.99</div>
                <div className="text-sm text-gray-500 mb-6">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  20,000+ Live Channels
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  80,000+ VOD
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  1 Device Connection
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  HD & FHD Quality
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  24/7 Support
                </li>
              </ul>
              <a
                href="https://tivo8k.co/"
                target="_blank"
                rel="dofollow"
                className="block text-center border border-blue-500 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Get IPTV Now
              </a>
            </div>
            {/* Popular Plan */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-900 border border-blue-500/50 rounded-2xl p-8 relative transform scale-105 shadow-xl shadow-blue-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">6 Months</h3>
                <div className="text-4xl font-bold mb-1">$49.99</div>
                <div className="text-sm text-gray-500 mb-6">$8.33/month — Save 44%</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  20,000+ Live Channels
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  80,000+ VOD
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  2 Device Connections
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  4K & 8K Quality
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Priority Support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  EPG & Catch-Up
                </li>
              </ul>
              <a
                href="https://tivo8k.co/"
                target="_blank"
                rel="dofollow"
                className="block text-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Get IPTV Now
              </a>
            </div>
            {/* Premium Plan */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400 mb-2">12 Months</h3>
                <div className="text-4xl font-bold mb-1">$79.99</div>
                <div className="text-sm text-gray-500 mb-6">$6.67/month — Save 55%</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  20,000+ Live Channels
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  80,000+ VOD
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  3 Device Connections
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  4K & 8K Quality
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  VIP Support
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  EPG, Catch-Up & Recording
                </li>
              </ul>
              <a
                href="https://tivo8k.co/"
                target="_blank"
                rel="dofollow"
                className="block text-center border border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get IPTV Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <IPTVLink>IPTV</IPTVLink> Compatible Devices
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our <IPTVLink>IPTV</IPTVLink> service works seamlessly on all your favorite devices. No extra hardware needed.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Smart TV", icon: "📺" },
              { name: "Android", icon: "📱" },
              { name: "iOS / iPhone", icon: "🍎" },
              { name: "Firestick", icon: "🔥" },
              { name: "MAG Box", icon: "📡" },
              { name: "PC / Mac", icon: "💻" },
              { name: "Formuler", icon: "🖥️" },
              { name: "Samsung TV", icon: "📺" },
              { name: "LG TV", icon: "📺" },
              { name: "NVIDIA Shield", icon: "🛡️" },
              { name: "Xbox", icon: "🎮" },
              { name: "Enigma2", icon: "⚙️" },
            ].map((device) => (
              <div
                key={device.name}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">{device.icon}</div>
                <div className="text-sm text-gray-400">{device.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our <IPTVLink>IPTV</IPTVLink> Users Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who switched to our premium <IPTVLink>IPTV</IPTVLink> service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Best <IPTVLink>IPTV</IPTVLink> service I've ever used! The picture quality is amazing and I never experience any buffering. Highly recommend to anyone looking for premium <IPTVLink>IPTV</IPTVLink>."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">James M.</div>
                  <div className="text-xs text-gray-500">USA • 6 Month Plan</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Switched from cable to this <IPTVLink>IPTV</IPTVLink> provider and I'm saving so much money! The channel selection is incredible and the <IPTVLink>IPTV</IPTVLink> setup was super easy."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Sarah K.</div>
                  <div className="text-xs text-gray-500">UK • 12 Month Plan</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "The sports coverage on this <IPTVLink>IPTV</IPTVLink> is unmatched. I can watch all PPV events, Premier League, NBA, and more. This <IPTVLink>IPTV</IPTVLink> is worth every penny!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Mike R.</div>
                  <div className="text-xs text-gray-500">Canada • 12 Month Plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <IPTVLink>IPTV</IPTVLink> FAQ
            </h2>
            <p className="text-gray-400 text-lg">
              Common questions about our <IPTVLink>IPTV</IPTVLink> service answered.
            </p>
          </div>
          <div className="space-y-4">
            <FAQItem
              question="What is IPTV?"
              answer="IPTV (Internet Protocol Television) is a digital television broadcasting protocol that delivers TV content over the internet rather than traditional satellite or cable. Our IPTV service provides access to thousands of live channels, movies, and series streamed directly to your device."
            />
            <FAQItem
              question="What devices are compatible with your IPTV service?"
              answer="Our IPTV service is compatible with Smart TVs (Samsung, LG, Sony), Android devices, iOS devices (iPhone, iPad), Amazon Firestick, MAG boxes, Formuler, NVIDIA Shield, Enigma2 receivers, PCs, Macs, and more. You can use our IPTV on virtually any device."
            />
            <FAQItem
              question="How fast is the IPTV activation?"
              answer="Your IPTV subscription is activated instantly after payment confirmation. You'll receive your IPTV login credentials via email within minutes, allowing you to start watching immediately."
            />
            <FAQItem
              question="Do you offer an IPTV free trial?"
              answer="Yes! We offer a 24-hour free IPTV trial so you can test our service quality, channel selection, and streaming performance before committing to a subscription. Visit tivo8k.co to request your free trial."
            />
            <FAQItem
              question="What internet speed do I need for IPTV?"
              answer="For the best IPTV experience, we recommend a minimum of 10 Mbps for HD content and 25 Mbps for 4K/8K streaming. Our IPTV servers are optimized to deliver smooth playback even on moderate connections."
            />
            <FAQItem
              question="Can I use the IPTV service on multiple devices?"
              answer="Yes! Depending on your IPTV plan, you can connect 1-3 devices simultaneously. Our 12-month plan allows up to 3 concurrent connections, perfect for the whole family."
            />
            <FAQItem
              question="Is the IPTV service stable with no buffering?"
              answer="Our IPTV service uses premium anti-freeze servers located worldwide to ensure 99.9% uptime and zero buffering. We continuously optimize our IPTV infrastructure to provide the most stable streaming experience."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your <IPTVLink>IPTV</IPTVLink> Journey?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join over 50,000 happy customers enjoying premium <IPTVLink>IPTV</IPTVLink> entertainment. 
                Get instant access to 20,000+ channels and 80,000+ movies & series today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tivo8k.co/"
                  target="_blank"
                  rel="dofollow"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Get IPTV Now — From $6.67/mo
                </a>
                <a
                  href="https://tivo8k.co/"
                  target="_blank"
                  rel="dofollow"
                  className="border border-gray-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Free IPTV Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tivo8K
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium <IPTVLink>IPTV</IPTVLink> service provider delivering the best entertainment experience with 20,000+ channels worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4"><IPTVLink className="text-white hover:text-white no-underline decoration-0">IPTV</IPTVLink> Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://tivo8k.co/" target="_blank" rel="dofollow" className="hover:text-white transition-colors">IPTV Subscription</a></li>
                <li><a href="https://tivo8k.co/" target="_blank" rel="dofollow" className="hover:text-white transition-colors">IPTV Free Trial</a></li>
                <li><a href="https://tivo8k.co/" target="_blank" rel="dofollow" className="hover:text-white transition-colors">IPTV Reseller</a></li>
                <li><a href="https://tivo8k.co/" target="_blank" rel="dofollow" className="hover:text-white transition-colors">IPTV for Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📧</span> support@tivo8k.co
                </li>
                <li className="flex items-center gap-2">
                  <span>💬</span> 24/7 Live Chat
                </li>
                <li className="flex items-center gap-2">
                  <span>🌐</span> <a href="https://tivo8k.co/" target="_blank" rel="dofollow" className="hover:text-white transition-colors">tivo8k.co</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Tivo8K. Premium <IPTVLink className="text-gray-400 hover:text-white">IPTV</IPTVLink> Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <IPTVLink className="text-gray-400 hover:text-white">IPTV</IPTVLink>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800/50 transition-colors">
        <span className="font-semibold text-lg pr-4">{question}</span>
        <svg
          className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
