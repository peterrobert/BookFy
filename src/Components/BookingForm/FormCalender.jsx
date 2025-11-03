const FormCalender = () => {
  return (
    <div
      id="calendar-section"
      className="bg-white border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-black mb-6">Select Date & Time</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div id="calendar-widget">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <button className="text-gray-600 hover:text-black">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <h4 className="font-semibold text-black">December 2024</h4>
              <button className="text-gray-600 hover:text-black">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Sun
              </div>
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Mon
              </div>
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Tue
              </div>
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Wed
              </div>
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Thu
              </div>
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Fri
              </div>
              <div className="text-center text-xs font-semibold text-gray-600 py-2">
                Sat
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1">
              <div className="text-center py-3 text-gray-400 text-sm">1</div>
              <div className="text-center py-3 text-gray-400 text-sm">2</div>
              <div className="text-center py-3 text-gray-400 text-sm">3</div>
              <div className="text-center py-3 text-gray-400 text-sm">4</div>
              <div className="text-center py-3 text-gray-400 text-sm">5</div>
              <div className="text-center py-3 text-gray-400 text-sm">6</div>
              <div className="text-center py-3 text-gray-400 text-sm">7</div>
              <div className="text-center py-3 text-gray-400 text-sm">8</div>
              <div className="text-center py-3 text-gray-400 text-sm">9</div>
              <div className="text-center py-3 text-gray-400 text-sm">10</div>
              <div className="text-center py-3 text-gray-400 text-sm">11</div>
              <div className="text-center py-3 text-gray-400 text-sm">12</div>
              <div className="text-center py-3 text-gray-400 text-sm">13</div>
              <div className="text-center py-3 text-gray-400 text-sm">14</div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                15
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                16
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                17
              </div>
              <div className="text-center py-3 bg-purple-primary text-white rounded cursor-pointer text-sm">
                18
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                19
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                20
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                21
              </div>
              <div className="text-center py-3 text-gray-400 text-sm">22</div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                23
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                24
              </div>
              <div className="text-center py-3 text-gray-400 text-sm">25</div>
              <div className="text-center py-3 text-gray-400 text-sm">26</div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                27
              </div>
              <div className="text-center py-3 text-gray-400 text-sm">28</div>
              <div className="text-center py-3 text-gray-400 text-sm">29</div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                30
              </div>
              <div className="text-center py-3 cursor-pointer hover:bg-purple-100 rounded text-sm">
                31
              </div>
            </div>
          </div>
        </div>

        <div id="time-slots">
          <h4 className="font-semibold text-black mb-4">
            Available Times - December 18
          </h4>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Morning
            </h5>
            <div className="grid grid-cols-2 gap-2">
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                9:00 AM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                9:30 AM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                10:00 AM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                10:30 AM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                11:00 AM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                11:30 AM
              </button>
            </div>

            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide pt-4">
              Afternoon
            </h5>
            <div className="grid grid-cols-2 gap-2">
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                1:00 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                1:30 PM
              </button>
              <button className="border border-purple-primary bg-purple-50 rounded-lg py-3 px-4 text-sm text-purple-primary font-semibold">
                2:00 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                2:30 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                3:00 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                3:30 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                4:00 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                4:30 PM
              </button>
            </div>

            <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide pt-4">
              Evening
            </h5>
            <div className="grid grid-cols-2 gap-2">
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                5:00 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                5:30 PM
              </button>
              <button className="border border-gray-300 rounded-lg py-3 px-4 text-sm hover:border-purple-primary hover:bg-purple-50 transition-colors">
                6:00 PM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCalender;
