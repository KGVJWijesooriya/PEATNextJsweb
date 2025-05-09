import React from "react";

interface AppButtonProps {
  playStoreLink: string;
  appStoreLink: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  playStoreLink,
  appStoreLink,
}) => {
  return (
    <div className="flex flex-col gap-x-5 sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
      <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
        <img
          className="h-10 sm:h-12 md:h-14 mx-auto sm:mx-0"
          src="assets/images/google-play-6647242_1280.png"
          alt="Play Store"
        />
      </a>
      <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
        <img
          className="h-11 sm:h-12 md:h-14 mx-auto sm:mx-0"
          src="assets/images/Download_on_the_App_Store_RGB_blk.svg.png"
          alt="App Store"
        />
      </a>
    </div>
  );
};

export default AppButton;
