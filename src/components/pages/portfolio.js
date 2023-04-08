import Header from '../template/header';
import Footer from '../template/footer';

function Portfolio() {
  const portofolioList = [
    {
      id: 1,
      img: './assets/img/hsbc-fsd04-tugas01.webp',
      title: 'Clone Sederhana Website harisenin.com',
      desc: 'Project HTML dan CSS dalam program  harisenin Full Stack Developer Batch 4',
      tech: '<ul><li>HTML</li><li>CSS</li></ul>',
      link: 'https://github.com/samuelchristopher/HSBC-FSD04-01-HTML-CSS',
    },
    {
      id: 2,
      img: './assets/img/hsbc-fsd04-tugas03.webp',
      title: 'Website Sederhana untuk Weather API dan Simple Calculator',
      desc: 'Project JavaScript dalam program  harisenin Full Stack Developer Batch 4',
      tech: '<ul>HTML</ul><li>CSS</ul><li>JS</li></ul>',
      link: 'https://github.com/samuelchristopher/HSBC-FSD04-03-JS',
    },
    {
      id: 3,
      img: './assets/img/hsbc-fsd04-tugas-team-final-project.webp',
      title: 'Harisenin Full Stack Developer Final Project',
      desc: 'Project Akhir dalam program harisenin Full Stack Developer Batch 4',
      tech: '<ul><li>Front End: React JS</li><li>Back End: Express JS</li><li>ORM: Sequelize</li><li>DB: MySQL</li></ul>',
      link: 'https://github.com/samuelchristopher/finalproject8-backend',
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
          {/* <!-- test --> */}
          <div className="container max-w-6xl mx-auto py-4 px-4">
            <div className="py-4">
              <h2 className="font-bold text-2xl mb-3">Portfolio Saya</h2>
            </div>
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {portofolioList.map((v, i) => {
              return (
                <div className="flex flex-wrap my-3 border-2 space-x-10 border-gray-200 bg-slate-50 rounded-md content-center">
                  <div className="flex m-4 lg:h-3/5 justify-center">
                    <img
                      className="w-56 h-[100%] rounded-md"
                      src={v.img}
                      alt=""
                    />
                  </div>
                  <div className="flex my-2 lg:h-3/5 justify-center">
                    <ul className="px-4 my-2">
                      <li className="text-2xl font-bold my-3">{v.title}</li>
                      <li className="my-3">{v.desc}</li>
                      <li className="my-3 text-sm">
                        <b>Tech Stack:</b>
                        <div dangerouslySetInnerHTML={{ __html: v.tech }}></div>
                      </li>
                      <li className="my-3">
                        <div className="flex space-x-5">
                          <div>
                            <a target="_blank" rel="noreferrer" href={v.link}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
            {/* </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
