import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Coins, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Shield, 
  Zap, 
  Globe,
  Heart,
  Lightbulb,
  CheckCircle
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Education",
      description: "Learn about artificial intelligence from a biblical perspective with practical examples and real-world applications.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Coins,
      title: "Cryptocurrency Basics",
      description: "Understand digital currencies, blockchain technology, and their implications for Christians and society.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "Sermon Resources",
      description: "Access AI-powered sermon preparation tools, biblical study materials, and preaching resources.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Christian Community",
      description: "Connect with like-minded believers, share insights, and grow together in faith and technology knowledge.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Engage in meaningful conversations about technology, faith, and how they intersect in daily life.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Learn in a secure, moderated environment that upholds Christian values and promotes respectful dialogue.",
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const benefits = [
    "Biblical foundation for all teachings",
    "Expert-led courses and workshops",
    "24/7 access to learning materials",
    "Mobile-friendly platform",
    "Regular Q&A sessions with experts",
    "Certificate of completion",
    "Lifetime access to course materials",
    "Community support and mentoring"
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 mb-4">
            Our Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Learn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools and resources designed specifically for Christians who want to understand 
            modern technology while staying true to their faith.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200">
                What You Get
              </Badge>
              <h3 className="text-3xl font-bold text-gray-900">
                Comprehensive Learning Experience
              </h3>
              <p className="text-lg text-gray-600">
                Our platform provides everything you need to understand AI and cryptocurrency 
                from a Christian perspective, with ongoing support and community engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">AI-Powered Learning</h4>
                      <p className="text-blue-100">Personalized learning paths</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Global Community</h4>
                      <p className="text-blue-100">Connect with believers worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Faith-Centered</h4>
                      <p className="text-blue-100">Every lesson grounded in scripture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Expert Guidance</h4>
                      <p className="text-blue-100">Learn from Christian tech experts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
