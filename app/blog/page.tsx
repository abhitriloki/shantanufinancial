'use client';

import PageBanner from '../components/PageBanner';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: '5 Essential Steps to Start Your Investment Journey in 2025',
      excerpt: 'Learn the fundamental steps every beginner investor should take to build a solid financial foundation and start growing wealth systematically.',
      category: 'Investment',
      date: 'Jan 15, 2025',
      author: 'Shantanu Pandey',
      slug: '5-steps-start-investment-journey',
    },
    {
      title: 'How to Optimize Your Tax Savings Using ELSS and NPS',
      excerpt: 'Discover how Equity Linked Savings Schemes and National Pension System can help you save taxes while building long-term wealth.',
      category: 'Tax Planning',
      date: 'Jan 10, 2025',
      author: 'Shantanu Pandey',
      slug: 'optimize-tax-savings-elss-nps',
    },
    {
      title: 'Retirement Planning in Your 30s: Why Starting Early Matters',
      excerpt: 'The power of compounding works best when you start early. Learn why your 30s are the perfect time to plan for retirement.',
      category: 'Retirement',
      date: 'Jan 5, 2025',
      author: 'Shantanu Pandey',
      slug: 'retirement-planning-30s',
    },
  ];

  const categories = ['All', 'Investment', 'Tax Planning', 'Retirement', 'Insurance'];

  return (
    <div>
      <PageBanner
        title={t('blog')}
        breadcrumbs={[{ name: t('blog'), href: '/blog' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Financial Insights & Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert advice on investments, tax planning, retirement, and wealth management.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 hover:bg-deepBlue hover:text-white transition-all font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-deepBlue to-emerald"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-emerald/10 text-emerald px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-poppins group-hover:text-deepBlue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-deepBlue font-medium hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-br from-deepBlue to-emerald rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get weekly financial tips, market insights, and exclusive content delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-white text-deepBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
