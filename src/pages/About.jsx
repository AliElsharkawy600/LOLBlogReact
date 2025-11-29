import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About LoL Blog
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              LoL Blog is a community-driven platform dedicated to sharing
              League of Legends knowledge. Whether you're a casual player
              looking to improve or a competitive enthusiast seeking advanced
              strategies, our platform brings together players of all skill
              levels to share guides, builds, and gameplay tips.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              What We Offer
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
              <li>Champion-specific guides and build recommendations</li>
              <li>Role-focused strategies and gameplay mechanics</li>
              <li>Patch-aware content staying current with game updates</li>
              <li>Community discussions through comments</li>
              <li>User voting to highlight the best content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Getting Started
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Browse existing guides, create your own posts, and engage with the
              community. All users can publish content about their favorite
              champions and share strategies that have worked for them.
              Together, we're building the ultimate League of Legends knowledge
              base.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Guidelines
            </h2>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
              <li>Be respectful and constructive in comments</li>
              <li>Share accurate information and your experiences</li>
              <li>Avoid spoilers for competitive events</li>
              <li>Help newer players learn and improve</li>
            </ul>
          </section>

          <div className="text-center pt-6 border-t border-gray-300 dark:border-gray-600">
            <p className="text-gray-600 dark:text-gray-400">
              Made with ⚔️ by League of Legends enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
