import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Heart, Users, BookOpen, Lightbulb } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Pastor David Williams",
      role: "Senior Pastor, New Life Church",
      location: "Dallas, TX",
      content: "FaithTech has completely transformed how I approach sermon preparation. The AI tools help me create more engaging messages while staying true to biblical principles. My congregation has noticed the difference!",
      rating: 5,
      avatar: "DW",
      highlight: "Transformed sermon preparation"
    },
    {
      name: "Dr. Sarah Martinez",
      role: "Theology Professor",
      location: "Los Angeles, CA",
      content: "As someone who teaches theology, I was skeptical about AI and cryptocurrency. FaithTech helped me understand these technologies from a biblical perspective. Now I can guide my students with confidence and wisdom.",
      rating: 5,
      avatar: "SM",
      highlight: "Biblical perspective on technology"
    },
    {
      name: "Michael Thompson",
      role: "Youth Pastor",
      location: "Chicago, IL",
      content: "Our youth group was struggling to understand how faith applies to modern technology. FaithTech's resources have helped us have meaningful conversations about AI, social media, and digital life through a Christian lens.",
      rating: 5,
      avatar: "MT",
      highlight: "Meaningful youth conversations"
    },
    {
      name: "Reverend Lisa Chen",
      role: "Associate Pastor",
      location: "Seattle, WA",
      content: "The community aspect of FaithTech is incredible. Being able to connect with other pastors and discuss how technology impacts our ministries has been invaluable. The support and wisdom shared here is truly God-sent.",
      rating: 5,
      avatar: "LC",
      highlight: "Invaluable community support"
    },
    {
      name: "Pastor James Rodriguez",
      role: "Lead Pastor, Grace Community",
      location: "Miami, FL",
      content: "I never thought I'd be comfortable with cryptocurrency until I found FaithTech. The biblical foundation they provide for understanding digital currencies has helped me make informed decisions for my family and church.",
      rating: 5,
      avatar: "JR",
      highlight: "Informed financial decisions"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Christian Counselor",
      location: "Atlanta, GA",
      content: "Many of my clients struggle with technology addiction and digital overwhelm. FaithTech's resources have given me tools to help them navigate these challenges while maintaining their spiritual health.",
      rating: 5,
      avatar: "EJ",
      highlight: "Spiritual health guidance"
    }
  ]

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Members",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Learning Resources",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      number: "95%",
      label: "Satisfaction Rate",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      number: "50+",
      label: "Expert Instructors",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Stories of Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from pastors, leaders, and believers who have discovered how technology and faith 
            can work together to strengthen their ministry and personal walk with God.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-600 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full">
                  <Heart className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-800 font-medium">{testimonial.highlight}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Be part of a movement that's helping Christians navigate technology with wisdom, 
                integrity, and faith. Your story could be next!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Journey Today
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
