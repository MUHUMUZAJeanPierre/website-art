import car from "../assets/car.png";
import ticks from "../assets/ticks.png";
import headset from "../assets/headset.png";

const Features: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-10 py-10 text-[#303030] font-medium">
      {/* Free Shipping */}
      <div className="flex items-center gap-3 max-w-xs text-left">
        <div className="w-12 h-12 flex-shrink-0">
          <img src={car} alt="car" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm text-[#5F5F5F]">On all orders over $0</p>
        </div>
      </div>

      {/* Secure Payments */}
      <div className="flex items-center gap-3 max-w-xs text-left">
        <div className="w-12 h-12 flex-shrink-0">
          <img src={ticks} alt="ticks" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold">Secure Payments</h3>
          <p className="text-sm text-[#5F5F5F]">100% safe and encrypted</p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="flex items-center gap-3 max-w-xs text-left">
        <div className="w-12 h-12 flex-shrink-0">
          <img src={headset} alt="headset" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-sm text-[#5F5F5F]">We’re here anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
