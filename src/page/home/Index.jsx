import { Fragment, useContext, useEffect, useState } from 'react';
import gambarJumbotron from '../../assets/greeting.svg';
import PortofolioCard from '../../components/PortfolioCard';
import DataContext from '../../context/DataContext';
import Loading from '../../components/Loading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const { portofolio } = useContext(DataContext);
  const [berita, setBerita] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getBeritaKotaBogor = async () => {
    setIsloading(false);
    try {
      const response = await fetch(
        'https://api-splp.layanan.go.id/t/kotabogor.go.id/KotaBogor/1.0/berita?key=b3r1t4b0g0r',
        {
          method: 'GET',
          headers: {
            apikey:
              'eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJic3dAa290YWJvZ29yLmdvLmlkIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJic3dAa290YWJvZ29yLmdvLmlkIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJCb2dvciBBcGxpa2FzaSBTdXBlciIsImlkIjoxMjY4LCJ1dWlkIjoiZmFmMzFiZGItOGNlMC00YTlmLWFmYWQtNDU1NzExZDY3YzY5In0sImlzcyI6Imh0dHBzOlwvXC9zcGxwLmxheWFuYW4uZ28uaWQ6NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsiVW5saW1pdGVkIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9fSwia2V5dHlwZSI6IlBST0RVQ1RJT04iLCJzdWJzY3JpYmVkQVBJcyI6W3sic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImtvdGFib2dvci5nby5pZCIsIm5hbWUiOiJLb3RhQm9nb3IiLCJjb250ZXh0IjoiXC90XC9rb3RhYm9nb3IuZ28uaWRcL0tvdGFCb2dvclwvMS4wIiwicHVibGlzaGVyIjoiYWRtaW5Aa290YWJvZ29yLmdvLmlkIiwidmVyc2lvbiI6IjEuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE2ODEyNzAwNDcsImp0aSI6IjE0MDc0YmMzLWM3NzQtNDZlMi1iYWUzLTE0Y2YwMzUzMTJhMiJ9.vkhrMMKwlUqQK_OZ5_j-0bKXFKobxCyf6YV9WHkvAxWD-CNaDFy1GKKGuYbScKbFATDp0eytRBF1Yi8HRZ00OIzsMDSuVhVHj50fmSMGYu83MCc7639yrAhxcs1el1R8tRfGdYpsIgezoA_rKCivWLnenvWlRSadWnLUGiJsOmv8xwUSQdCkNISsgBkC0w1b0FkjeDzLQVkupI3JY9uR6sto0y1vl41AnaaFHBtfZY_iVswfqZ-D1SNUtsgUbwg89HL-E7G4m85R4pvhcGmAK15Oht4kBwu1k1cRhtjLKYHo6ohc1HXvnW9OCe2ycHc7tVETPFXvO7R5IWN1uDEq7Q==',
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let responseData = await response.json();
      setBerita(responseData['Berita Bogor']);
      setIsloading(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false
  };

  useEffect(() => {
    getBeritaKotaBogor();
  }, []);

  return (
    <Fragment>
      <section>
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
      </section>
      <section>
        <div className="container bg-gray-800 mx-auto p-8 rounded-xl -mb-10 relative z-10">
          <h2 className="text-3xl font-bold text-white">Portofolio Saya</h2>
        </div>
        <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-20 relative z-0">
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
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">
                Berita Kota Bogor
              </h1>
              <div className="h-1 w-20 bg-gray-500 rounded"></div>
              {!isLoading && <Loading />}
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {berita.slice(0, 6).map((item) => {
              return (
                <div key={item.postid} className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="bg-gray-300 p-6 rounded-lg shadow-lg">
                    <img
                      className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                      src={item.gambar}
                      alt={item.judul}
                    />
                    <h3 className="tracking-widest text-black text-xs font-medium title-font">
                      {item.tanggal}
                    </h3>
                    <h2 className="text-lg text-black font-medium title-font mb-4">
                      {item.judul}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.konten.substring(0, 200)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="">
        <Slider {...settings}>
          <div className="hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Laravel
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Telah membuat beberapa aplikasi sejak tahun
              </p>
            </div>
          </div>
          <div className="hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  );
};

export default Home;
