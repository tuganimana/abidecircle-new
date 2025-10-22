import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Heart, Lightbulb, Shield, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 mb-4">
            About FaithTech
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bridging Faith and Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that understanding modern technology through a biblical lens empowers Christians 
            to navigate the digital world with wisdom, integrity, and purpose.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At FaithTech, we're committed to helping Christians understand artificial intelligence 
              and cryptocurrency from a biblical perspective. We provide educational resources, 
              community support, and practical tools that align with Christian values.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Biblical Foundation</h4>
                  <p className="text-gray-600">Every lesson is grounded in scripture and Christian principles.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Safe Learning Environment</h4>
                  <p className="text-gray-600">A supportive community where questions are welcomed and answered with love.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Community</h4>
                  <p className="text-gray-600">Connect with Christians worldwide who share your interest in technology.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Comprehensive courses on AI and cryptocurrency from a Christian perspective.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Community</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Join discussions, ask questions, and learn alongside fellow believers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    <span>Faith Integration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Learn how to integrate technology with your Christian walk and ministry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-orange-600" />
                    <span>Resources</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Access sermon materials, study guides, and practical tools for ministry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">500+</div>
            <div className="text-gray-600">Sermon Resources</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-orange-600">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
