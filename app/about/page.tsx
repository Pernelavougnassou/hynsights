import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import Newsletter from '@/components/home/Newsletter';
import SEO from '@/components/common/SEO';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about HynSights, our mission to share valuable insights on technology, business, and life.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & Editor',
      bio: 'Tech entrepreneur with 10+ years experience in startups and digital transformation.',
      avatar: '/avatars/john-doe.jpg',
      social: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe'
      }
    },
    {
      name: 'Jane Smith',
      role: 'Content Director',
      bio: 'Former journalist specializing in business and technology reporting.',
      avatar: '/avatars/jane-smith.jpg',
      social: {
        twitter: 'https://twitter.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith'
      }
    }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We share genuine insights based on real experiences and thorough research.',
      icon: '🎯'
    },
    {
      title: 'Curiosity',
      description: 'We explore ideas with an open mind and encourage lifelong learning.',
      icon: '🔍'
    },
    {
      title: 'Impact',
      description: 'We aim to create content that makes a positive difference in people\'s lives.',
      icon: '💡'
    },
    {
      title: 'Community',
      description: 'We foster meaningful connections and conversations among curious minds.',
      icon: '🤝'
    }
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about HynSights, our mission to share valuable insights on technology, business, and life."
        url="https://hynsights.com/about"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About HynSights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're a community of curious minds exploring the ideas, technologies, 
              and insights that shape our world. Join us on a journey of discovery and growth.
            </p>
            <Button size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At HynSights, we believe that knowledge shared is knowledge multiplied. 
                Our mission is to curate and create thoughtful content that bridges the gap 
                between complex ideas and practical applications.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're an entrepreneur, technologist, or simply someone who loves to learn, 
                we provide insights that matter – content that informs, inspires, and empowers 
                you to make better decisions in your personal and professional life.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-600">Articles Published</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
                  <div className="text-gray-600">Monthly Readers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative">
                <Image
                  src="/images/mission-image.jpg"
                  alt="Our mission"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us create content 
              that truly serves our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the people behind HynSights who are passionate about 
              sharing knowledge and building community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 relative">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {member.bio}
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href={member.social.twitter}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <Newsletter />
    </>
  );
}