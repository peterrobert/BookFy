const AppCategories = ({ category }) => {
  const { icon, title, professionals } = category;
  return (
    <div className="bg-white p-6 rounded-xl border border-black shadow-lg hover:shadow-xl transition-all cursor-pointer group">
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-primary transition-colors">
          <i
            className={`${icon} text-purple-primary text-2xl group-hover:text-white`}
          ></i>
        </div>
        <h3 className="font-semibold text-black mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{professionals}</p>
      </div>
    </div>
  );
};

export default AppCategories;
