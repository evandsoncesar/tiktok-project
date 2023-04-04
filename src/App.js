import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="EvandsonCesar"
          description="Frajola goleiro"
          music="Ne-Yo - Because of you"
          url = "https://cdn.discordapp.com/attachments/1090396071261372491/1091167951245295667/brecker2.mp4"
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Bruce Wayne"
          description="Robin goleiro"
          music="Bruce wayne"
          url = "https://cdn.discordapp.com/attachments/1090396071261372491/1091167951245295667/brecker2.mp4"
        />
        <Video
          likes={444}
          messages={111}
          shares={222}
          name="Bruce Benner"
          description="Hulk goleiro"
          music="Lacrimosa"
          url = "https://cdn.discordapp.com/attachments/1090396071261372491/1091167951245295667/brecker2.mp4"
        />
        <Video
          likes={123}
          messages={321}
          shares={212}
          name="Cardinot"
          description="Bronca goleiro"
          music="Uma mao na AK"
          url = "https://cdn.discordapp.com/attachments/1090396071261372491/1091167951245295667/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
