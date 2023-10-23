import "../../css/devProfile.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Developers() {
  const developers = [
    {
      name: "John Mac Molin Millares",
      role: "Developer",
      imageSrc: "/images/molin.jpg",
    },
    {
      name: "Steve Wilben Saceda",
      role: "Developer",
      imageSrc: "/images/Steve.png",
    },
    {
      name: "Joevive Patigue",
      role: "Media Content Creator",
      imageSrc: "/images/Joevive.png",
    },
    {
      name: "JohnFred Cando",
      role: "Designer",
      imageSrc: "/images/JohnFred.jpg",
    },
  ];
  return (
    <div className="dev-prof">
      <Slide>
        {developers.map((developer, index) => (
          <div key={index} className="each-slide-effect">
            <div className="slide-div">
              <div className="dev-pic">
                <img
                  className="profile-pic"
                  src={developer.imageSrc}
                  alt={`Profile pic of ${developer.name}`}
                />
                <div className="dev-name">{developer.name}</div>
                <div className="dev-role">{developer.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
