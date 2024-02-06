const Home = () => {
  return (
    <div className="mb-20">
      <main className="px-4 sm:px-6 md:px-8">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <header className="relative min-h-screen">
            <h1 className="transition-all ease-linear text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
              Найди то что искал с{" "}
              <span className="text-sky-500 bg-none">FlickFlow</span>
            </h1>
            <p className="transition-all ease-linear mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
              Типо тут короче текст напиши и будет все ок.
            </p>
            <div className="p-5 rounded bg-white">
              <form onSubmit={() => console.log("test")}>
                <div className="flex items-center border-b border-sky-500 py-2">
                  <input
                    className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
                    type="text"
                    placeholder="Фильм..."
                    aria-label="Поиск"
                  />
                  <button
                    className="flex-shrink-0 border-transparent border-4 text-sky-500 hover:text-sky-800 text-sm py-1 px-2 rounded"
                    type="submit"
                  >
                    Найти
                  </button>
                </div>
              </form>
            </div>
          </header>
        </div>
      </main>
    </div>
  );
};

export default Home;
