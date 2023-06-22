import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Tentang = () => {

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 m-20">
      <img
        className="object-cover w-full h-max shadow rounded"
        src="https://img.panditfootball.com/large/Event%20Khusus/Tsubasa%20piss.jpg"
        alt="image description"
      />
      <div className="grid place-content-center p-20">
        <h1 className="text-6xl my-2 text-gray-800">Hai, saya Rama</h1>
        <p className="text-gray-800 dark:text-gray-400 text-4xl font-light">
          Saya seorang web developer yang sudah mendalami dunia pemograman baik
          pengembangan dan pembuatan sebuah aplikasi.
        </p>
      </div>
    </div>
  );
};

export default Tentang;
