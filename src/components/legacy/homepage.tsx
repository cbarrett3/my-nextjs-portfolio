import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

const LegacyHomepage: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-900 to-black h-screen max-h-screen overflow-y-hidden w-screen overflow-x-auto scrollbar-hide z-0 relative">
      <div
        className={styles.snowflakes}
        aria-hidden="true"
      ></div>
      <div className="flex flex-row h-screen overflow-x-scroll">
        <div className="bg-neutral-900 bg-opacity-95 border-yellow-600 border-8 rounded-md z-30 ml-12 mt-2 pt-4 pl-8 pr-8 w-96 h-96 max-h-96 mr-80">
          <h1 className="text-5xl text-white">
            Welcome! / ¡Bienvenido/a!
          </h1>
          <Link href="/private/admin">
            <a>
              <h1 className="text-3xl text-yellow-600 mt-4 font-bold">
                I am Connor
              </h1>
            </a>
          </Link>
          <h1 className="text-xl mt-3 text-neutral-400 font-normal">
            Welcome to my virtual home. 🍻
          </h1>
          <div className="flex flex-col justify-between">
            <div className="ml-14 flex flex-row">
              <Image
                src="/me.png"
                alt="me"
                width={172}
                height={172}
                objectFit="contain"
                quality={75}
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="bg-yellow-700 border-yellow-900 border-8 rounded-md z-30 mt-40 mr-8 pt-4 pl-8 pr-8 pb-2 h-fit min-w-max">
          <h1 className="text-4xl text-black font-bold">
            My Things
          </h1>
          <h1 className="text-xl mt-3 text-black font-light">
            Technical Expertise
          </h1>
          <div className="text-lg text-gray-900 font-semibold mt-4 flex items-center">
            Web and Mobile Apps
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/reactt.png"
                alt="cactus"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/next.png"
                alt="cactus"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/angular.svg"
                alt="angular"
                width={30}
                height={30}
              />
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/gatsby.svg"
                alt="gatsby"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="text-lg text-gray-900 font-semibold mt-4 flex items-center">
            UI/UX Design
            <div className="ml-6 flex items-center hover:scale-150">
              <Image
                src="/ai.png"
                alt="adobe-illustrator"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/xd.png"
                alt="adobe-xd"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-900 font-semibold mt-2 flex items-center">
            Microservices and APIs
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/nodejs.png"
                alt="node-js"
                width={50}
                height={50}
                objectFit="contain"
              />
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/net.png"
                alt="asp-dot-net-core"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-900 font-semibold flex items-center">
            Data Modeling and Visualization
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/visio.png"
                alt="visio"
                width={27}
                height={27}
                objectFit="contain"
              />
            </div>
            <div className="ml-2 flex items-center hover:scale-150">
              <Image
                src="/pbi.svg"
                alt="visio"
                width={55}
                height={55}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 border-indigo-700 border-8 rounded-md z-30 mt-4 mr-8 pt-4 pl-8 pr-8 pb-2 h-fit min-w-max">
          <h1 className="text-4xl text-white font-bold">
            My Side Things
          </h1>
          <h1 className="text-xl mt-3 text-gray-200 font-light">
            Recent Interests
          </h1>
          <div className="text-lg text-gray-100 font-normal mt-4 flex items-center">
            Web 3.0 and Blockchain
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/cardano.png"
                alt="cardano"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-100 font-normal mt-4 flex items-center">
            Anything Music
            <div className="ml-6 flex items-center hover:scale-150">
              <Link href="https://open.spotify.com/user/zydyw63jgxxfhkdehk0zz7fik">
                <a>
                  <Image
                    src="/spotify.png"
                    alt="spotify"
                    width={26}
                    height={26}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Link href="https://soundcloud.com/connorbarrett11">
                <a>
                  <Image
                    src="/soundcloud.png"
                    alt="soundcloud"
                    width={33}
                    height={33}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <Link href="https://audius.co/connorleon97">
              <a>
                <div className="ml-4 flex items-center hover:scale-150">
                  <Image
                    src="/audius.png"
                    alt="audius"
                    width={28}
                    height={28}
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/flstudio.png"
                alt="flstudio"
                width={28}
                height={28}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-100 font-normal mt-4 flex items-center">
            Getting Outdoors
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/volcano.png"
                alt="volcano"
                width={27}
                height={27}
                objectFit="contain"
              />
            </div>
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/sloth.png"
                alt="mtn"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-100 font-normal mt-4 mb-4 flex items-center">
            Currently Reading About
            <div className="ml-4 flex items-center hover:scale-150">
              <Image
                src="/mind.jpg"
                alt="mind-gut-connection-book"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
            <div className="ml-2 flex items-center hover:scale-150">
              <Image
                src="/historyofworld.jpg"
                alt="history-of-world-book"
                width={30}
                height={30}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 border-neutral-900 rounded-md border-8 z-30 mt-24 pt-4 pl-8 pr-8 h-fit max-h-96 min-w-fit">
          <h1 className="text-4xl text-black font-bold">
            Where
          </h1>
          <h1 className="text-xl mt-2 text-black font-light">
            Experience building solutions for Fortune 500
            companies across various industries
          </h1>
          <div className="text-lg text-gray-900 font-semibold mt-4 flex items-center">
            Analytics Engineer - Energy Efficiency
            <div className="ml-4 flex items-center hover:scale-125">
              <Image
                src="/dnv-logo.png"
                alt="dnv-logo"
                width={45}
                height={45}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-900 font-semibold mt-4 flex items-center">
            Full-Stack Developer - Data Visualization
            <div className="ml-4 flex items-center hover:scale-125">
              <Image
                src="/syneos.svg"
                alt="syneos-logo"
                width={55}
                height={55}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-900 font-semibold flex items-center">
            Business Intelligence Engineer
            <div className="ml-4 flex items-center hover:scale-125">
              <Image
                src="/3m.png"
                alt="3m-logo"
                width={40}
                height={40}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="text-lg text-gray-900 mt-2 mb-4 font-semibold flex items-center">
            Advanced Analytics Intern
            <div className="ml-4 flex items-center hover:scale-125">
              <Image
                src="/amfam.png"
                alt="american-family-insurance-logo"
                width={45}
                height={45}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-red-500 to-black border-orange-400 border-neutral-300 rounded-md border-8 z-30 mt-24 ml-8 pt-4 pl-8 pr-8 w-96 h-96 max-h-96 min-w-max">
          <h1 className="text-4xl font-bold text-neutral-100">
            Since When
          </h1>
          <h1 className="text-xl mt-3 text-gray-200 font-light">
            University of Wisconsin-Madison
          </h1>
          <h1 className="text-md mt-2 text-gray-200 font-normal">
            B.S. in Computer Science - 2019 🎓
          </h1>
          <div className="flex justify-center hover:scale-105">
            <Image
              src="/madison.jpg"
              alt="Picture of the author"
              width={250}
              height={250}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="bg-sky-600 border-yellow-400 border-8 z-30 ml-16 pt-4 pl-4 pr-4 h-full w-fit ">
          <h1 className="text-4xl font-bold text-gray-300">
            Socials
          </h1>
          {/* <h1 className="text-xl mt-3 text-gray-500 font-normal">
        </h1> */}
          <div className="grid grid-cols-1 mt-8">
            <div className="hover:scale-110 ml-12">
              <Link href="https://twitter.com/connorleon97">
                <a>
                  <Image
                    className={styles.rotatetwitter}
                    src="/twit.png"
                    alt="Twitter Icon"
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <div className="hover:scale-90">
              <Link href="https://connorleon97.medium.com/">
                <a>
                  <Image
                    className={styles.rotatemedium}
                    src="/medium.png"
                    alt="Medium Icon"
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <div className="hover:scale-110 ml-16">
              <Link href="https://github.com/cbarrett3">
                <a>
                  <Image
                    className={styles.rotategithub}
                    src="/git.png"
                    alt="Github Icon"
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <div className="hover:scale-90">
              <Link href="https://www.linkedin.com/in/connorbarrett97/">
                <a>
                  <Image
                    className={styles.rotatelinkedin}
                    src="/linkedin.png"
                    alt="LinkedIn Icon"
                    width={55}
                    height={55}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyHomepage;
