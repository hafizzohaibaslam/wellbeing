import React from 'react';

interface Report {
  id: number;
  title: string;
}

const TopReports: React.FC = () => {
  const reports: Report[] = [
    { id: 1, title: 'iste natus error sit voluptatem accusantium' },
    { id: 2, title: 'iste natus error sit voluptatem accusantium' },
    { id: 3, title: 'iste natus error sit voluptatem accusantium' },
    { id: 4, title: 'iste natus error sit voluptatem accusantium' },
    { id: 5, title: 'iste natus error sit voluptatem accusantium' },
  ];

  return (
    <div className='bg-secondary3 rounded-[16px] lg:max-w-[283px] text-white px-[24px] mt-[50px] py-[32px]'>
      <p className='text-[24px] leading-[24px] mb-[24px]'>Top Reports</p>

      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 lg:flex lg:flex-col flex-row justify-between items-center flex-wrap'>
        {reports.map((report) => (
          <div key={report.id} className='flex items-center gap-4 py-[16px] border-b border-lightGray'>
            <p className='text-[40px] font-normal leading-normal'>{report.id}</p>
            <p className='text-[14px] leading-[30px]'>{report.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopReports;
