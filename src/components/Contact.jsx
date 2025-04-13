import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-200 px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-400">
        
        {/* Address */}
        <div className="flex items-center gap-4 px-4 py-4">
          <MapPin className="text-gray-700 shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-semibold text-gray-800">Plot 25 Kunle Street, Abuja</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 px-4 py-4">
          <Phone className="text-gray-700 shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-800">(+234) 805 784 511</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 px-4 py-4">
          <Mail className="text-gray-700 shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-800">info@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
