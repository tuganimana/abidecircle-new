import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Users, Zap, ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
              ✨ Empowering Christian Communities with Technology
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ministry Tools
              </span>{" "}
              for Christians
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Empower your ministry with AI-generated sermons, worship songs, and scripture studies. 
              Join thousands of pastors and believers using cutting-edge technology to spread God's word 
              more effectively and reach more souls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Try AI Tools Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Play className="mr-2 h-5 w-5" />
                See AI in Action
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>10,000+ Pastors</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <span>1,000+ AI Sermons</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>500+ Worship Songs</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI Sermon Generator</h3>
                      <p className="text-sm text-gray-600">Biblical, engaging sermons</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-200 rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-xs text-gray-500">Generate sermons in minutes</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 mt-8">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-purple-600 rounded-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Worship Song Creator</h3>
                      <p className="text-sm text-gray-600">AI-generated praise songs</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-purple-200 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-2/3"></div>
                    </div>
                    <p className="text-xs text-gray-500">Create songs instantly</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Scripture Study AI</h3>
                      <p className="text-sm text-gray-600">Deep biblical insights</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full w-4/5"></div>
                    </div>
                    <p className="text-xs text-gray-500">AI-powered Bible study</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 mt-8">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-orange-600 rounded-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Pastor Community</h3>
                      <p className="text-sm text-gray-600">Share & learn together</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-orange-200 rounded-full">
                      <div className="h-2 bg-orange-600 rounded-full w-5/6"></div>
                    </div>
                    <p className="text-xs text-gray-500">10,000+ active pastors</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
