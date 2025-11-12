const ProfileEducationSection = () => {
  return (
    <div
      id="credentials-section"
      className="bg-white rounded-xl border border-gray-200 shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-black mb-6">
        Education & Credentials
      </h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-graduation-cap text-purple-primary text-xl"></i>
          </div>
          <div>
            <h3 className="font-semibold text-black">Medical Degree</h3>
            <p className="text-gray-600">
              Harvard Medical School - Doctor of Medicine (M.D.)
            </p>
            <p className="text-sm text-gray-500">
              Graduated Magna Cum Laude, 2005
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-certificate text-purple-primary text-xl"></i>
          </div>
          <div>
            <h3 className="font-semibold text-black">Dermatology Residency</h3>
            <p className="text-gray-600">
              Johns Hopkins Hospital - Dermatology Residency
            </p>
            <p className="text-sm text-gray-500">Chief Resident, 2005-2009</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-award text-purple-primary text-xl"></i>
          </div>
          <div>
            <h3 className="font-semibold text-black">Board Certification</h3>
            <p className="text-gray-600">American Board of Dermatology</p>
            <p className="text-sm text-gray-500">
              Certified 2009, Renewed 2024
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fa-solid fa-users text-purple-primary text-xl"></i>
          </div>
          <div>
            <h3 className="font-semibold text-black">
              Professional Memberships
            </h3>
            <p className="text-gray-600">American Academy of Dermatology</p>
            <p className="text-gray-600">
              American Society for Dermatologic Surgery
            </p>
            <p className="text-sm text-gray-500">Active member since 2009</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEducationSection;
