import { useAppSelector } from "./app/hooks";
// import { addVideos, addVideo } from "./app/videoSlice";

function App() {
  const videos = useAppSelector((state) => state.videos.videos);

  return (
    <div className="flex-col">
      <nav className="flex bg-slate-200 p-2 justify-between">
        <div>Logo</div>
        <div className="border border-black rounded-2xl px-5">search bar</div>
        <button className="border border-black rounded-xl px-2 cursor-pointer">
          Upload
        </button>
      </nav>
      <main className="bg-slate-500 p-2">
        <div>Videos</div>
        <ul className="flex-col divide-y divide-white">
          {videos.map((video, i) => {
            return <li key={`video-${i}`}>{video.title}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
