import CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUp = CountUpModule.default || CountUpModule;

const stats = [
  { label: "Global Students", value: 5000, suffix: "+" },
  { label: "Expert Tutors", value: 250, suffix: "+" },
  { label: "Live Online Classes", value: 12000, suffix: "+" },
  { label: "Personalized Learning", value: 100, suffix: "%" },
];

export default function TrustStats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="bg-gray-50 py-12 border-y border-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-4xl md:text-5xl font-bold text-gold">
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}{stat.suffix}
            </div>
            <div className="font-semibold text-gray-700 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}