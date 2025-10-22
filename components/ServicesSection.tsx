import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Mic, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Mic,
      title: "For Preachers & Pastors",
      description: "AI-powered sermon preparation tools, biblical study resources, and preaching aids.",
      features: [
        "AI sermon outline generator",
        "Biblical text analysis tools",
        "Illustration and story database",
        "Preaching calendar planner"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: BookOpen,
      title: "For Bible Study Leaders",
      description: "Comprehensive study materials and discussion guides for small groups and Bible studies.",
      features: [
        "Interactive study guides",
        "Discussion questions generator",
        "Biblical context resources",
        "Group activity suggestions"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Users,
      title: "For Christian Communities",
      description: "Tools and resources to help churches integrate technology while maintaining biblical principles.",
      features: [
        "Church management tools",
        "Digital outreach resources",
        "Online service planning",
        "Community engagement tools"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: MessageSquare,
      title: "For Individual Learners",
      description: "Personal learning paths and resources for Christians interested in understanding technology.",
      features: [
        "Personalized learning tracks",
        "One-on-one mentoring",
        "Progress tracking",
        "Certificate programs"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ]

  const testimonials = [
    {
      name: "Pastor John Smith",
      role: "Senior Pastor, Grace Community Church",
      content: "FaithTech has revolutionized how I prepare sermons. The AI tools help me create more engaging and biblically sound messages.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Bible Study Leader",
      content: "The study materials are incredible. My group has grown so much in understanding how to apply biblical principles to modern technology.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Church Administrator",
      content: "This platform has helped our church stay relevant while maintaining our Christian values. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Designed for Every Christian
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a pastor, Bible study leader, or individual believer, we have tailored 
            services to help you understand and integrate technology with your faith.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200 mb-4">
            Testimonials
          </Badge>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            What Our Community Says
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Join thousands of Christians who are already learning and growing with FaithTech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
