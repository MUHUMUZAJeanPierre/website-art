const Features: React.FC = () => {
  return (
    <div className="flex justify-evenly flex-wrap gap-10 py-10 text-green-900 font-medium">

      {/* Free Shipping */}
      <div className="flex items-center text-center gap-3">
        <p className="text-4xl">🚚</p>
        <div className="text-left">
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-600">On all orders over $0</p>
        </div>
      </div>

      {/* Secure Payments */}
      <div className="flex items-center text-center gap-3">
        <p className="text-4xl">🔒</p>
        <div className="text-left">
          <h3 className="font-semibold">Secure Payments</h3>
          <p className="text-sm text-gray-600">100% safe and encrypted</p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex items-center text-center gap-3">
        <p className="text-4xl">🎧</p>
        <div className="text-left">
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-600">We’re here anytime</p>
        </div>
      </div>

    </div>
  );
};

export default Features;
