const Stages = () => {
  const stages = [
    {
      stage: 1,
      users: 100,
      totalDonated: 4200,
      progress: 7,
    },
    {
      stage: 2,
      users: 85,
      totalDonated: 3600,
      progress: 5,
    },
    {
      stage: 3,
      users: 150,
      totalDonated: 7100,
      progress: 9,
    },
    {
      stage: 4,
      users: 65,
      totalDonated: 2900,
      progress: 4,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-Outfit">
      {stages?.map(({ stage, users, totalDonated, progress }) => {
        const progressPercent = (progress / 10) * 100;

        return (
          <div
            key={stage}
            className="rounded-[15px] border-[3px] border-white/20 bg-neutral-30 text-white px-6 py-5 w-full max-w-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-medium">Stage {stage}</h2>
              <span className="bg-primary-10 text-white text-sm px-3 py-1 rounded-full">
                {users} users
              </span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-medium">Total donated</p>
              <p className="font-medium">${totalDonated.toLocaleString()}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="w-full max-w-[172px] h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-primary-10 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-sm text-white/80 ml-2">
                {progress}/10 to next Cycles
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stages;
