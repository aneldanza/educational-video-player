import { useAppSelector } from "./app/hooks";
import { useGetVideoByUserIdQuery } from "./api/createVideosApi";

const userId = "anel_danza";

function App() {
  const videos = useAppSelector((state) => state.videos.videos);
  const { data, error, isLoading } = useGetVideoByUserIdQuery(userId);

  const openModal = () => {};

  return (
    <div className="flex-col">
      <nav className="flex bg-slate-200 p-2 justify-between">
        <div>Logo</div>
        <div className="border border-black rounded-2xl px-5">search bar</div>
        <button
          className="border border-black rounded-xl px-2 cursor-pointer"
          onClick={openModal}
        >
          Upload
        </button>
      </nav>
      <main className="bg-slate-500 p-2">
        {error ? (
          <div>there was an error!</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          <ul className="flex-col divide-y divide-white">
            {videos.map((video, i) => {
              return <li key={`video-${i}`}>{video.title}</li>;
            })}
          </ul>
        ) : null}
      </main>
    </div>
  );
}

export default App;
