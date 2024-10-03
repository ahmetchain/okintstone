import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" min-h-[450px] relative mt-20 bg-gray-900 text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>

      <div className="relative z-10 container mx-auto px-4 py-28">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Klar Koltuk</h2>
            <p className="text-sm text-gray-300">
              Evinizin konforunu yeniden tasarlıyoruz. Kalite ve şıklık bizim
              işimiz.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/klarkoltuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/klarkoltuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905333709349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <a
                  href="https://wa.me/905333709349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-300"
                >
                  +90 533 370 93 49
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <a
                  href="mailto:info@klarkoltuk.com"
                  className="hover:text-gray-300 transition duration-300"
                >
                  info@klarkoltuk.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <p>Seyhan, 643. Sk. no:27/2, 35380 Buca/İzmir</p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/klarkoltuk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/905333709349"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500 transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.google.com/maps/place/Klar+Koltuk/@38.3706212,27.1380217,17z/data=!3m1!4b1!4m6!3m5!1s0x14bbdf06ea95e47d:0x800635dd2fbefea5!8m2!3d38.370617!4d27.1405966!16s%2Fg%2F11lf93vdw3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition duration-300"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
            <a
              href="https://wa.me/905333709349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition duration-300 text-sm"
            >
              Şimdi Teklif Alın
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Klar Koltuk. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
