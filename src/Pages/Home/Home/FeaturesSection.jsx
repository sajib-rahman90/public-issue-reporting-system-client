import {
  ShieldCheck,
  MapPinned,
  BellRing,
  Users,
  BarChart3,
  Clock3,
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
            APPLICATION FEATURES
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Powerful Features Built for
            <span className="text-blue-600"> Modern Civic Systems</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A complete platform to report, track, assign, and resolve civic
            issues with transparency and control.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 hover:opacity-100 transition"></div>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <MapPinned size={38} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Smart Issue Reporting
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Citizens can report issues with images, location, category, and
              description in seconds with a simple interface.
            </p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-br from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Clock3 size={38} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Real-Time Tracking
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Track issue progress live from pending to resolved with full
              transparency and timeline updates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <BellRing size={38} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Instant Notifications
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Get real-time alerts when issues are assigned, updated, or
              resolved instantly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <ShieldCheck size={38} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Secure Role System
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Role-based access for Admin, Staff, and Users ensures secure and
              controlled system operation.
            </p>
          </div>

          {/* Card 5 */}
          <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <BarChart3 size={38} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Analytics Dashboard
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Visual dashboards with charts and insights to monitor system
              performance and issue trends.
            </p>
          </div>

          {/* Card 6 */}
          <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Users size={38} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
              Staff Assignment
            </h3>

            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Admins can assign issues to staff and track progress efficiently
              in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
