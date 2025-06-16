import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import logo from "./assets/images/Vector.svg";
import Main from "./pages/Main";
import Footer from "./comps/Footer";
import { useEffect, useRef, useState } from "react";
import News from "./pages/News";
import Map from "./pages/Map";
import Info from "./comps/Info";
import Article from "./pages/Article";
import axios from "axios";
import type { NewsArticle, MapPoint } from "./types";
import Filters from "./comps/Filters";
import Waiting from "./comps/Waiting";
import QrModal from "./comps/QrModal";

export default function App() {
  const saveJwtToCookie = (token: string) => {
    document.cookie = `jwt=${token}; path=/`;
  };

  const readJwtFromCookie = () => {
    const cookieValue = document.cookie.match("(^|;) ?jwt=([^;]*)(;|$)");
    return cookieValue ? cookieValue[2] : null;
  };

  const apiUrl = import.meta.env.VITE_API_URL;
  const getData = (jwtToken: string | null) => {
    axios
      .get(apiUrl + "api/map_objects", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setMapData(response.data);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
        location.reload();
      });
    axios
      .get(apiUrl + "api/events", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setNewsData(response.data);
      })
      .catch(() => {
        console.error("Ошибка получения информации");
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
        location.reload();
      });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "normal");
    const jwtToken = readJwtFromCookie();
    if (jwtToken) {
      getData(jwtToken);
    } else {
      axios
        .post(apiUrl + "api/authentication_token", {
          username: "admin",
          password: "foo",
        })
        .then((response) => {
          const newJwtToken = response.data.token;
          saveJwtToCookie(newJwtToken);
          getData(newJwtToken);
        })
        .catch((error) => {
          console.error("Ошибка авторизации:", error);
        });
    }
  }, []);
  const [isOnWaiting, setOnWaiting] = useState(true);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [mapData, setMapData] = useState<MapPoint[]>([]);
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isQrModalOpen, setQrModalOpen] = useState(false);
  const point = useRef(0);
  const article = useRef(0);
  return (
    <div className="z-0 fixed">
      <Router>
        <Footer
          filters={selectedFilters.length}
          onFilterClick={() => setFilterModalOpen(true)}
        />
        <Routes>
          <Route path="*" element={<Navigate to="/map" />} />
          <Route
            path="/map"
            element={
              <Map
                mapdata={mapData}
                setInfoModalOpen={(index) => {
                  point.current = index;
                  setInfoModalOpen(true);
                }}
              />
            }
          />
          <Route
            path="/news"
            element={
              <News
                news={newsData}
                setArticle={(index) => {
                  article.current = index;
                }}
              />
            }
          />
          <Route
            path="/newsarticle"
            element={<Article news={newsData[article.current]} />}
          />
        </Routes>
        <Main onWaiting={isOnWaiting} onClicked={() => setOnWaiting(false)} />
        <img
          src={logo}
          alt="logo"
          className={`fixed origin-top-right left-0 right-0 mx-auto w-[657px] h-[647px] mt-[80px] delay-600 duration-800 transition ${!isOnWaiting && "translate-x-[671px] scale-[34%]"} z-2`}
        />
        {isInfoModalOpen && (
          <Info
            onTrace={() => {
              setQrModalOpen(true);
            }}
            data={mapData[point.current]}
            onClose={() => {
              setInfoModalOpen(false);
            }}
          />
        )}
        {isFilterModalOpen && (
          <Filters
            selectedFilters={selectedFilters}
            onSetFiltered={(filters) => setSelectedFilters(filters)}
            onClose={() => {
              setFilterModalOpen(false);
            }}
          />
        )}
        {isQrModalOpen && (
          <QrModal
            data={mapData[point.current]}
            onClose={() => {
              setQrModalOpen(false);
            }}
          />
        )}
        {!isOnWaiting && <Waiting />}
      </Router>
    </div>
  );
}
