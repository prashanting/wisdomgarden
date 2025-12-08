import React from 'react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="bg-earth-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-earth-100">
        <h1 className="text-3xl font-serif font-bold text-sage-900 mb-8">Disclaimer & Policy</h1>
        
        <div className="prose prose-stone text-earth-800">
            <h3 className="font-bold text-lg mb-2">1. Educational & Informational Purpose Only</h3>
            <p className="mb-6 text-sm leading-relaxed">
                The content provided on Vedic Garden Essentials (depor.garden), including text, graphics, images, and other material, is for educational and informational purposes only. It is based on traditional organic gardening practices, Vedic texts, and general horticultural knowledge.
            </p>

            <h3 className="font-bold text-lg mb-2">2. Not Professional Advice</h3>
            <p className="mb-6 text-sm leading-relaxed">
                We are <strong>not</strong> a registered agricultural agency, extension service, or certified botanical institution. The tips and methods shared here are suggestions for home gardening enthusiasts. They should not be substituted for professional advice regarding large-scale farming, pesticide regulation, or land management.
            </p>

            <h3 className="font-bold text-lg mb-2">3. No Guarantees</h3>
            <p className="mb-6 text-sm leading-relaxed">
                Gardening results vary significantly based on climate, soil type, plant variety, and care. While we strive to provide accurate information, we cannot guarantee specific results (e.g., yield size, pest elimination). Use these methods at your own discretion.
            </p>

            <h3 className="font-bold text-lg mb-2">4. Product References</h3>
            <p className="mb-6 text-sm leading-relaxed">
                Any reference to specific products, brands, or commercial services is for illustrative purposes only and does not constitute an endorsement or recommendation. We are currently an information-only platform and do not sell physical products.
            </p>

            <h3 className="font-bold text-lg mb-2">5. Privacy & Advertising</h3>
            <p className="mb-6 text-sm leading-relaxed">
                We may display advertisements from third-party networks (such as Google AdSense). These networks may use cookies to serve ads based on your prior visits to our website. You may opt-out of personalized advertising by visiting Google's Ads Settings. We do not sell your personal email or contact information to third parties.
            </p>

            <div className="mt-8 pt-8 border-t border-earth-200 text-xs text-earth-500">
                Last Updated: October 2024. <br/>
                For any questions regarding this disclaimer, please contact us via our Contact page or email us directly at <a href="mailto:info@depor.garden" className="text-sage-700 underline font-medium">info@depor.garden</a>.
            </div>
        </div>
      </div>
    </div>
  );
};