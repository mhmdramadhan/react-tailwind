import { Fragment, useContext } from 'react';
import gambarJumbotron from '../../assets/greeting.svg';
import PortofolioCard from '../../components/PortfolioCard';
import DataContext from '../../context/DataContext';

const Home = () => {
  const { portofolio } = useContext(DataContext);

  return (
    <Fragment>
      <div className="mx-auto p-20 grid grid-cols-1 xl:grid-cols-2 h-screen">
        <div className="grid place-content-center">
          <h1 className="text-3xl text-gray-700 font-bold bg-gray-300 shadow rounded-md px-2">
            Hallo! Selamat datang 👋
          </h1>
          <p className="text-2xl text-gray-700 font-thin px-2">
            Mari cari tahu lebih banyak
          </p>
        </div>
        <div className="grid xl:place-content-center place-content-start">
          <img src={gambarJumbotron} className="w-full" />
        </div>
      </div>
      <div className="container bg-gray-800 mx-auto p-8 border shadow rounded-xl -mb-10 relative z-10">
        <h2 className="text-3xl font-bold text-white">Portofolio Saya</h2>
      </div>
      <div className="bg-gray-200 p-20 relative z-0">
        <div className="container mx-auto grid xl:grid-cols-4 md:grid-cols-2 justify-items-center">
          {portofolio.map((item) => {
            return (
              <PortofolioCard
                key={item.id}
                link={
                  'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn'
                }
                name={item.name}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full h-20"></div>
    </Fragment>
  );
};

export default Home;
