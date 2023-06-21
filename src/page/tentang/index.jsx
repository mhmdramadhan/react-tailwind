import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Tentang = () => {
  const { initialTodos } = useContext(DataContext);

  return (
    <div className="grid grid-cols-2">
      <img
        className="object-cover w-full h-max"
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
      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mt-2">
        {initialTodos.map((item) => {
          return (
            <div key={item.id} className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                {item.task}
              </dt>
              <dd className="text-lg font-semibold">yourname@flowbite.com</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default Tentang;
