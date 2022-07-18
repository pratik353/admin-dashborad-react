import React, { useState } from "react";
import "./new.scss";

import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar";

import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {/* Changing the edited file on display though using createUrlObject*/}
            <img
              src={file ? URL.createObjectURL(file) : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfh4+Sts7bn6eq2u76xt7rf4eLY29y+w8XP0tTS1dfV2NrIzM7Lz9HBxci7v8KwFNh5AAAFMUlEQVR4nO2d23KEIAxAvURB8fb/X1vR7nZdbVchkUBzZvrSJ88ACaDJZpkgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIg/GMAQj8BFbOY0p1p26E1nVbLP9IBsqIbpzovn+R1NZoiFUvQ/WTl8g32H1Wv45+0kJlqZ/diWbVF1I6Q9fVveg/JfIzXEYr+b72HZK8idTT1Cb/FMR9CP6sDoKYzA/hwrHRswwgmP++3TNUhMsXxkt/iOIV+5isU1WVBO1PjCTjqbIh5U6wjWYyg3QRtTO2iUNTXYszWMQZF5SE4K/KfqIXrFP02zHVog0+4RNGNYlWEVvgTuJ4Hd4qs8yK03oKzYs94KSp/P6vIdynChDCENvOHFvkNlDm6KLKdpzh+Odt5ihBHn4Y846lGE7S7t9A2ByAOoc37oXUOUIiCLFci6hDaQWQXTgtMP6uoQhu9gZYLn4bcciL4HZoO4LaxwUwVK8wSBvT4hg2raQq+B98DalZHYdxkuMIrJRoKQ073/NBQGE6MDL3vnw7htBBVTSDIaiFqCsG8NKG9fqAINKw2bjDQGI58DHFPTk9DPsGUJFmwOugj3ZPuDBkdL0jS4Uxorx/SN0Q//q6Uob1+SN8w/VlKZMgoliafLf5Bxk9/15b8zjv90xPBffBiyOgEjPMNxs6Q0S1G+jdRNLeJrK71sd+tLYacboT/wa1++m9m0n+7RvGGlFE2tKT/lhv/SwVGm9IV9K9NWEVSS/pfDCHHGn5DiLxzY3S8fyH5ry9xv6DltwoteOGU4yq0oF3X8MuFT3D234zuSXcgVZSwDDMr6VcFpV/ZlSFU5/E6+B5QeJWQ8k0ULyRfJZuBV6Wz4S/oo1hGUcqduSvGUo5vcesaUcfTNSJz6/zBPU1sgfZq95Y+9CNfBdSVmRphBx7L6WEsyxi7KGVLp68zjmUZd7ev/HM3s6hC6A5Qw/RnR7poO5m9ovqqPOoqWNajTqR1ImTKrJY/1KNRieh9A7NmZ4ah7/vBdCrZPqawEPopKIAjQj8UCtaj0PPs7Mdxqqq6rvP5r6qmZuyHttOqiFfVPvYcXzadZx/xdPOfqhl0XHvuzI6c6oaxepX6K+fbyNr0JpbMYUNmX+Vn3Paarea+fwPQq90FubdNQNMWbBcmZN1Yu9q9Wk6tYigJmR4/bLKvWFYts+BjJyeS3kMybwybyAOZaXwn56FkzePcAdnwoaG1h2M5Bb/cAPXpiOsrOQW9Q539KPW+HatgL0yh6Ilq1t4dQ43jcIvf6tjcvx7dmwU7Oo735g5QDfkCfHes2zsVzd1++TJV70qPtmP+7X6L403DeLVjPqpjc4chTa3hWcWcOqhee6NEoUhcSQPdrTni2HGkFBwCxNC9Il3Hb6Jy38vQvfCnqdh2gOqrFDaCVN+lBErzv4D/8RRRkx130Ccqoyn6DfI3fkyi6Cuov4RBUD+JAOK3tuiVd0jglQ5RlDGjgFWX4fnLMZSUKAdGLnu1YxCiDdD0LUECYykynqMW//ITogZJeHhXL3TMBf0LhgNfWpzAL54SNYBCxW9rU5B0QEbG526K5350h8cgMs8UD9wzRgyr0OJRVcs/kK44l9XSdGEjwDUn8t5yb3D92Z1oBF1jDetDxRa3aRrRJHWdpjHsZx447WuiiaQWl2YosaT7FZftN/uj7xsOB+FYNjQrDv3raH46hgyHjEjz0zFkOFwOs7+g2eLQESWiHY3F4QQ12AKlmLicLorYuDyGgiAIgiAIgiAIgiAIwq18AZG/Vb/r98fMAAAAAElFTkSuQmCC"}
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" onChange={(e)=>{setFile(e.target.files[0])}} style={{ display: "none" }} />{" "}
                {/* if htmlFor and id of input is same then we can accessinpute from lable */}
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
