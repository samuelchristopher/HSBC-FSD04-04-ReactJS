import Header from '../template/header';
import Footer from '../template/footer';

function Beranda() {
  const portofolioList = [
    {
      id: 1,
      title: 'Clone Sederhana Website harisenin.com',
      img: './assets/img/hsbc-fsd04-tugas01.webp',
    },
    {
      id: 2,
      title: 'Website Sederhana untuk Weather API dan Simple Calculator',
      img: './assets/img/hsbc-fsd04-tugas03.webp',
    },
    {
      id: 3,
      title: 'Harisenin Full Stack Developer Final Project',
      img: './assets/img/hsbc-fsd04-tugas-team-final-project.webp',
    },
  ];
  return (
    <div>
      {/*Begin Header */}
      <Header />
      <main>
        {/* <!-- content goes here --> */}
        <div
          className="bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('./assets/img/main-bg-op.webp')` }}
        >
          <div className="container max-w-6xl mx-auto px-4 py-32">
            <div className="flex justify-between items-center">
              <div className="w-full text-center">
                <h1 className="font-extrabold text-4xl">
                  Selamat Datang di Web Portfolio Saya
                </h1>
              </div>
            </div>
          </div>

          {/* <!-- test --> */}
          <div className="container max-w-6xl mx-auto py-4 px-4">
            <div className="py-4">
              <h2 className="font-bold text-2xl mb-3">Portfolio Saya</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portofolioList.map((v, i) => {
                return (
                  <div className="flex flex-wrap border-2 border-gray-200 bg-slate-50 rounded-md content-center">
                    <div className="flex my-2 lg:h-3/5 justify-center">
                      <img src={v.img} className="rounded-md" alt=""></img>
                    </div>
                    <div className="font-bold text-xl px-4 my-2">{v.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Beranda;
