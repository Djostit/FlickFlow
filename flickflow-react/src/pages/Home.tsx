import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Добро пожаловать в FlickFlow
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Откройте для себя идеальные фильмы, подобранные под ваши вкусы.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Персонализированные Рекомендации
            </h2>
            <p className="text-gray-600">
              Получайте рекомендации фильмов на основе ваших предпочтений и
              истории просмотров.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Изучайте Разнообразные Жанры
            </h2>
            <p className="text-gray-600">
              Открывайте фильмы различных жанров, включая драму, комедию,
              триллер и многое другое.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Простота и Удобство
            </h2>
            <p className="text-gray-600">
              Наш сервис легок в использовании и поможет вам найти следующий
              любимый фильм быстро и легко.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="/explore"
        className="mt-8"
      >
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Исследовать Сейчас
        </motion.button>
      </motion.a>
    </div>
  );
};

export default Home;
